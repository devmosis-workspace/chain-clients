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
function createBaseGenesisState(): GenesisState {
  return {
    privilegedContractAddresses: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.privilegedContractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      privilegedContractAddresses: Array.isArray(object?.privilegedContractAddresses) ? object.privilegedContractAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.privilegedContractAddresses = object.privilegedContractAddresses?.map(e => e) || [];
    return message;
  }
};