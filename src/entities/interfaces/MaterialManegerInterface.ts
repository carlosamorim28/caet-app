import { RequestType } from "../RequestType";
import MaterialType from "../types/Material";

interface ManterialManegerInterface {
  generateNewMaterial(newMaterial: MaterialType): Promise<RequestType<MaterialType>>;
  deleteMaterial(id: number): Promise<RequestType<MaterialType>>
}

export default ManterialManegerInterface