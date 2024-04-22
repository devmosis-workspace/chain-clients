import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { RegisterControllerRequest, DeregisterControllerRequest, UpdateGovernanceKeyRequest, } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest", RegisterControllerRequest], ["/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest", DeregisterControllerRequest], ["/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest", UpdateGovernanceKeyRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerController(value: RegisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest",
        value: RegisterControllerRequest.encode(value).finish()
      };
    },
    deregisterController(value: DeregisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest",
        value: DeregisterControllerRequest.encode(value).finish()
      };
    },
    updateGovernanceKey(value: UpdateGovernanceKeyRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
        value: UpdateGovernanceKeyRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerController(value: RegisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest",
        value
      };
    },
    deregisterController(value: DeregisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest",
        value
      };
    },
    updateGovernanceKey(value: UpdateGovernanceKeyRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
        value
      };
    }
  },
  fromJSON: {
    registerController(value: any) {
      return {
        typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest",
        value: RegisterControllerRequest.fromJSON(value)
      };
    },
    deregisterController(value: any) {
      return {
        typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest",
        value: DeregisterControllerRequest.fromJSON(value)
      };
    },
    updateGovernanceKey(value: any) {
      return {
        typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
        value: UpdateGovernanceKeyRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerController(value: RegisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest",
        value: RegisterControllerRequest.fromPartial(value)
      };
    },
    deregisterController(value: DeregisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest",
        value: DeregisterControllerRequest.fromPartial(value)
      };
    },
    updateGovernanceKey(value: UpdateGovernanceKeyRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
        value: UpdateGovernanceKeyRequest.fromPartial(value)
      };
    }
  }
};
