import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateStaker, MsgUpdateMetadata, MsgUpdateCommission, MsgJoinPool, MsgLeavePool, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createStaker(value: MsgCreateStaker): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateMetadata(value: MsgUpdateMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateCommission(value: MsgUpdateCommission): {
            typeUrl: string;
            value: Uint8Array;
        };
        joinPool(value: MsgJoinPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        leavePool(value: MsgLeavePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createStaker(value: MsgCreateStaker): {
            typeUrl: string;
            value: MsgCreateStaker;
        };
        updateMetadata(value: MsgUpdateMetadata): {
            typeUrl: string;
            value: MsgUpdateMetadata;
        };
        updateCommission(value: MsgUpdateCommission): {
            typeUrl: string;
            value: MsgUpdateCommission;
        };
        joinPool(value: MsgJoinPool): {
            typeUrl: string;
            value: MsgJoinPool;
        };
        leavePool(value: MsgLeavePool): {
            typeUrl: string;
            value: MsgLeavePool;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        createStaker(value: any): {
            typeUrl: string;
            value: MsgCreateStaker;
        };
        updateMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateMetadata;
        };
        updateCommission(value: any): {
            typeUrl: string;
            value: MsgUpdateCommission;
        };
        joinPool(value: any): {
            typeUrl: string;
            value: MsgJoinPool;
        };
        leavePool(value: any): {
            typeUrl: string;
            value: MsgLeavePool;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createStaker(value: MsgCreateStaker): {
            typeUrl: string;
            value: MsgCreateStaker;
        };
        updateMetadata(value: MsgUpdateMetadata): {
            typeUrl: string;
            value: MsgUpdateMetadata;
        };
        updateCommission(value: MsgUpdateCommission): {
            typeUrl: string;
            value: MsgUpdateCommission;
        };
        joinPool(value: MsgJoinPool): {
            typeUrl: string;
            value: MsgJoinPool;
        };
        leavePool(value: MsgLeavePool): {
            typeUrl: string;
            value: MsgLeavePool;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
