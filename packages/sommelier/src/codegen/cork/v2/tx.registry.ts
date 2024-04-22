import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgScheduleCorkRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cork.v2.MsgScheduleCorkRequest", MsgScheduleCorkRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    scheduleCork(value: MsgScheduleCorkRequest) {
      return {
        typeUrl: "/cork.v2.MsgScheduleCorkRequest",
        value: MsgScheduleCorkRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    scheduleCork(value: MsgScheduleCorkRequest) {
      return {
        typeUrl: "/cork.v2.MsgScheduleCorkRequest",
        value
      };
    }
  },
  fromJSON: {
    scheduleCork(value: any) {
      return {
        typeUrl: "/cork.v2.MsgScheduleCorkRequest",
        value: MsgScheduleCorkRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    scheduleCork(value: MsgScheduleCorkRequest) {
      return {
        typeUrl: "/cork.v2.MsgScheduleCorkRequest",
        value: MsgScheduleCorkRequest.fromPartial(value)
      };
    }
  }
};