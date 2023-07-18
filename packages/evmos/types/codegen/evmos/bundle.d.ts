import * as _15 from "./claims/v1/claims";
import * as _16 from "./claims/v1/genesis";
import * as _17 from "./claims/v1/query";
import * as _18 from "./claims/v1/tx";
import * as _19 from "./epochs/v1/genesis";
import * as _20 from "./epochs/v1/query";
import * as _21 from "./erc20/v1/erc20";
import * as _22 from "./erc20/v1/events";
import * as _23 from "./erc20/v1/genesis";
import * as _24 from "./erc20/v1/query";
import * as _25 from "./erc20/v1/tx";
import * as _26 from "./incentives/v1/genesis";
import * as _27 from "./incentives/v1/incentives";
import * as _28 from "./incentives/v1/query";
import * as _29 from "./incentives/v1/tx";
import * as _30 from "./inflation/v1/genesis";
import * as _31 from "./inflation/v1/inflation";
import * as _32 from "./inflation/v1/query";
import * as _33 from "./inflation/v1/tx";
import * as _34 from "./recovery/v1/genesis";
import * as _35 from "./recovery/v1/query";
import * as _36 from "./recovery/v1/tx";
import * as _37 from "./revenue/v1/events";
import * as _38 from "./revenue/v1/genesis";
import * as _39 from "./revenue/v1/query";
import * as _40 from "./revenue/v1/revenue";
import * as _41 from "./revenue/v1/tx";
import * as _42 from "./vesting/v1/events";
import * as _43 from "./vesting/v1/query";
import * as _44 from "./vesting/v1/tx";
import * as _45 from "./vesting/v1/vesting";
import * as _185 from "./claims/v1/query.lcd";
import * as _186 from "./epochs/v1/query.lcd";
import * as _187 from "./erc20/v1/query.lcd";
import * as _188 from "./incentives/v1/query.lcd";
import * as _189 from "./inflation/v1/query.lcd";
import * as _190 from "./recovery/v1/query.lcd";
import * as _191 from "./revenue/v1/query.lcd";
import * as _192 from "./vesting/v1/query.lcd";
import * as _193 from "./claims/v1/query.rpc.Query";
import * as _194 from "./epochs/v1/query.rpc.Query";
import * as _195 from "./erc20/v1/query.rpc.Query";
import * as _196 from "./incentives/v1/query.rpc.Query";
import * as _197 from "./inflation/v1/query.rpc.Query";
import * as _198 from "./recovery/v1/query.rpc.Query";
import * as _199 from "./revenue/v1/query.rpc.Query";
import * as _200 from "./vesting/v1/query.rpc.Query";
import * as _201 from "./claims/v1/tx.rpc.msg";
import * as _202 from "./erc20/v1/tx.rpc.msg";
import * as _203 from "./incentives/v1/tx.rpc.msg";
import * as _204 from "./inflation/v1/tx.rpc.msg";
import * as _205 from "./recovery/v1/tx.rpc.msg";
import * as _206 from "./revenue/v1/tx.rpc.msg";
import * as _207 from "./vesting/v1/tx.rpc.msg";
export declare namespace evmos {
    namespace claims {
        const v1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                totalUnclaimed(request?: _17.QueryTotalUnclaimedRequest): Promise<_17.QueryTotalUnclaimedResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                claimsRecords(request?: _17.QueryClaimsRecordsRequest): Promise<_17.QueryClaimsRecordsResponse>;
                claimsRecord(request: _17.QueryClaimsRecordRequest): Promise<_17.QueryClaimsRecordResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.claims.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _18.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            enable_claims: boolean;
                            airdrop_start_time: {
                                seconds: string;
                                nanos: number;
                            };
                            duration_until_decay: {
                                seconds: string;
                                nanos: number;
                            };
                            duration_of_decay: {
                                seconds: string;
                                nanos: number;
                            };
                            claims_denom: string;
                            authorized_channels: string[];
                            evm_channels: string[];
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            enable_claims: boolean;
                            airdrop_start_time: {
                                seconds: string;
                                nanos: number;
                            };
                            duration_until_decay: {
                                seconds: string;
                                nanos: number;
                            };
                            duration_of_decay: {
                                seconds: string;
                                nanos: number;
                            };
                            claims_denom: string;
                            authorized_channels: string[];
                            evm_channels: string[];
                        };
                    }) => _18.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _18.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.MsgUpdateParams;
                fromPartial(object: Partial<_18.MsgUpdateParams>): _18.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _18.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_18.MsgUpdateParamsResponse>): _18.MsgUpdateParamsResponse;
            };
            QueryTotalUnclaimedRequest: {
                encode(_: _17.QueryTotalUnclaimedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.QueryTotalUnclaimedRequest;
                fromPartial(_: Partial<_17.QueryTotalUnclaimedRequest>): _17.QueryTotalUnclaimedRequest;
            };
            QueryTotalUnclaimedResponse: {
                encode(message: _17.QueryTotalUnclaimedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryTotalUnclaimedResponse;
                fromPartial(object: Partial<_17.QueryTotalUnclaimedResponse>): _17.QueryTotalUnclaimedResponse;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.QueryParamsRequest;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryParamsResponse;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
            };
            QueryClaimsRecordsRequest: {
                encode(message: _17.QueryClaimsRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryClaimsRecordsRequest;
                fromPartial(object: Partial<_17.QueryClaimsRecordsRequest>): _17.QueryClaimsRecordsRequest;
            };
            QueryClaimsRecordsResponse: {
                encode(message: _17.QueryClaimsRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryClaimsRecordsResponse;
                fromPartial(object: Partial<_17.QueryClaimsRecordsResponse>): _17.QueryClaimsRecordsResponse;
            };
            QueryClaimsRecordRequest: {
                encode(message: _17.QueryClaimsRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryClaimsRecordRequest;
                fromPartial(object: Partial<_17.QueryClaimsRecordRequest>): _17.QueryClaimsRecordRequest;
            };
            QueryClaimsRecordResponse: {
                encode(message: _17.QueryClaimsRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.QueryClaimsRecordResponse;
                fromPartial(object: Partial<_17.QueryClaimsRecordResponse>): _17.QueryClaimsRecordResponse;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
            };
            Params: {
                encode(message: _16.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Params;
                fromPartial(object: Partial<_16.Params>): _16.Params;
            };
            actionFromJSON(object: any): _15.Action;
            actionToJSON(object: _15.Action): string;
            Action: typeof _15.Action;
            ActionSDKType: typeof _15.Action;
            Claim: {
                encode(message: _15.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.Claim;
                fromPartial(object: Partial<_15.Claim>): _15.Claim;
            };
            ClaimsRecordAddress: {
                encode(message: _15.ClaimsRecordAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.ClaimsRecordAddress;
                fromPartial(object: Partial<_15.ClaimsRecordAddress>): _15.ClaimsRecordAddress;
            };
            ClaimsRecord: {
                encode(message: _15.ClaimsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.ClaimsRecord;
                fromPartial(object: Partial<_15.ClaimsRecord>): _15.ClaimsRecord;
            };
        };
    }
    namespace epochs {
        const v1: {
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _20.QueryEpochsInfoRequest): Promise<_20.QueryEpochsInfoResponse>;
                currentEpoch(request: _20.QueryCurrentEpochRequest): Promise<_20.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            QueryEpochsInfoRequest: {
                encode(message: _20.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryEpochsInfoRequest;
                fromPartial(object: Partial<_20.QueryEpochsInfoRequest>): _20.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _20.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_20.QueryEpochsInfoResponse>): _20.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _20.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_20.QueryCurrentEpochRequest>): _20.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _20.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_20.QueryCurrentEpochResponse>): _20.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _19.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.EpochInfo;
                fromPartial(object: Partial<_19.EpochInfo>): _19.EpochInfo;
            };
            GenesisState: {
                encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
            };
        };
    }
    namespace erc20 {
        const v1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenPairs(request?: _24.QueryTokenPairsRequest): Promise<_24.QueryTokenPairsResponse>;
                tokenPair(request: _24.QueryTokenPairRequest): Promise<_24.QueryTokenPairResponse>;
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoin(value: _25.MsgConvertCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20(value: _25.MsgConvertERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoin(value: _25.MsgConvertCoin): {
                        typeUrl: string;
                        value: _25.MsgConvertCoin;
                    };
                    convertERC20(value: _25.MsgConvertERC20): {
                        typeUrl: string;
                        value: _25.MsgConvertERC20;
                    };
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: _25.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    convertCoin(value: any): {
                        typeUrl: string;
                        value: _25.MsgConvertCoin;
                    };
                    convertERC20(value: any): {
                        typeUrl: string;
                        value: _25.MsgConvertERC20;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _25.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    convertCoin(value: _25.MsgConvertCoin): {
                        typeUrl: string;
                        value: _25.MsgConvertCoin;
                    };
                    convertERC20(value: _25.MsgConvertERC20): {
                        typeUrl: string;
                        value: _25.MsgConvertERC20;
                    };
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: _25.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.erc20.v1.MsgConvertCoin": {
                    aminoType: string;
                    toAmino: ({ coin, receiver, sender }: _25.MsgConvertCoin) => {
                        coin: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                        sender: string;
                    };
                    fromAmino: ({ coin, receiver, sender }: {
                        coin: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                        sender: string;
                    }) => _25.MsgConvertCoin;
                };
                "/evmos.erc20.v1.MsgConvertERC20": {
                    aminoType: string;
                    toAmino: ({ contractAddress, amount, receiver, sender }: _25.MsgConvertERC20) => {
                        contract_address: string;
                        amount: string;
                        receiver: string;
                        sender: string;
                    };
                    fromAmino: ({ contract_address, amount, receiver, sender }: {
                        contract_address: string;
                        amount: string;
                        receiver: string;
                        sender: string;
                    }) => _25.MsgConvertERC20;
                };
                "/evmos.erc20.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _25.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            enable_erc20: boolean;
                            enable_evm_hook: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            enable_erc20: boolean;
                            enable_evm_hook: boolean;
                        };
                    }) => _25.MsgUpdateParams;
                };
            };
            MsgConvertCoin: {
                encode(message: _25.MsgConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgConvertCoin;
                fromPartial(object: Partial<_25.MsgConvertCoin>): _25.MsgConvertCoin;
            };
            MsgConvertCoinResponse: {
                encode(_: _25.MsgConvertCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgConvertCoinResponse;
                fromPartial(_: Partial<_25.MsgConvertCoinResponse>): _25.MsgConvertCoinResponse;
            };
            MsgConvertERC20: {
                encode(message: _25.MsgConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgConvertERC20;
                fromPartial(object: Partial<_25.MsgConvertERC20>): _25.MsgConvertERC20;
            };
            MsgConvertERC20Response: {
                encode(_: _25.MsgConvertERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgConvertERC20Response;
                fromPartial(_: Partial<_25.MsgConvertERC20Response>): _25.MsgConvertERC20Response;
            };
            MsgUpdateParams: {
                encode(message: _25.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.MsgUpdateParams;
                fromPartial(object: Partial<_25.MsgUpdateParams>): _25.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _25.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _25.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_25.MsgUpdateParamsResponse>): _25.MsgUpdateParamsResponse;
            };
            QueryTokenPairsRequest: {
                encode(message: _24.QueryTokenPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryTokenPairsRequest;
                fromPartial(object: Partial<_24.QueryTokenPairsRequest>): _24.QueryTokenPairsRequest;
            };
            QueryTokenPairsResponse: {
                encode(message: _24.QueryTokenPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryTokenPairsResponse;
                fromPartial(object: Partial<_24.QueryTokenPairsResponse>): _24.QueryTokenPairsResponse;
            };
            QueryTokenPairRequest: {
                encode(message: _24.QueryTokenPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryTokenPairRequest;
                fromPartial(object: Partial<_24.QueryTokenPairRequest>): _24.QueryTokenPairRequest;
            };
            QueryTokenPairResponse: {
                encode(message: _24.QueryTokenPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryTokenPairResponse;
                fromPartial(object: Partial<_24.QueryTokenPairResponse>): _24.QueryTokenPairResponse;
            };
            QueryParamsRequest: {
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.QueryParamsRequest;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryParamsResponse;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _23.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.GenesisState;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
            };
            Params: {
                encode(message: _23.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Params;
                fromPartial(object: Partial<_23.Params>): _23.Params;
            };
            EventRegisterPair: {
                encode(message: _22.EventRegisterPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.EventRegisterPair;
                fromPartial(object: Partial<_22.EventRegisterPair>): _22.EventRegisterPair;
            };
            EventToggleTokenConversion: {
                encode(message: _22.EventToggleTokenConversion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.EventToggleTokenConversion;
                fromPartial(object: Partial<_22.EventToggleTokenConversion>): _22.EventToggleTokenConversion;
            };
            EventConvertCoin: {
                encode(message: _22.EventConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.EventConvertCoin;
                fromPartial(object: Partial<_22.EventConvertCoin>): _22.EventConvertCoin;
            };
            EventConvertERC20: {
                encode(message: _22.EventConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.EventConvertERC20;
                fromPartial(object: Partial<_22.EventConvertERC20>): _22.EventConvertERC20;
            };
            ownerFromJSON(object: any): _21.Owner;
            ownerToJSON(object: _21.Owner): string;
            Owner: typeof _21.Owner;
            OwnerSDKType: typeof _21.Owner;
            TokenPair: {
                encode(message: _21.TokenPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.TokenPair;
                fromPartial(object: Partial<_21.TokenPair>): _21.TokenPair;
            };
            RegisterCoinProposal: {
                encode(message: _21.RegisterCoinProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.RegisterCoinProposal;
                fromPartial(object: Partial<_21.RegisterCoinProposal>): _21.RegisterCoinProposal;
            };
            RegisterERC20Proposal: {
                encode(message: _21.RegisterERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.RegisterERC20Proposal;
                fromPartial(object: Partial<_21.RegisterERC20Proposal>): _21.RegisterERC20Proposal;
            };
            ToggleTokenConversionProposal: {
                encode(message: _21.ToggleTokenConversionProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.ToggleTokenConversionProposal;
                fromPartial(object: Partial<_21.ToggleTokenConversionProposal>): _21.ToggleTokenConversionProposal;
            };
            ProposalMetadata: {
                encode(message: _21.ProposalMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.ProposalMetadata;
                fromPartial(object: Partial<_21.ProposalMetadata>): _21.ProposalMetadata;
            };
        };
    }
    namespace incentives {
        const v1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                incentives(request?: _28.QueryIncentivesRequest): Promise<_28.QueryIncentivesResponse>;
                incentive(request: _28.QueryIncentiveRequest): Promise<_28.QueryIncentiveResponse>;
                gasMeters(request: _28.QueryGasMetersRequest): Promise<_28.QueryGasMetersResponse>;
                gasMeter(request: _28.QueryGasMeterRequest): Promise<_28.QueryGasMeterResponse>;
                allocationMeters(request?: _28.QueryAllocationMetersRequest): Promise<_28.QueryAllocationMetersResponse>;
                allocationMeter(request: _28.QueryAllocationMeterRequest): Promise<_28.QueryAllocationMeterResponse>;
                params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _29.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _29.MsgUpdateParams): {
                        typeUrl: string;
                        value: _29.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _29.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _29.MsgUpdateParams): {
                        typeUrl: string;
                        value: _29.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.incentives.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _29.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            enable_incentives: boolean;
                            allocation_limit: string;
                            incentives_epoch_identifier: string;
                            reward_scaler: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            enable_incentives: boolean;
                            allocation_limit: string;
                            incentives_epoch_identifier: string;
                            reward_scaler: string;
                        };
                    }) => _29.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _29.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.MsgUpdateParams;
                fromPartial(object: Partial<_29.MsgUpdateParams>): _29.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _29.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _29.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_29.MsgUpdateParamsResponse>): _29.MsgUpdateParamsResponse;
            };
            QueryIncentivesRequest: {
                encode(message: _28.QueryIncentivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryIncentivesRequest;
                fromPartial(object: Partial<_28.QueryIncentivesRequest>): _28.QueryIncentivesRequest;
            };
            QueryIncentivesResponse: {
                encode(message: _28.QueryIncentivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryIncentivesResponse;
                fromPartial(object: Partial<_28.QueryIncentivesResponse>): _28.QueryIncentivesResponse;
            };
            QueryIncentiveRequest: {
                encode(message: _28.QueryIncentiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryIncentiveRequest;
                fromPartial(object: Partial<_28.QueryIncentiveRequest>): _28.QueryIncentiveRequest;
            };
            QueryIncentiveResponse: {
                encode(message: _28.QueryIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryIncentiveResponse;
                fromPartial(object: Partial<_28.QueryIncentiveResponse>): _28.QueryIncentiveResponse;
            };
            QueryGasMetersRequest: {
                encode(message: _28.QueryGasMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryGasMetersRequest;
                fromPartial(object: Partial<_28.QueryGasMetersRequest>): _28.QueryGasMetersRequest;
            };
            QueryGasMetersResponse: {
                encode(message: _28.QueryGasMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryGasMetersResponse;
                fromPartial(object: Partial<_28.QueryGasMetersResponse>): _28.QueryGasMetersResponse;
            };
            QueryGasMeterRequest: {
                encode(message: _28.QueryGasMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryGasMeterRequest;
                fromPartial(object: Partial<_28.QueryGasMeterRequest>): _28.QueryGasMeterRequest;
            };
            QueryGasMeterResponse: {
                encode(message: _28.QueryGasMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryGasMeterResponse;
                fromPartial(object: Partial<_28.QueryGasMeterResponse>): _28.QueryGasMeterResponse;
            };
            QueryAllocationMetersRequest: {
                encode(message: _28.QueryAllocationMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryAllocationMetersRequest;
                fromPartial(object: Partial<_28.QueryAllocationMetersRequest>): _28.QueryAllocationMetersRequest;
            };
            QueryAllocationMetersResponse: {
                encode(message: _28.QueryAllocationMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryAllocationMetersResponse;
                fromPartial(object: Partial<_28.QueryAllocationMetersResponse>): _28.QueryAllocationMetersResponse;
            };
            QueryAllocationMeterRequest: {
                encode(message: _28.QueryAllocationMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryAllocationMeterRequest;
                fromPartial(object: Partial<_28.QueryAllocationMeterRequest>): _28.QueryAllocationMeterRequest;
            };
            QueryAllocationMeterResponse: {
                encode(message: _28.QueryAllocationMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryAllocationMeterResponse;
                fromPartial(object: Partial<_28.QueryAllocationMeterResponse>): _28.QueryAllocationMeterResponse;
            };
            QueryParamsRequest: {
                encode(_: _28.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.QueryParamsRequest;
                fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _28.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.QueryParamsResponse;
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
            };
            Incentive: {
                encode(message: _27.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.Incentive;
                fromPartial(object: Partial<_27.Incentive>): _27.Incentive;
            };
            GasMeter: {
                encode(message: _27.GasMeter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.GasMeter;
                fromPartial(object: Partial<_27.GasMeter>): _27.GasMeter;
            };
            RegisterIncentiveProposal: {
                encode(message: _27.RegisterIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.RegisterIncentiveProposal;
                fromPartial(object: Partial<_27.RegisterIncentiveProposal>): _27.RegisterIncentiveProposal;
            };
            CancelIncentiveProposal: {
                encode(message: _27.CancelIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.CancelIncentiveProposal;
                fromPartial(object: Partial<_27.CancelIncentiveProposal>): _27.CancelIncentiveProposal;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
            };
            Params: {
                encode(message: _26.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.Params;
                fromPartial(object: Partial<_26.Params>): _26.Params;
            };
        };
    }
    namespace inflation {
        const v1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                period(request?: _32.QueryPeriodRequest): Promise<_32.QueryPeriodResponse>;
                epochMintProvision(request?: _32.QueryEpochMintProvisionRequest): Promise<_32.QueryEpochMintProvisionResponse>;
                skippedEpochs(request?: _32.QuerySkippedEpochsRequest): Promise<_32.QuerySkippedEpochsResponse>;
                circulatingSupply(request?: _32.QueryCirculatingSupplyRequest): Promise<_32.QueryCirculatingSupplyResponse>;
                inflationRate(request?: _32.QueryInflationRateRequest): Promise<_32.QueryInflationRateResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: _33.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _33.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _33.MsgUpdateParams): {
                        typeUrl: string;
                        value: _33.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.inflation.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _33.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            mint_denom: string;
                            exponential_calculation: {
                                a: string;
                                r: string;
                                c: string;
                                bonding_target: string;
                                max_variance: string;
                            };
                            inflation_distribution: {
                                staking_rewards: string;
                                usage_incentives: string;
                                community_pool: string;
                            };
                            enable_inflation: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            mint_denom: string;
                            exponential_calculation: {
                                a: string;
                                r: string;
                                c: string;
                                bonding_target: string;
                                max_variance: string;
                            };
                            inflation_distribution: {
                                staking_rewards: string;
                                usage_incentives: string;
                                community_pool: string;
                            };
                            enable_inflation: boolean;
                        };
                    }) => _33.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _33.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MsgUpdateParams;
                fromPartial(object: Partial<_33.MsgUpdateParams>): _33.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _33.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _33.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_33.MsgUpdateParamsResponse>): _33.MsgUpdateParamsResponse;
            };
            QueryPeriodRequest: {
                encode(_: _32.QueryPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QueryPeriodRequest;
                fromPartial(_: Partial<_32.QueryPeriodRequest>): _32.QueryPeriodRequest;
            };
            QueryPeriodResponse: {
                encode(message: _32.QueryPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryPeriodResponse;
                fromPartial(object: Partial<_32.QueryPeriodResponse>): _32.QueryPeriodResponse;
            };
            QueryEpochMintProvisionRequest: {
                encode(_: _32.QueryEpochMintProvisionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QueryEpochMintProvisionRequest;
                fromPartial(_: Partial<_32.QueryEpochMintProvisionRequest>): _32.QueryEpochMintProvisionRequest;
            };
            QueryEpochMintProvisionResponse: {
                encode(message: _32.QueryEpochMintProvisionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryEpochMintProvisionResponse;
                fromPartial(object: Partial<_32.QueryEpochMintProvisionResponse>): _32.QueryEpochMintProvisionResponse;
            };
            QuerySkippedEpochsRequest: {
                encode(_: _32.QuerySkippedEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QuerySkippedEpochsRequest;
                fromPartial(_: Partial<_32.QuerySkippedEpochsRequest>): _32.QuerySkippedEpochsRequest;
            };
            QuerySkippedEpochsResponse: {
                encode(message: _32.QuerySkippedEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QuerySkippedEpochsResponse;
                fromPartial(object: Partial<_32.QuerySkippedEpochsResponse>): _32.QuerySkippedEpochsResponse;
            };
            QueryCirculatingSupplyRequest: {
                encode(_: _32.QueryCirculatingSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QueryCirculatingSupplyRequest;
                fromPartial(_: Partial<_32.QueryCirculatingSupplyRequest>): _32.QueryCirculatingSupplyRequest;
            };
            QueryCirculatingSupplyResponse: {
                encode(message: _32.QueryCirculatingSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryCirculatingSupplyResponse;
                fromPartial(object: Partial<_32.QueryCirculatingSupplyResponse>): _32.QueryCirculatingSupplyResponse;
            };
            QueryInflationRateRequest: {
                encode(_: _32.QueryInflationRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QueryInflationRateRequest;
                fromPartial(_: Partial<_32.QueryInflationRateRequest>): _32.QueryInflationRateRequest;
            };
            QueryInflationRateResponse: {
                encode(message: _32.QueryInflationRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryInflationRateResponse;
                fromPartial(object: Partial<_32.QueryInflationRateResponse>): _32.QueryInflationRateResponse;
            };
            QueryParamsRequest: {
                encode(_: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _32.QueryParamsRequest;
                fromPartial(_: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.QueryParamsResponse;
                fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
            };
            InflationDistribution: {
                encode(message: _31.InflationDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.InflationDistribution;
                fromPartial(object: Partial<_31.InflationDistribution>): _31.InflationDistribution;
            };
            ExponentialCalculation: {
                encode(message: _31.ExponentialCalculation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.ExponentialCalculation;
                fromPartial(object: Partial<_31.ExponentialCalculation>): _31.ExponentialCalculation;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            };
            Params: {
                encode(message: _30.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
            };
        };
    }
    namespace recovery {
        const v1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _36.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _36.MsgUpdateParams): {
                        typeUrl: string;
                        value: _36.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _36.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _36.MsgUpdateParams): {
                        typeUrl: string;
                        value: _36.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.recovery.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _36.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            enable_recovery: boolean;
                            packet_timeout_duration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            enable_recovery: boolean;
                            packet_timeout_duration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _36.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _36.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.MsgUpdateParams;
                fromPartial(object: Partial<_36.MsgUpdateParams>): _36.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _36.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _36.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_36.MsgUpdateParamsResponse>): _36.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.QueryParamsRequest;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryParamsResponse;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            };
            Params: {
                encode(message: _34.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.Params;
                fromPartial(object: Partial<_34.Params>): _34.Params;
            };
        };
    }
    namespace revenue {
        const v1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                revenues(request?: _39.QueryRevenuesRequest): Promise<_39.QueryRevenuesResponse>;
                revenue(request: _39.QueryRevenueRequest): Promise<_39.QueryRevenueResponse>;
                params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                deployerRevenues(request: _39.QueryDeployerRevenuesRequest): Promise<_39.QueryDeployerRevenuesResponse>;
                withdrawerRevenues(request: _39.QueryWithdrawerRevenuesRequest): Promise<_39.QueryWithdrawerRevenuesResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerRevenue(value: _41.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRevenue(value: _41.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelRevenue(value: _41.MsgCancelRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerRevenue(value: _41.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _41.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _41.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _41.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _41.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _41.MsgCancelRevenue;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    registerRevenue(value: any): {
                        typeUrl: string;
                        value: _41.MsgRegisterRevenue;
                    };
                    updateRevenue(value: any): {
                        typeUrl: string;
                        value: _41.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: any): {
                        typeUrl: string;
                        value: _41.MsgCancelRevenue;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerRevenue(value: _41.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _41.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _41.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _41.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _41.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _41.MsgCancelRevenue;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.revenue.v1.MsgRegisterRevenue": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress, nonces }: _41.MsgRegisterRevenue) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                        nonces: string[];
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address, nonces }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                        nonces: string[];
                    }) => _41.MsgRegisterRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateRevenue": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: _41.MsgUpdateRevenue) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    }) => _41.MsgUpdateRevenue;
                };
                "/evmos.revenue.v1.MsgCancelRevenue": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress }: _41.MsgCancelRevenue) => {
                        contract_address: string;
                        deployer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address }: {
                        contract_address: string;
                        deployer_address: string;
                    }) => _41.MsgCancelRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _41.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            enable_revenue: boolean;
                            developer_shares: string;
                            addr_derivation_cost_create: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            enable_revenue: boolean;
                            developer_shares: string;
                            addr_derivation_cost_create: string;
                        };
                    }) => _41.MsgUpdateParams;
                };
            };
            MsgRegisterRevenue: {
                encode(message: _41.MsgRegisterRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgRegisterRevenue;
                fromPartial(object: Partial<_41.MsgRegisterRevenue>): _41.MsgRegisterRevenue;
            };
            MsgRegisterRevenueResponse: {
                encode(_: _41.MsgRegisterRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgRegisterRevenueResponse;
                fromPartial(_: Partial<_41.MsgRegisterRevenueResponse>): _41.MsgRegisterRevenueResponse;
            };
            MsgUpdateRevenue: {
                encode(message: _41.MsgUpdateRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgUpdateRevenue;
                fromPartial(object: Partial<_41.MsgUpdateRevenue>): _41.MsgUpdateRevenue;
            };
            MsgUpdateRevenueResponse: {
                encode(_: _41.MsgUpdateRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgUpdateRevenueResponse;
                fromPartial(_: Partial<_41.MsgUpdateRevenueResponse>): _41.MsgUpdateRevenueResponse;
            };
            MsgCancelRevenue: {
                encode(message: _41.MsgCancelRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgCancelRevenue;
                fromPartial(object: Partial<_41.MsgCancelRevenue>): _41.MsgCancelRevenue;
            };
            MsgCancelRevenueResponse: {
                encode(_: _41.MsgCancelRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgCancelRevenueResponse;
                fromPartial(_: Partial<_41.MsgCancelRevenueResponse>): _41.MsgCancelRevenueResponse;
            };
            MsgUpdateParams: {
                encode(message: _41.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgUpdateParams;
                fromPartial(object: Partial<_41.MsgUpdateParams>): _41.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _41.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_41.MsgUpdateParamsResponse>): _41.MsgUpdateParamsResponse;
            };
            Revenue: {
                encode(message: _40.Revenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.Revenue;
                fromPartial(object: Partial<_40.Revenue>): _40.Revenue;
            };
            QueryRevenuesRequest: {
                encode(message: _39.QueryRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.QueryRevenuesRequest;
                fromPartial(object: Partial<_39.QueryRevenuesRequest>): _39.QueryRevenuesRequest;
            };
            QueryRevenuesResponse: {
                encode(message: _39.QueryRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.QueryRevenuesResponse;
                fromPartial(object: Partial<_39.QueryRevenuesResponse>): _39.QueryRevenuesResponse;
            };
            QueryRevenueRequest: {
                encode(message: _39.QueryRevenueRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.QueryRevenueRequest;
                fromPartial(object: Partial<_39.QueryRevenueRequest>): _39.QueryRevenueRequest;
            };
            QueryRevenueResponse: {
                encode(message: _39.QueryRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.QueryRevenueResponse;
                fromPartial(object: Partial<_39.QueryRevenueResponse>): _39.QueryRevenueResponse;
            };
            QueryParamsRequest: {
                encode(_: _39.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _39.QueryParamsRequest;
                fromPartial(_: Partial<_39.QueryParamsRequest>): _39.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _39.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.QueryParamsResponse;
                fromPartial(object: Partial<_39.QueryParamsResponse>): _39.QueryParamsResponse;
            };
            QueryDeployerRevenuesRequest: {
                encode(message: _39.QueryDeployerRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.QueryDeployerRevenuesRequest;
                fromPartial(object: Partial<_39.QueryDeployerRevenuesRequest>): _39.QueryDeployerRevenuesRequest;
            };
            QueryDeployerRevenuesResponse: {
                encode(message: _39.QueryDeployerRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.QueryDeployerRevenuesResponse;
                fromPartial(object: Partial<_39.QueryDeployerRevenuesResponse>): _39.QueryDeployerRevenuesResponse;
            };
            QueryWithdrawerRevenuesRequest: {
                encode(message: _39.QueryWithdrawerRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.QueryWithdrawerRevenuesRequest;
                fromPartial(object: Partial<_39.QueryWithdrawerRevenuesRequest>): _39.QueryWithdrawerRevenuesRequest;
            };
            QueryWithdrawerRevenuesResponse: {
                encode(message: _39.QueryWithdrawerRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.QueryWithdrawerRevenuesResponse;
                fromPartial(object: Partial<_39.QueryWithdrawerRevenuesResponse>): _39.QueryWithdrawerRevenuesResponse;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
            };
            Params: {
                encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.Params;
                fromPartial(object: Partial<_38.Params>): _38.Params;
            };
            EventRegisterRevenue: {
                encode(message: _37.EventRegisterRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EventRegisterRevenue;
                fromPartial(object: Partial<_37.EventRegisterRevenue>): _37.EventRegisterRevenue;
            };
            EventUpdateRevenue: {
                encode(message: _37.EventUpdateRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EventUpdateRevenue;
                fromPartial(object: Partial<_37.EventUpdateRevenue>): _37.EventUpdateRevenue;
            };
            EventCancelRevenue: {
                encode(message: _37.EventCancelRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EventCancelRevenue;
                fromPartial(object: Partial<_37.EventCancelRevenue>): _37.EventCancelRevenue;
            };
            EventDistributeRevenue: {
                encode(message: _37.EventDistributeRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EventDistributeRevenue;
                fromPartial(object: Partial<_37.EventDistributeRevenue>): _37.EventDistributeRevenue;
            };
        };
    }
    namespace vesting {
        const v1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balances(request: _43.QueryBalancesRequest): Promise<_43.QueryBalancesResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClawbackVestingAccount(value: _44.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _44.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateVestingFunder(value: _44.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertVestingAccount(value: _44.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClawbackVestingAccount(value: _44.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _44.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _44.MsgClawback): {
                        typeUrl: string;
                        value: _44.MsgClawback;
                    };
                    updateVestingFunder(value: _44.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _44.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _44.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _44.MsgConvertVestingAccount;
                    };
                };
                fromJSON: {
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _44.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _44.MsgClawback;
                    };
                    updateVestingFunder(value: any): {
                        typeUrl: string;
                        value: _44.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: any): {
                        typeUrl: string;
                        value: _44.MsgConvertVestingAccount;
                    };
                };
                fromPartial: {
                    createClawbackVestingAccount(value: _44.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _44.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _44.MsgClawback): {
                        typeUrl: string;
                        value: _44.MsgClawback;
                    };
                    updateVestingFunder(value: _44.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _44.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _44.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _44.MsgConvertVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: _44.MsgCreateClawbackVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        lockup_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        merge: boolean;
                    };
                    fromAmino: ({ from_address, to_address, start_time, lockup_periods, vesting_periods, merge }: {
                        from_address: string;
                        to_address: string;
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        lockup_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        merge: boolean;
                    }) => _44.MsgCreateClawbackVestingAccount;
                };
                "/evmos.vesting.v1.MsgClawback": {
                    aminoType: string;
                    toAmino: ({ funderAddress, accountAddress, destAddress }: _44.MsgClawback) => {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    };
                    fromAmino: ({ funder_address, account_address, dest_address }: {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    }) => _44.MsgClawback;
                };
                "/evmos.vesting.v1.MsgUpdateVestingFunder": {
                    aminoType: string;
                    toAmino: ({ funderAddress, newFunderAddress, vestingAddress }: _44.MsgUpdateVestingFunder) => {
                        funder_address: string;
                        new_funder_address: string;
                        vesting_address: string;
                    };
                    fromAmino: ({ funder_address, new_funder_address, vesting_address }: {
                        funder_address: string;
                        new_funder_address: string;
                        vesting_address: string;
                    }) => _44.MsgUpdateVestingFunder;
                };
                "/evmos.vesting.v1.MsgConvertVestingAccount": {
                    aminoType: string;
                    toAmino: ({ vestingAddress }: _44.MsgConvertVestingAccount) => {
                        vesting_address: string;
                    };
                    fromAmino: ({ vesting_address }: {
                        vesting_address: string;
                    }) => _44.MsgConvertVestingAccount;
                };
            };
            ClawbackVestingAccount: {
                encode(message: _45.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.ClawbackVestingAccount;
                fromPartial(object: Partial<_45.ClawbackVestingAccount>): _45.ClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccount: {
                encode(message: _44.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgCreateClawbackVestingAccount;
                fromPartial(object: Partial<_44.MsgCreateClawbackVestingAccount>): _44.MsgCreateClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccountResponse: {
                encode(_: _44.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgCreateClawbackVestingAccountResponse;
                fromPartial(_: Partial<_44.MsgCreateClawbackVestingAccountResponse>): _44.MsgCreateClawbackVestingAccountResponse;
            };
            MsgClawback: {
                encode(message: _44.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgClawback;
                fromPartial(object: Partial<_44.MsgClawback>): _44.MsgClawback;
            };
            MsgClawbackResponse: {
                encode(_: _44.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgClawbackResponse;
                fromPartial(_: Partial<_44.MsgClawbackResponse>): _44.MsgClawbackResponse;
            };
            MsgUpdateVestingFunder: {
                encode(message: _44.MsgUpdateVestingFunder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgUpdateVestingFunder;
                fromPartial(object: Partial<_44.MsgUpdateVestingFunder>): _44.MsgUpdateVestingFunder;
            };
            MsgUpdateVestingFunderResponse: {
                encode(_: _44.MsgUpdateVestingFunderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgUpdateVestingFunderResponse;
                fromPartial(_: Partial<_44.MsgUpdateVestingFunderResponse>): _44.MsgUpdateVestingFunderResponse;
            };
            MsgConvertVestingAccount: {
                encode(message: _44.MsgConvertVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgConvertVestingAccount;
                fromPartial(object: Partial<_44.MsgConvertVestingAccount>): _44.MsgConvertVestingAccount;
            };
            MsgConvertVestingAccountResponse: {
                encode(_: _44.MsgConvertVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgConvertVestingAccountResponse;
                fromPartial(_: Partial<_44.MsgConvertVestingAccountResponse>): _44.MsgConvertVestingAccountResponse;
            };
            QueryBalancesRequest: {
                encode(message: _43.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryBalancesRequest;
                fromPartial(object: Partial<_43.QueryBalancesRequest>): _43.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _43.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryBalancesResponse;
                fromPartial(object: Partial<_43.QueryBalancesResponse>): _43.QueryBalancesResponse;
            };
            EventCreateClawbackVestingAccount: {
                encode(message: _42.EventCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.EventCreateClawbackVestingAccount;
                fromPartial(object: Partial<_42.EventCreateClawbackVestingAccount>): _42.EventCreateClawbackVestingAccount;
            };
            EventClawback: {
                encode(message: _42.EventClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.EventClawback;
                fromPartial(object: Partial<_42.EventClawback>): _42.EventClawback;
            };
            EventUpdateVestingFunder: {
                encode(message: _42.EventUpdateVestingFunder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.EventUpdateVestingFunder;
                fromPartial(object: Partial<_42.EventUpdateVestingFunder>): _42.EventUpdateVestingFunder;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            evmos: {
                claims: {
                    v1: _201.MsgClientImpl;
                };
                erc20: {
                    v1: _202.MsgClientImpl;
                };
                incentives: {
                    v1: _203.MsgClientImpl;
                };
                inflation: {
                    v1: _204.MsgClientImpl;
                };
                recovery: {
                    v1: _205.MsgClientImpl;
                };
                revenue: {
                    v1: _206.MsgClientImpl;
                };
                vesting: {
                    v1: _207.MsgClientImpl;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            evmos: {
                claims: {
                    v1: {
                        totalUnclaimed(request?: _17.QueryTotalUnclaimedRequest): Promise<_17.QueryTotalUnclaimedResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        claimsRecords(request?: _17.QueryClaimsRecordsRequest): Promise<_17.QueryClaimsRecordsResponse>;
                        claimsRecord(request: _17.QueryClaimsRecordRequest): Promise<_17.QueryClaimsRecordResponse>;
                    };
                };
                epochs: {
                    v1: {
                        epochInfos(request?: _20.QueryEpochsInfoRequest): Promise<_20.QueryEpochsInfoResponse>;
                        currentEpoch(request: _20.QueryCurrentEpochRequest): Promise<_20.QueryCurrentEpochResponse>;
                    };
                };
                erc20: {
                    v1: {
                        tokenPairs(request?: _24.QueryTokenPairsRequest): Promise<_24.QueryTokenPairsResponse>;
                        tokenPair(request: _24.QueryTokenPairRequest): Promise<_24.QueryTokenPairResponse>;
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                    };
                };
                incentives: {
                    v1: {
                        incentives(request?: _28.QueryIncentivesRequest): Promise<_28.QueryIncentivesResponse>;
                        incentive(request: _28.QueryIncentiveRequest): Promise<_28.QueryIncentiveResponse>;
                        gasMeters(request: _28.QueryGasMetersRequest): Promise<_28.QueryGasMetersResponse>;
                        gasMeter(request: _28.QueryGasMeterRequest): Promise<_28.QueryGasMeterResponse>;
                        allocationMeters(request?: _28.QueryAllocationMetersRequest): Promise<_28.QueryAllocationMetersResponse>;
                        allocationMeter(request: _28.QueryAllocationMeterRequest): Promise<_28.QueryAllocationMeterResponse>;
                        params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                    };
                };
                inflation: {
                    v1: {
                        period(request?: _32.QueryPeriodRequest): Promise<_32.QueryPeriodResponse>;
                        epochMintProvision(request?: _32.QueryEpochMintProvisionRequest): Promise<_32.QueryEpochMintProvisionResponse>;
                        skippedEpochs(request?: _32.QuerySkippedEpochsRequest): Promise<_32.QuerySkippedEpochsResponse>;
                        circulatingSupply(request?: _32.QueryCirculatingSupplyRequest): Promise<_32.QueryCirculatingSupplyResponse>;
                        inflationRate(request?: _32.QueryInflationRateRequest): Promise<_32.QueryInflationRateResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                    };
                };
                recovery: {
                    v1: {
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                    };
                };
                revenue: {
                    v1: {
                        revenues(request?: _39.QueryRevenuesRequest): Promise<_39.QueryRevenuesResponse>;
                        revenue(request: _39.QueryRevenueRequest): Promise<_39.QueryRevenueResponse>;
                        params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                        deployerRevenues(request: _39.QueryDeployerRevenuesRequest): Promise<_39.QueryDeployerRevenuesResponse>;
                        withdrawerRevenues(request: _39.QueryWithdrawerRevenuesRequest): Promise<_39.QueryWithdrawerRevenuesResponse>;
                    };
                };
                vesting: {
                    v1: {
                        balances(request: _43.QueryBalancesRequest): Promise<_43.QueryBalancesResponse>;
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
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
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
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
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
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
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
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
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
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
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            evmos: {
                claims: {
                    v1: _185.LCDQueryClient;
                };
                epochs: {
                    v1: _186.LCDQueryClient;
                };
                erc20: {
                    v1: _187.LCDQueryClient;
                };
                incentives: {
                    v1: _188.LCDQueryClient;
                };
                inflation: {
                    v1: _189.LCDQueryClient;
                };
                recovery: {
                    v1: _190.LCDQueryClient;
                };
                revenue: {
                    v1: _191.LCDQueryClient;
                };
                vesting: {
                    v1: _192.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
