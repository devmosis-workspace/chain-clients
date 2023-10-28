import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPayForBlobs } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/celestia.blob.v1.MsgPayForBlobs", MsgPayForBlobs]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    payForBlobs(value: MsgPayForBlobs) {
      return {
        typeUrl: "/celestia.blob.v1.MsgPayForBlobs",
        value: MsgPayForBlobs.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    payForBlobs(value: MsgPayForBlobs) {
      return {
        typeUrl: "/celestia.blob.v1.MsgPayForBlobs",
        value
      };
    }
  },
  fromJSON: {
    payForBlobs(value: any) {
      return {
        typeUrl: "/celestia.blob.v1.MsgPayForBlobs",
        value: MsgPayForBlobs.fromJSON(value)
      };
    }
  },
  fromPartial: {
    payForBlobs(value: MsgPayForBlobs) {
      return {
        typeUrl: "/celestia.blob.v1.MsgPayForBlobs",
        value: MsgPayForBlobs.fromPartial(value)
      };
    }
  }
};