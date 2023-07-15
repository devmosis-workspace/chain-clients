import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createFeed(value: MsgCreateFeed): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateFeed(value: MsgUpdateFeed): {
            typeUrl: string;
            value: Uint8Array;
        };
        transmit(value: MsgTransmit): {
            typeUrl: string;
            value: Uint8Array;
        };
        fundFeedRewardPool(value: MsgFundFeedRewardPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawFeedRewardPool(value: MsgWithdrawFeedRewardPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        setPayees(value: MsgSetPayees): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferPayeeship(value: MsgTransferPayeeship): {
            typeUrl: string;
            value: Uint8Array;
        };
        acceptPayeeship(value: MsgAcceptPayeeship): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createFeed(value: MsgCreateFeed): {
            typeUrl: string;
            value: MsgCreateFeed;
        };
        updateFeed(value: MsgUpdateFeed): {
            typeUrl: string;
            value: MsgUpdateFeed;
        };
        transmit(value: MsgTransmit): {
            typeUrl: string;
            value: MsgTransmit;
        };
        fundFeedRewardPool(value: MsgFundFeedRewardPool): {
            typeUrl: string;
            value: MsgFundFeedRewardPool;
        };
        withdrawFeedRewardPool(value: MsgWithdrawFeedRewardPool): {
            typeUrl: string;
            value: MsgWithdrawFeedRewardPool;
        };
        setPayees(value: MsgSetPayees): {
            typeUrl: string;
            value: MsgSetPayees;
        };
        transferPayeeship(value: MsgTransferPayeeship): {
            typeUrl: string;
            value: MsgTransferPayeeship;
        };
        acceptPayeeship(value: MsgAcceptPayeeship): {
            typeUrl: string;
            value: MsgAcceptPayeeship;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        createFeed(value: any): {
            typeUrl: string;
            value: MsgCreateFeed;
        };
        updateFeed(value: any): {
            typeUrl: string;
            value: MsgUpdateFeed;
        };
        transmit(value: any): {
            typeUrl: string;
            value: MsgTransmit;
        };
        fundFeedRewardPool(value: any): {
            typeUrl: string;
            value: MsgFundFeedRewardPool;
        };
        withdrawFeedRewardPool(value: any): {
            typeUrl: string;
            value: MsgWithdrawFeedRewardPool;
        };
        setPayees(value: any): {
            typeUrl: string;
            value: MsgSetPayees;
        };
        transferPayeeship(value: any): {
            typeUrl: string;
            value: MsgTransferPayeeship;
        };
        acceptPayeeship(value: any): {
            typeUrl: string;
            value: MsgAcceptPayeeship;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createFeed(value: MsgCreateFeed): {
            typeUrl: string;
            value: MsgCreateFeed;
        };
        updateFeed(value: MsgUpdateFeed): {
            typeUrl: string;
            value: MsgUpdateFeed;
        };
        transmit(value: MsgTransmit): {
            typeUrl: string;
            value: MsgTransmit;
        };
        fundFeedRewardPool(value: MsgFundFeedRewardPool): {
            typeUrl: string;
            value: MsgFundFeedRewardPool;
        };
        withdrawFeedRewardPool(value: MsgWithdrawFeedRewardPool): {
            typeUrl: string;
            value: MsgWithdrawFeedRewardPool;
        };
        setPayees(value: MsgSetPayees): {
            typeUrl: string;
            value: MsgSetPayees;
        };
        transferPayeeship(value: MsgTransferPayeeship): {
            typeUrl: string;
            value: MsgTransferPayeeship;
        };
        acceptPayeeship(value: MsgAcceptPayeeship): {
            typeUrl: string;
            value: MsgAcceptPayeeship;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
