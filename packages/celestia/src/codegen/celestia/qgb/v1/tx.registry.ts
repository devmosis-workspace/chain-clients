import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterEVMAddress } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/celestia.qgb.v1.MsgRegisterEVMAddress", MsgRegisterEVMAddress]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerEVMAddress(value: MsgRegisterEVMAddress) {
      return {
        typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddress",
        value: MsgRegisterEVMAddress.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerEVMAddress(value: MsgRegisterEVMAddress) {
      return {
        typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddress",
        value
      };
    }
  },
  fromJSON: {
    registerEVMAddress(value: any) {
      return {
        typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddress",
        value: MsgRegisterEVMAddress.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerEVMAddress(value: MsgRegisterEVMAddress) {
      return {
        typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddress",
        value: MsgRegisterEVMAddress.fromPartial(value)
      };
    }
  }
};