import { Params, ParamsSDKType } from "./params";
import { BurnerInfo, BurnerInfoSDKType, ERC20Deposit, ERC20DepositSDKType, CommandBatchMetadata, CommandBatchMetadataSDKType, Gateway, GatewaySDKType, ERC20TokenMetadata, ERC20TokenMetadataSDKType, Event, EventSDKType } from "./types";
import { QueueState, QueueStateSDKType } from "../../utils/v1beta1/queuer";
import * as _m0 from "protobufjs/minimal";
/** GenesisState represents the genesis state */
export interface GenesisState {
    chains: GenesisState_Chain[];
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    chains: GenesisState_ChainSDKType[];
}
export interface GenesisState_Chain {
    params?: Params;
    burnerInfos: BurnerInfo[];
    commandQueue?: QueueState;
    confirmedDeposits: ERC20Deposit[];
    burnedDeposits: ERC20Deposit[];
    commandBatches: CommandBatchMetadata[];
    gateway?: Gateway;
    tokens: ERC20TokenMetadata[];
    events: Event[];
    confirmedEventQueue?: QueueState;
    legacyConfirmedDeposits: ERC20Deposit[];
    legacyBurnedDeposits: ERC20Deposit[];
}
export interface GenesisState_ChainSDKType {
    params?: ParamsSDKType;
    burner_infos: BurnerInfoSDKType[];
    command_queue?: QueueStateSDKType;
    confirmed_deposits: ERC20DepositSDKType[];
    burned_deposits: ERC20DepositSDKType[];
    command_batches: CommandBatchMetadataSDKType[];
    gateway?: GatewaySDKType;
    tokens: ERC20TokenMetadataSDKType[];
    events: EventSDKType[];
    confirmed_event_queue?: QueueStateSDKType;
    legacy_confirmed_deposits: ERC20DepositSDKType[];
    legacy_burned_deposits: ERC20DepositSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const GenesisState_Chain: {
    encode(message: GenesisState_Chain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState_Chain;
    fromPartial(object: Partial<GenesisState_Chain>): GenesisState_Chain;
};
