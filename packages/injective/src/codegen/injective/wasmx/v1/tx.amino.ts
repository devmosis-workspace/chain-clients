import { fundingModeFromJSON } from "./proposal";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
export interface MsgUpdateContractAminoType extends AminoMsg {
  type: "/injective.wasmx.v1.MsgUpdateContract";
  value: {
    sender: string;
    contract_address: string;
    gas_limit: string;
    gas_price: string;
    admin_address: string;
  };
}
export interface MsgActivateContractAminoType extends AminoMsg {
  type: "/injective.wasmx.v1.MsgActivateContract";
  value: {
    sender: string;
    contract_address: string;
  };
}
export interface MsgDeactivateContractAminoType extends AminoMsg {
  type: "/injective.wasmx.v1.MsgDeactivateContract";
  value: {
    sender: string;
    contract_address: string;
  };
}
export interface MsgExecuteContractCompatAminoType extends AminoMsg {
  type: "/injective.wasmx.v1.MsgExecuteContractCompat";
  value: {
    sender: string;
    contract: string;
    msg: string;
    funds: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/injective.wasmx.v1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      is_execution_enabled: boolean;
      max_begin_block_total_gas: string;
      max_contract_gas_limit: string;
      min_gas_price: string;
    };
  };
}
export interface MsgRegisterContractAminoType extends AminoMsg {
  type: "/injective.wasmx.v1.MsgRegisterContract";
  value: {
    sender: string;
    contract_registration_request: {
      contract_address: string;
      gas_limit: string;
      gas_price: string;
      should_pin_contract: boolean;
      is_migration_allowed: boolean;
      code_id: string;
      admin_address: string;
      granter_address: string;
      funding_mode: number;
    };
  };
}
export const AminoConverter = {
  "/injective.wasmx.v1.MsgUpdateContract": {
    aminoType: "/injective.wasmx.v1.MsgUpdateContract",
    toAmino: ({
      sender,
      contractAddress,
      gasLimit,
      gasPrice,
      adminAddress
    }: MsgUpdateContract): MsgUpdateContractAminoType["value"] => {
      return {
        sender,
        contract_address: contractAddress,
        gas_limit: gasLimit.toString(),
        gas_price: gasPrice.toString(),
        admin_address: adminAddress
      };
    },
    fromAmino: ({
      sender,
      contract_address,
      gas_limit,
      gas_price,
      admin_address
    }: MsgUpdateContractAminoType["value"]): MsgUpdateContract => {
      return {
        sender,
        contractAddress: contract_address,
        gasLimit: Long.fromString(gas_limit),
        gasPrice: Long.fromString(gas_price),
        adminAddress: admin_address
      };
    }
  },
  "/injective.wasmx.v1.MsgActivateContract": {
    aminoType: "/injective.wasmx.v1.MsgActivateContract",
    toAmino: ({
      sender,
      contractAddress
    }: MsgActivateContract): MsgActivateContractAminoType["value"] => {
      return {
        sender,
        contract_address: contractAddress
      };
    },
    fromAmino: ({
      sender,
      contract_address
    }: MsgActivateContractAminoType["value"]): MsgActivateContract => {
      return {
        sender,
        contractAddress: contract_address
      };
    }
  },
  "/injective.wasmx.v1.MsgDeactivateContract": {
    aminoType: "/injective.wasmx.v1.MsgDeactivateContract",
    toAmino: ({
      sender,
      contractAddress
    }: MsgDeactivateContract): MsgDeactivateContractAminoType["value"] => {
      return {
        sender,
        contract_address: contractAddress
      };
    },
    fromAmino: ({
      sender,
      contract_address
    }: MsgDeactivateContractAminoType["value"]): MsgDeactivateContract => {
      return {
        sender,
        contractAddress: contract_address
      };
    }
  },
  "/injective.wasmx.v1.MsgExecuteContractCompat": {
    aminoType: "/injective.wasmx.v1.MsgExecuteContractCompat",
    toAmino: ({
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteContractCompat): MsgExecuteContractCompatAminoType["value"] => {
      return {
        sender,
        contract,
        msg,
        funds
      };
    },
    fromAmino: ({
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteContractCompatAminoType["value"]): MsgExecuteContractCompat => {
      return {
        sender,
        contract,
        msg,
        funds
      };
    }
  },
  "/injective.wasmx.v1.MsgUpdateParams": {
    aminoType: "/injective.wasmx.v1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          is_execution_enabled: params.isExecutionEnabled,
          max_begin_block_total_gas: params.maxBeginBlockTotalGas.toString(),
          max_contract_gas_limit: params.maxContractGasLimit.toString(),
          min_gas_price: params.minGasPrice.toString()
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          isExecutionEnabled: params.is_execution_enabled,
          maxBeginBlockTotalGas: Long.fromString(params.max_begin_block_total_gas),
          maxContractGasLimit: Long.fromString(params.max_contract_gas_limit),
          minGasPrice: Long.fromString(params.min_gas_price)
        }
      };
    }
  },
  "/injective.wasmx.v1.MsgRegisterContract": {
    aminoType: "/injective.wasmx.v1.MsgRegisterContract",
    toAmino: ({
      sender,
      contractRegistrationRequest
    }: MsgRegisterContract): MsgRegisterContractAminoType["value"] => {
      return {
        sender,
        contract_registration_request: {
          contract_address: contractRegistrationRequest.contractAddress,
          gas_limit: contractRegistrationRequest.gasLimit.toString(),
          gas_price: contractRegistrationRequest.gasPrice.toString(),
          should_pin_contract: contractRegistrationRequest.shouldPinContract,
          is_migration_allowed: contractRegistrationRequest.isMigrationAllowed,
          code_id: contractRegistrationRequest.codeId.toString(),
          admin_address: contractRegistrationRequest.adminAddress,
          granter_address: contractRegistrationRequest.granterAddress,
          funding_mode: contractRegistrationRequest.fundingMode
        }
      };
    },
    fromAmino: ({
      sender,
      contract_registration_request
    }: MsgRegisterContractAminoType["value"]): MsgRegisterContract => {
      return {
        sender,
        contractRegistrationRequest: {
          contractAddress: contract_registration_request.contract_address,
          gasLimit: Long.fromString(contract_registration_request.gas_limit),
          gasPrice: Long.fromString(contract_registration_request.gas_price),
          shouldPinContract: contract_registration_request.should_pin_contract,
          isMigrationAllowed: contract_registration_request.is_migration_allowed,
          codeId: Long.fromString(contract_registration_request.code_id),
          adminAddress: contract_registration_request.admin_address,
          granterAddress: contract_registration_request.granter_address,
          fundingMode: fundingModeFromJSON(contract_registration_request.funding_mode)
        }
      };
    }
  }
};