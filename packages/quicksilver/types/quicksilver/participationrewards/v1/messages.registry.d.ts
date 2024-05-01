import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitClaim } from "./messages";
import { MsgGovRemoveProtocolData } from "./proposals";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitClaim(value: MsgSubmitClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        govRemoveProtocolData(value: MsgGovRemoveProtocolData): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        submitClaim(value: MsgSubmitClaim): {
            typeUrl: string;
            value: MsgSubmitClaim;
        };
        govRemoveProtocolData(value: MsgGovRemoveProtocolData): {
            typeUrl: string;
            value: MsgGovRemoveProtocolData;
        };
    };
    fromJSON: {
        submitClaim(value: any): {
            typeUrl: string;
            value: MsgSubmitClaim;
        };
        govRemoveProtocolData(value: any): {
            typeUrl: string;
            value: MsgGovRemoveProtocolData;
        };
    };
    fromPartial: {
        submitClaim(value: MsgSubmitClaim): {
            typeUrl: string;
            value: MsgSubmitClaim;
        };
        govRemoveProtocolData(value: MsgGovRemoveProtocolData): {
            typeUrl: string;
            value: MsgGovRemoveProtocolData;
        };
    };
};
