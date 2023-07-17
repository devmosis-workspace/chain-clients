import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitCorkRequest, MsgScheduleCorkRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cork.v1.MsgSubmitCorkRequest", MsgSubmitCorkRequest], ["/cork.v1.MsgScheduleCorkRequest", MsgScheduleCorkRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitCork(value: MsgSubmitCorkRequest) {
      return {
        typeUrl: "/cork.v1.MsgSubmitCorkRequest",
        value: MsgSubmitCorkRequest.encode(value).finish()
      };
    },
    scheduleCork(value: MsgScheduleCorkRequest) {
      return {
        typeUrl: "/cork.v1.MsgScheduleCorkRequest",
        value: MsgScheduleCorkRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitCork(value: MsgSubmitCorkRequest) {
      return {
        typeUrl: "/cork.v1.MsgSubmitCorkRequest",
        value
      };
    },
    scheduleCork(value: MsgScheduleCorkRequest) {
      return {
        typeUrl: "/cork.v1.MsgScheduleCorkRequest",
        value
      };
    }
  },
  fromJSON: {
    submitCork(value: any) {
      return {
        typeUrl: "/cork.v1.MsgSubmitCorkRequest",
        value: MsgSubmitCorkRequest.fromJSON(value)
      };
    },
    scheduleCork(value: any) {
      return {
        typeUrl: "/cork.v1.MsgScheduleCorkRequest",
        value: MsgScheduleCorkRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitCork(value: MsgSubmitCorkRequest) {
      return {
        typeUrl: "/cork.v1.MsgSubmitCorkRequest",
        value: MsgSubmitCorkRequest.fromPartial(value)
      };
    },
    scheduleCork(value: MsgScheduleCorkRequest) {
      return {
        typeUrl: "/cork.v1.MsgScheduleCorkRequest",
        value: MsgScheduleCorkRequest.fromPartial(value)
      };
    }
  }
};