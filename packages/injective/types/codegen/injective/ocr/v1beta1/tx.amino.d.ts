import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
export interface MsgCreateFeedAminoType extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgCreateFeed";
    value: {
        sender: string;
        config: {
            signers: string[];
            transmitters: string[];
            f: number;
            onchain_config: Uint8Array;
            offchain_config_version: string;
            offchain_config: Uint8Array;
            module_params: {
                feed_id: string;
                min_answer: string;
                max_answer: string;
                link_per_observation: string;
                link_per_transmission: string;
                link_denom: string;
                unique_reports: boolean;
                description: string;
                feed_admin: string;
                billing_admin: string;
            };
        };
    };
}
export interface MsgUpdateFeedAminoType extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgUpdateFeed";
    value: {
        sender: string;
        feed_id: string;
        signers: string[];
        transmitters: string[];
        link_per_observation: string;
        link_per_transmission: string;
        link_denom: string;
        feed_admin: string;
        billing_admin: string;
    };
}
export interface MsgTransmitAminoType extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgTransmit";
    value: {
        transmitter: string;
        config_digest: Uint8Array;
        feed_id: string;
        epoch: string;
        round: string;
        extra_hash: Uint8Array;
        report: {
            observations_timestamp: string;
            observers: Uint8Array;
            observations: string[];
        };
        signatures: Uint8Array[];
    };
}
export interface MsgFundFeedRewardPoolAminoType extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgFundFeedRewardPool";
    value: {
        sender: string;
        feed_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgWithdrawFeedRewardPoolAminoType extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool";
    value: {
        sender: string;
        feed_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgSetPayeesAminoType extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgSetPayees";
    value: {
        sender: string;
        feed_id: string;
        transmitters: string[];
        payees: string[];
    };
}
export interface MsgTransferPayeeshipAminoType extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgTransferPayeeship";
    value: {
        sender: string;
        transmitter: string;
        feed_id: string;
        proposed: string;
    };
}
export interface MsgAcceptPayeeshipAminoType extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgAcceptPayeeship";
    value: {
        payee: string;
        transmitter: string;
        feed_id: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/injective.ocr.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            link_denom: string;
            payout_block_interval: string;
            module_admin: string;
        };
    };
}
export declare const AminoConverter: {
    "/injective.ocr.v1beta1.MsgCreateFeed": {
        aminoType: string;
        toAmino: ({ sender, config }: MsgCreateFeed) => MsgCreateFeedAminoType["value"];
        fromAmino: ({ sender, config }: MsgCreateFeedAminoType["value"]) => MsgCreateFeed;
    };
    "/injective.ocr.v1beta1.MsgUpdateFeed": {
        aminoType: string;
        toAmino: ({ sender, feedId, signers, transmitters, linkPerObservation, linkPerTransmission, linkDenom, feedAdmin, billingAdmin }: MsgUpdateFeed) => MsgUpdateFeedAminoType["value"];
        fromAmino: ({ sender, feed_id, signers, transmitters, link_per_observation, link_per_transmission, link_denom, feed_admin, billing_admin }: MsgUpdateFeedAminoType["value"]) => MsgUpdateFeed;
    };
    "/injective.ocr.v1beta1.MsgTransmit": {
        aminoType: string;
        toAmino: ({ transmitter, configDigest, feedId, epoch, round, extraHash, report, signatures }: MsgTransmit) => MsgTransmitAminoType["value"];
        fromAmino: ({ transmitter, config_digest, feed_id, epoch, round, extra_hash, report, signatures }: MsgTransmitAminoType["value"]) => MsgTransmit;
    };
    "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
        aminoType: string;
        toAmino: ({ sender, feedId, amount }: MsgFundFeedRewardPool) => MsgFundFeedRewardPoolAminoType["value"];
        fromAmino: ({ sender, feed_id, amount }: MsgFundFeedRewardPoolAminoType["value"]) => MsgFundFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
        aminoType: string;
        toAmino: ({ sender, feedId, amount }: MsgWithdrawFeedRewardPool) => MsgWithdrawFeedRewardPoolAminoType["value"];
        fromAmino: ({ sender, feed_id, amount }: MsgWithdrawFeedRewardPoolAminoType["value"]) => MsgWithdrawFeedRewardPool;
    };
    "/injective.ocr.v1beta1.MsgSetPayees": {
        aminoType: string;
        toAmino: ({ sender, feedId, transmitters, payees }: MsgSetPayees) => MsgSetPayeesAminoType["value"];
        fromAmino: ({ sender, feed_id, transmitters, payees }: MsgSetPayeesAminoType["value"]) => MsgSetPayees;
    };
    "/injective.ocr.v1beta1.MsgTransferPayeeship": {
        aminoType: string;
        toAmino: ({ sender, transmitter, feedId, proposed }: MsgTransferPayeeship) => MsgTransferPayeeshipAminoType["value"];
        fromAmino: ({ sender, transmitter, feed_id, proposed }: MsgTransferPayeeshipAminoType["value"]) => MsgTransferPayeeship;
    };
    "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
        aminoType: string;
        toAmino: ({ payee, transmitter, feedId }: MsgAcceptPayeeship) => MsgAcceptPayeeshipAminoType["value"];
        fromAmino: ({ payee, transmitter, feed_id }: MsgAcceptPayeeshipAminoType["value"]) => MsgAcceptPayeeship;
    };
    "/injective.ocr.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
