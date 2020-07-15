import { ICrud } from "../interfaces";
import { Request, Response } from "express";
import Office from "../models/Office";

class OfficeController implements ICrud {
  public async store(request: Request, response: Response) {
    try {
      const { description } = request.body;

      const office = await Office.create({
        description,
      });

      return response.json(office);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  public async index(request: Request, response: Response) {
    try {
      const offices = await Office.find({});

      return response.json(offices);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const office = await Office.findById(id);

      return response.json(office);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  public async update(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const office = await Office.findById(id);
      Object.assign(office, request.body);

      await office?.save();

      return response.json(office);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await Office.findByIdAndDelete(id);

      return response.json({ ok: true });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
}

export default new OfficeController();
