import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateIscnRecord, MsgUpdateIscnRecord, MsgChangeIscnRecordOwnership } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createIscnRecord(value: MsgCreateIscnRecord): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateIscnRecord(value: MsgUpdateIscnRecord): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeIscnRecordOwnership(value: MsgChangeIscnRecordOwnership): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createIscnRecord(value: MsgCreateIscnRecord): {
            typeUrl: string;
            value: MsgCreateIscnRecord;
        };
        updateIscnRecord(value: MsgUpdateIscnRecord): {
            typeUrl: string;
            value: MsgUpdateIscnRecord;
        };
        changeIscnRecordOwnership(value: MsgChangeIscnRecordOwnership): {
            typeUrl: string;
            value: MsgChangeIscnRecordOwnership;
        };
    };
    fromJSON: {
        createIscnRecord(value: any): {
            typeUrl: string;
            value: MsgCreateIscnRecord;
        };
        updateIscnRecord(value: any): {
            typeUrl: string;
            value: MsgUpdateIscnRecord;
        };
        changeIscnRecordOwnership(value: any): {
            typeUrl: string;
            value: MsgChangeIscnRecordOwnership;
        };
    };
    fromPartial: {
        createIscnRecord(value: MsgCreateIscnRecord): {
            typeUrl: string;
            value: MsgCreateIscnRecord;
        };
        updateIscnRecord(value: MsgUpdateIscnRecord): {
            typeUrl: string;
            value: MsgUpdateIscnRecord;
        };
        changeIscnRecordOwnership(value: MsgChangeIscnRecordOwnership): {
            typeUrl: string;
            value: MsgChangeIscnRecordOwnership;
        };
    };
};
