import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the cron module's genesis state. */
export interface GenesisState {
    /**
     * List of all the contracts that have been given the privilege status via
     * governance. They can set up hooks to abci.EndBlocker
     */
    privilegedContractAddresses: string[];
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateSDKType {
    privileged_contract_addresses: string[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
