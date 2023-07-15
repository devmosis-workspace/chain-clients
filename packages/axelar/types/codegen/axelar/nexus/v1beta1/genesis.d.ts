import { Params, ParamsSDKType } from "./params";
import { Chain, ChainSDKType, CrossChainTransfer, CrossChainTransferSDKType, TransferFee, TransferFeeSDKType, FeeInfo, FeeInfoSDKType, GeneralMessage, GeneralMessageSDKType } from "../exported/v1beta1/types";
import { ChainState, ChainStateSDKType, LinkedAddresses, LinkedAddressesSDKType, RateLimit, RateLimitSDKType, TransferEpoch, TransferEpochSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params?: Params;
    nonce: Long;
    chains: Chain[];
    chainStates: ChainState[];
    linkedAddresses: LinkedAddresses[];
    transfers: CrossChainTransfer[];
    fee?: TransferFee;
    feeInfos: FeeInfo[];
    rateLimits: RateLimit[];
    transferEpochs: TransferEpoch[];
    messages: GeneralMessage[];
    messageNonce: Long;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    nonce: Long;
    chains: ChainSDKType[];
    chain_states: ChainStateSDKType[];
    linked_addresses: LinkedAddressesSDKType[];
    transfers: CrossChainTransferSDKType[];
    fee?: TransferFeeSDKType;
    fee_infos: FeeInfoSDKType[];
    rate_limits: RateLimitSDKType[];
    transfer_epochs: TransferEpochSDKType[];
    messages: GeneralMessageSDKType[];
    message_nonce: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
