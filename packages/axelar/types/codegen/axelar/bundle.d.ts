import * as _0 from "./axelarnet/v1beta1/events";
import * as _1 from "./axelarnet/v1beta1/genesis";
import * as _2 from "./axelarnet/v1beta1/params";
import * as _3 from "./axelarnet/v1beta1/query";
import * as _5 from "./axelarnet/v1beta1/tx";
import * as _6 from "./axelarnet/v1beta1/types";
import * as _7 from "./evm/v1beta1/events";
import * as _8 from "./evm/v1beta1/genesis";
import * as _9 from "./evm/v1beta1/params";
import * as _10 from "./evm/v1beta1/query";
import * as _12 from "./evm/v1beta1/tx";
import * as _13 from "./evm/v1beta1/types";
import * as _14 from "./multisig/exported/v1beta1/types";
import * as _15 from "./multisig/v1beta1/events";
import * as _16 from "./multisig/v1beta1/genesis";
import * as _17 from "./multisig/v1beta1/params";
import * as _18 from "./multisig/v1beta1/query";
import * as _20 from "./multisig/v1beta1/tx";
import * as _21 from "./multisig/v1beta1/types";
import * as _22 from "./nexus/exported/v1beta1/types";
import * as _23 from "./nexus/v1beta1/events";
import * as _24 from "./nexus/v1beta1/genesis";
import * as _25 from "./nexus/v1beta1/params";
import * as _26 from "./nexus/v1beta1/query";
import * as _28 from "./nexus/v1beta1/tx";
import * as _29 from "./nexus/v1beta1/types";
import * as _30 from "./permission/exported/v1beta1/types";
import * as _31 from "./permission/v1beta1/genesis";
import * as _32 from "./permission/v1beta1/params";
import * as _33 from "./permission/v1beta1/query";
import * as _35 from "./permission/v1beta1/tx";
import * as _36 from "./permission/v1beta1/types";
import * as _37 from "./reward/v1beta1/genesis";
import * as _38 from "./reward/v1beta1/params";
import * as _39 from "./reward/v1beta1/query";
import * as _41 from "./reward/v1beta1/tx";
import * as _42 from "./reward/v1beta1/types";
import * as _43 from "./snapshot/exported/v1beta1/types";
import * as _44 from "./snapshot/v1beta1/genesis";
import * as _45 from "./snapshot/v1beta1/params";
import * as _46 from "./snapshot/v1beta1/query";
import * as _48 from "./snapshot/v1beta1/tx";
import * as _49 from "./snapshot/v1beta1/types";
import * as _50 from "./tss/exported/v1beta1/types";
import * as _51 from "./tss/tofnd/v1beta1/common";
import * as _52 from "./tss/tofnd/v1beta1/multisig";
import * as _53 from "./tss/tofnd/v1beta1/tofnd";
import * as _54 from "./tss/v1beta1/genesis";
import * as _55 from "./tss/v1beta1/params";
import * as _57 from "./tss/v1beta1/tx";
import * as _58 from "./tss/v1beta1/types";
import * as _59 from "./utils/v1beta1/bitmap";
import * as _60 from "./utils/v1beta1/queuer";
import * as _61 from "./utils/v1beta1/threshold";
import * as _62 from "./vote/exported/v1beta1/types";
import * as _63 from "./vote/v1beta1/events";
import * as _64 from "./vote/v1beta1/genesis";
import * as _65 from "./vote/v1beta1/params";
import * as _67 from "./vote/v1beta1/tx";
import * as _68 from "./vote/v1beta1/types";
import * as _184 from "./permission/v1beta1/service.rpc.Query";
import * as _185 from "./permission/v1beta1/service.rpc.msg";
export declare namespace axelar {
    namespace axelarnet {
        const v1beta1: {
            iBCTransfer_StatusFromJSON(object: any): _6.IBCTransfer_Status;
            iBCTransfer_StatusToJSON(object: _6.IBCTransfer_Status): string;
            IBCTransfer_Status: typeof _6.IBCTransfer_Status;
            IBCTransfer_StatusSDKType: typeof _6.IBCTransfer_Status;
            IBCTransfer: {
                encode(message: _6.IBCTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.IBCTransfer;
                fromPartial(object: Partial<_6.IBCTransfer>): _6.IBCTransfer;
            };
            CosmosChain: {
                encode(message: _6.CosmosChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.CosmosChain;
                fromPartial(object: Partial<_6.CosmosChain>): _6.CosmosChain;
            };
            Asset: {
                encode(message: _6.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Asset;
                fromPartial(object: Partial<_6.Asset>): _6.Asset;
            };
            Fee: {
                encode(message: _6.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Fee;
                fromPartial(object: Partial<_6.Fee>): _6.Fee;
            };
            LinkRequest: {
                encode(message: _5.LinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.LinkRequest;
                fromPartial(object: Partial<_5.LinkRequest>): _5.LinkRequest;
            };
            LinkResponse: {
                encode(message: _5.LinkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.LinkResponse;
                fromPartial(object: Partial<_5.LinkResponse>): _5.LinkResponse;
            };
            ConfirmDepositRequest: {
                encode(message: _5.ConfirmDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.ConfirmDepositRequest;
                fromPartial(object: Partial<_5.ConfirmDepositRequest>): _5.ConfirmDepositRequest;
            };
            ConfirmDepositResponse: {
                encode(_: _5.ConfirmDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.ConfirmDepositResponse;
                fromPartial(_: Partial<_5.ConfirmDepositResponse>): _5.ConfirmDepositResponse;
            };
            ExecutePendingTransfersRequest: {
                encode(message: _5.ExecutePendingTransfersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.ExecutePendingTransfersRequest;
                fromPartial(object: Partial<_5.ExecutePendingTransfersRequest>): _5.ExecutePendingTransfersRequest;
            };
            ExecutePendingTransfersResponse: {
                encode(_: _5.ExecutePendingTransfersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.ExecutePendingTransfersResponse;
                fromPartial(_: Partial<_5.ExecutePendingTransfersResponse>): _5.ExecutePendingTransfersResponse;
            };
            RegisterIBCPathRequest: {
                encode(message: _5.RegisterIBCPathRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.RegisterIBCPathRequest;
                fromPartial(object: Partial<_5.RegisterIBCPathRequest>): _5.RegisterIBCPathRequest;
            };
            RegisterIBCPathResponse: {
                encode(_: _5.RegisterIBCPathResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.RegisterIBCPathResponse;
                fromPartial(_: Partial<_5.RegisterIBCPathResponse>): _5.RegisterIBCPathResponse;
            };
            AddCosmosBasedChainRequest: {
                encode(message: _5.AddCosmosBasedChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.AddCosmosBasedChainRequest;
                fromPartial(object: Partial<_5.AddCosmosBasedChainRequest>): _5.AddCosmosBasedChainRequest;
            };
            AddCosmosBasedChainResponse: {
                encode(_: _5.AddCosmosBasedChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.AddCosmosBasedChainResponse;
                fromPartial(_: Partial<_5.AddCosmosBasedChainResponse>): _5.AddCosmosBasedChainResponse;
            };
            RegisterAssetRequest: {
                encode(message: _5.RegisterAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.RegisterAssetRequest;
                fromPartial(object: Partial<_5.RegisterAssetRequest>): _5.RegisterAssetRequest;
            };
            RegisterAssetResponse: {
                encode(_: _5.RegisterAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.RegisterAssetResponse;
                fromPartial(_: Partial<_5.RegisterAssetResponse>): _5.RegisterAssetResponse;
            };
            RouteIBCTransfersRequest: {
                encode(message: _5.RouteIBCTransfersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.RouteIBCTransfersRequest;
                fromPartial(object: Partial<_5.RouteIBCTransfersRequest>): _5.RouteIBCTransfersRequest;
            };
            RouteIBCTransfersResponse: {
                encode(_: _5.RouteIBCTransfersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.RouteIBCTransfersResponse;
                fromPartial(_: Partial<_5.RouteIBCTransfersResponse>): _5.RouteIBCTransfersResponse;
            };
            RegisterFeeCollectorRequest: {
                encode(message: _5.RegisterFeeCollectorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.RegisterFeeCollectorRequest;
                fromPartial(object: Partial<_5.RegisterFeeCollectorRequest>): _5.RegisterFeeCollectorRequest;
            };
            RegisterFeeCollectorResponse: {
                encode(_: _5.RegisterFeeCollectorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.RegisterFeeCollectorResponse;
                fromPartial(_: Partial<_5.RegisterFeeCollectorResponse>): _5.RegisterFeeCollectorResponse;
            };
            RetryIBCTransferRequest: {
                encode(message: _5.RetryIBCTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.RetryIBCTransferRequest;
                fromPartial(object: Partial<_5.RetryIBCTransferRequest>): _5.RetryIBCTransferRequest;
            };
            RetryIBCTransferResponse: {
                encode(_: _5.RetryIBCTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.RetryIBCTransferResponse;
                fromPartial(_: Partial<_5.RetryIBCTransferResponse>): _5.RetryIBCTransferResponse;
            };
            RouteMessageRequest: {
                encode(message: _5.RouteMessageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.RouteMessageRequest;
                fromPartial(object: Partial<_5.RouteMessageRequest>): _5.RouteMessageRequest;
            };
            RouteMessageResponse: {
                encode(_: _5.RouteMessageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.RouteMessageResponse;
                fromPartial(_: Partial<_5.RouteMessageResponse>): _5.RouteMessageResponse;
            };
            CallContractRequest: {
                encode(message: _5.CallContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.CallContractRequest;
                fromPartial(object: Partial<_5.CallContractRequest>): _5.CallContractRequest;
            };
            CallContractResponse: {
                encode(_: _5.CallContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _5.CallContractResponse;
                fromPartial(_: Partial<_5.CallContractResponse>): _5.CallContractResponse;
            };
            PendingIBCTransferCountRequest: {
                encode(_: _3.PendingIBCTransferCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.PendingIBCTransferCountRequest;
                fromPartial(_: Partial<_3.PendingIBCTransferCountRequest>): _3.PendingIBCTransferCountRequest;
            };
            PendingIBCTransferCountResponse_TransfersByChainEntry: {
                encode(message: _3.PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.PendingIBCTransferCountResponse_TransfersByChainEntry;
                fromPartial(object: Partial<_3.PendingIBCTransferCountResponse_TransfersByChainEntry>): _3.PendingIBCTransferCountResponse_TransfersByChainEntry;
            };
            PendingIBCTransferCountResponse: {
                encode(message: _3.PendingIBCTransferCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.PendingIBCTransferCountResponse;
                fromPartial(object: Partial<_3.PendingIBCTransferCountResponse>): _3.PendingIBCTransferCountResponse;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
            };
            GenesisState_SeqIdMappingEntry: {
                encode(message: _1.GenesisState_SeqIdMappingEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.GenesisState_SeqIdMappingEntry;
                fromPartial(object: Partial<_1.GenesisState_SeqIdMappingEntry>): _1.GenesisState_SeqIdMappingEntry;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            };
            IBCTransferSent: {
                encode(message: _0.IBCTransferSent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.IBCTransferSent;
                fromPartial(object: Partial<_0.IBCTransferSent>): _0.IBCTransferSent;
            };
            IBCTransferCompleted: {
                encode(message: _0.IBCTransferCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.IBCTransferCompleted;
                fromPartial(object: Partial<_0.IBCTransferCompleted>): _0.IBCTransferCompleted;
            };
            IBCTransferFailed: {
                encode(message: _0.IBCTransferFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.IBCTransferFailed;
                fromPartial(object: Partial<_0.IBCTransferFailed>): _0.IBCTransferFailed;
            };
            IBCTransferRetried: {
                encode(message: _0.IBCTransferRetried, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.IBCTransferRetried;
                fromPartial(object: Partial<_0.IBCTransferRetried>): _0.IBCTransferRetried;
            };
            AxelarTransferCompleted: {
                encode(message: _0.AxelarTransferCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.AxelarTransferCompleted;
                fromPartial(object: Partial<_0.AxelarTransferCompleted>): _0.AxelarTransferCompleted;
            };
            FeeCollected: {
                encode(message: _0.FeeCollected, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.FeeCollected;
                fromPartial(object: Partial<_0.FeeCollected>): _0.FeeCollected;
            };
            FeePaid: {
                encode(message: _0.FeePaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.FeePaid;
                fromPartial(object: Partial<_0.FeePaid>): _0.FeePaid;
            };
            ContractCallSubmitted: {
                encode(message: _0.ContractCallSubmitted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.ContractCallSubmitted;
                fromPartial(object: Partial<_0.ContractCallSubmitted>): _0.ContractCallSubmitted;
            };
            ContractCallWithTokenSubmitted: {
                encode(message: _0.ContractCallWithTokenSubmitted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.ContractCallWithTokenSubmitted;
                fromPartial(object: Partial<_0.ContractCallWithTokenSubmitted>): _0.ContractCallWithTokenSubmitted;
            };
            TokenSent: {
                encode(message: _0.TokenSent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.TokenSent;
                fromPartial(object: Partial<_0.TokenSent>): _0.TokenSent;
            };
        };
    }
    namespace evm {
        const v1beta1: {
            event_StatusFromJSON(object: any): _13.Event_Status;
            event_StatusToJSON(object: _13.Event_Status): string;
            statusFromJSON(object: any): _13.Status;
            statusToJSON(object: _13.Status): string;
            commandTypeFromJSON(object: any): _13.CommandType;
            commandTypeToJSON(object: _13.CommandType): string;
            batchedCommandsStatusFromJSON(object: any): _13.BatchedCommandsStatus;
            batchedCommandsStatusToJSON(object: _13.BatchedCommandsStatus): string;
            sigTypeFromJSON(object: any): _13.SigType;
            sigTypeToJSON(object: _13.SigType): string;
            depositStatusFromJSON(object: any): _13.DepositStatus;
            depositStatusToJSON(object: _13.DepositStatus): string;
            Event_Status: typeof _13.Event_Status;
            Event_StatusSDKType: typeof _13.Event_Status;
            Status: typeof _13.Status;
            StatusSDKType: typeof _13.Status;
            CommandType: typeof _13.CommandType;
            CommandTypeSDKType: typeof _13.CommandType;
            BatchedCommandsStatus: typeof _13.BatchedCommandsStatus;
            BatchedCommandsStatusSDKType: typeof _13.BatchedCommandsStatus;
            SigType: typeof _13.SigType;
            SigTypeSDKType: typeof _13.SigType;
            DepositStatus: typeof _13.DepositStatus;
            DepositStatusSDKType: typeof _13.DepositStatus;
            VoteEvents: {
                encode(message: _13.VoteEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.VoteEvents;
                fromPartial(object: Partial<_13.VoteEvents>): _13.VoteEvents;
            };
            Event: {
                encode(message: _13.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Event;
                fromPartial(object: Partial<_13.Event>): _13.Event;
            };
            EventTokenSent: {
                encode(message: _13.EventTokenSent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.EventTokenSent;
                fromPartial(object: Partial<_13.EventTokenSent>): _13.EventTokenSent;
            };
            EventContractCall: {
                encode(message: _13.EventContractCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.EventContractCall;
                fromPartial(object: Partial<_13.EventContractCall>): _13.EventContractCall;
            };
            EventContractCallWithToken: {
                encode(message: _13.EventContractCallWithToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.EventContractCallWithToken;
                fromPartial(object: Partial<_13.EventContractCallWithToken>): _13.EventContractCallWithToken;
            };
            EventTransfer: {
                encode(message: _13.EventTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.EventTransfer;
                fromPartial(object: Partial<_13.EventTransfer>): _13.EventTransfer;
            };
            EventTokenDeployed: {
                encode(message: _13.EventTokenDeployed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.EventTokenDeployed;
                fromPartial(object: Partial<_13.EventTokenDeployed>): _13.EventTokenDeployed;
            };
            EventMultisigOwnershipTransferred: {
                encode(message: _13.EventMultisigOwnershipTransferred, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.EventMultisigOwnershipTransferred;
                fromPartial(object: Partial<_13.EventMultisigOwnershipTransferred>): _13.EventMultisigOwnershipTransferred;
            };
            EventMultisigOperatorshipTransferred: {
                encode(message: _13.EventMultisigOperatorshipTransferred, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.EventMultisigOperatorshipTransferred;
                fromPartial(object: Partial<_13.EventMultisigOperatorshipTransferred>): _13.EventMultisigOperatorshipTransferred;
            };
            NetworkInfo: {
                encode(message: _13.NetworkInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.NetworkInfo;
                fromPartial(object: Partial<_13.NetworkInfo>): _13.NetworkInfo;
            };
            BurnerInfo: {
                encode(message: _13.BurnerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.BurnerInfo;
                fromPartial(object: Partial<_13.BurnerInfo>): _13.BurnerInfo;
            };
            ERC20Deposit: {
                encode(message: _13.ERC20Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.ERC20Deposit;
                fromPartial(object: Partial<_13.ERC20Deposit>): _13.ERC20Deposit;
            };
            ERC20TokenMetadata: {
                encode(message: _13.ERC20TokenMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.ERC20TokenMetadata;
                fromPartial(object: Partial<_13.ERC20TokenMetadata>): _13.ERC20TokenMetadata;
            };
            TransactionMetadata: {
                encode(message: _13.TransactionMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.TransactionMetadata;
                fromPartial(object: Partial<_13.TransactionMetadata>): _13.TransactionMetadata;
            };
            Command: {
                encode(message: _13.Command, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Command;
                fromPartial(object: Partial<_13.Command>): _13.Command;
            };
            CommandBatchMetadata: {
                encode(message: _13.CommandBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.CommandBatchMetadata;
                fromPartial(object: Partial<_13.CommandBatchMetadata>): _13.CommandBatchMetadata;
            };
            SigMetadata: {
                encode(message: _13.SigMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.SigMetadata;
                fromPartial(object: Partial<_13.SigMetadata>): _13.SigMetadata;
            };
            TransferKey: {
                encode(message: _13.TransferKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.TransferKey;
                fromPartial(object: Partial<_13.TransferKey>): _13.TransferKey;
            };
            Asset: {
                encode(message: _13.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Asset;
                fromPartial(object: Partial<_13.Asset>): _13.Asset;
            };
            TokenDetails: {
                encode(message: _13.TokenDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.TokenDetails;
                fromPartial(object: Partial<_13.TokenDetails>): _13.TokenDetails;
            };
            Gateway: {
                encode(message: _13.Gateway, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Gateway;
                fromPartial(object: Partial<_13.Gateway>): _13.Gateway;
            };
            PollMetadata: {
                encode(message: _13.PollMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.PollMetadata;
                fromPartial(object: Partial<_13.PollMetadata>): _13.PollMetadata;
            };
            SetGatewayRequest: {
                encode(message: _12.SetGatewayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.SetGatewayRequest;
                fromPartial(object: Partial<_12.SetGatewayRequest>): _12.SetGatewayRequest;
            };
            SetGatewayResponse: {
                encode(_: _12.SetGatewayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.SetGatewayResponse;
                fromPartial(_: Partial<_12.SetGatewayResponse>): _12.SetGatewayResponse;
            };
            ConfirmGatewayTxRequest: {
                encode(message: _12.ConfirmGatewayTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.ConfirmGatewayTxRequest;
                fromPartial(object: Partial<_12.ConfirmGatewayTxRequest>): _12.ConfirmGatewayTxRequest;
            };
            ConfirmGatewayTxResponse: {
                encode(_: _12.ConfirmGatewayTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.ConfirmGatewayTxResponse;
                fromPartial(_: Partial<_12.ConfirmGatewayTxResponse>): _12.ConfirmGatewayTxResponse;
            };
            ConfirmDepositRequest: {
                encode(message: _12.ConfirmDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.ConfirmDepositRequest;
                fromPartial(object: Partial<_12.ConfirmDepositRequest>): _12.ConfirmDepositRequest;
            };
            ConfirmDepositResponse: {
                encode(_: _12.ConfirmDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.ConfirmDepositResponse;
                fromPartial(_: Partial<_12.ConfirmDepositResponse>): _12.ConfirmDepositResponse;
            };
            ConfirmTokenRequest: {
                encode(message: _12.ConfirmTokenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.ConfirmTokenRequest;
                fromPartial(object: Partial<_12.ConfirmTokenRequest>): _12.ConfirmTokenRequest;
            };
            ConfirmTokenResponse: {
                encode(_: _12.ConfirmTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.ConfirmTokenResponse;
                fromPartial(_: Partial<_12.ConfirmTokenResponse>): _12.ConfirmTokenResponse;
            };
            ConfirmTransferKeyRequest: {
                encode(message: _12.ConfirmTransferKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.ConfirmTransferKeyRequest;
                fromPartial(object: Partial<_12.ConfirmTransferKeyRequest>): _12.ConfirmTransferKeyRequest;
            };
            ConfirmTransferKeyResponse: {
                encode(_: _12.ConfirmTransferKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.ConfirmTransferKeyResponse;
                fromPartial(_: Partial<_12.ConfirmTransferKeyResponse>): _12.ConfirmTransferKeyResponse;
            };
            LinkRequest: {
                encode(message: _12.LinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.LinkRequest;
                fromPartial(object: Partial<_12.LinkRequest>): _12.LinkRequest;
            };
            LinkResponse: {
                encode(message: _12.LinkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.LinkResponse;
                fromPartial(object: Partial<_12.LinkResponse>): _12.LinkResponse;
            };
            CreateBurnTokensRequest: {
                encode(message: _12.CreateBurnTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.CreateBurnTokensRequest;
                fromPartial(object: Partial<_12.CreateBurnTokensRequest>): _12.CreateBurnTokensRequest;
            };
            CreateBurnTokensResponse: {
                encode(_: _12.CreateBurnTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.CreateBurnTokensResponse;
                fromPartial(_: Partial<_12.CreateBurnTokensResponse>): _12.CreateBurnTokensResponse;
            };
            CreateDeployTokenRequest: {
                encode(message: _12.CreateDeployTokenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.CreateDeployTokenRequest;
                fromPartial(object: Partial<_12.CreateDeployTokenRequest>): _12.CreateDeployTokenRequest;
            };
            CreateDeployTokenResponse: {
                encode(_: _12.CreateDeployTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.CreateDeployTokenResponse;
                fromPartial(_: Partial<_12.CreateDeployTokenResponse>): _12.CreateDeployTokenResponse;
            };
            CreatePendingTransfersRequest: {
                encode(message: _12.CreatePendingTransfersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.CreatePendingTransfersRequest;
                fromPartial(object: Partial<_12.CreatePendingTransfersRequest>): _12.CreatePendingTransfersRequest;
            };
            CreatePendingTransfersResponse: {
                encode(_: _12.CreatePendingTransfersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.CreatePendingTransfersResponse;
                fromPartial(_: Partial<_12.CreatePendingTransfersResponse>): _12.CreatePendingTransfersResponse;
            };
            CreateTransferOwnershipRequest: {
                encode(message: _12.CreateTransferOwnershipRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.CreateTransferOwnershipRequest;
                fromPartial(object: Partial<_12.CreateTransferOwnershipRequest>): _12.CreateTransferOwnershipRequest;
            };
            CreateTransferOwnershipResponse: {
                encode(_: _12.CreateTransferOwnershipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.CreateTransferOwnershipResponse;
                fromPartial(_: Partial<_12.CreateTransferOwnershipResponse>): _12.CreateTransferOwnershipResponse;
            };
            CreateTransferOperatorshipRequest: {
                encode(message: _12.CreateTransferOperatorshipRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.CreateTransferOperatorshipRequest;
                fromPartial(object: Partial<_12.CreateTransferOperatorshipRequest>): _12.CreateTransferOperatorshipRequest;
            };
            CreateTransferOperatorshipResponse: {
                encode(_: _12.CreateTransferOperatorshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.CreateTransferOperatorshipResponse;
                fromPartial(_: Partial<_12.CreateTransferOperatorshipResponse>): _12.CreateTransferOperatorshipResponse;
            };
            SignCommandsRequest: {
                encode(message: _12.SignCommandsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.SignCommandsRequest;
                fromPartial(object: Partial<_12.SignCommandsRequest>): _12.SignCommandsRequest;
            };
            SignCommandsResponse: {
                encode(message: _12.SignCommandsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.SignCommandsResponse;
                fromPartial(object: Partial<_12.SignCommandsResponse>): _12.SignCommandsResponse;
            };
            AddChainRequest: {
                encode(message: _12.AddChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.AddChainRequest;
                fromPartial(object: Partial<_12.AddChainRequest>): _12.AddChainRequest;
            };
            AddChainResponse: {
                encode(_: _12.AddChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.AddChainResponse;
                fromPartial(_: Partial<_12.AddChainResponse>): _12.AddChainResponse;
            };
            RetryFailedEventRequest: {
                encode(message: _12.RetryFailedEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.RetryFailedEventRequest;
                fromPartial(object: Partial<_12.RetryFailedEventRequest>): _12.RetryFailedEventRequest;
            };
            RetryFailedEventResponse: {
                encode(_: _12.RetryFailedEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.RetryFailedEventResponse;
                fromPartial(_: Partial<_12.RetryFailedEventResponse>): _12.RetryFailedEventResponse;
            };
            chainStatusFromJSON(object: any): _10.ChainStatus;
            chainStatusToJSON(object: _10.ChainStatus): string;
            tokenTypeFromJSON(object: any): _10.TokenType;
            tokenTypeToJSON(object: _10.TokenType): string;
            ChainStatus: typeof _10.ChainStatus;
            ChainStatusSDKType: typeof _10.ChainStatus;
            TokenType: typeof _10.TokenType;
            TokenTypeSDKType: typeof _10.TokenType;
            DepositQueryParams: {
                encode(message: _10.DepositQueryParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.DepositQueryParams;
                fromPartial(object: Partial<_10.DepositQueryParams>): _10.DepositQueryParams;
            };
            BatchedCommandsRequest: {
                encode(message: _10.BatchedCommandsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BatchedCommandsRequest;
                fromPartial(object: Partial<_10.BatchedCommandsRequest>): _10.BatchedCommandsRequest;
            };
            BatchedCommandsResponse: {
                encode(message: _10.BatchedCommandsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BatchedCommandsResponse;
                fromPartial(object: Partial<_10.BatchedCommandsResponse>): _10.BatchedCommandsResponse;
            };
            KeyAddressRequest: {
                encode(message: _10.KeyAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.KeyAddressRequest;
                fromPartial(object: Partial<_10.KeyAddressRequest>): _10.KeyAddressRequest;
            };
            KeyAddressResponse: {
                encode(message: _10.KeyAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.KeyAddressResponse;
                fromPartial(object: Partial<_10.KeyAddressResponse>): _10.KeyAddressResponse;
            };
            KeyAddressResponse_WeightedAddress: {
                encode(message: _10.KeyAddressResponse_WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.KeyAddressResponse_WeightedAddress;
                fromPartial(object: Partial<_10.KeyAddressResponse_WeightedAddress>): _10.KeyAddressResponse_WeightedAddress;
            };
            QueryTokenAddressResponse: {
                encode(message: _10.QueryTokenAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryTokenAddressResponse;
                fromPartial(object: Partial<_10.QueryTokenAddressResponse>): _10.QueryTokenAddressResponse;
            };
            QueryDepositStateParams: {
                encode(message: _10.QueryDepositStateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryDepositStateParams;
                fromPartial(object: Partial<_10.QueryDepositStateParams>): _10.QueryDepositStateParams;
            };
            DepositStateRequest: {
                encode(message: _10.DepositStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.DepositStateRequest;
                fromPartial(object: Partial<_10.DepositStateRequest>): _10.DepositStateRequest;
            };
            DepositStateResponse: {
                encode(message: _10.DepositStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.DepositStateResponse;
                fromPartial(object: Partial<_10.DepositStateResponse>): _10.DepositStateResponse;
            };
            EventRequest: {
                encode(message: _10.EventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.EventRequest;
                fromPartial(object: Partial<_10.EventRequest>): _10.EventRequest;
            };
            EventResponse: {
                encode(message: _10.EventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.EventResponse;
                fromPartial(object: Partial<_10.EventResponse>): _10.EventResponse;
            };
            QueryBurnerAddressResponse: {
                encode(message: _10.QueryBurnerAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryBurnerAddressResponse;
                fromPartial(object: Partial<_10.QueryBurnerAddressResponse>): _10.QueryBurnerAddressResponse;
            };
            ChainsRequest: {
                encode(message: _10.ChainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ChainsRequest;
                fromPartial(object: Partial<_10.ChainsRequest>): _10.ChainsRequest;
            };
            ChainsResponse: {
                encode(message: _10.ChainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ChainsResponse;
                fromPartial(object: Partial<_10.ChainsResponse>): _10.ChainsResponse;
            };
            CommandRequest: {
                encode(message: _10.CommandRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.CommandRequest;
                fromPartial(object: Partial<_10.CommandRequest>): _10.CommandRequest;
            };
            CommandResponse_ParamsEntry: {
                encode(message: _10.CommandResponse_ParamsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.CommandResponse_ParamsEntry;
                fromPartial(object: Partial<_10.CommandResponse_ParamsEntry>): _10.CommandResponse_ParamsEntry;
            };
            CommandResponse: {
                encode(message: _10.CommandResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.CommandResponse;
                fromPartial(object: Partial<_10.CommandResponse>): _10.CommandResponse;
            };
            PendingCommandsRequest: {
                encode(message: _10.PendingCommandsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.PendingCommandsRequest;
                fromPartial(object: Partial<_10.PendingCommandsRequest>): _10.PendingCommandsRequest;
            };
            PendingCommandsResponse: {
                encode(message: _10.PendingCommandsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.PendingCommandsResponse;
                fromPartial(object: Partial<_10.PendingCommandsResponse>): _10.PendingCommandsResponse;
            };
            QueryCommandResponse_ParamsEntry: {
                encode(message: _10.QueryCommandResponse_ParamsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryCommandResponse_ParamsEntry;
                fromPartial(object: Partial<_10.QueryCommandResponse_ParamsEntry>): _10.QueryCommandResponse_ParamsEntry;
            };
            QueryCommandResponse: {
                encode(message: _10.QueryCommandResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryCommandResponse;
                fromPartial(object: Partial<_10.QueryCommandResponse>): _10.QueryCommandResponse;
            };
            BurnerInfoRequest: {
                encode(message: _10.BurnerInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BurnerInfoRequest;
                fromPartial(object: Partial<_10.BurnerInfoRequest>): _10.BurnerInfoRequest;
            };
            BurnerInfoResponse: {
                encode(message: _10.BurnerInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BurnerInfoResponse;
                fromPartial(object: Partial<_10.BurnerInfoResponse>): _10.BurnerInfoResponse;
            };
            ConfirmationHeightRequest: {
                encode(message: _10.ConfirmationHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ConfirmationHeightRequest;
                fromPartial(object: Partial<_10.ConfirmationHeightRequest>): _10.ConfirmationHeightRequest;
            };
            ConfirmationHeightResponse: {
                encode(message: _10.ConfirmationHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ConfirmationHeightResponse;
                fromPartial(object: Partial<_10.ConfirmationHeightResponse>): _10.ConfirmationHeightResponse;
            };
            GatewayAddressRequest: {
                encode(message: _10.GatewayAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.GatewayAddressRequest;
                fromPartial(object: Partial<_10.GatewayAddressRequest>): _10.GatewayAddressRequest;
            };
            GatewayAddressResponse: {
                encode(message: _10.GatewayAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.GatewayAddressResponse;
                fromPartial(object: Partial<_10.GatewayAddressResponse>): _10.GatewayAddressResponse;
            };
            BytecodeRequest: {
                encode(message: _10.BytecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BytecodeRequest;
                fromPartial(object: Partial<_10.BytecodeRequest>): _10.BytecodeRequest;
            };
            BytecodeResponse: {
                encode(message: _10.BytecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.BytecodeResponse;
                fromPartial(object: Partial<_10.BytecodeResponse>): _10.BytecodeResponse;
            };
            ERC20TokensRequest: {
                encode(message: _10.ERC20TokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ERC20TokensRequest;
                fromPartial(object: Partial<_10.ERC20TokensRequest>): _10.ERC20TokensRequest;
            };
            ERC20TokensResponse: {
                encode(message: _10.ERC20TokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ERC20TokensResponse;
                fromPartial(object: Partial<_10.ERC20TokensResponse>): _10.ERC20TokensResponse;
            };
            ERC20TokensResponse_Token: {
                encode(message: _10.ERC20TokensResponse_Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.ERC20TokensResponse_Token;
                fromPartial(object: Partial<_10.ERC20TokensResponse_Token>): _10.ERC20TokensResponse_Token;
            };
            TokenInfoRequest: {
                encode(message: _10.TokenInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.TokenInfoRequest;
                fromPartial(object: Partial<_10.TokenInfoRequest>): _10.TokenInfoRequest;
            };
            TokenInfoResponse: {
                encode(message: _10.TokenInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.TokenInfoResponse;
                fromPartial(object: Partial<_10.TokenInfoResponse>): _10.TokenInfoResponse;
            };
            Proof: {
                encode(message: _10.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.Proof;
                fromPartial(object: Partial<_10.Proof>): _10.Proof;
            };
            Params: {
                encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
            };
            PendingChain: {
                encode(message: _9.PendingChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.PendingChain;
                fromPartial(object: Partial<_9.PendingChain>): _9.PendingChain;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
            };
            GenesisState_Chain: {
                encode(message: _8.GenesisState_Chain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.GenesisState_Chain;
                fromPartial(object: Partial<_8.GenesisState_Chain>): _8.GenesisState_Chain;
            };
            PollFailed: {
                encode(message: _7.PollFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.PollFailed;
                fromPartial(object: Partial<_7.PollFailed>): _7.PollFailed;
            };
            PollExpired: {
                encode(message: _7.PollExpired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.PollExpired;
                fromPartial(object: Partial<_7.PollExpired>): _7.PollExpired;
            };
            PollCompleted: {
                encode(message: _7.PollCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.PollCompleted;
                fromPartial(object: Partial<_7.PollCompleted>): _7.PollCompleted;
            };
            NoEventsConfirmed: {
                encode(message: _7.NoEventsConfirmed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.NoEventsConfirmed;
                fromPartial(object: Partial<_7.NoEventsConfirmed>): _7.NoEventsConfirmed;
            };
            ConfirmKeyTransferStarted: {
                encode(message: _7.ConfirmKeyTransferStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ConfirmKeyTransferStarted;
                fromPartial(object: Partial<_7.ConfirmKeyTransferStarted>): _7.ConfirmKeyTransferStarted;
            };
            ConfirmGatewayTxStarted: {
                encode(message: _7.ConfirmGatewayTxStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ConfirmGatewayTxStarted;
                fromPartial(object: Partial<_7.ConfirmGatewayTxStarted>): _7.ConfirmGatewayTxStarted;
            };
            ConfirmDepositStarted: {
                encode(message: _7.ConfirmDepositStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ConfirmDepositStarted;
                fromPartial(object: Partial<_7.ConfirmDepositStarted>): _7.ConfirmDepositStarted;
            };
            ConfirmTokenStarted: {
                encode(message: _7.ConfirmTokenStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ConfirmTokenStarted;
                fromPartial(object: Partial<_7.ConfirmTokenStarted>): _7.ConfirmTokenStarted;
            };
            ChainAdded: {
                encode(message: _7.ChainAdded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ChainAdded;
                fromPartial(object: Partial<_7.ChainAdded>): _7.ChainAdded;
            };
            CommandBatchSigned: {
                encode(message: _7.CommandBatchSigned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.CommandBatchSigned;
                fromPartial(object: Partial<_7.CommandBatchSigned>): _7.CommandBatchSigned;
            };
            CommandBatchAborted: {
                encode(message: _7.CommandBatchAborted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.CommandBatchAborted;
                fromPartial(object: Partial<_7.CommandBatchAborted>): _7.CommandBatchAborted;
            };
            EVMEventConfirmed: {
                encode(message: _7.EVMEventConfirmed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EVMEventConfirmed;
                fromPartial(object: Partial<_7.EVMEventConfirmed>): _7.EVMEventConfirmed;
            };
            EVMEventCompleted: {
                encode(message: _7.EVMEventCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EVMEventCompleted;
                fromPartial(object: Partial<_7.EVMEventCompleted>): _7.EVMEventCompleted;
            };
            EVMEventFailed: {
                encode(message: _7.EVMEventFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EVMEventFailed;
                fromPartial(object: Partial<_7.EVMEventFailed>): _7.EVMEventFailed;
            };
            EVMEventRetryFailed: {
                encode(message: _7.EVMEventRetryFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.EVMEventRetryFailed;
                fromPartial(object: Partial<_7.EVMEventRetryFailed>): _7.EVMEventRetryFailed;
            };
            ContractCallApproved: {
                encode(message: _7.ContractCallApproved, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ContractCallApproved;
                fromPartial(object: Partial<_7.ContractCallApproved>): _7.ContractCallApproved;
            };
            ContractCallFailed: {
                encode(message: _7.ContractCallFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ContractCallFailed;
                fromPartial(object: Partial<_7.ContractCallFailed>): _7.ContractCallFailed;
            };
            ContractCallWithMintApproved: {
                encode(message: _7.ContractCallWithMintApproved, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ContractCallWithMintApproved;
                fromPartial(object: Partial<_7.ContractCallWithMintApproved>): _7.ContractCallWithMintApproved;
            };
            TokenSent: {
                encode(message: _7.TokenSent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.TokenSent;
                fromPartial(object: Partial<_7.TokenSent>): _7.TokenSent;
            };
            MintCommand: {
                encode(message: _7.MintCommand, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MintCommand;
                fromPartial(object: Partial<_7.MintCommand>): _7.MintCommand;
            };
            BurnCommand: {
                encode(message: _7.BurnCommand, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.BurnCommand;
                fromPartial(object: Partial<_7.BurnCommand>): _7.BurnCommand;
            };
        };
    }
    namespace multisig {
        namespace exported {
            const v1beta1: {
                multisigStateFromJSON(object: any): _14.MultisigState;
                multisigStateToJSON(object: _14.MultisigState): string;
                keyStateFromJSON(object: any): _14.KeyState;
                keyStateToJSON(object: _14.KeyState): string;
                MultisigState: typeof _14.MultisigState;
                MultisigStateSDKType: typeof _14.MultisigState;
                KeyState: typeof _14.KeyState;
                KeyStateSDKType: typeof _14.KeyState;
            };
        }
        const v1beta1: {
            Key_PubKeysEntry: {
                encode(message: _21.Key_PubKeysEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Key_PubKeysEntry;
                fromPartial(object: Partial<_21.Key_PubKeysEntry>): _21.Key_PubKeysEntry;
            };
            Key: {
                encode(message: _21.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Key;
                fromPartial(object: Partial<_21.Key>): _21.Key;
            };
            KeygenSession_IsPubKeyReceivedEntry: {
                encode(message: _21.KeygenSession_IsPubKeyReceivedEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.KeygenSession_IsPubKeyReceivedEntry;
                fromPartial(object: Partial<_21.KeygenSession_IsPubKeyReceivedEntry>): _21.KeygenSession_IsPubKeyReceivedEntry;
            };
            KeygenSession: {
                encode(message: _21.KeygenSession, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.KeygenSession;
                fromPartial(object: Partial<_21.KeygenSession>): _21.KeygenSession;
            };
            MultiSig_SigsEntry: {
                encode(message: _21.MultiSig_SigsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.MultiSig_SigsEntry;
                fromPartial(object: Partial<_21.MultiSig_SigsEntry>): _21.MultiSig_SigsEntry;
            };
            MultiSig: {
                encode(message: _21.MultiSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.MultiSig;
                fromPartial(object: Partial<_21.MultiSig>): _21.MultiSig;
            };
            SigningSession: {
                encode(message: _21.SigningSession, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.SigningSession;
                fromPartial(object: Partial<_21.SigningSession>): _21.SigningSession;
            };
            KeyEpoch: {
                encode(message: _21.KeyEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.KeyEpoch;
                fromPartial(object: Partial<_21.KeyEpoch>): _21.KeyEpoch;
            };
            StartKeygenRequest: {
                encode(message: _20.StartKeygenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.StartKeygenRequest;
                fromPartial(object: Partial<_20.StartKeygenRequest>): _20.StartKeygenRequest;
            };
            StartKeygenResponse: {
                encode(_: _20.StartKeygenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.StartKeygenResponse;
                fromPartial(_: Partial<_20.StartKeygenResponse>): _20.StartKeygenResponse;
            };
            SubmitPubKeyRequest: {
                encode(message: _20.SubmitPubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.SubmitPubKeyRequest;
                fromPartial(object: Partial<_20.SubmitPubKeyRequest>): _20.SubmitPubKeyRequest;
            };
            SubmitPubKeyResponse: {
                encode(_: _20.SubmitPubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.SubmitPubKeyResponse;
                fromPartial(_: Partial<_20.SubmitPubKeyResponse>): _20.SubmitPubKeyResponse;
            };
            SubmitSignatureRequest: {
                encode(message: _20.SubmitSignatureRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.SubmitSignatureRequest;
                fromPartial(object: Partial<_20.SubmitSignatureRequest>): _20.SubmitSignatureRequest;
            };
            SubmitSignatureResponse: {
                encode(_: _20.SubmitSignatureResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.SubmitSignatureResponse;
                fromPartial(_: Partial<_20.SubmitSignatureResponse>): _20.SubmitSignatureResponse;
            };
            RotateKeyRequest: {
                encode(message: _20.RotateKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.RotateKeyRequest;
                fromPartial(object: Partial<_20.RotateKeyRequest>): _20.RotateKeyRequest;
            };
            RotateKeyResponse: {
                encode(_: _20.RotateKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.RotateKeyResponse;
                fromPartial(_: Partial<_20.RotateKeyResponse>): _20.RotateKeyResponse;
            };
            KeygenOptOutRequest: {
                encode(message: _20.KeygenOptOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.KeygenOptOutRequest;
                fromPartial(object: Partial<_20.KeygenOptOutRequest>): _20.KeygenOptOutRequest;
            };
            KeygenOptOutResponse: {
                encode(_: _20.KeygenOptOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.KeygenOptOutResponse;
                fromPartial(_: Partial<_20.KeygenOptOutResponse>): _20.KeygenOptOutResponse;
            };
            KeygenOptInRequest: {
                encode(message: _20.KeygenOptInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.KeygenOptInRequest;
                fromPartial(object: Partial<_20.KeygenOptInRequest>): _20.KeygenOptInRequest;
            };
            KeygenOptInResponse: {
                encode(_: _20.KeygenOptInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.KeygenOptInResponse;
                fromPartial(_: Partial<_20.KeygenOptInResponse>): _20.KeygenOptInResponse;
            };
            KeyIDRequest: {
                encode(message: _18.KeyIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.KeyIDRequest;
                fromPartial(object: Partial<_18.KeyIDRequest>): _18.KeyIDRequest;
            };
            KeyIDResponse: {
                encode(message: _18.KeyIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.KeyIDResponse;
                fromPartial(object: Partial<_18.KeyIDResponse>): _18.KeyIDResponse;
            };
            NextKeyIDRequest: {
                encode(message: _18.NextKeyIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.NextKeyIDRequest;
                fromPartial(object: Partial<_18.NextKeyIDRequest>): _18.NextKeyIDRequest;
            };
            NextKeyIDResponse: {
                encode(message: _18.NextKeyIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.NextKeyIDResponse;
                fromPartial(object: Partial<_18.NextKeyIDResponse>): _18.NextKeyIDResponse;
            };
            KeyRequest: {
                encode(message: _18.KeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.KeyRequest;
                fromPartial(object: Partial<_18.KeyRequest>): _18.KeyRequest;
            };
            KeygenParticipant: {
                encode(message: _18.KeygenParticipant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.KeygenParticipant;
                fromPartial(object: Partial<_18.KeygenParticipant>): _18.KeygenParticipant;
            };
            KeyResponse: {
                encode(message: _18.KeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.KeyResponse;
                fromPartial(object: Partial<_18.KeyResponse>): _18.KeyResponse;
            };
            KeygenSessionRequest: {
                encode(message: _18.KeygenSessionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.KeygenSessionRequest;
                fromPartial(object: Partial<_18.KeygenSessionRequest>): _18.KeygenSessionRequest;
            };
            KeygenSessionResponse: {
                encode(message: _18.KeygenSessionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.KeygenSessionResponse;
                fromPartial(object: Partial<_18.KeygenSessionResponse>): _18.KeygenSessionResponse;
            };
            Params: {
                encode(message: _17.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Params;
                fromPartial(object: Partial<_17.Params>): _17.Params;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
            };
            KeygenStarted: {
                encode(message: _15.KeygenStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.KeygenStarted;
                fromPartial(object: Partial<_15.KeygenStarted>): _15.KeygenStarted;
            };
            KeygenCompleted: {
                encode(message: _15.KeygenCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.KeygenCompleted;
                fromPartial(object: Partial<_15.KeygenCompleted>): _15.KeygenCompleted;
            };
            KeygenExpired: {
                encode(message: _15.KeygenExpired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.KeygenExpired;
                fromPartial(object: Partial<_15.KeygenExpired>): _15.KeygenExpired;
            };
            PubKeySubmitted: {
                encode(message: _15.PubKeySubmitted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.PubKeySubmitted;
                fromPartial(object: Partial<_15.PubKeySubmitted>): _15.PubKeySubmitted;
            };
            SigningStarted_PubKeysEntry: {
                encode(message: _15.SigningStarted_PubKeysEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.SigningStarted_PubKeysEntry;
                fromPartial(object: Partial<_15.SigningStarted_PubKeysEntry>): _15.SigningStarted_PubKeysEntry;
            };
            SigningStarted: {
                encode(message: _15.SigningStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.SigningStarted;
                fromPartial(object: Partial<_15.SigningStarted>): _15.SigningStarted;
            };
            SigningCompleted: {
                encode(message: _15.SigningCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.SigningCompleted;
                fromPartial(object: Partial<_15.SigningCompleted>): _15.SigningCompleted;
            };
            SigningExpired: {
                encode(message: _15.SigningExpired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.SigningExpired;
                fromPartial(object: Partial<_15.SigningExpired>): _15.SigningExpired;
            };
            SignatureSubmitted: {
                encode(message: _15.SignatureSubmitted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.SignatureSubmitted;
                fromPartial(object: Partial<_15.SignatureSubmitted>): _15.SignatureSubmitted;
            };
            KeyAssigned: {
                encode(message: _15.KeyAssigned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.KeyAssigned;
                fromPartial(object: Partial<_15.KeyAssigned>): _15.KeyAssigned;
            };
            KeyRotated: {
                encode(message: _15.KeyRotated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.KeyRotated;
                fromPartial(object: Partial<_15.KeyRotated>): _15.KeyRotated;
            };
            KeygenOptOut: {
                encode(message: _15.KeygenOptOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.KeygenOptOut;
                fromPartial(object: Partial<_15.KeygenOptOut>): _15.KeygenOptOut;
            };
            KeygenOptIn: {
                encode(message: _15.KeygenOptIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.KeygenOptIn;
                fromPartial(object: Partial<_15.KeygenOptIn>): _15.KeygenOptIn;
            };
        };
    }
    namespace nexus {
        namespace exported {
            const v1beta1: {
                transferStateFromJSON(object: any): _22.TransferState;
                transferStateToJSON(object: _22.TransferState): string;
                transferDirectionFromJSON(object: any): _22.TransferDirection;
                transferDirectionToJSON(object: _22.TransferDirection): string;
                generalMessage_StatusFromJSON(object: any): _22.GeneralMessage_Status;
                generalMessage_StatusToJSON(object: _22.GeneralMessage_Status): string;
                TransferState: typeof _22.TransferState;
                TransferStateSDKType: typeof _22.TransferState;
                TransferDirection: typeof _22.TransferDirection;
                TransferDirectionSDKType: typeof _22.TransferDirection;
                GeneralMessage_Status: typeof _22.GeneralMessage_Status;
                GeneralMessage_StatusSDKType: typeof _22.GeneralMessage_Status;
                Chain: {
                    encode(message: _22.Chain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.Chain;
                    fromPartial(object: Partial<_22.Chain>): _22.Chain;
                };
                CrossChainAddress: {
                    encode(message: _22.CrossChainAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.CrossChainAddress;
                    fromPartial(object: Partial<_22.CrossChainAddress>): _22.CrossChainAddress;
                };
                CrossChainTransfer: {
                    encode(message: _22.CrossChainTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.CrossChainTransfer;
                    fromPartial(object: Partial<_22.CrossChainTransfer>): _22.CrossChainTransfer;
                };
                TransferFee: {
                    encode(message: _22.TransferFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.TransferFee;
                    fromPartial(object: Partial<_22.TransferFee>): _22.TransferFee;
                };
                FeeInfo: {
                    encode(message: _22.FeeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.FeeInfo;
                    fromPartial(object: Partial<_22.FeeInfo>): _22.FeeInfo;
                };
                Asset: {
                    encode(message: _22.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.Asset;
                    fromPartial(object: Partial<_22.Asset>): _22.Asset;
                };
                GeneralMessage: {
                    encode(message: _22.GeneralMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _22.GeneralMessage;
                    fromPartial(object: Partial<_22.GeneralMessage>): _22.GeneralMessage;
                };
            };
        }
        const v1beta1: {
            MaintainerState: {
                encode(message: _29.MaintainerState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.MaintainerState;
                fromPartial(object: Partial<_29.MaintainerState>): _29.MaintainerState;
            };
            ChainState: {
                encode(message: _29.ChainState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.ChainState;
                fromPartial(object: Partial<_29.ChainState>): _29.ChainState;
            };
            LinkedAddresses: {
                encode(message: _29.LinkedAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.LinkedAddresses;
                fromPartial(object: Partial<_29.LinkedAddresses>): _29.LinkedAddresses;
            };
            RateLimit: {
                encode(message: _29.RateLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.RateLimit;
                fromPartial(object: Partial<_29.RateLimit>): _29.RateLimit;
            };
            TransferEpoch: {
                encode(message: _29.TransferEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.TransferEpoch;
                fromPartial(object: Partial<_29.TransferEpoch>): _29.TransferEpoch;
            };
            RegisterChainMaintainerRequest: {
                encode(message: _28.RegisterChainMaintainerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.RegisterChainMaintainerRequest;
                fromPartial(object: Partial<_28.RegisterChainMaintainerRequest>): _28.RegisterChainMaintainerRequest;
            };
            RegisterChainMaintainerResponse: {
                encode(_: _28.RegisterChainMaintainerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.RegisterChainMaintainerResponse;
                fromPartial(_: Partial<_28.RegisterChainMaintainerResponse>): _28.RegisterChainMaintainerResponse;
            };
            DeregisterChainMaintainerRequest: {
                encode(message: _28.DeregisterChainMaintainerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.DeregisterChainMaintainerRequest;
                fromPartial(object: Partial<_28.DeregisterChainMaintainerRequest>): _28.DeregisterChainMaintainerRequest;
            };
            DeregisterChainMaintainerResponse: {
                encode(_: _28.DeregisterChainMaintainerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.DeregisterChainMaintainerResponse;
                fromPartial(_: Partial<_28.DeregisterChainMaintainerResponse>): _28.DeregisterChainMaintainerResponse;
            };
            ActivateChainRequest: {
                encode(message: _28.ActivateChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.ActivateChainRequest;
                fromPartial(object: Partial<_28.ActivateChainRequest>): _28.ActivateChainRequest;
            };
            ActivateChainResponse: {
                encode(_: _28.ActivateChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.ActivateChainResponse;
                fromPartial(_: Partial<_28.ActivateChainResponse>): _28.ActivateChainResponse;
            };
            DeactivateChainRequest: {
                encode(message: _28.DeactivateChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.DeactivateChainRequest;
                fromPartial(object: Partial<_28.DeactivateChainRequest>): _28.DeactivateChainRequest;
            };
            DeactivateChainResponse: {
                encode(_: _28.DeactivateChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.DeactivateChainResponse;
                fromPartial(_: Partial<_28.DeactivateChainResponse>): _28.DeactivateChainResponse;
            };
            RegisterAssetFeeRequest: {
                encode(message: _28.RegisterAssetFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.RegisterAssetFeeRequest;
                fromPartial(object: Partial<_28.RegisterAssetFeeRequest>): _28.RegisterAssetFeeRequest;
            };
            RegisterAssetFeeResponse: {
                encode(_: _28.RegisterAssetFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.RegisterAssetFeeResponse;
                fromPartial(_: Partial<_28.RegisterAssetFeeResponse>): _28.RegisterAssetFeeResponse;
            };
            SetTransferRateLimitRequest: {
                encode(message: _28.SetTransferRateLimitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.SetTransferRateLimitRequest;
                fromPartial(object: Partial<_28.SetTransferRateLimitRequest>): _28.SetTransferRateLimitRequest;
            };
            SetTransferRateLimitResponse: {
                encode(_: _28.SetTransferRateLimitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.SetTransferRateLimitResponse;
                fromPartial(_: Partial<_28.SetTransferRateLimitResponse>): _28.SetTransferRateLimitResponse;
            };
            chainStatusFromJSON(object: any): _26.ChainStatus;
            chainStatusToJSON(object: _26.ChainStatus): string;
            ChainStatus: typeof _26.ChainStatus;
            ChainStatusSDKType: typeof _26.ChainStatus;
            ChainMaintainersRequest: {
                encode(message: _26.ChainMaintainersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.ChainMaintainersRequest;
                fromPartial(object: Partial<_26.ChainMaintainersRequest>): _26.ChainMaintainersRequest;
            };
            ChainMaintainersResponse: {
                encode(message: _26.ChainMaintainersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.ChainMaintainersResponse;
                fromPartial(object: Partial<_26.ChainMaintainersResponse>): _26.ChainMaintainersResponse;
            };
            LatestDepositAddressRequest: {
                encode(message: _26.LatestDepositAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.LatestDepositAddressRequest;
                fromPartial(object: Partial<_26.LatestDepositAddressRequest>): _26.LatestDepositAddressRequest;
            };
            LatestDepositAddressResponse: {
                encode(message: _26.LatestDepositAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.LatestDepositAddressResponse;
                fromPartial(object: Partial<_26.LatestDepositAddressResponse>): _26.LatestDepositAddressResponse;
            };
            TransfersForChainRequest: {
                encode(message: _26.TransfersForChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.TransfersForChainRequest;
                fromPartial(object: Partial<_26.TransfersForChainRequest>): _26.TransfersForChainRequest;
            };
            TransfersForChainResponse: {
                encode(message: _26.TransfersForChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.TransfersForChainResponse;
                fromPartial(object: Partial<_26.TransfersForChainResponse>): _26.TransfersForChainResponse;
            };
            FeeInfoRequest: {
                encode(message: _26.FeeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.FeeInfoRequest;
                fromPartial(object: Partial<_26.FeeInfoRequest>): _26.FeeInfoRequest;
            };
            FeeInfoResponse: {
                encode(message: _26.FeeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.FeeInfoResponse;
                fromPartial(object: Partial<_26.FeeInfoResponse>): _26.FeeInfoResponse;
            };
            TransferFeeRequest: {
                encode(message: _26.TransferFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.TransferFeeRequest;
                fromPartial(object: Partial<_26.TransferFeeRequest>): _26.TransferFeeRequest;
            };
            TransferFeeResponse: {
                encode(message: _26.TransferFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.TransferFeeResponse;
                fromPartial(object: Partial<_26.TransferFeeResponse>): _26.TransferFeeResponse;
            };
            ChainsRequest: {
                encode(message: _26.ChainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.ChainsRequest;
                fromPartial(object: Partial<_26.ChainsRequest>): _26.ChainsRequest;
            };
            ChainsResponse: {
                encode(message: _26.ChainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.ChainsResponse;
                fromPartial(object: Partial<_26.ChainsResponse>): _26.ChainsResponse;
            };
            AssetsRequest: {
                encode(message: _26.AssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.AssetsRequest;
                fromPartial(object: Partial<_26.AssetsRequest>): _26.AssetsRequest;
            };
            AssetsResponse: {
                encode(message: _26.AssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.AssetsResponse;
                fromPartial(object: Partial<_26.AssetsResponse>): _26.AssetsResponse;
            };
            ChainStateRequest: {
                encode(message: _26.ChainStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.ChainStateRequest;
                fromPartial(object: Partial<_26.ChainStateRequest>): _26.ChainStateRequest;
            };
            ChainStateResponse: {
                encode(message: _26.ChainStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.ChainStateResponse;
                fromPartial(object: Partial<_26.ChainStateResponse>): _26.ChainStateResponse;
            };
            ChainsByAssetRequest: {
                encode(message: _26.ChainsByAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.ChainsByAssetRequest;
                fromPartial(object: Partial<_26.ChainsByAssetRequest>): _26.ChainsByAssetRequest;
            };
            ChainsByAssetResponse: {
                encode(message: _26.ChainsByAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.ChainsByAssetResponse;
                fromPartial(object: Partial<_26.ChainsByAssetResponse>): _26.ChainsByAssetResponse;
            };
            RecipientAddressRequest: {
                encode(message: _26.RecipientAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.RecipientAddressRequest;
                fromPartial(object: Partial<_26.RecipientAddressRequest>): _26.RecipientAddressRequest;
            };
            RecipientAddressResponse: {
                encode(message: _26.RecipientAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.RecipientAddressResponse;
                fromPartial(object: Partial<_26.RecipientAddressResponse>): _26.RecipientAddressResponse;
            };
            TransferRateLimitRequest: {
                encode(message: _26.TransferRateLimitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.TransferRateLimitRequest;
                fromPartial(object: Partial<_26.TransferRateLimitRequest>): _26.TransferRateLimitRequest;
            };
            TransferRateLimitResponse: {
                encode(message: _26.TransferRateLimitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.TransferRateLimitResponse;
                fromPartial(object: Partial<_26.TransferRateLimitResponse>): _26.TransferRateLimitResponse;
            };
            TransferRateLimit: {
                encode(message: _26.TransferRateLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.TransferRateLimit;
                fromPartial(object: Partial<_26.TransferRateLimit>): _26.TransferRateLimit;
            };
            MessageRequest: {
                encode(message: _26.MessageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.MessageRequest;
                fromPartial(object: Partial<_26.MessageRequest>): _26.MessageRequest;
            };
            MessageResponse: {
                encode(message: _26.MessageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.MessageResponse;
                fromPartial(object: Partial<_26.MessageResponse>): _26.MessageResponse;
            };
            Params: {
                encode(message: _25.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.Params;
                fromPartial(object: Partial<_25.Params>): _25.Params;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
            };
            FeeDeducted: {
                encode(message: _23.FeeDeducted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.FeeDeducted;
                fromPartial(object: Partial<_23.FeeDeducted>): _23.FeeDeducted;
            };
            InsufficientFee: {
                encode(message: _23.InsufficientFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.InsufficientFee;
                fromPartial(object: Partial<_23.InsufficientFee>): _23.InsufficientFee;
            };
            RateLimitUpdated: {
                encode(message: _23.RateLimitUpdated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.RateLimitUpdated;
                fromPartial(object: Partial<_23.RateLimitUpdated>): _23.RateLimitUpdated;
            };
            MessageReceived: {
                encode(message: _23.MessageReceived, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.MessageReceived;
                fromPartial(object: Partial<_23.MessageReceived>): _23.MessageReceived;
            };
            MessageProcessing: {
                encode(message: _23.MessageProcessing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.MessageProcessing;
                fromPartial(object: Partial<_23.MessageProcessing>): _23.MessageProcessing;
            };
            MessageExecuted: {
                encode(message: _23.MessageExecuted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.MessageExecuted;
                fromPartial(object: Partial<_23.MessageExecuted>): _23.MessageExecuted;
            };
            MessageFailed: {
                encode(message: _23.MessageFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.MessageFailed;
                fromPartial(object: Partial<_23.MessageFailed>): _23.MessageFailed;
            };
        };
    }
    namespace permission {
        namespace exported {
            const v1beta1: {
                roleFromJSON(object: any): _30.Role;
                roleToJSON(object: _30.Role): string;
                Role: typeof _30.Role;
                RoleSDKType: typeof _30.Role;
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                governanceKey(request?: _33.QueryGovernanceKeyRequest): Promise<_33.QueryGovernanceKeyResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerController(value: axelar.permission.v1beta1.RegisterControllerRequest): {
                        typeUrl: string;
                        value: any;
                    };
                    deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    registerController(value: axelar.permission.v1beta1.RegisterControllerRequest): {
                        typeUrl: string;
                        value: axelar.permission.v1beta1.RegisterControllerRequest;
                    };
                    deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: axelar.permission.v1beta1.DeregisterControllerRequest;
                    };
                    updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest;
                    };
                };
                fromJSON: {
                    registerController(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    deregisterController(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGovernanceKey(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    registerController(value: axelar.permission.v1beta1.RegisterControllerRequest): {
                        typeUrl: string;
                        value: any;
                    };
                    deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: any;
                    };
                };
            };
            AminoConverter: {
                "/axelar.permission.v1beta1.RegisterControllerRequest": {
                    aminoType: string;
                    toAmino: ({ sender, controller }: _35.RegisterControllerRequest) => {
                        sender: Uint8Array;
                        controller: Uint8Array;
                    };
                    fromAmino: ({ sender, controller }: {
                        sender: Uint8Array;
                        controller: Uint8Array;
                    }) => _35.RegisterControllerRequest;
                };
                "/axelar.permission.v1beta1.DeregisterControllerRequest": {
                    aminoType: string;
                    toAmino: ({ sender, controller }: _35.DeregisterControllerRequest) => {
                        sender: Uint8Array;
                        controller: Uint8Array;
                    };
                    fromAmino: ({ sender, controller }: {
                        sender: Uint8Array;
                        controller: Uint8Array;
                    }) => _35.DeregisterControllerRequest;
                };
                "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
                    aminoType: string;
                    toAmino: ({ sender, governanceKey }: _35.UpdateGovernanceKeyRequest) => {
                        sender: Uint8Array;
                        governance_key: {
                            threshold: number;
                            public_keys: {
                                type_url: string;
                                value: Uint8Array;
                            }[];
                        };
                    };
                    fromAmino: ({ sender, governance_key }: {
                        sender: Uint8Array;
                        governance_key: {
                            threshold: number;
                            public_keys: {
                                type_url: string;
                                value: Uint8Array;
                            }[];
                        };
                    }) => _35.UpdateGovernanceKeyRequest;
                };
            };
            GovAccount: {
                encode(message: _36.GovAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.GovAccount;
                fromPartial(object: Partial<_36.GovAccount>): _36.GovAccount;
            };
            UpdateGovernanceKeyRequest: {
                encode(message: _35.UpdateGovernanceKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.UpdateGovernanceKeyRequest;
                fromPartial(object: Partial<_35.UpdateGovernanceKeyRequest>): _35.UpdateGovernanceKeyRequest;
            };
            UpdateGovernanceKeyResponse: {
                encode(_: _35.UpdateGovernanceKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.UpdateGovernanceKeyResponse;
                fromPartial(_: Partial<_35.UpdateGovernanceKeyResponse>): _35.UpdateGovernanceKeyResponse;
            };
            RegisterControllerRequest: {
                encode(message: _35.RegisterControllerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.RegisterControllerRequest;
                fromPartial(object: Partial<_35.RegisterControllerRequest>): _35.RegisterControllerRequest;
            };
            RegisterControllerResponse: {
                encode(_: _35.RegisterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.RegisterControllerResponse;
                fromPartial(_: Partial<_35.RegisterControllerResponse>): _35.RegisterControllerResponse;
            };
            DeregisterControllerRequest: {
                encode(message: _35.DeregisterControllerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.DeregisterControllerRequest;
                fromPartial(object: Partial<_35.DeregisterControllerRequest>): _35.DeregisterControllerRequest;
            };
            DeregisterControllerResponse: {
                encode(_: _35.DeregisterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.DeregisterControllerResponse;
                fromPartial(_: Partial<_35.DeregisterControllerResponse>): _35.DeregisterControllerResponse;
            };
            QueryGovernanceKeyRequest: {
                encode(_: _33.QueryGovernanceKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.QueryGovernanceKeyRequest;
                fromPartial(_: Partial<_33.QueryGovernanceKeyRequest>): _33.QueryGovernanceKeyRequest;
            };
            QueryGovernanceKeyResponse: {
                encode(message: _33.QueryGovernanceKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.QueryGovernanceKeyResponse;
                fromPartial(object: Partial<_33.QueryGovernanceKeyResponse>): _33.QueryGovernanceKeyResponse;
            };
            Params: {
                encode(_: _32.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.Params;
                fromPartial(_: Partial<_32.Params>): _32.Params;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.GenesisState;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
        };
    }
    namespace reward {
        const v1beta1: {
            Pool: {
                encode(message: _42.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.Pool;
                fromPartial(object: Partial<_42.Pool>): _42.Pool;
            };
            Pool_Reward: {
                encode(message: _42.Pool_Reward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.Pool_Reward;
                fromPartial(object: Partial<_42.Pool_Reward>): _42.Pool_Reward;
            };
            Refund: {
                encode(message: _42.Refund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.Refund;
                fromPartial(object: Partial<_42.Refund>): _42.Refund;
            };
            RefundMsgRequest: {
                encode(message: _41.RefundMsgRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.RefundMsgRequest;
                fromPartial(object: Partial<_41.RefundMsgRequest>): _41.RefundMsgRequest;
            };
            RefundMsgResponse: {
                encode(message: _41.RefundMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.RefundMsgResponse;
                fromPartial(object: Partial<_41.RefundMsgResponse>): _41.RefundMsgResponse;
            };
            InflationRateRequest: {
                encode(_: _39.InflationRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _39.InflationRateRequest;
                fromPartial(_: Partial<_39.InflationRateRequest>): _39.InflationRateRequest;
            };
            InflationRateResponse: {
                encode(message: _39.InflationRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.InflationRateResponse;
                fromPartial(object: Partial<_39.InflationRateResponse>): _39.InflationRateResponse;
            };
            ParamsRequest: {
                encode(_: _39.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _39.ParamsRequest;
                fromPartial(_: Partial<_39.ParamsRequest>): _39.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _39.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.ParamsResponse;
                fromPartial(object: Partial<_39.ParamsResponse>): _39.ParamsResponse;
            };
            Params: {
                encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.Params;
                fromPartial(object: Partial<_38.Params>): _38.Params;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
            };
        };
    }
    namespace snapshot {
        namespace exported {
            const v1beta1: {
                Participant: {
                    encode(message: _43.Participant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Participant;
                    fromPartial(object: Partial<_43.Participant>): _43.Participant;
                };
                Snapshot_ParticipantsEntry: {
                    encode(message: _43.Snapshot_ParticipantsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Snapshot_ParticipantsEntry;
                    fromPartial(object: Partial<_43.Snapshot_ParticipantsEntry>): _43.Snapshot_ParticipantsEntry;
                };
                Snapshot: {
                    encode(message: _43.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _43.Snapshot;
                    fromPartial(object: Partial<_43.Snapshot>): _43.Snapshot;
                };
            };
        }
        const v1beta1: {
            ProxiedValidator: {
                encode(message: _49.ProxiedValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.ProxiedValidator;
                fromPartial(object: Partial<_49.ProxiedValidator>): _49.ProxiedValidator;
            };
            RegisterProxyRequest: {
                encode(message: _48.RegisterProxyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.RegisterProxyRequest;
                fromPartial(object: Partial<_48.RegisterProxyRequest>): _48.RegisterProxyRequest;
            };
            RegisterProxyResponse: {
                encode(_: _48.RegisterProxyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.RegisterProxyResponse;
                fromPartial(_: Partial<_48.RegisterProxyResponse>): _48.RegisterProxyResponse;
            };
            DeactivateProxyRequest: {
                encode(message: _48.DeactivateProxyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.DeactivateProxyRequest;
                fromPartial(object: Partial<_48.DeactivateProxyRequest>): _48.DeactivateProxyRequest;
            };
            DeactivateProxyResponse: {
                encode(_: _48.DeactivateProxyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.DeactivateProxyResponse;
                fromPartial(_: Partial<_48.DeactivateProxyResponse>): _48.DeactivateProxyResponse;
            };
            QueryValidatorsResponse: {
                encode(message: _46.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.QueryValidatorsResponse;
                fromPartial(object: Partial<_46.QueryValidatorsResponse>): _46.QueryValidatorsResponse;
            };
            QueryValidatorsResponse_TssIllegibilityInfo: {
                encode(message: _46.QueryValidatorsResponse_TssIllegibilityInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.QueryValidatorsResponse_TssIllegibilityInfo;
                fromPartial(object: Partial<_46.QueryValidatorsResponse_TssIllegibilityInfo>): _46.QueryValidatorsResponse_TssIllegibilityInfo;
            };
            QueryValidatorsResponse_Validator: {
                encode(message: _46.QueryValidatorsResponse_Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.QueryValidatorsResponse_Validator;
                fromPartial(object: Partial<_46.QueryValidatorsResponse_Validator>): _46.QueryValidatorsResponse_Validator;
            };
            Params: {
                encode(message: _45.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.Params;
                fromPartial(object: Partial<_45.Params>): _45.Params;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
            };
        };
    }
    namespace tss {
        namespace exported {
            const v1beta1: {
                keyRoleFromJSON(object: any): _50.KeyRole;
                keyRoleToJSON(object: _50.KeyRole): string;
                keyTypeFromJSON(object: any): _50.KeyType;
                keyTypeToJSON(object: _50.KeyType): string;
                keyShareDistributionPolicyFromJSON(object: any): _50.KeyShareDistributionPolicy;
                keyShareDistributionPolicyToJSON(object: _50.KeyShareDistributionPolicy): string;
                KeyRole: typeof _50.KeyRole;
                KeyRoleSDKType: typeof _50.KeyRole;
                KeyType: typeof _50.KeyType;
                KeyTypeSDKType: typeof _50.KeyType;
                KeyShareDistributionPolicy: typeof _50.KeyShareDistributionPolicy;
                KeyShareDistributionPolicySDKType: typeof _50.KeyShareDistributionPolicy;
                KeyRequirement: {
                    encode(message: _50.KeyRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.KeyRequirement;
                    fromPartial(object: Partial<_50.KeyRequirement>): _50.KeyRequirement;
                };
                SigKeyPair: {
                    encode(message: _50.SigKeyPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _50.SigKeyPair;
                    fromPartial(object: Partial<_50.SigKeyPair>): _50.SigKeyPair;
                };
            };
        }
        namespace tofnd {
            const v1beta1: {
                recoverResponse_ResponseFromJSON(object: any): _53.RecoverResponse_Response;
                recoverResponse_ResponseToJSON(object: _53.RecoverResponse_Response): string;
                messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): _53.MessageOut_CriminalList_Criminal_CrimeType;
                messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: _53.MessageOut_CriminalList_Criminal_CrimeType): string;
                RecoverResponse_Response: typeof _53.RecoverResponse_Response;
                RecoverResponse_ResponseSDKType: typeof _53.RecoverResponse_Response;
                MessageOut_CriminalList_Criminal_CrimeType: typeof _53.MessageOut_CriminalList_Criminal_CrimeType;
                MessageOut_CriminalList_Criminal_CrimeTypeSDKType: typeof _53.MessageOut_CriminalList_Criminal_CrimeType;
                RecoverRequest: {
                    encode(message: _53.RecoverRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.RecoverRequest;
                    fromPartial(object: Partial<_53.RecoverRequest>): _53.RecoverRequest;
                };
                RecoverResponse: {
                    encode(message: _53.RecoverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.RecoverResponse;
                    fromPartial(object: Partial<_53.RecoverResponse>): _53.RecoverResponse;
                };
                KeygenOutput: {
                    encode(message: _53.KeygenOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.KeygenOutput;
                    fromPartial(object: Partial<_53.KeygenOutput>): _53.KeygenOutput;
                };
                MessageIn: {
                    encode(message: _53.MessageIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.MessageIn;
                    fromPartial(object: Partial<_53.MessageIn>): _53.MessageIn;
                };
                MessageOut: {
                    encode(message: _53.MessageOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.MessageOut;
                    fromPartial(object: Partial<_53.MessageOut>): _53.MessageOut;
                };
                MessageOut_KeygenResult: {
                    encode(message: _53.MessageOut_KeygenResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.MessageOut_KeygenResult;
                    fromPartial(object: Partial<_53.MessageOut_KeygenResult>): _53.MessageOut_KeygenResult;
                };
                MessageOut_SignResult: {
                    encode(message: _53.MessageOut_SignResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.MessageOut_SignResult;
                    fromPartial(object: Partial<_53.MessageOut_SignResult>): _53.MessageOut_SignResult;
                };
                MessageOut_CriminalList: {
                    encode(message: _53.MessageOut_CriminalList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.MessageOut_CriminalList;
                    fromPartial(object: Partial<_53.MessageOut_CriminalList>): _53.MessageOut_CriminalList;
                };
                MessageOut_CriminalList_Criminal: {
                    encode(message: _53.MessageOut_CriminalList_Criminal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.MessageOut_CriminalList_Criminal;
                    fromPartial(object: Partial<_53.MessageOut_CriminalList_Criminal>): _53.MessageOut_CriminalList_Criminal;
                };
                TrafficIn: {
                    encode(message: _53.TrafficIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.TrafficIn;
                    fromPartial(object: Partial<_53.TrafficIn>): _53.TrafficIn;
                };
                TrafficOut: {
                    encode(message: _53.TrafficOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.TrafficOut;
                    fromPartial(object: Partial<_53.TrafficOut>): _53.TrafficOut;
                };
                KeygenInit: {
                    encode(message: _53.KeygenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.KeygenInit;
                    fromPartial(object: Partial<_53.KeygenInit>): _53.KeygenInit;
                };
                SignInit: {
                    encode(message: _53.SignInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _53.SignInit;
                    fromPartial(object: Partial<_53.SignInit>): _53.SignInit;
                };
                KeygenRequest: {
                    encode(message: _52.KeygenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.KeygenRequest;
                    fromPartial(object: Partial<_52.KeygenRequest>): _52.KeygenRequest;
                };
                KeygenResponse: {
                    encode(message: _52.KeygenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.KeygenResponse;
                    fromPartial(object: Partial<_52.KeygenResponse>): _52.KeygenResponse;
                };
                SignRequest: {
                    encode(message: _52.SignRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.SignRequest;
                    fromPartial(object: Partial<_52.SignRequest>): _52.SignRequest;
                };
                SignResponse: {
                    encode(message: _52.SignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _52.SignResponse;
                    fromPartial(object: Partial<_52.SignResponse>): _52.SignResponse;
                };
                keyPresenceResponse_ResponseFromJSON(object: any): _51.KeyPresenceResponse_Response;
                keyPresenceResponse_ResponseToJSON(object: _51.KeyPresenceResponse_Response): string;
                KeyPresenceResponse_Response: typeof _51.KeyPresenceResponse_Response;
                KeyPresenceResponse_ResponseSDKType: typeof _51.KeyPresenceResponse_Response;
                KeyPresenceRequest: {
                    encode(message: _51.KeyPresenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _51.KeyPresenceRequest;
                    fromPartial(object: Partial<_51.KeyPresenceRequest>): _51.KeyPresenceRequest;
                };
                KeyPresenceResponse: {
                    encode(message: _51.KeyPresenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _51.KeyPresenceResponse;
                    fromPartial(object: Partial<_51.KeyPresenceResponse>): _51.KeyPresenceResponse;
                };
            };
        }
        const v1beta1: {
            KeygenVoteData: {
                encode(message: _58.KeygenVoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.KeygenVoteData;
                fromPartial(object: Partial<_58.KeygenVoteData>): _58.KeygenVoteData;
            };
            KeyInfo: {
                encode(message: _58.KeyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.KeyInfo;
                fromPartial(object: Partial<_58.KeyInfo>): _58.KeyInfo;
            };
            MultisigInfo: {
                encode(message: _58.MultisigInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MultisigInfo;
                fromPartial(object: Partial<_58.MultisigInfo>): _58.MultisigInfo;
            };
            MultisigInfo_Info: {
                encode(message: _58.MultisigInfo_Info, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.MultisigInfo_Info;
                fromPartial(object: Partial<_58.MultisigInfo_Info>): _58.MultisigInfo_Info;
            };
            KeyRecoveryInfo_PrivateEntry: {
                encode(message: _58.KeyRecoveryInfo_PrivateEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.KeyRecoveryInfo_PrivateEntry;
                fromPartial(object: Partial<_58.KeyRecoveryInfo_PrivateEntry>): _58.KeyRecoveryInfo_PrivateEntry;
            };
            KeyRecoveryInfo: {
                encode(message: _58.KeyRecoveryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.KeyRecoveryInfo;
                fromPartial(object: Partial<_58.KeyRecoveryInfo>): _58.KeyRecoveryInfo;
            };
            ExternalKeys: {
                encode(message: _58.ExternalKeys, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.ExternalKeys;
                fromPartial(object: Partial<_58.ExternalKeys>): _58.ExternalKeys;
            };
            ValidatorStatus: {
                encode(message: _58.ValidatorStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.ValidatorStatus;
                fromPartial(object: Partial<_58.ValidatorStatus>): _58.ValidatorStatus;
            };
            StartKeygenRequest: {
                encode(message: _57.StartKeygenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.StartKeygenRequest;
                fromPartial(object: Partial<_57.StartKeygenRequest>): _57.StartKeygenRequest;
            };
            StartKeygenResponse: {
                encode(_: _57.StartKeygenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.StartKeygenResponse;
                fromPartial(_: Partial<_57.StartKeygenResponse>): _57.StartKeygenResponse;
            };
            RotateKeyRequest: {
                encode(message: _57.RotateKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.RotateKeyRequest;
                fromPartial(object: Partial<_57.RotateKeyRequest>): _57.RotateKeyRequest;
            };
            RotateKeyResponse: {
                encode(_: _57.RotateKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.RotateKeyResponse;
                fromPartial(_: Partial<_57.RotateKeyResponse>): _57.RotateKeyResponse;
            };
            ProcessKeygenTrafficRequest: {
                encode(message: _57.ProcessKeygenTrafficRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.ProcessKeygenTrafficRequest;
                fromPartial(object: Partial<_57.ProcessKeygenTrafficRequest>): _57.ProcessKeygenTrafficRequest;
            };
            ProcessKeygenTrafficResponse: {
                encode(_: _57.ProcessKeygenTrafficResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.ProcessKeygenTrafficResponse;
                fromPartial(_: Partial<_57.ProcessKeygenTrafficResponse>): _57.ProcessKeygenTrafficResponse;
            };
            ProcessSignTrafficRequest: {
                encode(message: _57.ProcessSignTrafficRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.ProcessSignTrafficRequest;
                fromPartial(object: Partial<_57.ProcessSignTrafficRequest>): _57.ProcessSignTrafficRequest;
            };
            ProcessSignTrafficResponse: {
                encode(_: _57.ProcessSignTrafficResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.ProcessSignTrafficResponse;
                fromPartial(_: Partial<_57.ProcessSignTrafficResponse>): _57.ProcessSignTrafficResponse;
            };
            VotePubKeyRequest: {
                encode(message: _57.VotePubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.VotePubKeyRequest;
                fromPartial(object: Partial<_57.VotePubKeyRequest>): _57.VotePubKeyRequest;
            };
            VotePubKeyResponse: {
                encode(message: _57.VotePubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.VotePubKeyResponse;
                fromPartial(object: Partial<_57.VotePubKeyResponse>): _57.VotePubKeyResponse;
            };
            VoteSigRequest: {
                encode(message: _57.VoteSigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.VoteSigRequest;
                fromPartial(object: Partial<_57.VoteSigRequest>): _57.VoteSigRequest;
            };
            VoteSigResponse: {
                encode(message: _57.VoteSigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.VoteSigResponse;
                fromPartial(object: Partial<_57.VoteSigResponse>): _57.VoteSigResponse;
            };
            HeartBeatRequest: {
                encode(message: _57.HeartBeatRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.HeartBeatRequest;
                fromPartial(object: Partial<_57.HeartBeatRequest>): _57.HeartBeatRequest;
            };
            HeartBeatResponse: {
                encode(_: _57.HeartBeatResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.HeartBeatResponse;
                fromPartial(_: Partial<_57.HeartBeatResponse>): _57.HeartBeatResponse;
            };
            RegisterExternalKeysRequest: {
                encode(message: _57.RegisterExternalKeysRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.RegisterExternalKeysRequest;
                fromPartial(object: Partial<_57.RegisterExternalKeysRequest>): _57.RegisterExternalKeysRequest;
            };
            RegisterExternalKeysRequest_ExternalKey: {
                encode(message: _57.RegisterExternalKeysRequest_ExternalKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.RegisterExternalKeysRequest_ExternalKey;
                fromPartial(object: Partial<_57.RegisterExternalKeysRequest_ExternalKey>): _57.RegisterExternalKeysRequest_ExternalKey;
            };
            RegisterExternalKeysResponse: {
                encode(_: _57.RegisterExternalKeysResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.RegisterExternalKeysResponse;
                fromPartial(_: Partial<_57.RegisterExternalKeysResponse>): _57.RegisterExternalKeysResponse;
            };
            SubmitMultisigPubKeysRequest: {
                encode(message: _57.SubmitMultisigPubKeysRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.SubmitMultisigPubKeysRequest;
                fromPartial(object: Partial<_57.SubmitMultisigPubKeysRequest>): _57.SubmitMultisigPubKeysRequest;
            };
            SubmitMultisigPubKeysResponse: {
                encode(_: _57.SubmitMultisigPubKeysResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.SubmitMultisigPubKeysResponse;
                fromPartial(_: Partial<_57.SubmitMultisigPubKeysResponse>): _57.SubmitMultisigPubKeysResponse;
            };
            SubmitMultisigSignaturesRequest: {
                encode(message: _57.SubmitMultisigSignaturesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.SubmitMultisigSignaturesRequest;
                fromPartial(object: Partial<_57.SubmitMultisigSignaturesRequest>): _57.SubmitMultisigSignaturesRequest;
            };
            SubmitMultisigSignaturesResponse: {
                encode(_: _57.SubmitMultisigSignaturesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.SubmitMultisigSignaturesResponse;
                fromPartial(_: Partial<_57.SubmitMultisigSignaturesResponse>): _57.SubmitMultisigSignaturesResponse;
            };
            Params: {
                encode(message: _55.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.Params;
                fromPartial(object: Partial<_55.Params>): _55.Params;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
        };
    }
    namespace utils {
        const v1beta1: {
            Threshold: {
                encode(message: _61.Threshold, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.Threshold;
                fromPartial(object: Partial<_61.Threshold>): _61.Threshold;
            };
            QueueState_ItemsEntry: {
                encode(message: _60.QueueState_ItemsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueueState_ItemsEntry;
                fromPartial(object: Partial<_60.QueueState_ItemsEntry>): _60.QueueState_ItemsEntry;
            };
            QueueState: {
                encode(message: _60.QueueState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueueState;
                fromPartial(object: Partial<_60.QueueState>): _60.QueueState;
            };
            QueueState_Item: {
                encode(message: _60.QueueState_Item, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.QueueState_Item;
                fromPartial(object: Partial<_60.QueueState_Item>): _60.QueueState_Item;
            };
            Bitmap: {
                encode(message: _59.Bitmap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.Bitmap;
                fromPartial(object: Partial<_59.Bitmap>): _59.Bitmap;
            };
            CircularBuffer: {
                encode(message: _59.CircularBuffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.CircularBuffer;
                fromPartial(object: Partial<_59.CircularBuffer>): _59.CircularBuffer;
            };
        };
    }
    namespace vote {
        namespace exported {
            const v1beta1: {
                pollStateFromJSON(object: any): _62.PollState;
                pollStateToJSON(object: _62.PollState): string;
                PollState: typeof _62.PollState;
                PollStateSDKType: typeof _62.PollState;
                PollMetadata: {
                    encode(message: _62.PollMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.PollMetadata;
                    fromPartial(object: Partial<_62.PollMetadata>): _62.PollMetadata;
                };
                PollKey: {
                    encode(message: _62.PollKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.PollKey;
                    fromPartial(object: Partial<_62.PollKey>): _62.PollKey;
                };
                PollParticipants: {
                    encode(message: _62.PollParticipants, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _62.PollParticipants;
                    fromPartial(object: Partial<_62.PollParticipants>): _62.PollParticipants;
                };
            };
        }
        const v1beta1: {
            TalliedVote_IsVoterLateEntry: {
                encode(message: _68.TalliedVote_IsVoterLateEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.TalliedVote_IsVoterLateEntry;
                fromPartial(object: Partial<_68.TalliedVote_IsVoterLateEntry>): _68.TalliedVote_IsVoterLateEntry;
            };
            TalliedVote: {
                encode(message: _68.TalliedVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.TalliedVote;
                fromPartial(object: Partial<_68.TalliedVote>): _68.TalliedVote;
            };
            VoteRequest: {
                encode(message: _67.VoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.VoteRequest;
                fromPartial(object: Partial<_67.VoteRequest>): _67.VoteRequest;
            };
            VoteResponse: {
                encode(message: _67.VoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.VoteResponse;
                fromPartial(object: Partial<_67.VoteResponse>): _67.VoteResponse;
            };
            Params: {
                encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
            };
            Voted: {
                encode(message: _63.Voted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.Voted;
                fromPartial(object: Partial<_63.Voted>): _63.Voted;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            axelar: {
                permission: {
                    v1beta1: _185.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            axelar: {
                permission: {
                    v1beta1: {
                        governanceKey(request?: _33.QueryGovernanceKeyRequest): Promise<_33.QueryGovernanceKeyResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
