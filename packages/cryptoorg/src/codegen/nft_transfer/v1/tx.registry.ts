import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgTransfer } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/chainmain.nft_transfer.v1.MsgTransfer", MsgTransfer]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/chainmain.nft_transfer.v1.MsgTransfer",
        value: MsgTransfer.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/chainmain.nft_transfer.v1.MsgTransfer",
        value
      };
    }
  },
  fromJSON: {
    transfer(value: any) {
      return {
        typeUrl: "/chainmain.nft_transfer.v1.MsgTransfer",
        value: MsgTransfer.fromJSON(value)
      };
    }
  },
  fromPartial: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/chainmain.nft_transfer.v1.MsgTransfer",
        value: MsgTransfer.fromPartial(value)
      };
    }
  }
};