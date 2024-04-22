import { RegisterControllerRequest, DeregisterControllerRequest, UpdateGovernanceKeyRequest } from "./tx";
export const AminoConverter = {
    "/axelar.permission.v1beta1.RegisterControllerRequest": {
        aminoType: "/axelar.permission.v1beta1.RegisterControllerRequest",
        toAmino: RegisterControllerRequest.toAmino,
        fromAmino: RegisterControllerRequest.fromAmino
    },
    "/axelar.permission.v1beta1.DeregisterControllerRequest": {
        aminoType: "/axelar.permission.v1beta1.DeregisterControllerRequest",
        toAmino: DeregisterControllerRequest.toAmino,
        fromAmino: DeregisterControllerRequest.fromAmino
    },
    "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
        aminoType: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
        toAmino: UpdateGovernanceKeyRequest.toAmino,
        fromAmino: UpdateGovernanceKeyRequest.fromAmino
    }
};
//# sourceMappingURL=service.amino.js.map