import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateSequencer } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/dymensionxyz.dymension.sequencer.MsgCreateSequencer", MsgCreateSequencer]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createSequencer(value: MsgCreateSequencer) {
      return {
        typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer",
        value: MsgCreateSequencer.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createSequencer(value: MsgCreateSequencer) {
      return {
        typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer",
        value
      };
    }
  },
  fromJSON: {
    createSequencer(value: any) {
      return {
        typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer",
        value: MsgCreateSequencer.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createSequencer(value: MsgCreateSequencer) {
      return {
        typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer",
        value: MsgCreateSequencer.fromPartial(value)
      };
    }
  }
};