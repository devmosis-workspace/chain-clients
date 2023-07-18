import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** CommunityPoolLendDepositProposal deposits from the community pool into lend */
export interface CommunityPoolLendDepositProposal {
    title: string;
    description: string;
    amount: Coin[];
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
    payment?: Coin;
}
/**
 * CommunityCDPRepayDebtProposal repays a cdp debt position owned by the community module
 * This proposal exists primarily to allow committees to repay community module cdp debts.
 */
export interface CommunityCDPRepayDebtProposalSDKType {
    title: string;
    description: string;
    collateral_type: string;
    payment?: CoinSDKType;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposal {
    title: string;
    description: string;
    collateralType: string;
    collateral?: Coin;
}
/**
 * CommunityCDPWithdrawCollateralProposal withdraws cdp collateral owned by the community module
 * This proposal exists primarily to allow committees to withdraw community module cdp collateral.
 */
export interface CommunityCDPWithdrawCollateralProposalSDKType {
    title: string;
    description: string;
    collateral_type: string;
    collateral?: CoinSDKType;
}
export declare const CommunityPoolLendDepositProposal: {
    encode(message: CommunityPoolLendDepositProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommunityPoolLendDepositProposal;
    fromPartial(object: Partial<CommunityPoolLendDepositProposal>): CommunityPoolLendDepositProposal;
};
export declare const CommunityPoolLendWithdrawProposal: {
    encode(message: CommunityPoolLendWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommunityPoolLendWithdrawProposal;
    fromPartial(object: Partial<CommunityPoolLendWithdrawProposal>): CommunityPoolLendWithdrawProposal;
};
export declare const CommunityCDPRepayDebtProposal: {
    encode(message: CommunityCDPRepayDebtProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommunityCDPRepayDebtProposal;
    fromPartial(object: Partial<CommunityCDPRepayDebtProposal>): CommunityCDPRepayDebtProposal;
};
export declare const CommunityCDPWithdrawCollateralProposal: {
    encode(message: CommunityCDPWithdrawCollateralProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommunityCDPWithdrawCollateralProposal;
    fromPartial(object: Partial<CommunityCDPWithdrawCollateralProposal>): CommunityCDPWithdrawCollateralProposal;
};
