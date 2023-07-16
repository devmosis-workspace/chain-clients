import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/likechain.iscn.MsgCreateIscnRecord": {
        aminoType: string;
        toAmino: ({ from, record, nonce }: MsgCreateIscnRecord) => MsgCreateIscnRecordAminoType["value"];
        fromAmino: ({ from, record, nonce }: MsgCreateIscnRecordAminoType["value"]) => MsgCreateIscnRecord;
    };
    "/likechain.iscn.MsgUpdateIscnRecord": {
        aminoType: string;
        toAmino: ({ from, iscnId, record }: MsgUpdateIscnRecord) => MsgUpdateIscnRecordAminoType["value"];
        fromAmino: ({ from, iscn_id, record }: MsgUpdateIscnRecordAminoType["value"]) => MsgUpdateIscnRecord;
    };
    "/likechain.iscn.MsgChangeIscnRecordOwnership": {
        aminoType: string;
        toAmino: ({ from, iscnId, newOwner }: MsgChangeIscnRecordOwnership) => MsgChangeIscnRecordOwnershipAminoType["value"];
        fromAmino: ({ from, iscn_id, new_owner }: MsgChangeIscnRecordOwnershipAminoType["value"]) => MsgChangeIscnRecordOwnership;
    };
};
