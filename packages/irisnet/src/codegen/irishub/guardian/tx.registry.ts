import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddSuper, MsgDeleteSuper } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/irishub.guardian.MsgAddSuper", MsgAddSuper], ["/irishub.guardian.MsgDeleteSuper", MsgDeleteSuper]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addSuper(value: MsgAddSuper) {
      return {
        typeUrl: "/irishub.guardian.MsgAddSuper",
        value: MsgAddSuper.encode(value).finish()
      };
    },
    deleteSuper(value: MsgDeleteSuper) {
      return {
        typeUrl: "/irishub.guardian.MsgDeleteSuper",
        value: MsgDeleteSuper.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addSuper(value: MsgAddSuper) {
      return {
        typeUrl: "/irishub.guardian.MsgAddSuper",
        value
      };
    },
    deleteSuper(value: MsgDeleteSuper) {
      return {
        typeUrl: "/irishub.guardian.MsgDeleteSuper",
        value
      };
    }
  },
  fromJSON: {
    addSuper(value: any) {
      return {
        typeUrl: "/irishub.guardian.MsgAddSuper",
        value: MsgAddSuper.fromJSON(value)
      };
    },
    deleteSuper(value: any) {
      return {
        typeUrl: "/irishub.guardian.MsgDeleteSuper",
        value: MsgDeleteSuper.fromJSON(value)
      };
    }
  },
  fromPartial: {
    addSuper(value: MsgAddSuper) {
      return {
        typeUrl: "/irishub.guardian.MsgAddSuper",
        value: MsgAddSuper.fromPartial(value)
      };
    },
    deleteSuper(value: MsgDeleteSuper) {
      return {
        typeUrl: "/irishub.guardian.MsgDeleteSuper",
        value: MsgDeleteSuper.fromPartial(value)
      };
    }
  }
};