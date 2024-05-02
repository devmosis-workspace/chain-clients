import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLock, MsgBurn, MsgCreateEthBridgeClaim, MsgUpdateWhiteListValidator, MsgUpdateCethReceiverAccount, MsgRescueCeth, MsgSetBlacklist, MsgPause } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sifnode.ethbridge.v1.MsgLock", MsgLock], ["/sifnode.ethbridge.v1.MsgBurn", MsgBurn], ["/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim", MsgCreateEthBridgeClaim], ["/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator", MsgUpdateWhiteListValidator], ["/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount", MsgUpdateCethReceiverAccount], ["/sifnode.ethbridge.v1.MsgRescueCeth", MsgRescueCeth], ["/sifnode.ethbridge.v1.MsgSetBlacklist", MsgSetBlacklist], ["/sifnode.ethbridge.v1.MsgPause", MsgPause]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    lock(value: MsgLock) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgLock",
        value: MsgLock.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    createEthBridgeClaim(value: MsgCreateEthBridgeClaim) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim",
        value: MsgCreateEthBridgeClaim.encode(value).finish()
      };
    },
    updateWhiteListValidator(value: MsgUpdateWhiteListValidator) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator",
        value: MsgUpdateWhiteListValidator.encode(value).finish()
      };
    },
    updateCethReceiverAccount(value: MsgUpdateCethReceiverAccount) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount",
        value: MsgUpdateCethReceiverAccount.encode(value).finish()
      };
    },
    rescueCeth(value: MsgRescueCeth) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgRescueCeth",
        value: MsgRescueCeth.encode(value).finish()
      };
    },
    setBlacklist(value: MsgSetBlacklist) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklist",
        value: MsgSetBlacklist.encode(value).finish()
      };
    },
    setPause(value: MsgPause) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgPause",
        value: MsgPause.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    lock(value: MsgLock) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgLock",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgBurn",
        value
      };
    },
    createEthBridgeClaim(value: MsgCreateEthBridgeClaim) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim",
        value
      };
    },
    updateWhiteListValidator(value: MsgUpdateWhiteListValidator) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator",
        value
      };
    },
    updateCethReceiverAccount(value: MsgUpdateCethReceiverAccount) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount",
        value
      };
    },
    rescueCeth(value: MsgRescueCeth) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgRescueCeth",
        value
      };
    },
    setBlacklist(value: MsgSetBlacklist) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklist",
        value
      };
    },
    setPause(value: MsgPause) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgPause",
        value
      };
    }
  },
  fromJSON: {
    lock(value: any) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgLock",
        value: MsgLock.fromJSON(value)
      };
    },
    burn(value: any) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgBurn",
        value: MsgBurn.fromJSON(value)
      };
    },
    createEthBridgeClaim(value: any) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim",
        value: MsgCreateEthBridgeClaim.fromJSON(value)
      };
    },
    updateWhiteListValidator(value: any) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator",
        value: MsgUpdateWhiteListValidator.fromJSON(value)
      };
    },
    updateCethReceiverAccount(value: any) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount",
        value: MsgUpdateCethReceiverAccount.fromJSON(value)
      };
    },
    rescueCeth(value: any) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgRescueCeth",
        value: MsgRescueCeth.fromJSON(value)
      };
    },
    setBlacklist(value: any) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklist",
        value: MsgSetBlacklist.fromJSON(value)
      };
    },
    setPause(value: any) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgPause",
        value: MsgPause.fromJSON(value)
      };
    }
  },
  fromPartial: {
    lock(value: MsgLock) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgLock",
        value: MsgLock.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    createEthBridgeClaim(value: MsgCreateEthBridgeClaim) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim",
        value: MsgCreateEthBridgeClaim.fromPartial(value)
      };
    },
    updateWhiteListValidator(value: MsgUpdateWhiteListValidator) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator",
        value: MsgUpdateWhiteListValidator.fromPartial(value)
      };
    },
    updateCethReceiverAccount(value: MsgUpdateCethReceiverAccount) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount",
        value: MsgUpdateCethReceiverAccount.fromPartial(value)
      };
    },
    rescueCeth(value: MsgRescueCeth) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgRescueCeth",
        value: MsgRescueCeth.fromPartial(value)
      };
    },
    setBlacklist(value: MsgSetBlacklist) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklist",
        value: MsgSetBlacklist.fromPartial(value)
      };
    },
    setPause(value: MsgPause) {
      return {
        typeUrl: "/sifnode.ethbridge.v1.MsgPause",
        value: MsgPause.fromPartial(value)
      };
    }
  }
};