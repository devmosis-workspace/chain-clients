import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShare {
  /**
   * contract_address is the bech32 address of a registered contract in string
   * form
   */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the
   * same as the contracts admin address.
   */
  deployerAddress: string;
  /**
   * withdrawer_address is the bech32 address of account receiving the
   * transaction fees.
   */
  withdrawerAddress: string;
}
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShareSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
}
function createBaseFeeShare(): FeeShare {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}
export const FeeShare = {
  encode(message: FeeShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  fromJSON(object: any): FeeShare {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },
  fromPartial(object: Partial<FeeShare>): FeeShare {
    const message = createBaseFeeShare();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  }
};