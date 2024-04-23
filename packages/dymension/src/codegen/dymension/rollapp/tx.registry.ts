import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateRollapp, MsgUpdateState } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/dymensionxyz.dymension.rollapp.MsgCreateRollapp", MsgCreateRollapp], ["/dymensionxyz.dymension.rollapp.MsgUpdateState", MsgUpdateState]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createRollapp(value: MsgCreateRollapp) {
      return {
        typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp",
        value: MsgCreateRollapp.encode(value).finish()
      };
    },
    updateState(value: MsgUpdateState) {
      return {
        typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateState",
        value: MsgUpdateState.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createRollapp(value: MsgCreateRollapp) {
      return {
        typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp",
        value
      };
    },
    updateState(value: MsgUpdateState) {
      return {
        typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateState",
        value
      };
    }
  },
  fromJSON: {
    createRollapp(value: any) {
      return {
        typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp",
        value: MsgCreateRollapp.fromJSON(value)
      };
    },
    updateState(value: any) {
      return {
        typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateState",
        value: MsgUpdateState.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createRollapp(value: MsgCreateRollapp) {
      return {
        typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp",
        value: MsgCreateRollapp.fromPartial(value)
      };
    },
    updateState(value: MsgUpdateState) {
      return {
        typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateState",
        value: MsgUpdateState.fromPartial(value)
      };
    }
  }
};