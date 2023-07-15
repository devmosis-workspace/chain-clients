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
export const AminoConverter = {
  "/axelar.permission.v1beta1.RegisterControllerRequest": {
    aminoType: "/axelar.permission.v1beta1.RegisterControllerRequest",
    toAmino: ({
      sender,
      controller
    }: RegisterControllerRequest): RegisterControllerRequestAminoType["value"] => {
      return {
        sender,
        controller
      };
    },
    fromAmino: ({
      sender,
      controller
    }: RegisterControllerRequestAminoType["value"]): RegisterControllerRequest => {
      return {
        sender,
        controller
      };
    }
  },
  "/axelar.permission.v1beta1.DeregisterControllerRequest": {
    aminoType: "/axelar.permission.v1beta1.DeregisterControllerRequest",
    toAmino: ({
      sender,
      controller
    }: DeregisterControllerRequest): DeregisterControllerRequestAminoType["value"] => {
      return {
        sender,
        controller
      };
    },
    fromAmino: ({
      sender,
      controller
    }: DeregisterControllerRequestAminoType["value"]): DeregisterControllerRequest => {
      return {
        sender,
        controller
      };
    }
  },
  "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
    aminoType: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
    toAmino: ({
      sender,
      governanceKey
    }: UpdateGovernanceKeyRequest): UpdateGovernanceKeyRequestAminoType["value"] => {
      return {
        sender,
        governance_key: {
          threshold: governanceKey.threshold,
          public_keys: governanceKey.publicKeys.map(el0 => ({
            type_url: el0.typeUrl,
            value: el0.value
          }))
        }
      };
    },
    fromAmino: ({
      sender,
      governance_key
    }: UpdateGovernanceKeyRequestAminoType["value"]): UpdateGovernanceKeyRequest => {
      return {
        sender,
        governanceKey: {
          threshold: governance_key.threshold,
          publicKeys: governance_key.public_keys.map(el1 => ({
            typeUrl: el1.type_url,
            value: el1.value
          }))
        }
      };
    }
  }
};