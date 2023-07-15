import { AminoMsg } from "@cosmjs/amino";
import { RegisterControllerRequest, DeregisterControllerRequest, UpdateGovernanceKeyRequest } from "./tx";
export interface RegisterControllerRequestAminoType extends AminoMsg {
    type: "/axelar.permission.v1beta1.RegisterControllerRequest";
    value: {
        sender: Uint8Array;
        controller: Uint8Array;
    };
}
export interface DeregisterControllerRequestAminoType extends AminoMsg {
    type: "/axelar.permission.v1beta1.DeregisterControllerRequest";
    value: {
        sender: Uint8Array;
        controller: Uint8Array;
    };
}
export interface UpdateGovernanceKeyRequestAminoType extends AminoMsg {
    type: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
    value: {
        sender: Uint8Array;
        governance_key: {
            threshold: number;
            public_keys: {
                type_url: string;
                value: Uint8Array;
            }[];
        };
    };
}
export declare const AminoConverter: {
    "/axelar.permission.v1beta1.RegisterControllerRequest": {
        aminoType: string;
        toAmino: ({ sender, controller }: RegisterControllerRequest) => RegisterControllerRequestAminoType["value"];
        fromAmino: ({ sender, controller }: RegisterControllerRequestAminoType["value"]) => RegisterControllerRequest;
    };
    "/axelar.permission.v1beta1.DeregisterControllerRequest": {
        aminoType: string;
        toAmino: ({ sender, controller }: DeregisterControllerRequest) => DeregisterControllerRequestAminoType["value"];
        fromAmino: ({ sender, controller }: DeregisterControllerRequestAminoType["value"]) => DeregisterControllerRequest;
    };
    "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
        aminoType: string;
        toAmino: ({ sender, governanceKey }: UpdateGovernanceKeyRequest) => UpdateGovernanceKeyRequestAminoType["value"];
        fromAmino: ({ sender, governance_key }: UpdateGovernanceKeyRequestAminoType["value"]) => UpdateGovernanceKeyRequest;
    };
};
