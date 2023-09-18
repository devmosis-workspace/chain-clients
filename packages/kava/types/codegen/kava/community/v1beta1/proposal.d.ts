import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** CommunityPoolLendDepositProposal deposits from the community pool into lend */
export interface CommunityPoolLendDepositProposal {
    title: string;
    description: string;
    amount: Coin[];
}
export interface CommunityPoolLendDepositProposalProtoMsg {
    typeUrl: "/kava.community.v1beta1.CommunityPoolLendDepositProposal";
    value: Uint8Array;
}
/** CommunityPoolLendDepositProposal deposits from the community pool into lend */
export interface CommunityPoolLendDepositProposalAmino {
    title: string;
    description: string;
    amount: CoinAmino[];
}
export interface CommunityPoolLendDepositProposalAminoMsg {
    type: "/kava.community.v1beta1.CommunityPoolLendDepositProposal";
    value: CommunityPoolLendDepositProposalAmino;
}
/** CommunityPoolLendDepositProposal deposits from the community pool into lend */
export interface CommunityPoolLendDepositProposalSDKType {
    title: string;
    description: string;
    amount: CoinSDKType[];
}
/** CommunityPoolLendWithdrawProposal withdraws a lend position back to the community pool */
export interface CommunityPoolLendWithdrawProposal {
    title: string;
    description: string;
    amount: Coin[];
}
export interface CommunityPoolLendWithdrawProposalProtoMsg {
    typeUrl: "/kava.community.v1beta1.CommunityPoolLendWithdrawProposal";
    value: Uint8Array;
}
/** CommunityPoolLendWithdrawProposal withdraws a lend position back to the community pool */
export interface CommunityPoolLendWithdrawProposalAmino {
    title: string;
    description: string;
    amount: CoinAmino[];
}
export interface CommunityPoolLendWithdrawProposalAminoMsg {
    type: "/kava.community.v1beta1.CommunityPoolLendWithdrawProposal";
    value: CommunityPoolLendWithdrawProposalAmino;
}
/** CommunityPoolLendWithdrawProposal withdraws a lend position back to the community pool */
export interface CommunityPoolLendWithdrawProposalSDKType {
    title: string;
    description: string;
    amount: CoinSDKType[];
}
/**
 * CommunityCDPRepayDebtProposal repays a cdp debt position owned by the community module
 * This proposal exists primarily to allow committees to repay community module cdp debts.
 */
export interface CommunityCDPRepayDebtProposal {
    title: string;
    description: string;
    collateralType: string;
    payment: Coin;
}
export interface CommunityCDPRepayDebtProposalProtoMsg {
    typeUrl: "/kava.community.v1beta1.CommunityCDPRepayDebtProposal";
    value: Uint8Array;
}
/**
 * CommunityCDPRepayDebtProposal repays a cdp debt position owned by the community module
 * This proposal exists primarily to allow committees to repay community module cdp debts.
 */
export interface CommunityCDPRepayDebtProposalAmino {
    title: string;
    description: string;
    collateral_type: string;
    payment?: CoinAmino;
}
export interface CommunityCDPRepayDebtProposalAminoMsg {
    type: "/kava.community.v1beta1.CommunityCDPRepayDebtProposal";
    value: CommunityCDPRepayDebtProposalAmino;
}
/**
 * CommunityCDPRepayDebtProposal repays a cdp debt position owned by the community module
 * This proposal exists primarily to allow committees to repay community module cdp debts.
 */
export interface CommunityCDPRepayDebtProposalSDKType {
    title: string;
    description: string;
    collateral_type: string;
    payment: CoinSDKType;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposal {
    title: string;
    description: string;
    collateralType: string;
    collateral: Coin;
}
export interface CommunityCDPWithdrawCollateralProposalProtoMsg {
    typeUrl: "/kava.community.v1beta1.CommunityCDPWithdrawCollateralProposal";
    value: Uint8Array;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposalAmino {
    title: string;
    description: string;
    collateral_type: string;
    collateral?: CoinAmino;
}
export interface CommunityCDPWithdrawCollateralProposalAminoMsg {
    type: "/kava.community.v1beta1.CommunityCDPWithdrawCollateralProposal";
    value: CommunityCDPWithdrawCollateralProposalAmino;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposalSDKType {
    title: string;
    description: string;
    collateral_type: string;
    collateral: CoinSDKType;
}
export declare const CommunityPoolLendDepositProposal: {
    typeUrl: string;
    encode(message: CommunityPoolLendDepositProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityPoolLendDepositProposal;
    fromPartial(object: Partial<CommunityPoolLendDepositProposal>): CommunityPoolLendDepositProposal;
    fromAmino(object: CommunityPoolLendDepositProposalAmino): CommunityPoolLendDepositProposal;
    toAmino(message: CommunityPoolLendDepositProposal): CommunityPoolLendDepositProposalAmino;
    fromAminoMsg(object: CommunityPoolLendDepositProposalAminoMsg): CommunityPoolLendDepositProposal;
    fromProtoMsg(message: CommunityPoolLendDepositProposalProtoMsg): CommunityPoolLendDepositProposal;
    toProto(message: CommunityPoolLendDepositProposal): Uint8Array;
    toProtoMsg(message: CommunityPoolLendDepositProposal): CommunityPoolLendDepositProposalProtoMsg;
};
export declare const CommunityPoolLendWithdrawProposal: {
    typeUrl: string;
    encode(message: CommunityPoolLendWithdrawProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityPoolLendWithdrawProposal;
    fromPartial(object: Partial<CommunityPoolLendWithdrawProposal>): CommunityPoolLendWithdrawProposal;
    fromAmino(object: CommunityPoolLendWithdrawProposalAmino): CommunityPoolLendWithdrawProposal;
    toAmino(message: CommunityPoolLendWithdrawProposal): CommunityPoolLendWithdrawProposalAmino;
    fromAminoMsg(object: CommunityPoolLendWithdrawProposalAminoMsg): CommunityPoolLendWithdrawProposal;
    fromProtoMsg(message: CommunityPoolLendWithdrawProposalProtoMsg): CommunityPoolLendWithdrawProposal;
    toProto(message: CommunityPoolLendWithdrawProposal): Uint8Array;
    toProtoMsg(message: CommunityPoolLendWithdrawProposal): CommunityPoolLendWithdrawProposalProtoMsg;
};
export declare const CommunityCDPRepayDebtProposal: {
    typeUrl: string;
    encode(message: CommunityCDPRepayDebtProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityCDPRepayDebtProposal;
    fromPartial(object: Partial<CommunityCDPRepayDebtProposal>): CommunityCDPRepayDebtProposal;
    fromAmino(object: CommunityCDPRepayDebtProposalAmino): CommunityCDPRepayDebtProposal;
    toAmino(message: CommunityCDPRepayDebtProposal): CommunityCDPRepayDebtProposalAmino;
    fromAminoMsg(object: CommunityCDPRepayDebtProposalAminoMsg): CommunityCDPRepayDebtProposal;
    fromProtoMsg(message: CommunityCDPRepayDebtProposalProtoMsg): CommunityCDPRepayDebtProposal;
    toProto(message: CommunityCDPRepayDebtProposal): Uint8Array;
    toProtoMsg(message: CommunityCDPRepayDebtProposal): CommunityCDPRepayDebtProposalProtoMsg;
};
export declare const CommunityCDPWithdrawCollateralProposal: {
    typeUrl: string;
    encode(message: CommunityCDPWithdrawCollateralProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityCDPWithdrawCollateralProposal;
    fromPartial(object: Partial<CommunityCDPWithdrawCollateralProposal>): CommunityCDPWithdrawCollateralProposal;
    fromAmino(object: CommunityCDPWithdrawCollateralProposalAmino): CommunityCDPWithdrawCollateralProposal;
    toAmino(message: CommunityCDPWithdrawCollateralProposal): CommunityCDPWithdrawCollateralProposalAmino;
    fromAminoMsg(object: CommunityCDPWithdrawCollateralProposalAminoMsg): CommunityCDPWithdrawCollateralProposal;
    fromProtoMsg(message: CommunityCDPWithdrawCollateralProposalProtoMsg): CommunityCDPWithdrawCollateralProposal;
    toProto(message: CommunityCDPWithdrawCollateralProposal): Uint8Array;
    toProtoMsg(message: CommunityCDPWithdrawCollateralProposal): CommunityCDPWithdrawCollateralProposalProtoMsg;
};
