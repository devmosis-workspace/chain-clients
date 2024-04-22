import { RegisterControllerRequest, DeregisterControllerRequest, UpdateGovernanceKeyRequest } from "./tx";
export declare const AminoConverter: {
    "/axelar.permission.v1beta1.RegisterControllerRequest": {
        aminoType: string;
        toAmino: (message: RegisterControllerRequest) => import("./tx").RegisterControllerRequestAmino;
        fromAmino: (object: import("./tx").RegisterControllerRequestAmino) => RegisterControllerRequest;
    };
    "/axelar.permission.v1beta1.DeregisterControllerRequest": {
        aminoType: string;
        toAmino: (message: DeregisterControllerRequest) => import("./tx").DeregisterControllerRequestAmino;
        fromAmino: (object: import("./tx").DeregisterControllerRequestAmino) => DeregisterControllerRequest;
    };
    "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
        aminoType: string;
        toAmino: (message: UpdateGovernanceKeyRequest) => import("./tx").UpdateGovernanceKeyRequestAmino;
        fromAmino: (object: import("./tx").UpdateGovernanceKeyRequestAmino) => UpdateGovernanceKeyRequest;
    };
};
