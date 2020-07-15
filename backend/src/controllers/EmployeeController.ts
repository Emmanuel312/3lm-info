import { ICrud } from "../interfaces";
import { Request, Response } from "express";
import Employee from "../models/Employee";

class EmployeeController implements ICrud {
  public async store(request: Request, response: Response) {
    try {
      const { name, lastName, officeId, dateOfBirth, salary } = request.body;

      const employee = await Employee.create({
        name,
        lastName,
        officeId,
        dateOfBirth,
        salary,
      });

      return response.json(employee);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  public async index(request: Request, response: Response) {
    try {
      const employees = await Employee.find({}).populate({
        path: "officeId",
        select: "description",
      });

      return response.json(employees);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const employee = await Employee.findById(id).populate({
        path: "officeId",
        select: "description",
      });

      return response.json(employee);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  public async update(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const employee = await Employee.findById(id).populate({
        path: "officeId",
        select: "description",
      });
      Object.assign(employee, request.body);

      await employee?.save();

      return response.json(employee);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await Employee.findByIdAndDelete(id);

      return response.json({ ok: true });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
}

export default new EmployeeController();
