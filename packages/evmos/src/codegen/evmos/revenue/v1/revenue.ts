import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * Revenue defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface Revenue {
  /** contract_address is the hex address of a registered contract */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the transaction fees it defaults to
   * deployer_address
   */
  withdrawerAddress: string;
}
/**
 * Revenue defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface RevenueSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
}
function createBaseRevenue(): Revenue {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}
export const Revenue = {
  encode(message: Revenue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    return writer;
  },
  fromJSON(object: any): Revenue {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },
  fromPartial(object: Partial<Revenue>): Revenue {
    const message = createBaseRevenue();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  }
};