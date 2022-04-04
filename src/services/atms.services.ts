import request from "api-client/axios-client";

export const UserServices = {
  getAtms(): Promise<any> {
    return request.get("/atms/");
  },
  postAtms(name: string): Promise<any> {
    return request.post("/atms/", {
      name
    });
  },
  deleteAtm(id: string): Promise<any> {
    return request.delete(`/atms/${id}`);
  },
  postPeople(body: { namePeople: string; transaction: number }): Promise<any> {
    return request.post("/atms/people", {
      namePeople: body.namePeople,
      transaction: body.transaction
    });
  }
};
