import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGovUpdateMinGasPrice } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/umee.ugov.v1.MsgGovUpdateMinGasPrice", MsgGovUpdateMinGasPrice]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
        value: MsgGovUpdateMinGasPrice.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
        value
      };
    }
  },
  fromJSON: {
    govUpdateMinGasPrice(value: any) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
        value: MsgGovUpdateMinGasPrice.fromJSON(value)
      };
    }
  },
  fromPartial: {
    govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
        value: MsgGovUpdateMinGasPrice.fromPartial(value)
      };
    }
  }
};