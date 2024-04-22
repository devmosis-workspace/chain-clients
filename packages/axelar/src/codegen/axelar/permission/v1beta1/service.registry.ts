import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { RegisterControllerRequest, DeregisterControllerRequest, UpdateGovernanceKeyRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest", axelar.permission.v1beta1.RegisterControllerRequest], ["/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest", axelar.permission.v1beta1.DeregisterControllerRequest], ["/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest", axelar.permission.v1beta1.UpdateGovernanceKeyRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerController(value: axelar.permission.v1beta1.RegisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest",
        value: axelar.permission.v1beta1.RegisterControllerRequest.encode(value).finish()
      };
    },
    deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest",
        value: axelar.permission.v1beta1.DeregisterControllerRequest.encode(value).finish()
      };
    },
    updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
        value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerController(value: axelar.permission.v1beta1.RegisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest",
        value
      };
    },
    deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest",
        value
      };
    },
    updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
        value
      };
    }
  },
  fromJSON: {
    registerController(value: any) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest",
        value: axelar.permission.v1beta1.RegisterControllerRequest.fromJSON(value)
      };
    },
    deregisterController(value: any) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest",
        value: axelar.permission.v1beta1.DeregisterControllerRequest.fromJSON(value)
      };
    },
    updateGovernanceKey(value: any) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
        value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerController(value: axelar.permission.v1beta1.RegisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest",
        value: axelar.permission.v1beta1.RegisterControllerRequest.fromPartial(value)
      };
    },
    deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest",
        value: axelar.permission.v1beta1.DeregisterControllerRequest.fromPartial(value)
      };
    },
    updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest) {
      return {
        typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
        value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest.fromPartial(value)
      };
    }
  }
};