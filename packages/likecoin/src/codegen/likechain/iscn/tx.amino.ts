import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgCreateIscnRecord, MsgUpdateIscnRecord, MsgChangeIscnRecordOwnership } from "./tx";
export interface MsgCreateIscnRecordAminoType extends AminoMsg {
  type: "/likechain.iscn.MsgCreateIscnRecord";
  value: {
    from: string;
    record: {
      recordNotes: string;
      contentFingerprints: string[];
      stakeholders: Uint8Array[];
      contentMetadata: Uint8Array;
    };
    nonce: string;
  };
}
export interface MsgUpdateIscnRecordAminoType extends AminoMsg {
  type: "/likechain.iscn.MsgUpdateIscnRecord";
  value: {
    from: string;
    iscn_id: string;
    record: {
      recordNotes: string;
      contentFingerprints: string[];
      stakeholders: Uint8Array[];
      contentMetadata: Uint8Array;
    };
  };
}
export interface MsgChangeIscnRecordOwnershipAminoType extends AminoMsg {
  type: "/likechain.iscn.MsgChangeIscnRecordOwnership";
  value: {
    from: string;
    iscn_id: string;
    new_owner: string;
  };
}
export const AminoConverter = {
  "/likechain.iscn.MsgCreateIscnRecord": {
    aminoType: "/likechain.iscn.MsgCreateIscnRecord",
    toAmino: ({
      from,
      record,
      nonce
    }: MsgCreateIscnRecord): MsgCreateIscnRecordAminoType["value"] => {
      return {
        from,
        record: {
          recordNotes: record.recordNotes,
          contentFingerprints: record.contentFingerprints,
          stakeholders: record.stakeholders,
          contentMetadata: record.contentMetadata
        },
        nonce: nonce.toString()
      };
    },
    fromAmino: ({
      from,
      record,
      nonce
    }: MsgCreateIscnRecordAminoType["value"]): MsgCreateIscnRecord => {
      return {
        from,
        record: {
          recordNotes: record.recordNotes,
          contentFingerprints: record.contentFingerprints,
          stakeholders: record.stakeholders,
          contentMetadata: record.contentMetadata
        },
        nonce: Long.fromString(nonce)
      };
    }
  },
  "/likechain.iscn.MsgUpdateIscnRecord": {
    aminoType: "/likechain.iscn.MsgUpdateIscnRecord",
    toAmino: ({
      from,
      iscnId,
      record
    }: MsgUpdateIscnRecord): MsgUpdateIscnRecordAminoType["value"] => {
      return {
        from,
        iscn_id: iscnId,
        record: {
          recordNotes: record.recordNotes,
          contentFingerprints: record.contentFingerprints,
          stakeholders: record.stakeholders,
          contentMetadata: record.contentMetadata
        }
      };
    },
    fromAmino: ({
      from,
      iscn_id,
      record
    }: MsgUpdateIscnRecordAminoType["value"]): MsgUpdateIscnRecord => {
      return {
        from,
        iscnId: iscn_id,
        record: {
          recordNotes: record.recordNotes,
          contentFingerprints: record.contentFingerprints,
          stakeholders: record.stakeholders,
          contentMetadata: record.contentMetadata
        }
      };
    }
  },
  "/likechain.iscn.MsgChangeIscnRecordOwnership": {
    aminoType: "/likechain.iscn.MsgChangeIscnRecordOwnership",
    toAmino: ({
      from,
      iscnId,
      newOwner
    }: MsgChangeIscnRecordOwnership): MsgChangeIscnRecordOwnershipAminoType["value"] => {
      return {
        from,
        iscn_id: iscnId,
        new_owner: newOwner
      };
    },
    fromAmino: ({
      from,
      iscn_id,
      new_owner
    }: MsgChangeIscnRecordOwnershipAminoType["value"]): MsgChangeIscnRecordOwnership => {
      return {
        from,
        iscnId: iscn_id,
        newOwner: new_owner
      };
    }
  }
};