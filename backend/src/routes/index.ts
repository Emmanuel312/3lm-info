import { Router } from "express";
import EmployeeController from "../controllers/EmployeeController";
import OfficeController from "../controllers/OfficeController";

const router = Router();

// employee
router.post("/employee", EmployeeController.store);
router.get("/employee/:id", EmployeeController.show);
router.get("/employee", EmployeeController.index);
router.put("/employee/:id", EmployeeController.update);
router.delete("/employee/:id", EmployeeController.delete);

// office
router.post("/office", OfficeController.store);
router.get("/office/:id", OfficeController.show);
router.get("/office", OfficeController.index);
router.put("/office/:id", OfficeController.update);
router.delete("/office/:id", OfficeController.delete);

export default router;
