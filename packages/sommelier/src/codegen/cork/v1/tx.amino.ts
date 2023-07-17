import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgSubmitCorkRequest, MsgScheduleCorkRequest } from "./tx";
export interface MsgSubmitCorkRequestAminoType extends AminoMsg {
  type: "/cork.v1.MsgSubmitCorkRequest";
  value: {
    cork: {
      encoded_contract_call: Uint8Array;
      target_contract_address: string;
    };
    signer: string;
  };
}
export interface MsgScheduleCorkRequestAminoType extends AminoMsg {
  type: "/cork.v1.MsgScheduleCorkRequest";
  value: {
    cork: {
      encoded_contract_call: Uint8Array;
      target_contract_address: string;
    };
    block_height: string;
    signer: string;
  };
}
export const AminoConverter = {
  "/cork.v1.MsgSubmitCorkRequest": {
    aminoType: "/cork.v1.MsgSubmitCorkRequest",
    toAmino: ({
      cork,
      signer
    }: MsgSubmitCorkRequest): MsgSubmitCorkRequestAminoType["value"] => {
      return {
        cork: {
          encoded_contract_call: cork.encodedContractCall,
          target_contract_address: cork.targetContractAddress
        },
        signer
      };
    },
    fromAmino: ({
      cork,
      signer
    }: MsgSubmitCorkRequestAminoType["value"]): MsgSubmitCorkRequest => {
      return {
        cork: {
          encodedContractCall: cork.encoded_contract_call,
          targetContractAddress: cork.target_contract_address
        },
        signer
      };
    }
  },
  "/cork.v1.MsgScheduleCorkRequest": {
    aminoType: "/cork.v1.MsgScheduleCorkRequest",
    toAmino: ({
      cork,
      blockHeight,
      signer
    }: MsgScheduleCorkRequest): MsgScheduleCorkRequestAminoType["value"] => {
      return {
        cork: {
          encoded_contract_call: cork.encodedContractCall,
          target_contract_address: cork.targetContractAddress
        },
        block_height: blockHeight.toString(),
        signer
      };
    },
    fromAmino: ({
      cork,
      block_height,
      signer
    }: MsgScheduleCorkRequestAminoType["value"]): MsgScheduleCorkRequest => {
      return {
        cork: {
          encodedContractCall: cork.encoded_contract_call,
          targetContractAddress: cork.target_contract_address
        },
        blockHeight: Long.fromString(block_height),
        signer
      };
    }
  }
};