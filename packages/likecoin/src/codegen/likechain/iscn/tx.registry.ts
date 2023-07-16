import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateIscnRecord, MsgUpdateIscnRecord, MsgChangeIscnRecordOwnership } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/likechain.iscn.MsgCreateIscnRecord", MsgCreateIscnRecord], ["/likechain.iscn.MsgUpdateIscnRecord", MsgUpdateIscnRecord], ["/likechain.iscn.MsgChangeIscnRecordOwnership", MsgChangeIscnRecordOwnership]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createIscnRecord(value: MsgCreateIscnRecord) {
      return {
        typeUrl: "/likechain.iscn.MsgCreateIscnRecord",
        value: MsgCreateIscnRecord.encode(value).finish()
      };
    },
    updateIscnRecord(value: MsgUpdateIscnRecord) {
      return {
        typeUrl: "/likechain.iscn.MsgUpdateIscnRecord",
        value: MsgUpdateIscnRecord.encode(value).finish()
      };
    },
    changeIscnRecordOwnership(value: MsgChangeIscnRecordOwnership) {
      return {
        typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnership",
        value: MsgChangeIscnRecordOwnership.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createIscnRecord(value: MsgCreateIscnRecord) {
      return {
        typeUrl: "/likechain.iscn.MsgCreateIscnRecord",
        value
      };
    },
    updateIscnRecord(value: MsgUpdateIscnRecord) {
      return {
        typeUrl: "/likechain.iscn.MsgUpdateIscnRecord",
        value
      };
    },
    changeIscnRecordOwnership(value: MsgChangeIscnRecordOwnership) {
      return {
        typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnership",
        value
      };
    }
  },
  fromJSON: {
    createIscnRecord(value: any) {
      return {
        typeUrl: "/likechain.iscn.MsgCreateIscnRecord",
        value: MsgCreateIscnRecord.fromJSON(value)
      };
    },
    updateIscnRecord(value: any) {
      return {
        typeUrl: "/likechain.iscn.MsgUpdateIscnRecord",
        value: MsgUpdateIscnRecord.fromJSON(value)
      };
    },
    changeIscnRecordOwnership(value: any) {
      return {
        typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnership",
        value: MsgChangeIscnRecordOwnership.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createIscnRecord(value: MsgCreateIscnRecord) {
      return {
        typeUrl: "/likechain.iscn.MsgCreateIscnRecord",
        value: MsgCreateIscnRecord.fromPartial(value)
      };
    },
    updateIscnRecord(value: MsgUpdateIscnRecord) {
      return {
        typeUrl: "/likechain.iscn.MsgUpdateIscnRecord",
        value: MsgUpdateIscnRecord.fromPartial(value)
      };
    },
    changeIscnRecordOwnership(value: MsgChangeIscnRecordOwnership) {
      return {
        typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnership",
        value: MsgChangeIscnRecordOwnership.fromPartial(value)
      };
    }
  }
};