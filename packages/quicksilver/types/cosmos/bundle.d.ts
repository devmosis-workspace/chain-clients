import * as _35 from "../quicksilver/lsm-types/v1/types";
import * as _36 from "./staking/v1beta1/authz";
import * as _37 from "./staking/v1beta1/genesis";
import * as _38 from "./staking/v1beta1/query";
import * as _39 from "./staking/v1beta1/staking";
import * as _40 from "./staking/v1beta1/tx";
import * as _41 from "../quicksilver/lsm-types/v1/validator";
import * as _42 from "./app/module/v1alpha1/module";
import * as _43 from "./app/v1alpha1/config";
import * as _44 from "./app/v1alpha1/module";
import * as _45 from "./app/v1alpha1/query";
import * as _46 from "./auth/v1beta1/auth";
import * as _47 from "./auth/v1beta1/genesis";
import * as _48 from "./auth/v1beta1/query";
import * as _49 from "./authz/v1beta1/authz";
import * as _50 from "./authz/v1beta1/event";
import * as _51 from "./authz/v1beta1/genesis";
import * as _52 from "./authz/v1beta1/query";
import * as _53 from "./authz/v1beta1/tx";
import * as _54 from "./bank/v1beta1/authz";
import * as _55 from "./bank/v1beta1/bank";
import * as _56 from "./bank/v1beta1/genesis";
import * as _57 from "./bank/v1beta1/query";
import * as _58 from "./bank/v1beta1/tx";
import * as _59 from "./base/abci/v1beta1/abci";
import * as _60 from "./base/kv/v1beta1/kv";
import * as _61 from "./base/node/v1beta1/query";
import * as _62 from "./base/query/v1beta1/pagination";
import * as _63 from "./base/reflection/v1beta1/reflection";
import * as _64 from "./base/reflection/v2alpha1/reflection";
import * as _65 from "./base/snapshots/v1beta1/snapshot";
import * as _66 from "./base/store/v1beta1/commit_info";
import * as _67 from "./base/store/v1beta1/listening";
import * as _68 from "./base/tendermint/v1beta1/query";
import * as _69 from "./base/tendermint/v1beta1/types";
import * as _70 from "./base/v1beta1/coin";
import * as _71 from "./capability/v1beta1/capability";
import * as _72 from "./capability/v1beta1/genesis";
import * as _73 from "./crisis/v1beta1/genesis";
import * as _74 from "./crisis/v1beta1/tx";
import * as _75 from "./crypto/ed25519/keys";
import * as _76 from "./crypto/hd/v1/hd";
import * as _77 from "./crypto/keyring/v1/record";
import * as _78 from "./crypto/multisig/keys";
import * as _79 from "./crypto/secp256k1/keys";
import * as _80 from "./crypto/secp256r1/keys";
import * as _81 from "./distribution/v1beta1/distribution";
import * as _82 from "./distribution/v1beta1/genesis";
import * as _83 from "./distribution/v1beta1/query";
import * as _84 from "./distribution/v1beta1/tx";
import * as _85 from "./evidence/v1beta1/evidence";
import * as _86 from "./evidence/v1beta1/genesis";
import * as _87 from "./evidence/v1beta1/query";
import * as _88 from "./evidence/v1beta1/tx";
import * as _89 from "./feegrant/v1beta1/feegrant";
import * as _90 from "./feegrant/v1beta1/genesis";
import * as _91 from "./feegrant/v1beta1/query";
import * as _92 from "./feegrant/v1beta1/tx";
import * as _93 from "./genutil/v1beta1/genesis";
import * as _94 from "./gov/v1/genesis";
import * as _95 from "./gov/v1/gov";
import * as _96 from "./gov/v1/query";
import * as _97 from "./gov/v1/tx";
import * as _98 from "./gov/v1beta1/genesis";
import * as _99 from "./gov/v1beta1/gov";
import * as _100 from "./gov/v1beta1/query";
import * as _101 from "./gov/v1beta1/tx";
import * as _102 from "./group/v1/events";
import * as _103 from "./group/v1/genesis";
import * as _104 from "./group/v1/query";
import * as _105 from "./group/v1/tx";
import * as _106 from "./group/v1/types";
import * as _107 from "./mint/v1beta1/genesis";
import * as _108 from "./mint/v1beta1/mint";
import * as _109 from "./mint/v1beta1/query";
import * as _111 from "./nft/v1beta1/event";
import * as _112 from "./nft/v1beta1/genesis";
import * as _113 from "./nft/v1beta1/nft";
import * as _114 from "./nft/v1beta1/query";
import * as _115 from "./nft/v1beta1/tx";
import * as _116 from "./orm/module/v1alpha1/module";
import * as _117 from "./orm/v1/orm";
import * as _118 from "./orm/v1alpha1/schema";
import * as _119 from "./params/v1beta1/params";
import * as _120 from "./params/v1beta1/query";
import * as _121 from "./slashing/v1beta1/genesis";
import * as _122 from "./slashing/v1beta1/query";
import * as _123 from "./slashing/v1beta1/slashing";
import * as _124 from "./slashing/v1beta1/tx";
import * as _125 from "./tx/signing/v1beta1/signing";
import * as _126 from "./tx/v1beta1/service";
import * as _127 from "./tx/v1beta1/tx";
import * as _128 from "./upgrade/v1beta1/query";
import * as _129 from "./upgrade/v1beta1/tx";
import * as _130 from "./upgrade/v1beta1/upgrade";
import * as _131 from "./vesting/v1beta1/tx";
import * as _132 from "./vesting/v1beta1/vesting";
import * as _252 from "./auth/v1beta1/query.lcd";
import * as _253 from "./authz/v1beta1/query.lcd";
import * as _254 from "./bank/v1beta1/query.lcd";
import * as _255 from "./base/node/v1beta1/query.lcd";
import * as _256 from "./base/tendermint/v1beta1/query.lcd";
import * as _257 from "./distribution/v1beta1/query.lcd";
import * as _258 from "./evidence/v1beta1/query.lcd";
import * as _259 from "./feegrant/v1beta1/query.lcd";
import * as _260 from "./gov/v1/query.lcd";
import * as _261 from "./gov/v1beta1/query.lcd";
import * as _262 from "./group/v1/query.lcd";
import * as _263 from "./mint/v1beta1/query.lcd";
import * as _264 from "./nft/v1beta1/query.lcd";
import * as _265 from "./params/v1beta1/query.lcd";
import * as _266 from "./slashing/v1beta1/query.lcd";
import * as _267 from "./staking/v1beta1/query.lcd";
import * as _268 from "./tx/v1beta1/service.lcd";
import * as _269 from "./upgrade/v1beta1/query.lcd";
import * as _270 from "./app/v1alpha1/query.rpc.Query";
import * as _271 from "./auth/v1beta1/query.rpc.Query";
import * as _272 from "./authz/v1beta1/query.rpc.Query";
import * as _273 from "./bank/v1beta1/query.rpc.Query";
import * as _274 from "./base/node/v1beta1/query.rpc.Service";
import * as _275 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _276 from "./distribution/v1beta1/query.rpc.Query";
import * as _277 from "./evidence/v1beta1/query.rpc.Query";
import * as _278 from "./feegrant/v1beta1/query.rpc.Query";
import * as _279 from "./gov/v1/query.rpc.Query";
import * as _280 from "./gov/v1beta1/query.rpc.Query";
import * as _281 from "./group/v1/query.rpc.Query";
import * as _282 from "./mint/v1beta1/query.rpc.Query";
import * as _283 from "./nft/v1beta1/query.rpc.Query";
import * as _284 from "./params/v1beta1/query.rpc.Query";
import * as _285 from "./slashing/v1beta1/query.rpc.Query";
import * as _286 from "./staking/v1beta1/query.rpc.Query";
import * as _287 from "./tx/v1beta1/service.rpc.Service";
import * as _288 from "./upgrade/v1beta1/query.rpc.Query";
import * as _289 from "./authz/v1beta1/tx.rpc.msg";
import * as _290 from "./bank/v1beta1/tx.rpc.msg";
import * as _291 from "./crisis/v1beta1/tx.rpc.msg";
import * as _292 from "./distribution/v1beta1/tx.rpc.msg";
import * as _293 from "./evidence/v1beta1/tx.rpc.msg";
import * as _294 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _295 from "./gov/v1/tx.rpc.msg";
import * as _296 from "./gov/v1beta1/tx.rpc.msg";
import * as _297 from "./group/v1/tx.rpc.msg";
import * as _298 from "./nft/v1beta1/tx.rpc.msg";
import * as _299 from "./slashing/v1beta1/tx.rpc.msg";
import * as _300 from "./staking/v1beta1/tx.rpc.msg";
import * as _301 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _302 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _286.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _38.QueryValidatorsRequest): Promise<_38.QueryValidatorsResponse>;
                validator(request: _38.QueryValidatorRequest): Promise<_38.QueryValidatorResponse>;
                validatorDelegations(request: _38.QueryValidatorDelegationsRequest): Promise<_38.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _38.QueryValidatorUnbondingDelegationsRequest): Promise<_38.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _38.QueryDelegationRequest): Promise<_38.QueryDelegationResponse>;
                unbondingDelegation(request: _38.QueryUnbondingDelegationRequest): Promise<_38.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _38.QueryDelegatorDelegationsRequest): Promise<_38.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _38.QueryDelegatorUnbondingDelegationsRequest): Promise<_38.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _38.QueryRedelegationsRequest): Promise<_38.QueryRedelegationsResponse>;
                delegatorValidators(request: _38.QueryDelegatorValidatorsRequest): Promise<_38.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _38.QueryDelegatorValidatorRequest): Promise<_38.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _38.QueryHistoricalInfoRequest): Promise<_38.QueryHistoricalInfoResponse>;
                pool(request?: _38.QueryPoolRequest): Promise<_38.QueryPoolResponse>;
                params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _267.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _40.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _40.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _40.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _40.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _40.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _40.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _40.MsgCreateValidator): {
                        typeUrl: string;
                        value: _40.MsgCreateValidator;
                    };
                    editValidator(value: _40.MsgEditValidator): {
                        typeUrl: string;
                        value: _40.MsgEditValidator;
                    };
                    delegate(value: _40.MsgDelegate): {
                        typeUrl: string;
                        value: _40.MsgDelegate;
                    };
                    beginRedelegate(value: _40.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _40.MsgBeginRedelegate;
                    };
                    undelegate(value: _40.MsgUndelegate): {
                        typeUrl: string;
                        value: _40.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _40.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _40.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _40.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _40.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _40.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _40.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _40.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _40.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _40.MsgCreateValidator): {
                        typeUrl: string;
                        value: _40.MsgCreateValidator;
                    };
                    editValidator(value: _40.MsgEditValidator): {
                        typeUrl: string;
                        value: _40.MsgEditValidator;
                    };
                    delegate(value: _40.MsgDelegate): {
                        typeUrl: string;
                        value: _40.MsgDelegate;
                    };
                    beginRedelegate(value: _40.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _40.MsgBeginRedelegate;
                    };
                    undelegate(value: _40.MsgUndelegate): {
                        typeUrl: string;
                        value: _40.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _40.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _40.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _40.MsgCreateValidator) => _40.MsgCreateValidatorAmino;
                    fromAmino: (object: _40.MsgCreateValidatorAmino) => _40.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _40.MsgEditValidator) => _40.MsgEditValidatorAmino;
                    fromAmino: (object: _40.MsgEditValidatorAmino) => _40.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _40.MsgDelegate) => _40.MsgDelegateAmino;
                    fromAmino: (object: _40.MsgDelegateAmino) => _40.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _40.MsgBeginRedelegate) => _40.MsgBeginRedelegateAmino;
                    fromAmino: (object: _40.MsgBeginRedelegateAmino) => _40.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _40.MsgUndelegate) => _40.MsgUndelegateAmino;
                    fromAmino: (object: _40.MsgUndelegateAmino) => _40.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _40.MsgCancelUnbondingDelegation) => _40.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _40.MsgCancelUnbondingDelegationAmino) => _40.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _40.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgCreateValidator;
                fromPartial(object: Partial<_40.MsgCreateValidator>): _40.MsgCreateValidator;
                fromAmino(object: _40.MsgCreateValidatorAmino): _40.MsgCreateValidator;
                toAmino(message: _40.MsgCreateValidator): _40.MsgCreateValidatorAmino;
                fromAminoMsg(object: _40.MsgCreateValidatorAminoMsg): _40.MsgCreateValidator;
                toAminoMsg(message: _40.MsgCreateValidator): _40.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _40.MsgCreateValidatorProtoMsg): _40.MsgCreateValidator;
                toProto(message: _40.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _40.MsgCreateValidator): _40.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _40.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_40.MsgCreateValidatorResponse>): _40.MsgCreateValidatorResponse;
                fromAmino(_: _40.MsgCreateValidatorResponseAmino): _40.MsgCreateValidatorResponse;
                toAmino(_: _40.MsgCreateValidatorResponse): _40.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _40.MsgCreateValidatorResponseAminoMsg): _40.MsgCreateValidatorResponse;
                toAminoMsg(message: _40.MsgCreateValidatorResponse): _40.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _40.MsgCreateValidatorResponseProtoMsg): _40.MsgCreateValidatorResponse;
                toProto(message: _40.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _40.MsgCreateValidatorResponse): _40.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _40.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgEditValidator;
                fromPartial(object: Partial<_40.MsgEditValidator>): _40.MsgEditValidator;
                fromAmino(object: _40.MsgEditValidatorAmino): _40.MsgEditValidator;
                toAmino(message: _40.MsgEditValidator): _40.MsgEditValidatorAmino;
                fromAminoMsg(object: _40.MsgEditValidatorAminoMsg): _40.MsgEditValidator;
                toAminoMsg(message: _40.MsgEditValidator): _40.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _40.MsgEditValidatorProtoMsg): _40.MsgEditValidator;
                toProto(message: _40.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _40.MsgEditValidator): _40.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _40.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgEditValidatorResponse;
                fromPartial(_: Partial<_40.MsgEditValidatorResponse>): _40.MsgEditValidatorResponse;
                fromAmino(_: _40.MsgEditValidatorResponseAmino): _40.MsgEditValidatorResponse;
                toAmino(_: _40.MsgEditValidatorResponse): _40.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _40.MsgEditValidatorResponseAminoMsg): _40.MsgEditValidatorResponse;
                toAminoMsg(message: _40.MsgEditValidatorResponse): _40.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _40.MsgEditValidatorResponseProtoMsg): _40.MsgEditValidatorResponse;
                toProto(message: _40.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _40.MsgEditValidatorResponse): _40.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _40.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgDelegate;
                fromPartial(object: Partial<_40.MsgDelegate>): _40.MsgDelegate;
                fromAmino(object: _40.MsgDelegateAmino): _40.MsgDelegate;
                toAmino(message: _40.MsgDelegate): _40.MsgDelegateAmino;
                fromAminoMsg(object: _40.MsgDelegateAminoMsg): _40.MsgDelegate;
                toAminoMsg(message: _40.MsgDelegate): _40.MsgDelegateAminoMsg;
                fromProtoMsg(message: _40.MsgDelegateProtoMsg): _40.MsgDelegate;
                toProto(message: _40.MsgDelegate): Uint8Array;
                toProtoMsg(message: _40.MsgDelegate): _40.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _40.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgDelegateResponse;
                fromPartial(_: Partial<_40.MsgDelegateResponse>): _40.MsgDelegateResponse;
                fromAmino(_: _40.MsgDelegateResponseAmino): _40.MsgDelegateResponse;
                toAmino(_: _40.MsgDelegateResponse): _40.MsgDelegateResponseAmino;
                fromAminoMsg(object: _40.MsgDelegateResponseAminoMsg): _40.MsgDelegateResponse;
                toAminoMsg(message: _40.MsgDelegateResponse): _40.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _40.MsgDelegateResponseProtoMsg): _40.MsgDelegateResponse;
                toProto(message: _40.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _40.MsgDelegateResponse): _40.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _40.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgBeginRedelegate;
                fromPartial(object: Partial<_40.MsgBeginRedelegate>): _40.MsgBeginRedelegate;
                fromAmino(object: _40.MsgBeginRedelegateAmino): _40.MsgBeginRedelegate;
                toAmino(message: _40.MsgBeginRedelegate): _40.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _40.MsgBeginRedelegateAminoMsg): _40.MsgBeginRedelegate;
                toAminoMsg(message: _40.MsgBeginRedelegate): _40.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _40.MsgBeginRedelegateProtoMsg): _40.MsgBeginRedelegate;
                toProto(message: _40.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _40.MsgBeginRedelegate): _40.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _40.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_40.MsgBeginRedelegateResponse>): _40.MsgBeginRedelegateResponse;
                fromAmino(object: _40.MsgBeginRedelegateResponseAmino): _40.MsgBeginRedelegateResponse;
                toAmino(message: _40.MsgBeginRedelegateResponse): _40.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _40.MsgBeginRedelegateResponseAminoMsg): _40.MsgBeginRedelegateResponse;
                toAminoMsg(message: _40.MsgBeginRedelegateResponse): _40.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _40.MsgBeginRedelegateResponseProtoMsg): _40.MsgBeginRedelegateResponse;
                toProto(message: _40.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _40.MsgBeginRedelegateResponse): _40.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _40.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgUndelegate;
                fromPartial(object: Partial<_40.MsgUndelegate>): _40.MsgUndelegate;
                fromAmino(object: _40.MsgUndelegateAmino): _40.MsgUndelegate;
                toAmino(message: _40.MsgUndelegate): _40.MsgUndelegateAmino;
                fromAminoMsg(object: _40.MsgUndelegateAminoMsg): _40.MsgUndelegate;
                toAminoMsg(message: _40.MsgUndelegate): _40.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _40.MsgUndelegateProtoMsg): _40.MsgUndelegate;
                toProto(message: _40.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _40.MsgUndelegate): _40.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _40.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgUndelegateResponse;
                fromPartial(object: Partial<_40.MsgUndelegateResponse>): _40.MsgUndelegateResponse;
                fromAmino(object: _40.MsgUndelegateResponseAmino): _40.MsgUndelegateResponse;
                toAmino(message: _40.MsgUndelegateResponse): _40.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _40.MsgUndelegateResponseAminoMsg): _40.MsgUndelegateResponse;
                toAminoMsg(message: _40.MsgUndelegateResponse): _40.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _40.MsgUndelegateResponseProtoMsg): _40.MsgUndelegateResponse;
                toProto(message: _40.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _40.MsgUndelegateResponse): _40.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _40.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_40.MsgCancelUnbondingDelegation>): _40.MsgCancelUnbondingDelegation;
                fromAmino(object: _40.MsgCancelUnbondingDelegationAmino): _40.MsgCancelUnbondingDelegation;
                toAmino(message: _40.MsgCancelUnbondingDelegation): _40.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _40.MsgCancelUnbondingDelegationAminoMsg): _40.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _40.MsgCancelUnbondingDelegation): _40.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _40.MsgCancelUnbondingDelegationProtoMsg): _40.MsgCancelUnbondingDelegation;
                toProto(message: _40.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _40.MsgCancelUnbondingDelegation): _40.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _40.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_40.MsgCancelUnbondingDelegationResponse>): _40.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _40.MsgCancelUnbondingDelegationResponseAmino): _40.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _40.MsgCancelUnbondingDelegationResponse): _40.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _40.MsgCancelUnbondingDelegationResponseAminoMsg): _40.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _40.MsgCancelUnbondingDelegationResponse): _40.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _40.MsgCancelUnbondingDelegationResponseProtoMsg): _40.MsgCancelUnbondingDelegationResponse;
                toProto(message: _40.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _40.MsgCancelUnbondingDelegationResponse): _40.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _39.BondStatus;
            bondStatusToJSON(object: _39.BondStatus): string;
            BondStatus: typeof _39.BondStatus;
            BondStatusSDKType: typeof _39.BondStatus;
            BondStatusAmino: typeof _39.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _39.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.HistoricalInfo;
                fromPartial(object: Partial<_39.HistoricalInfo>): _39.HistoricalInfo;
                fromAmino(object: _39.HistoricalInfoAmino): _39.HistoricalInfo;
                toAmino(message: _39.HistoricalInfo): _39.HistoricalInfoAmino;
                fromAminoMsg(object: _39.HistoricalInfoAminoMsg): _39.HistoricalInfo;
                toAminoMsg(message: _39.HistoricalInfo): _39.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _39.HistoricalInfoProtoMsg): _39.HistoricalInfo;
                toProto(message: _39.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _39.HistoricalInfo): _39.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _39.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.CommissionRates;
                fromPartial(object: Partial<_39.CommissionRates>): _39.CommissionRates;
                fromAmino(object: _39.CommissionRatesAmino): _39.CommissionRates;
                toAmino(message: _39.CommissionRates): _39.CommissionRatesAmino;
                fromAminoMsg(object: _39.CommissionRatesAminoMsg): _39.CommissionRates;
                toAminoMsg(message: _39.CommissionRates): _39.CommissionRatesAminoMsg;
                fromProtoMsg(message: _39.CommissionRatesProtoMsg): _39.CommissionRates;
                toProto(message: _39.CommissionRates): Uint8Array;
                toProtoMsg(message: _39.CommissionRates): _39.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _39.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Commission;
                fromPartial(object: Partial<_39.Commission>): _39.Commission;
                fromAmino(object: _39.CommissionAmino): _39.Commission;
                toAmino(message: _39.Commission): _39.CommissionAmino;
                fromAminoMsg(object: _39.CommissionAminoMsg): _39.Commission;
                toAminoMsg(message: _39.Commission): _39.CommissionAminoMsg;
                fromProtoMsg(message: _39.CommissionProtoMsg): _39.Commission;
                toProto(message: _39.Commission): Uint8Array;
                toProtoMsg(message: _39.Commission): _39.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _39.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Description;
                fromPartial(object: Partial<_39.Description>): _39.Description;
                fromAmino(object: _39.DescriptionAmino): _39.Description;
                toAmino(message: _39.Description): _39.DescriptionAmino;
                fromAminoMsg(object: _39.DescriptionAminoMsg): _39.Description;
                toAminoMsg(message: _39.Description): _39.DescriptionAminoMsg;
                fromProtoMsg(message: _39.DescriptionProtoMsg): _39.Description;
                toProto(message: _39.Description): Uint8Array;
                toProtoMsg(message: _39.Description): _39.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _39.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Validator;
                fromPartial(object: Partial<_39.Validator>): _39.Validator;
                fromAmino(object: _39.ValidatorAmino): _39.Validator;
                toAmino(message: _39.Validator): _39.ValidatorAmino;
                fromAminoMsg(object: _39.ValidatorAminoMsg): _39.Validator;
                toAminoMsg(message: _39.Validator): _39.ValidatorAminoMsg;
                fromProtoMsg(message: _39.ValidatorProtoMsg): _39.Validator;
                toProto(message: _39.Validator): Uint8Array;
                toProtoMsg(message: _39.Validator): _39.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _39.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.ValAddresses;
                fromPartial(object: Partial<_39.ValAddresses>): _39.ValAddresses;
                fromAmino(object: _39.ValAddressesAmino): _39.ValAddresses;
                toAmino(message: _39.ValAddresses): _39.ValAddressesAmino;
                fromAminoMsg(object: _39.ValAddressesAminoMsg): _39.ValAddresses;
                toAminoMsg(message: _39.ValAddresses): _39.ValAddressesAminoMsg;
                fromProtoMsg(message: _39.ValAddressesProtoMsg): _39.ValAddresses;
                toProto(message: _39.ValAddresses): Uint8Array;
                toProtoMsg(message: _39.ValAddresses): _39.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _39.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DVPair;
                fromPartial(object: Partial<_39.DVPair>): _39.DVPair;
                fromAmino(object: _39.DVPairAmino): _39.DVPair;
                toAmino(message: _39.DVPair): _39.DVPairAmino;
                fromAminoMsg(object: _39.DVPairAminoMsg): _39.DVPair;
                toAminoMsg(message: _39.DVPair): _39.DVPairAminoMsg;
                fromProtoMsg(message: _39.DVPairProtoMsg): _39.DVPair;
                toProto(message: _39.DVPair): Uint8Array;
                toProtoMsg(message: _39.DVPair): _39.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _39.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DVPairs;
                fromPartial(object: Partial<_39.DVPairs>): _39.DVPairs;
                fromAmino(object: _39.DVPairsAmino): _39.DVPairs;
                toAmino(message: _39.DVPairs): _39.DVPairsAmino;
                fromAminoMsg(object: _39.DVPairsAminoMsg): _39.DVPairs;
                toAminoMsg(message: _39.DVPairs): _39.DVPairsAminoMsg;
                fromProtoMsg(message: _39.DVPairsProtoMsg): _39.DVPairs;
                toProto(message: _39.DVPairs): Uint8Array;
                toProtoMsg(message: _39.DVPairs): _39.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _39.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DVVTriplet;
                fromPartial(object: Partial<_39.DVVTriplet>): _39.DVVTriplet;
                fromAmino(object: _39.DVVTripletAmino): _39.DVVTriplet;
                toAmino(message: _39.DVVTriplet): _39.DVVTripletAmino;
                fromAminoMsg(object: _39.DVVTripletAminoMsg): _39.DVVTriplet;
                toAminoMsg(message: _39.DVVTriplet): _39.DVVTripletAminoMsg;
                fromProtoMsg(message: _39.DVVTripletProtoMsg): _39.DVVTriplet;
                toProto(message: _39.DVVTriplet): Uint8Array;
                toProtoMsg(message: _39.DVVTriplet): _39.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _39.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DVVTriplets;
                fromPartial(object: Partial<_39.DVVTriplets>): _39.DVVTriplets;
                fromAmino(object: _39.DVVTripletsAmino): _39.DVVTriplets;
                toAmino(message: _39.DVVTriplets): _39.DVVTripletsAmino;
                fromAminoMsg(object: _39.DVVTripletsAminoMsg): _39.DVVTriplets;
                toAminoMsg(message: _39.DVVTriplets): _39.DVVTripletsAminoMsg;
                fromProtoMsg(message: _39.DVVTripletsProtoMsg): _39.DVVTriplets;
                toProto(message: _39.DVVTriplets): Uint8Array;
                toProtoMsg(message: _39.DVVTriplets): _39.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _39.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Delegation;
                fromPartial(object: Partial<_39.Delegation>): _39.Delegation;
                fromAmino(object: _39.DelegationAmino): _39.Delegation;
                toAmino(message: _39.Delegation): _39.DelegationAmino;
                fromAminoMsg(object: _39.DelegationAminoMsg): _39.Delegation;
                toAminoMsg(message: _39.Delegation): _39.DelegationAminoMsg;
                fromProtoMsg(message: _39.DelegationProtoMsg): _39.Delegation;
                toProto(message: _39.Delegation): Uint8Array;
                toProtoMsg(message: _39.Delegation): _39.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _39.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.UnbondingDelegation;
                fromPartial(object: Partial<_39.UnbondingDelegation>): _39.UnbondingDelegation;
                fromAmino(object: _39.UnbondingDelegationAmino): _39.UnbondingDelegation;
                toAmino(message: _39.UnbondingDelegation): _39.UnbondingDelegationAmino;
                fromAminoMsg(object: _39.UnbondingDelegationAminoMsg): _39.UnbondingDelegation;
                toAminoMsg(message: _39.UnbondingDelegation): _39.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _39.UnbondingDelegationProtoMsg): _39.UnbondingDelegation;
                toProto(message: _39.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _39.UnbondingDelegation): _39.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _39.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.UnbondingDelegationEntry;
                fromPartial(object: Partial<_39.UnbondingDelegationEntry>): _39.UnbondingDelegationEntry;
                fromAmino(object: _39.UnbondingDelegationEntryAmino): _39.UnbondingDelegationEntry;
                toAmino(message: _39.UnbondingDelegationEntry): _39.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _39.UnbondingDelegationEntryAminoMsg): _39.UnbondingDelegationEntry;
                toAminoMsg(message: _39.UnbondingDelegationEntry): _39.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _39.UnbondingDelegationEntryProtoMsg): _39.UnbondingDelegationEntry;
                toProto(message: _39.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _39.UnbondingDelegationEntry): _39.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _39.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.RedelegationEntry;
                fromPartial(object: Partial<_39.RedelegationEntry>): _39.RedelegationEntry;
                fromAmino(object: _39.RedelegationEntryAmino): _39.RedelegationEntry;
                toAmino(message: _39.RedelegationEntry): _39.RedelegationEntryAmino;
                fromAminoMsg(object: _39.RedelegationEntryAminoMsg): _39.RedelegationEntry;
                toAminoMsg(message: _39.RedelegationEntry): _39.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _39.RedelegationEntryProtoMsg): _39.RedelegationEntry;
                toProto(message: _39.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _39.RedelegationEntry): _39.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _39.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Redelegation;
                fromPartial(object: Partial<_39.Redelegation>): _39.Redelegation;
                fromAmino(object: _39.RedelegationAmino): _39.Redelegation;
                toAmino(message: _39.Redelegation): _39.RedelegationAmino;
                fromAminoMsg(object: _39.RedelegationAminoMsg): _39.Redelegation;
                toAminoMsg(message: _39.Redelegation): _39.RedelegationAminoMsg;
                fromProtoMsg(message: _39.RedelegationProtoMsg): _39.Redelegation;
                toProto(message: _39.Redelegation): Uint8Array;
                toProtoMsg(message: _39.Redelegation): _39.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _39.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                toAminoMsg(message: _39.Params): _39.ParamsAminoMsg;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _39.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.DelegationResponse;
                fromPartial(object: Partial<_39.DelegationResponse>): _39.DelegationResponse;
                fromAmino(object: _39.DelegationResponseAmino): _39.DelegationResponse;
                toAmino(message: _39.DelegationResponse): _39.DelegationResponseAmino;
                fromAminoMsg(object: _39.DelegationResponseAminoMsg): _39.DelegationResponse;
                toAminoMsg(message: _39.DelegationResponse): _39.DelegationResponseAminoMsg;
                fromProtoMsg(message: _39.DelegationResponseProtoMsg): _39.DelegationResponse;
                toProto(message: _39.DelegationResponse): Uint8Array;
                toProtoMsg(message: _39.DelegationResponse): _39.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _39.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.RedelegationEntryResponse;
                fromPartial(object: Partial<_39.RedelegationEntryResponse>): _39.RedelegationEntryResponse;
                fromAmino(object: _39.RedelegationEntryResponseAmino): _39.RedelegationEntryResponse;
                toAmino(message: _39.RedelegationEntryResponse): _39.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _39.RedelegationEntryResponseAminoMsg): _39.RedelegationEntryResponse;
                toAminoMsg(message: _39.RedelegationEntryResponse): _39.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _39.RedelegationEntryResponseProtoMsg): _39.RedelegationEntryResponse;
                toProto(message: _39.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _39.RedelegationEntryResponse): _39.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _39.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.RedelegationResponse;
                fromPartial(object: Partial<_39.RedelegationResponse>): _39.RedelegationResponse;
                fromAmino(object: _39.RedelegationResponseAmino): _39.RedelegationResponse;
                toAmino(message: _39.RedelegationResponse): _39.RedelegationResponseAmino;
                fromAminoMsg(object: _39.RedelegationResponseAminoMsg): _39.RedelegationResponse;
                toAminoMsg(message: _39.RedelegationResponse): _39.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _39.RedelegationResponseProtoMsg): _39.RedelegationResponse;
                toProto(message: _39.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _39.RedelegationResponse): _39.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _39.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Pool;
                fromPartial(object: Partial<_39.Pool>): _39.Pool;
                fromAmino(object: _39.PoolAmino): _39.Pool;
                toAmino(message: _39.Pool): _39.PoolAmino;
                fromAminoMsg(object: _39.PoolAminoMsg): _39.Pool;
                toAminoMsg(message: _39.Pool): _39.PoolAminoMsg;
                fromProtoMsg(message: _39.PoolProtoMsg): _39.Pool;
                toProto(message: _39.Pool): Uint8Array;
                toProtoMsg(message: _39.Pool): _39.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _38.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryValidatorsRequest;
                fromPartial(object: Partial<_38.QueryValidatorsRequest>): _38.QueryValidatorsRequest;
                fromAmino(object: _38.QueryValidatorsRequestAmino): _38.QueryValidatorsRequest;
                toAmino(message: _38.QueryValidatorsRequest): _38.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorsRequestAminoMsg): _38.QueryValidatorsRequest;
                toAminoMsg(message: _38.QueryValidatorsRequest): _38.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorsRequestProtoMsg): _38.QueryValidatorsRequest;
                toProto(message: _38.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorsRequest): _38.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _38.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryValidatorsResponse;
                fromPartial(object: Partial<_38.QueryValidatorsResponse>): _38.QueryValidatorsResponse;
                fromAmino(object: _38.QueryValidatorsResponseAmino): _38.QueryValidatorsResponse;
                toAmino(message: _38.QueryValidatorsResponse): _38.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorsResponseAminoMsg): _38.QueryValidatorsResponse;
                toAminoMsg(message: _38.QueryValidatorsResponse): _38.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorsResponseProtoMsg): _38.QueryValidatorsResponse;
                toProto(message: _38.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorsResponse): _38.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _38.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryValidatorRequest;
                fromPartial(object: Partial<_38.QueryValidatorRequest>): _38.QueryValidatorRequest;
                fromAmino(object: _38.QueryValidatorRequestAmino): _38.QueryValidatorRequest;
                toAmino(message: _38.QueryValidatorRequest): _38.QueryValidatorRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorRequestAminoMsg): _38.QueryValidatorRequest;
                toAminoMsg(message: _38.QueryValidatorRequest): _38.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorRequestProtoMsg): _38.QueryValidatorRequest;
                toProto(message: _38.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorRequest): _38.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _38.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryValidatorResponse;
                fromPartial(object: Partial<_38.QueryValidatorResponse>): _38.QueryValidatorResponse;
                fromAmino(object: _38.QueryValidatorResponseAmino): _38.QueryValidatorResponse;
                toAmino(message: _38.QueryValidatorResponse): _38.QueryValidatorResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorResponseAminoMsg): _38.QueryValidatorResponse;
                toAminoMsg(message: _38.QueryValidatorResponse): _38.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorResponseProtoMsg): _38.QueryValidatorResponse;
                toProto(message: _38.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorResponse): _38.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _38.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_38.QueryValidatorDelegationsRequest>): _38.QueryValidatorDelegationsRequest;
                fromAmino(object: _38.QueryValidatorDelegationsRequestAmino): _38.QueryValidatorDelegationsRequest;
                toAmino(message: _38.QueryValidatorDelegationsRequest): _38.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorDelegationsRequestAminoMsg): _38.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _38.QueryValidatorDelegationsRequest): _38.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorDelegationsRequestProtoMsg): _38.QueryValidatorDelegationsRequest;
                toProto(message: _38.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorDelegationsRequest): _38.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _38.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_38.QueryValidatorDelegationsResponse>): _38.QueryValidatorDelegationsResponse;
                fromAmino(object: _38.QueryValidatorDelegationsResponseAmino): _38.QueryValidatorDelegationsResponse;
                toAmino(message: _38.QueryValidatorDelegationsResponse): _38.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorDelegationsResponseAminoMsg): _38.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _38.QueryValidatorDelegationsResponse): _38.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorDelegationsResponseProtoMsg): _38.QueryValidatorDelegationsResponse;
                toProto(message: _38.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorDelegationsResponse): _38.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _38.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_38.QueryValidatorUnbondingDelegationsRequest>): _38.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _38.QueryValidatorUnbondingDelegationsRequestAmino): _38.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _38.QueryValidatorUnbondingDelegationsRequest): _38.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryValidatorUnbondingDelegationsRequestAminoMsg): _38.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _38.QueryValidatorUnbondingDelegationsRequest): _38.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorUnbondingDelegationsRequestProtoMsg): _38.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _38.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorUnbondingDelegationsRequest): _38.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _38.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_38.QueryValidatorUnbondingDelegationsResponse>): _38.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _38.QueryValidatorUnbondingDelegationsResponseAmino): _38.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _38.QueryValidatorUnbondingDelegationsResponse): _38.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryValidatorUnbondingDelegationsResponseAminoMsg): _38.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _38.QueryValidatorUnbondingDelegationsResponse): _38.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryValidatorUnbondingDelegationsResponseProtoMsg): _38.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _38.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryValidatorUnbondingDelegationsResponse): _38.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _38.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegationRequest;
                fromPartial(object: Partial<_38.QueryDelegationRequest>): _38.QueryDelegationRequest;
                fromAmino(object: _38.QueryDelegationRequestAmino): _38.QueryDelegationRequest;
                toAmino(message: _38.QueryDelegationRequest): _38.QueryDelegationRequestAmino;
                fromAminoMsg(object: _38.QueryDelegationRequestAminoMsg): _38.QueryDelegationRequest;
                toAminoMsg(message: _38.QueryDelegationRequest): _38.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegationRequestProtoMsg): _38.QueryDelegationRequest;
                toProto(message: _38.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegationRequest): _38.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _38.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegationResponse;
                fromPartial(object: Partial<_38.QueryDelegationResponse>): _38.QueryDelegationResponse;
                fromAmino(object: _38.QueryDelegationResponseAmino): _38.QueryDelegationResponse;
                toAmino(message: _38.QueryDelegationResponse): _38.QueryDelegationResponseAmino;
                fromAminoMsg(object: _38.QueryDelegationResponseAminoMsg): _38.QueryDelegationResponse;
                toAminoMsg(message: _38.QueryDelegationResponse): _38.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegationResponseProtoMsg): _38.QueryDelegationResponse;
                toProto(message: _38.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegationResponse): _38.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _38.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_38.QueryUnbondingDelegationRequest>): _38.QueryUnbondingDelegationRequest;
                fromAmino(object: _38.QueryUnbondingDelegationRequestAmino): _38.QueryUnbondingDelegationRequest;
                toAmino(message: _38.QueryUnbondingDelegationRequest): _38.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _38.QueryUnbondingDelegationRequestAminoMsg): _38.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _38.QueryUnbondingDelegationRequest): _38.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _38.QueryUnbondingDelegationRequestProtoMsg): _38.QueryUnbondingDelegationRequest;
                toProto(message: _38.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _38.QueryUnbondingDelegationRequest): _38.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _38.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_38.QueryUnbondingDelegationResponse>): _38.QueryUnbondingDelegationResponse;
                fromAmino(object: _38.QueryUnbondingDelegationResponseAmino): _38.QueryUnbondingDelegationResponse;
                toAmino(message: _38.QueryUnbondingDelegationResponse): _38.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _38.QueryUnbondingDelegationResponseAminoMsg): _38.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _38.QueryUnbondingDelegationResponse): _38.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _38.QueryUnbondingDelegationResponseProtoMsg): _38.QueryUnbondingDelegationResponse;
                toProto(message: _38.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _38.QueryUnbondingDelegationResponse): _38.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _38.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_38.QueryDelegatorDelegationsRequest>): _38.QueryDelegatorDelegationsRequest;
                fromAmino(object: _38.QueryDelegatorDelegationsRequestAmino): _38.QueryDelegatorDelegationsRequest;
                toAmino(message: _38.QueryDelegatorDelegationsRequest): _38.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorDelegationsRequestAminoMsg): _38.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _38.QueryDelegatorDelegationsRequest): _38.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorDelegationsRequestProtoMsg): _38.QueryDelegatorDelegationsRequest;
                toProto(message: _38.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorDelegationsRequest): _38.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _38.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_38.QueryDelegatorDelegationsResponse>): _38.QueryDelegatorDelegationsResponse;
                fromAmino(object: _38.QueryDelegatorDelegationsResponseAmino): _38.QueryDelegatorDelegationsResponse;
                toAmino(message: _38.QueryDelegatorDelegationsResponse): _38.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorDelegationsResponseAminoMsg): _38.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _38.QueryDelegatorDelegationsResponse): _38.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorDelegationsResponseProtoMsg): _38.QueryDelegatorDelegationsResponse;
                toProto(message: _38.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorDelegationsResponse): _38.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _38.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_38.QueryDelegatorUnbondingDelegationsRequest>): _38.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _38.QueryDelegatorUnbondingDelegationsRequestAmino): _38.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _38.QueryDelegatorUnbondingDelegationsRequest): _38.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _38.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _38.QueryDelegatorUnbondingDelegationsRequest): _38.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _38.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _38.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsRequest): _38.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _38.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_38.QueryDelegatorUnbondingDelegationsResponse>): _38.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _38.QueryDelegatorUnbondingDelegationsResponseAmino): _38.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _38.QueryDelegatorUnbondingDelegationsResponse): _38.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _38.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _38.QueryDelegatorUnbondingDelegationsResponse): _38.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _38.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _38.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorUnbondingDelegationsResponse): _38.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _38.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryRedelegationsRequest;
                fromPartial(object: Partial<_38.QueryRedelegationsRequest>): _38.QueryRedelegationsRequest;
                fromAmino(object: _38.QueryRedelegationsRequestAmino): _38.QueryRedelegationsRequest;
                toAmino(message: _38.QueryRedelegationsRequest): _38.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _38.QueryRedelegationsRequestAminoMsg): _38.QueryRedelegationsRequest;
                toAminoMsg(message: _38.QueryRedelegationsRequest): _38.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryRedelegationsRequestProtoMsg): _38.QueryRedelegationsRequest;
                toProto(message: _38.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryRedelegationsRequest): _38.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _38.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryRedelegationsResponse;
                fromPartial(object: Partial<_38.QueryRedelegationsResponse>): _38.QueryRedelegationsResponse;
                fromAmino(object: _38.QueryRedelegationsResponseAmino): _38.QueryRedelegationsResponse;
                toAmino(message: _38.QueryRedelegationsResponse): _38.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _38.QueryRedelegationsResponseAminoMsg): _38.QueryRedelegationsResponse;
                toAminoMsg(message: _38.QueryRedelegationsResponse): _38.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryRedelegationsResponseProtoMsg): _38.QueryRedelegationsResponse;
                toProto(message: _38.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryRedelegationsResponse): _38.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _38.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_38.QueryDelegatorValidatorsRequest>): _38.QueryDelegatorValidatorsRequest;
                fromAmino(object: _38.QueryDelegatorValidatorsRequestAmino): _38.QueryDelegatorValidatorsRequest;
                toAmino(message: _38.QueryDelegatorValidatorsRequest): _38.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorsRequestAminoMsg): _38.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _38.QueryDelegatorValidatorsRequest): _38.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorsRequestProtoMsg): _38.QueryDelegatorValidatorsRequest;
                toProto(message: _38.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorsRequest): _38.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _38.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_38.QueryDelegatorValidatorsResponse>): _38.QueryDelegatorValidatorsResponse;
                fromAmino(object: _38.QueryDelegatorValidatorsResponseAmino): _38.QueryDelegatorValidatorsResponse;
                toAmino(message: _38.QueryDelegatorValidatorsResponse): _38.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorsResponseAminoMsg): _38.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _38.QueryDelegatorValidatorsResponse): _38.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorsResponseProtoMsg): _38.QueryDelegatorValidatorsResponse;
                toProto(message: _38.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorsResponse): _38.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _38.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_38.QueryDelegatorValidatorRequest>): _38.QueryDelegatorValidatorRequest;
                fromAmino(object: _38.QueryDelegatorValidatorRequestAmino): _38.QueryDelegatorValidatorRequest;
                toAmino(message: _38.QueryDelegatorValidatorRequest): _38.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorRequestAminoMsg): _38.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _38.QueryDelegatorValidatorRequest): _38.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorRequestProtoMsg): _38.QueryDelegatorValidatorRequest;
                toProto(message: _38.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorRequest): _38.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _38.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_38.QueryDelegatorValidatorResponse>): _38.QueryDelegatorValidatorResponse;
                fromAmino(object: _38.QueryDelegatorValidatorResponseAmino): _38.QueryDelegatorValidatorResponse;
                toAmino(message: _38.QueryDelegatorValidatorResponse): _38.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _38.QueryDelegatorValidatorResponseAminoMsg): _38.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _38.QueryDelegatorValidatorResponse): _38.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDelegatorValidatorResponseProtoMsg): _38.QueryDelegatorValidatorResponse;
                toProto(message: _38.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDelegatorValidatorResponse): _38.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _38.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_38.QueryHistoricalInfoRequest>): _38.QueryHistoricalInfoRequest;
                fromAmino(object: _38.QueryHistoricalInfoRequestAmino): _38.QueryHistoricalInfoRequest;
                toAmino(message: _38.QueryHistoricalInfoRequest): _38.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _38.QueryHistoricalInfoRequestAminoMsg): _38.QueryHistoricalInfoRequest;
                toAminoMsg(message: _38.QueryHistoricalInfoRequest): _38.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _38.QueryHistoricalInfoRequestProtoMsg): _38.QueryHistoricalInfoRequest;
                toProto(message: _38.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _38.QueryHistoricalInfoRequest): _38.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _38.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_38.QueryHistoricalInfoResponse>): _38.QueryHistoricalInfoResponse;
                fromAmino(object: _38.QueryHistoricalInfoResponseAmino): _38.QueryHistoricalInfoResponse;
                toAmino(message: _38.QueryHistoricalInfoResponse): _38.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _38.QueryHistoricalInfoResponseAminoMsg): _38.QueryHistoricalInfoResponse;
                toAminoMsg(message: _38.QueryHistoricalInfoResponse): _38.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _38.QueryHistoricalInfoResponseProtoMsg): _38.QueryHistoricalInfoResponse;
                toProto(message: _38.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _38.QueryHistoricalInfoResponse): _38.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _38.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.QueryPoolRequest;
                fromPartial(_: Partial<_38.QueryPoolRequest>): _38.QueryPoolRequest;
                fromAmino(_: _38.QueryPoolRequestAmino): _38.QueryPoolRequest;
                toAmino(_: _38.QueryPoolRequest): _38.QueryPoolRequestAmino;
                fromAminoMsg(object: _38.QueryPoolRequestAminoMsg): _38.QueryPoolRequest;
                toAminoMsg(message: _38.QueryPoolRequest): _38.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _38.QueryPoolRequestProtoMsg): _38.QueryPoolRequest;
                toProto(message: _38.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _38.QueryPoolRequest): _38.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _38.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryPoolResponse;
                fromPartial(object: Partial<_38.QueryPoolResponse>): _38.QueryPoolResponse;
                fromAmino(object: _38.QueryPoolResponseAmino): _38.QueryPoolResponse;
                toAmino(message: _38.QueryPoolResponse): _38.QueryPoolResponseAmino;
                fromAminoMsg(object: _38.QueryPoolResponseAminoMsg): _38.QueryPoolResponse;
                toAminoMsg(message: _38.QueryPoolResponse): _38.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _38.QueryPoolResponseProtoMsg): _38.QueryPoolResponse;
                toProto(message: _38.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _38.QueryPoolResponse): _38.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _38.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.QueryParamsRequest;
                fromPartial(_: Partial<_38.QueryParamsRequest>): _38.QueryParamsRequest;
                fromAmino(_: _38.QueryParamsRequestAmino): _38.QueryParamsRequest;
                toAmino(_: _38.QueryParamsRequest): _38.QueryParamsRequestAmino;
                fromAminoMsg(object: _38.QueryParamsRequestAminoMsg): _38.QueryParamsRequest;
                toAminoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryParamsRequestProtoMsg): _38.QueryParamsRequest;
                toProto(message: _38.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _38.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryParamsResponse;
                fromPartial(object: Partial<_38.QueryParamsResponse>): _38.QueryParamsResponse;
                fromAmino(object: _38.QueryParamsResponseAmino): _38.QueryParamsResponse;
                toAmino(message: _38.QueryParamsResponse): _38.QueryParamsResponseAmino;
                fromAminoMsg(object: _38.QueryParamsResponseAminoMsg): _38.QueryParamsResponse;
                toAminoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryParamsResponseProtoMsg): _38.QueryParamsResponse;
                toProto(message: _38.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _37.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _37.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.LastValidatorPower;
                fromPartial(object: Partial<_37.LastValidatorPower>): _37.LastValidatorPower;
                fromAmino(object: _37.LastValidatorPowerAmino): _37.LastValidatorPower;
                toAmino(message: _37.LastValidatorPower): _37.LastValidatorPowerAmino;
                fromAminoMsg(object: _37.LastValidatorPowerAminoMsg): _37.LastValidatorPower;
                toAminoMsg(message: _37.LastValidatorPower): _37.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _37.LastValidatorPowerProtoMsg): _37.LastValidatorPower;
                toProto(message: _37.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _37.LastValidatorPower): _37.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _36.AuthorizationType;
            authorizationTypeToJSON(object: _36.AuthorizationType): string;
            AuthorizationType: typeof _36.AuthorizationType;
            AuthorizationTypeSDKType: typeof _36.AuthorizationType;
            AuthorizationTypeAmino: typeof _36.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _36.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.StakeAuthorization;
                fromPartial(object: Partial<_36.StakeAuthorization>): _36.StakeAuthorization;
                fromAmino(object: _36.StakeAuthorizationAmino): _36.StakeAuthorization;
                toAmino(message: _36.StakeAuthorization): _36.StakeAuthorizationAmino;
                fromAminoMsg(object: _36.StakeAuthorizationAminoMsg): _36.StakeAuthorization;
                toAminoMsg(message: _36.StakeAuthorization): _36.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _36.StakeAuthorizationProtoMsg): _36.StakeAuthorization;
                toProto(message: _36.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _36.StakeAuthorization): _36.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _36.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.StakeAuthorization_Validators;
                fromPartial(object: Partial<_36.StakeAuthorization_Validators>): _36.StakeAuthorization_Validators;
                fromAmino(object: _36.StakeAuthorization_ValidatorsAmino): _36.StakeAuthorization_Validators;
                toAmino(message: _36.StakeAuthorization_Validators): _36.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _36.StakeAuthorization_ValidatorsAminoMsg): _36.StakeAuthorization_Validators;
                toAminoMsg(message: _36.StakeAuthorization_Validators): _36.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _36.StakeAuthorization_ValidatorsProtoMsg): _36.StakeAuthorization_Validators;
                toProto(message: _36.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _36.StakeAuthorization_Validators): _36.StakeAuthorization_ValidatorsProtoMsg;
            };
            tokenizeShareLockStatusFromJSON(object: any): _35.TokenizeShareLockStatus;
            tokenizeShareLockStatusToJSON(object: _35.TokenizeShareLockStatus): string;
            TokenizeShareLockStatus: typeof _35.TokenizeShareLockStatus;
            TokenizeShareLockStatusSDKType: typeof _35.TokenizeShareLockStatus;
            TokenizeShareLockStatusAmino: typeof _35.TokenizeShareLockStatus;
            TokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _35.TokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.TokenizeShareRecordReward;
                fromPartial(object: Partial<_35.TokenizeShareRecordReward>): _35.TokenizeShareRecordReward;
                fromAmino(object: _35.TokenizeShareRecordRewardAmino): _35.TokenizeShareRecordReward;
                toAmino(message: _35.TokenizeShareRecordReward): _35.TokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _35.TokenizeShareRecordRewardAminoMsg): _35.TokenizeShareRecordReward;
                toAminoMsg(message: _35.TokenizeShareRecordReward): _35.TokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _35.TokenizeShareRecordRewardProtoMsg): _35.TokenizeShareRecordReward;
                toProto(message: _35.TokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _35.TokenizeShareRecordReward): _35.TokenizeShareRecordRewardProtoMsg;
            };
            QueryTokenizeShareRecordRewardRequest: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareRecordRewardRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareRecordRewardRequest;
                fromPartial(object: Partial<_35.QueryTokenizeShareRecordRewardRequest>): _35.QueryTokenizeShareRecordRewardRequest;
                fromAmino(object: _35.QueryTokenizeShareRecordRewardRequestAmino): _35.QueryTokenizeShareRecordRewardRequest;
                toAmino(message: _35.QueryTokenizeShareRecordRewardRequest): _35.QueryTokenizeShareRecordRewardRequestAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareRecordRewardRequestAminoMsg): _35.QueryTokenizeShareRecordRewardRequest;
                toAminoMsg(message: _35.QueryTokenizeShareRecordRewardRequest): _35.QueryTokenizeShareRecordRewardRequestAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareRecordRewardRequestProtoMsg): _35.QueryTokenizeShareRecordRewardRequest;
                toProto(message: _35.QueryTokenizeShareRecordRewardRequest): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareRecordRewardRequest): _35.QueryTokenizeShareRecordRewardRequestProtoMsg;
            };
            QueryTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareRecordRewardResponse;
                fromPartial(object: Partial<_35.QueryTokenizeShareRecordRewardResponse>): _35.QueryTokenizeShareRecordRewardResponse;
                fromAmino(object: _35.QueryTokenizeShareRecordRewardResponseAmino): _35.QueryTokenizeShareRecordRewardResponse;
                toAmino(message: _35.QueryTokenizeShareRecordRewardResponse): _35.QueryTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareRecordRewardResponseAminoMsg): _35.QueryTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _35.QueryTokenizeShareRecordRewardResponse): _35.QueryTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareRecordRewardResponseProtoMsg): _35.QueryTokenizeShareRecordRewardResponse;
                toProto(message: _35.QueryTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareRecordRewardResponse): _35.QueryTokenizeShareRecordRewardResponseProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _35.MsgWithdrawTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgWithdrawTokenizeShareRecordReward;
                fromPartial(object: Partial<_35.MsgWithdrawTokenizeShareRecordReward>): _35.MsgWithdrawTokenizeShareRecordReward;
                fromAmino(object: _35.MsgWithdrawTokenizeShareRecordRewardAmino): _35.MsgWithdrawTokenizeShareRecordReward;
                toAmino(message: _35.MsgWithdrawTokenizeShareRecordReward): _35.MsgWithdrawTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _35.MsgWithdrawTokenizeShareRecordRewardAminoMsg): _35.MsgWithdrawTokenizeShareRecordReward;
                toAminoMsg(message: _35.MsgWithdrawTokenizeShareRecordReward): _35.MsgWithdrawTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _35.MsgWithdrawTokenizeShareRecordRewardProtoMsg): _35.MsgWithdrawTokenizeShareRecordReward;
                toProto(message: _35.MsgWithdrawTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _35.MsgWithdrawTokenizeShareRecordReward): _35.MsgWithdrawTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _35.MsgWithdrawTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_35.MsgWithdrawTokenizeShareRecordRewardResponse>): _35.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromAmino(_: _35.MsgWithdrawTokenizeShareRecordRewardResponseAmino): _35.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAmino(_: _35.MsgWithdrawTokenizeShareRecordRewardResponse): _35.MsgWithdrawTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _35.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): _35.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _35.MsgWithdrawTokenizeShareRecordRewardResponse): _35.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _35.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): _35.MsgWithdrawTokenizeShareRecordRewardResponse;
                toProto(message: _35.MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _35.MsgWithdrawTokenizeShareRecordRewardResponse): _35.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordReward: {
                typeUrl: string;
                encode(message: _35.MsgWithdrawAllTokenizeShareRecordReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgWithdrawAllTokenizeShareRecordReward;
                fromPartial(object: Partial<_35.MsgWithdrawAllTokenizeShareRecordReward>): _35.MsgWithdrawAllTokenizeShareRecordReward;
                fromAmino(object: _35.MsgWithdrawAllTokenizeShareRecordRewardAmino): _35.MsgWithdrawAllTokenizeShareRecordReward;
                toAmino(message: _35.MsgWithdrawAllTokenizeShareRecordReward): _35.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _35.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): _35.MsgWithdrawAllTokenizeShareRecordReward;
                toAminoMsg(message: _35.MsgWithdrawAllTokenizeShareRecordReward): _35.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _35.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): _35.MsgWithdrawAllTokenizeShareRecordReward;
                toProto(message: _35.MsgWithdrawAllTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _35.MsgWithdrawAllTokenizeShareRecordReward): _35.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                encode(_: _35.MsgWithdrawAllTokenizeShareRecordRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromPartial(_: Partial<_35.MsgWithdrawAllTokenizeShareRecordRewardResponse>): _35.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromAmino(_: _35.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): _35.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAmino(_: _35.MsgWithdrawAllTokenizeShareRecordRewardResponse): _35.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _35.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): _35.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _35.MsgWithdrawAllTokenizeShareRecordRewardResponse): _35.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _35.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): _35.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toProto(message: _35.MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _35.MsgWithdrawAllTokenizeShareRecordRewardResponse): _35.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
            };
            QueryTokenizeShareRecordByIdRequest: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareRecordByIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareRecordByIdRequest;
                fromPartial(object: Partial<_35.QueryTokenizeShareRecordByIdRequest>): _35.QueryTokenizeShareRecordByIdRequest;
                fromAmino(object: _35.QueryTokenizeShareRecordByIdRequestAmino): _35.QueryTokenizeShareRecordByIdRequest;
                toAmino(message: _35.QueryTokenizeShareRecordByIdRequest): _35.QueryTokenizeShareRecordByIdRequestAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareRecordByIdRequestAminoMsg): _35.QueryTokenizeShareRecordByIdRequest;
                toAminoMsg(message: _35.QueryTokenizeShareRecordByIdRequest): _35.QueryTokenizeShareRecordByIdRequestAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareRecordByIdRequestProtoMsg): _35.QueryTokenizeShareRecordByIdRequest;
                toProto(message: _35.QueryTokenizeShareRecordByIdRequest): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareRecordByIdRequest): _35.QueryTokenizeShareRecordByIdRequestProtoMsg;
            };
            QueryTokenizeShareRecordByIdResponse: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareRecordByIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareRecordByIdResponse;
                fromPartial(object: Partial<_35.QueryTokenizeShareRecordByIdResponse>): _35.QueryTokenizeShareRecordByIdResponse;
                fromAmino(object: _35.QueryTokenizeShareRecordByIdResponseAmino): _35.QueryTokenizeShareRecordByIdResponse;
                toAmino(message: _35.QueryTokenizeShareRecordByIdResponse): _35.QueryTokenizeShareRecordByIdResponseAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareRecordByIdResponseAminoMsg): _35.QueryTokenizeShareRecordByIdResponse;
                toAminoMsg(message: _35.QueryTokenizeShareRecordByIdResponse): _35.QueryTokenizeShareRecordByIdResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareRecordByIdResponseProtoMsg): _35.QueryTokenizeShareRecordByIdResponse;
                toProto(message: _35.QueryTokenizeShareRecordByIdResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareRecordByIdResponse): _35.QueryTokenizeShareRecordByIdResponseProtoMsg;
            };
            QueryTokenizeShareRecordByDenomRequest: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareRecordByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareRecordByDenomRequest;
                fromPartial(object: Partial<_35.QueryTokenizeShareRecordByDenomRequest>): _35.QueryTokenizeShareRecordByDenomRequest;
                fromAmino(object: _35.QueryTokenizeShareRecordByDenomRequestAmino): _35.QueryTokenizeShareRecordByDenomRequest;
                toAmino(message: _35.QueryTokenizeShareRecordByDenomRequest): _35.QueryTokenizeShareRecordByDenomRequestAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareRecordByDenomRequestAminoMsg): _35.QueryTokenizeShareRecordByDenomRequest;
                toAminoMsg(message: _35.QueryTokenizeShareRecordByDenomRequest): _35.QueryTokenizeShareRecordByDenomRequestAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareRecordByDenomRequestProtoMsg): _35.QueryTokenizeShareRecordByDenomRequest;
                toProto(message: _35.QueryTokenizeShareRecordByDenomRequest): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareRecordByDenomRequest): _35.QueryTokenizeShareRecordByDenomRequestProtoMsg;
            };
            QueryTokenizeShareRecordByDenomResponse: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareRecordByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareRecordByDenomResponse;
                fromPartial(object: Partial<_35.QueryTokenizeShareRecordByDenomResponse>): _35.QueryTokenizeShareRecordByDenomResponse;
                fromAmino(object: _35.QueryTokenizeShareRecordByDenomResponseAmino): _35.QueryTokenizeShareRecordByDenomResponse;
                toAmino(message: _35.QueryTokenizeShareRecordByDenomResponse): _35.QueryTokenizeShareRecordByDenomResponseAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareRecordByDenomResponseAminoMsg): _35.QueryTokenizeShareRecordByDenomResponse;
                toAminoMsg(message: _35.QueryTokenizeShareRecordByDenomResponse): _35.QueryTokenizeShareRecordByDenomResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareRecordByDenomResponseProtoMsg): _35.QueryTokenizeShareRecordByDenomResponse;
                toProto(message: _35.QueryTokenizeShareRecordByDenomResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareRecordByDenomResponse): _35.QueryTokenizeShareRecordByDenomResponseProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedRequest: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareRecordsOwnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareRecordsOwnedRequest;
                fromPartial(object: Partial<_35.QueryTokenizeShareRecordsOwnedRequest>): _35.QueryTokenizeShareRecordsOwnedRequest;
                fromAmino(object: _35.QueryTokenizeShareRecordsOwnedRequestAmino): _35.QueryTokenizeShareRecordsOwnedRequest;
                toAmino(message: _35.QueryTokenizeShareRecordsOwnedRequest): _35.QueryTokenizeShareRecordsOwnedRequestAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareRecordsOwnedRequestAminoMsg): _35.QueryTokenizeShareRecordsOwnedRequest;
                toAminoMsg(message: _35.QueryTokenizeShareRecordsOwnedRequest): _35.QueryTokenizeShareRecordsOwnedRequestAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareRecordsOwnedRequestProtoMsg): _35.QueryTokenizeShareRecordsOwnedRequest;
                toProto(message: _35.QueryTokenizeShareRecordsOwnedRequest): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareRecordsOwnedRequest): _35.QueryTokenizeShareRecordsOwnedRequestProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedResponse: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareRecordsOwnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareRecordsOwnedResponse;
                fromPartial(object: Partial<_35.QueryTokenizeShareRecordsOwnedResponse>): _35.QueryTokenizeShareRecordsOwnedResponse;
                fromAmino(object: _35.QueryTokenizeShareRecordsOwnedResponseAmino): _35.QueryTokenizeShareRecordsOwnedResponse;
                toAmino(message: _35.QueryTokenizeShareRecordsOwnedResponse): _35.QueryTokenizeShareRecordsOwnedResponseAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareRecordsOwnedResponseAminoMsg): _35.QueryTokenizeShareRecordsOwnedResponse;
                toAminoMsg(message: _35.QueryTokenizeShareRecordsOwnedResponse): _35.QueryTokenizeShareRecordsOwnedResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareRecordsOwnedResponseProtoMsg): _35.QueryTokenizeShareRecordsOwnedResponse;
                toProto(message: _35.QueryTokenizeShareRecordsOwnedResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareRecordsOwnedResponse): _35.QueryTokenizeShareRecordsOwnedResponseProtoMsg;
            };
            QueryAllTokenizeShareRecordsRequest: {
                typeUrl: string;
                encode(message: _35.QueryAllTokenizeShareRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryAllTokenizeShareRecordsRequest;
                fromPartial(object: Partial<_35.QueryAllTokenizeShareRecordsRequest>): _35.QueryAllTokenizeShareRecordsRequest;
                fromAmino(object: _35.QueryAllTokenizeShareRecordsRequestAmino): _35.QueryAllTokenizeShareRecordsRequest;
                toAmino(message: _35.QueryAllTokenizeShareRecordsRequest): _35.QueryAllTokenizeShareRecordsRequestAmino;
                fromAminoMsg(object: _35.QueryAllTokenizeShareRecordsRequestAminoMsg): _35.QueryAllTokenizeShareRecordsRequest;
                toAminoMsg(message: _35.QueryAllTokenizeShareRecordsRequest): _35.QueryAllTokenizeShareRecordsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryAllTokenizeShareRecordsRequestProtoMsg): _35.QueryAllTokenizeShareRecordsRequest;
                toProto(message: _35.QueryAllTokenizeShareRecordsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryAllTokenizeShareRecordsRequest): _35.QueryAllTokenizeShareRecordsRequestProtoMsg;
            };
            QueryAllTokenizeShareRecordsResponse: {
                typeUrl: string;
                encode(message: _35.QueryAllTokenizeShareRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryAllTokenizeShareRecordsResponse;
                fromPartial(object: Partial<_35.QueryAllTokenizeShareRecordsResponse>): _35.QueryAllTokenizeShareRecordsResponse;
                fromAmino(object: _35.QueryAllTokenizeShareRecordsResponseAmino): _35.QueryAllTokenizeShareRecordsResponse;
                toAmino(message: _35.QueryAllTokenizeShareRecordsResponse): _35.QueryAllTokenizeShareRecordsResponseAmino;
                fromAminoMsg(object: _35.QueryAllTokenizeShareRecordsResponseAminoMsg): _35.QueryAllTokenizeShareRecordsResponse;
                toAminoMsg(message: _35.QueryAllTokenizeShareRecordsResponse): _35.QueryAllTokenizeShareRecordsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryAllTokenizeShareRecordsResponseProtoMsg): _35.QueryAllTokenizeShareRecordsResponse;
                toProto(message: _35.QueryAllTokenizeShareRecordsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryAllTokenizeShareRecordsResponse): _35.QueryAllTokenizeShareRecordsResponseProtoMsg;
            };
            QueryLastTokenizeShareRecordIdRequest: {
                typeUrl: string;
                encode(_: _35.QueryLastTokenizeShareRecordIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.QueryLastTokenizeShareRecordIdRequest;
                fromPartial(_: Partial<_35.QueryLastTokenizeShareRecordIdRequest>): _35.QueryLastTokenizeShareRecordIdRequest;
                fromAmino(_: _35.QueryLastTokenizeShareRecordIdRequestAmino): _35.QueryLastTokenizeShareRecordIdRequest;
                toAmino(_: _35.QueryLastTokenizeShareRecordIdRequest): _35.QueryLastTokenizeShareRecordIdRequestAmino;
                fromAminoMsg(object: _35.QueryLastTokenizeShareRecordIdRequestAminoMsg): _35.QueryLastTokenizeShareRecordIdRequest;
                toAminoMsg(message: _35.QueryLastTokenizeShareRecordIdRequest): _35.QueryLastTokenizeShareRecordIdRequestAminoMsg;
                fromProtoMsg(message: _35.QueryLastTokenizeShareRecordIdRequestProtoMsg): _35.QueryLastTokenizeShareRecordIdRequest;
                toProto(message: _35.QueryLastTokenizeShareRecordIdRequest): Uint8Array;
                toProtoMsg(message: _35.QueryLastTokenizeShareRecordIdRequest): _35.QueryLastTokenizeShareRecordIdRequestProtoMsg;
            };
            QueryLastTokenizeShareRecordIdResponse: {
                typeUrl: string;
                encode(message: _35.QueryLastTokenizeShareRecordIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryLastTokenizeShareRecordIdResponse;
                fromPartial(object: Partial<_35.QueryLastTokenizeShareRecordIdResponse>): _35.QueryLastTokenizeShareRecordIdResponse;
                fromAmino(object: _35.QueryLastTokenizeShareRecordIdResponseAmino): _35.QueryLastTokenizeShareRecordIdResponse;
                toAmino(message: _35.QueryLastTokenizeShareRecordIdResponse): _35.QueryLastTokenizeShareRecordIdResponseAmino;
                fromAminoMsg(object: _35.QueryLastTokenizeShareRecordIdResponseAminoMsg): _35.QueryLastTokenizeShareRecordIdResponse;
                toAminoMsg(message: _35.QueryLastTokenizeShareRecordIdResponse): _35.QueryLastTokenizeShareRecordIdResponseAminoMsg;
                fromProtoMsg(message: _35.QueryLastTokenizeShareRecordIdResponseProtoMsg): _35.QueryLastTokenizeShareRecordIdResponse;
                toProto(message: _35.QueryLastTokenizeShareRecordIdResponse): Uint8Array;
                toProtoMsg(message: _35.QueryLastTokenizeShareRecordIdResponse): _35.QueryLastTokenizeShareRecordIdResponseProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsRequest: {
                typeUrl: string;
                encode(_: _35.QueryTotalTokenizeSharedAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.QueryTotalTokenizeSharedAssetsRequest;
                fromPartial(_: Partial<_35.QueryTotalTokenizeSharedAssetsRequest>): _35.QueryTotalTokenizeSharedAssetsRequest;
                fromAmino(_: _35.QueryTotalTokenizeSharedAssetsRequestAmino): _35.QueryTotalTokenizeSharedAssetsRequest;
                toAmino(_: _35.QueryTotalTokenizeSharedAssetsRequest): _35.QueryTotalTokenizeSharedAssetsRequestAmino;
                fromAminoMsg(object: _35.QueryTotalTokenizeSharedAssetsRequestAminoMsg): _35.QueryTotalTokenizeSharedAssetsRequest;
                toAminoMsg(message: _35.QueryTotalTokenizeSharedAssetsRequest): _35.QueryTotalTokenizeSharedAssetsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryTotalTokenizeSharedAssetsRequestProtoMsg): _35.QueryTotalTokenizeSharedAssetsRequest;
                toProto(message: _35.QueryTotalTokenizeSharedAssetsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryTotalTokenizeSharedAssetsRequest): _35.QueryTotalTokenizeSharedAssetsRequestProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsResponse: {
                typeUrl: string;
                encode(message: _35.QueryTotalTokenizeSharedAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTotalTokenizeSharedAssetsResponse;
                fromPartial(object: Partial<_35.QueryTotalTokenizeSharedAssetsResponse>): _35.QueryTotalTokenizeSharedAssetsResponse;
                fromAmino(object: _35.QueryTotalTokenizeSharedAssetsResponseAmino): _35.QueryTotalTokenizeSharedAssetsResponse;
                toAmino(message: _35.QueryTotalTokenizeSharedAssetsResponse): _35.QueryTotalTokenizeSharedAssetsResponseAmino;
                fromAminoMsg(object: _35.QueryTotalTokenizeSharedAssetsResponseAminoMsg): _35.QueryTotalTokenizeSharedAssetsResponse;
                toAminoMsg(message: _35.QueryTotalTokenizeSharedAssetsResponse): _35.QueryTotalTokenizeSharedAssetsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTotalTokenizeSharedAssetsResponseProtoMsg): _35.QueryTotalTokenizeSharedAssetsResponse;
                toProto(message: _35.QueryTotalTokenizeSharedAssetsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTotalTokenizeSharedAssetsResponse): _35.QueryTotalTokenizeSharedAssetsResponseProtoMsg;
            };
            QueryTotalLiquidStaked: {
                typeUrl: string;
                encode(_: _35.QueryTotalLiquidStaked, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.QueryTotalLiquidStaked;
                fromPartial(_: Partial<_35.QueryTotalLiquidStaked>): _35.QueryTotalLiquidStaked;
                fromAmino(_: _35.QueryTotalLiquidStakedAmino): _35.QueryTotalLiquidStaked;
                toAmino(_: _35.QueryTotalLiquidStaked): _35.QueryTotalLiquidStakedAmino;
                fromAminoMsg(object: _35.QueryTotalLiquidStakedAminoMsg): _35.QueryTotalLiquidStaked;
                toAminoMsg(message: _35.QueryTotalLiquidStaked): _35.QueryTotalLiquidStakedAminoMsg;
                fromProtoMsg(message: _35.QueryTotalLiquidStakedProtoMsg): _35.QueryTotalLiquidStaked;
                toProto(message: _35.QueryTotalLiquidStaked): Uint8Array;
                toProtoMsg(message: _35.QueryTotalLiquidStaked): _35.QueryTotalLiquidStakedProtoMsg;
            };
            QueryTotalLiquidStakedResponse: {
                typeUrl: string;
                encode(message: _35.QueryTotalLiquidStakedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTotalLiquidStakedResponse;
                fromPartial(object: Partial<_35.QueryTotalLiquidStakedResponse>): _35.QueryTotalLiquidStakedResponse;
                fromAmino(object: _35.QueryTotalLiquidStakedResponseAmino): _35.QueryTotalLiquidStakedResponse;
                toAmino(message: _35.QueryTotalLiquidStakedResponse): _35.QueryTotalLiquidStakedResponseAmino;
                fromAminoMsg(object: _35.QueryTotalLiquidStakedResponseAminoMsg): _35.QueryTotalLiquidStakedResponse;
                toAminoMsg(message: _35.QueryTotalLiquidStakedResponse): _35.QueryTotalLiquidStakedResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTotalLiquidStakedResponseProtoMsg): _35.QueryTotalLiquidStakedResponse;
                toProto(message: _35.QueryTotalLiquidStakedResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTotalLiquidStakedResponse): _35.QueryTotalLiquidStakedResponseProtoMsg;
            };
            QueryTokenizeShareLockInfo: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareLockInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareLockInfo;
                fromPartial(object: Partial<_35.QueryTokenizeShareLockInfo>): _35.QueryTokenizeShareLockInfo;
                fromAmino(object: _35.QueryTokenizeShareLockInfoAmino): _35.QueryTokenizeShareLockInfo;
                toAmino(message: _35.QueryTokenizeShareLockInfo): _35.QueryTokenizeShareLockInfoAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareLockInfoAminoMsg): _35.QueryTokenizeShareLockInfo;
                toAminoMsg(message: _35.QueryTokenizeShareLockInfo): _35.QueryTokenizeShareLockInfoAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareLockInfoProtoMsg): _35.QueryTokenizeShareLockInfo;
                toProto(message: _35.QueryTokenizeShareLockInfo): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareLockInfo): _35.QueryTokenizeShareLockInfoProtoMsg;
            };
            QueryTokenizeShareLockInfoResponse: {
                typeUrl: string;
                encode(message: _35.QueryTokenizeShareLockInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryTokenizeShareLockInfoResponse;
                fromPartial(object: Partial<_35.QueryTokenizeShareLockInfoResponse>): _35.QueryTokenizeShareLockInfoResponse;
                fromAmino(object: _35.QueryTokenizeShareLockInfoResponseAmino): _35.QueryTokenizeShareLockInfoResponse;
                toAmino(message: _35.QueryTokenizeShareLockInfoResponse): _35.QueryTokenizeShareLockInfoResponseAmino;
                fromAminoMsg(object: _35.QueryTokenizeShareLockInfoResponseAminoMsg): _35.QueryTokenizeShareLockInfoResponse;
                toAminoMsg(message: _35.QueryTokenizeShareLockInfoResponse): _35.QueryTokenizeShareLockInfoResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTokenizeShareLockInfoResponseProtoMsg): _35.QueryTokenizeShareLockInfoResponse;
                toProto(message: _35.QueryTokenizeShareLockInfoResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTokenizeShareLockInfoResponse): _35.QueryTokenizeShareLockInfoResponseProtoMsg;
            };
            TokenizeShareRecord: {
                typeUrl: string;
                encode(message: _35.TokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.TokenizeShareRecord;
                fromPartial(object: Partial<_35.TokenizeShareRecord>): _35.TokenizeShareRecord;
                fromAmino(object: _35.TokenizeShareRecordAmino): _35.TokenizeShareRecord;
                toAmino(message: _35.TokenizeShareRecord): _35.TokenizeShareRecordAmino;
                fromAminoMsg(object: _35.TokenizeShareRecordAminoMsg): _35.TokenizeShareRecord;
                toAminoMsg(message: _35.TokenizeShareRecord): _35.TokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _35.TokenizeShareRecordProtoMsg): _35.TokenizeShareRecord;
                toProto(message: _35.TokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _35.TokenizeShareRecord): _35.TokenizeShareRecordProtoMsg;
            };
            PendingTokenizeShareAuthorizations: {
                typeUrl: string;
                encode(message: _35.PendingTokenizeShareAuthorizations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.PendingTokenizeShareAuthorizations;
                fromPartial(object: Partial<_35.PendingTokenizeShareAuthorizations>): _35.PendingTokenizeShareAuthorizations;
                fromAmino(object: _35.PendingTokenizeShareAuthorizationsAmino): _35.PendingTokenizeShareAuthorizations;
                toAmino(message: _35.PendingTokenizeShareAuthorizations): _35.PendingTokenizeShareAuthorizationsAmino;
                fromAminoMsg(object: _35.PendingTokenizeShareAuthorizationsAminoMsg): _35.PendingTokenizeShareAuthorizations;
                toAminoMsg(message: _35.PendingTokenizeShareAuthorizations): _35.PendingTokenizeShareAuthorizationsAminoMsg;
                fromProtoMsg(message: _35.PendingTokenizeShareAuthorizationsProtoMsg): _35.PendingTokenizeShareAuthorizations;
                toProto(message: _35.PendingTokenizeShareAuthorizations): Uint8Array;
                toProtoMsg(message: _35.PendingTokenizeShareAuthorizations): _35.PendingTokenizeShareAuthorizationsProtoMsg;
            };
            MsgUnbondValidator: {
                typeUrl: string;
                encode(message: _35.MsgUnbondValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgUnbondValidator;
                fromPartial(object: Partial<_35.MsgUnbondValidator>): _35.MsgUnbondValidator;
                fromAmino(object: _35.MsgUnbondValidatorAmino): _35.MsgUnbondValidator;
                toAmino(message: _35.MsgUnbondValidator): _35.MsgUnbondValidatorAmino;
                fromAminoMsg(object: _35.MsgUnbondValidatorAminoMsg): _35.MsgUnbondValidator;
                toAminoMsg(message: _35.MsgUnbondValidator): _35.MsgUnbondValidatorAminoMsg;
                fromProtoMsg(message: _35.MsgUnbondValidatorProtoMsg): _35.MsgUnbondValidator;
                toProto(message: _35.MsgUnbondValidator): Uint8Array;
                toProtoMsg(message: _35.MsgUnbondValidator): _35.MsgUnbondValidatorProtoMsg;
            };
            MsgUnbondValidatorResponse: {
                typeUrl: string;
                encode(_: _35.MsgUnbondValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgUnbondValidatorResponse;
                fromPartial(_: Partial<_35.MsgUnbondValidatorResponse>): _35.MsgUnbondValidatorResponse;
                fromAmino(_: _35.MsgUnbondValidatorResponseAmino): _35.MsgUnbondValidatorResponse;
                toAmino(_: _35.MsgUnbondValidatorResponse): _35.MsgUnbondValidatorResponseAmino;
                fromAminoMsg(object: _35.MsgUnbondValidatorResponseAminoMsg): _35.MsgUnbondValidatorResponse;
                toAminoMsg(message: _35.MsgUnbondValidatorResponse): _35.MsgUnbondValidatorResponseAminoMsg;
                fromProtoMsg(message: _35.MsgUnbondValidatorResponseProtoMsg): _35.MsgUnbondValidatorResponse;
                toProto(message: _35.MsgUnbondValidatorResponse): Uint8Array;
                toProtoMsg(message: _35.MsgUnbondValidatorResponse): _35.MsgUnbondValidatorResponseProtoMsg;
            };
            MsgTokenizeShares: {
                typeUrl: string;
                encode(message: _35.MsgTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgTokenizeShares;
                fromPartial(object: Partial<_35.MsgTokenizeShares>): _35.MsgTokenizeShares;
                fromAmino(object: _35.MsgTokenizeSharesAmino): _35.MsgTokenizeShares;
                toAmino(message: _35.MsgTokenizeShares): _35.MsgTokenizeSharesAmino;
                fromAminoMsg(object: _35.MsgTokenizeSharesAminoMsg): _35.MsgTokenizeShares;
                toAminoMsg(message: _35.MsgTokenizeShares): _35.MsgTokenizeSharesAminoMsg;
                fromProtoMsg(message: _35.MsgTokenizeSharesProtoMsg): _35.MsgTokenizeShares;
                toProto(message: _35.MsgTokenizeShares): Uint8Array;
                toProtoMsg(message: _35.MsgTokenizeShares): _35.MsgTokenizeSharesProtoMsg;
            };
            MsgTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _35.MsgTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgTokenizeSharesResponse;
                fromPartial(object: Partial<_35.MsgTokenizeSharesResponse>): _35.MsgTokenizeSharesResponse;
                fromAmino(object: _35.MsgTokenizeSharesResponseAmino): _35.MsgTokenizeSharesResponse;
                toAmino(message: _35.MsgTokenizeSharesResponse): _35.MsgTokenizeSharesResponseAmino;
                fromAminoMsg(object: _35.MsgTokenizeSharesResponseAminoMsg): _35.MsgTokenizeSharesResponse;
                toAminoMsg(message: _35.MsgTokenizeSharesResponse): _35.MsgTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _35.MsgTokenizeSharesResponseProtoMsg): _35.MsgTokenizeSharesResponse;
                toProto(message: _35.MsgTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _35.MsgTokenizeSharesResponse): _35.MsgTokenizeSharesResponseProtoMsg;
            };
            MsgRedeemTokensForShares: {
                typeUrl: string;
                encode(message: _35.MsgRedeemTokensForShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgRedeemTokensForShares;
                fromPartial(object: Partial<_35.MsgRedeemTokensForShares>): _35.MsgRedeemTokensForShares;
                fromAmino(object: _35.MsgRedeemTokensForSharesAmino): _35.MsgRedeemTokensForShares;
                toAmino(message: _35.MsgRedeemTokensForShares): _35.MsgRedeemTokensForSharesAmino;
                fromAminoMsg(object: _35.MsgRedeemTokensForSharesAminoMsg): _35.MsgRedeemTokensForShares;
                toAminoMsg(message: _35.MsgRedeemTokensForShares): _35.MsgRedeemTokensForSharesAminoMsg;
                fromProtoMsg(message: _35.MsgRedeemTokensForSharesProtoMsg): _35.MsgRedeemTokensForShares;
                toProto(message: _35.MsgRedeemTokensForShares): Uint8Array;
                toProtoMsg(message: _35.MsgRedeemTokensForShares): _35.MsgRedeemTokensForSharesProtoMsg;
            };
            MsgRedeemTokensForSharesResponse: {
                typeUrl: string;
                encode(message: _35.MsgRedeemTokensForSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgRedeemTokensForSharesResponse;
                fromPartial(object: Partial<_35.MsgRedeemTokensForSharesResponse>): _35.MsgRedeemTokensForSharesResponse;
                fromAmino(object: _35.MsgRedeemTokensForSharesResponseAmino): _35.MsgRedeemTokensForSharesResponse;
                toAmino(message: _35.MsgRedeemTokensForSharesResponse): _35.MsgRedeemTokensForSharesResponseAmino;
                fromAminoMsg(object: _35.MsgRedeemTokensForSharesResponseAminoMsg): _35.MsgRedeemTokensForSharesResponse;
                toAminoMsg(message: _35.MsgRedeemTokensForSharesResponse): _35.MsgRedeemTokensForSharesResponseAminoMsg;
                fromProtoMsg(message: _35.MsgRedeemTokensForSharesResponseProtoMsg): _35.MsgRedeemTokensForSharesResponse;
                toProto(message: _35.MsgRedeemTokensForSharesResponse): Uint8Array;
                toProtoMsg(message: _35.MsgRedeemTokensForSharesResponse): _35.MsgRedeemTokensForSharesResponseProtoMsg;
            };
            MsgTransferTokenizeShareRecord: {
                typeUrl: string;
                encode(message: _35.MsgTransferTokenizeShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgTransferTokenizeShareRecord;
                fromPartial(object: Partial<_35.MsgTransferTokenizeShareRecord>): _35.MsgTransferTokenizeShareRecord;
                fromAmino(object: _35.MsgTransferTokenizeShareRecordAmino): _35.MsgTransferTokenizeShareRecord;
                toAmino(message: _35.MsgTransferTokenizeShareRecord): _35.MsgTransferTokenizeShareRecordAmino;
                fromAminoMsg(object: _35.MsgTransferTokenizeShareRecordAminoMsg): _35.MsgTransferTokenizeShareRecord;
                toAminoMsg(message: _35.MsgTransferTokenizeShareRecord): _35.MsgTransferTokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _35.MsgTransferTokenizeShareRecordProtoMsg): _35.MsgTransferTokenizeShareRecord;
                toProto(message: _35.MsgTransferTokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _35.MsgTransferTokenizeShareRecord): _35.MsgTransferTokenizeShareRecordProtoMsg;
            };
            MsgTransferTokenizeShareRecordResponse: {
                typeUrl: string;
                encode(_: _35.MsgTransferTokenizeShareRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgTransferTokenizeShareRecordResponse;
                fromPartial(_: Partial<_35.MsgTransferTokenizeShareRecordResponse>): _35.MsgTransferTokenizeShareRecordResponse;
                fromAmino(_: _35.MsgTransferTokenizeShareRecordResponseAmino): _35.MsgTransferTokenizeShareRecordResponse;
                toAmino(_: _35.MsgTransferTokenizeShareRecordResponse): _35.MsgTransferTokenizeShareRecordResponseAmino;
                fromAminoMsg(object: _35.MsgTransferTokenizeShareRecordResponseAminoMsg): _35.MsgTransferTokenizeShareRecordResponse;
                toAminoMsg(message: _35.MsgTransferTokenizeShareRecordResponse): _35.MsgTransferTokenizeShareRecordResponseAminoMsg;
                fromProtoMsg(message: _35.MsgTransferTokenizeShareRecordResponseProtoMsg): _35.MsgTransferTokenizeShareRecordResponse;
                toProto(message: _35.MsgTransferTokenizeShareRecordResponse): Uint8Array;
                toProtoMsg(message: _35.MsgTransferTokenizeShareRecordResponse): _35.MsgTransferTokenizeShareRecordResponseProtoMsg;
            };
            MsgDisableTokenizeShares: {
                typeUrl: string;
                encode(message: _35.MsgDisableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgDisableTokenizeShares;
                fromPartial(object: Partial<_35.MsgDisableTokenizeShares>): _35.MsgDisableTokenizeShares;
                fromAmino(object: _35.MsgDisableTokenizeSharesAmino): _35.MsgDisableTokenizeShares;
                toAmino(message: _35.MsgDisableTokenizeShares): _35.MsgDisableTokenizeSharesAmino;
                fromAminoMsg(object: _35.MsgDisableTokenizeSharesAminoMsg): _35.MsgDisableTokenizeShares;
                toAminoMsg(message: _35.MsgDisableTokenizeShares): _35.MsgDisableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _35.MsgDisableTokenizeSharesProtoMsg): _35.MsgDisableTokenizeShares;
                toProto(message: _35.MsgDisableTokenizeShares): Uint8Array;
                toProtoMsg(message: _35.MsgDisableTokenizeShares): _35.MsgDisableTokenizeSharesProtoMsg;
            };
            MsgDisableTokenizeSharesResponse: {
                typeUrl: string;
                encode(_: _35.MsgDisableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgDisableTokenizeSharesResponse;
                fromPartial(_: Partial<_35.MsgDisableTokenizeSharesResponse>): _35.MsgDisableTokenizeSharesResponse;
                fromAmino(_: _35.MsgDisableTokenizeSharesResponseAmino): _35.MsgDisableTokenizeSharesResponse;
                toAmino(_: _35.MsgDisableTokenizeSharesResponse): _35.MsgDisableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _35.MsgDisableTokenizeSharesResponseAminoMsg): _35.MsgDisableTokenizeSharesResponse;
                toAminoMsg(message: _35.MsgDisableTokenizeSharesResponse): _35.MsgDisableTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _35.MsgDisableTokenizeSharesResponseProtoMsg): _35.MsgDisableTokenizeSharesResponse;
                toProto(message: _35.MsgDisableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _35.MsgDisableTokenizeSharesResponse): _35.MsgDisableTokenizeSharesResponseProtoMsg;
            };
            MsgEnableTokenizeShares: {
                typeUrl: string;
                encode(message: _35.MsgEnableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgEnableTokenizeShares;
                fromPartial(object: Partial<_35.MsgEnableTokenizeShares>): _35.MsgEnableTokenizeShares;
                fromAmino(object: _35.MsgEnableTokenizeSharesAmino): _35.MsgEnableTokenizeShares;
                toAmino(message: _35.MsgEnableTokenizeShares): _35.MsgEnableTokenizeSharesAmino;
                fromAminoMsg(object: _35.MsgEnableTokenizeSharesAminoMsg): _35.MsgEnableTokenizeShares;
                toAminoMsg(message: _35.MsgEnableTokenizeShares): _35.MsgEnableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _35.MsgEnableTokenizeSharesProtoMsg): _35.MsgEnableTokenizeShares;
                toProto(message: _35.MsgEnableTokenizeShares): Uint8Array;
                toProtoMsg(message: _35.MsgEnableTokenizeShares): _35.MsgEnableTokenizeSharesProtoMsg;
            };
            MsgEnableTokenizeSharesResponse: {
                typeUrl: string;
                encode(message: _35.MsgEnableTokenizeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgEnableTokenizeSharesResponse;
                fromPartial(object: Partial<_35.MsgEnableTokenizeSharesResponse>): _35.MsgEnableTokenizeSharesResponse;
                fromAmino(object: _35.MsgEnableTokenizeSharesResponseAmino): _35.MsgEnableTokenizeSharesResponse;
                toAmino(message: _35.MsgEnableTokenizeSharesResponse): _35.MsgEnableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _35.MsgEnableTokenizeSharesResponseAminoMsg): _35.MsgEnableTokenizeSharesResponse;
                toAminoMsg(message: _35.MsgEnableTokenizeSharesResponse): _35.MsgEnableTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _35.MsgEnableTokenizeSharesResponseProtoMsg): _35.MsgEnableTokenizeSharesResponse;
                toProto(message: _35.MsgEnableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _35.MsgEnableTokenizeSharesResponse): _35.MsgEnableTokenizeSharesResponseProtoMsg;
            };
            MsgValidatorBond: {
                typeUrl: string;
                encode(message: _35.MsgValidatorBond, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgValidatorBond;
                fromPartial(object: Partial<_35.MsgValidatorBond>): _35.MsgValidatorBond;
                fromAmino(object: _35.MsgValidatorBondAmino): _35.MsgValidatorBond;
                toAmino(message: _35.MsgValidatorBond): _35.MsgValidatorBondAmino;
                fromAminoMsg(object: _35.MsgValidatorBondAminoMsg): _35.MsgValidatorBond;
                toAminoMsg(message: _35.MsgValidatorBond): _35.MsgValidatorBondAminoMsg;
                fromProtoMsg(message: _35.MsgValidatorBondProtoMsg): _35.MsgValidatorBond;
                toProto(message: _35.MsgValidatorBond): Uint8Array;
                toProtoMsg(message: _35.MsgValidatorBond): _35.MsgValidatorBondProtoMsg;
            };
            MsgValidatorBondResponse: {
                typeUrl: string;
                encode(_: _35.MsgValidatorBondResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgValidatorBondResponse;
                fromPartial(_: Partial<_35.MsgValidatorBondResponse>): _35.MsgValidatorBondResponse;
                fromAmino(_: _35.MsgValidatorBondResponseAmino): _35.MsgValidatorBondResponse;
                toAmino(_: _35.MsgValidatorBondResponse): _35.MsgValidatorBondResponseAmino;
                fromAminoMsg(object: _35.MsgValidatorBondResponseAminoMsg): _35.MsgValidatorBondResponse;
                toAminoMsg(message: _35.MsgValidatorBondResponse): _35.MsgValidatorBondResponseAminoMsg;
                fromProtoMsg(message: _35.MsgValidatorBondResponseProtoMsg): _35.MsgValidatorBondResponse;
                toProto(message: _35.MsgValidatorBondResponse): Uint8Array;
                toProtoMsg(message: _35.MsgValidatorBondResponse): _35.MsgValidatorBondResponseProtoMsg;
            };
        };
    }
    namespace lsmstaking {
        const v1beta1: {
            Validator: {
                typeUrl: string;
                encode(message: _41.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Validator;
                fromPartial(object: Partial<_41.Validator>): _41.Validator;
                fromAmino(object: _41.ValidatorAmino): _41.Validator;
                toAmino(message: _41.Validator): _41.ValidatorAmino;
                fromAminoMsg(object: _41.ValidatorAminoMsg): _41.Validator;
                toAminoMsg(message: _41.Validator): _41.ValidatorAminoMsg;
                fromProtoMsg(message: _41.ValidatorProtoMsg): _41.Validator;
                toProto(message: _41.Validator): Uint8Array;
                toProtoMsg(message: _41.Validator): _41.ValidatorProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _41.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.QueryValidatorsResponse;
                fromPartial(object: Partial<_41.QueryValidatorsResponse>): _41.QueryValidatorsResponse;
                fromAmino(object: _41.QueryValidatorsResponseAmino): _41.QueryValidatorsResponse;
                toAmino(message: _41.QueryValidatorsResponse): _41.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _41.QueryValidatorsResponseAminoMsg): _41.QueryValidatorsResponse;
                toAminoMsg(message: _41.QueryValidatorsResponse): _41.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryValidatorsResponseProtoMsg): _41.QueryValidatorsResponse;
                toProto(message: _41.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryValidatorsResponse): _41.QueryValidatorsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
        };
    }
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _42.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.Module;
                    fromPartial(_: Partial<_42.Module>): _42.Module;
                    fromAmino(_: _42.ModuleAmino): _42.Module;
                    toAmino(_: _42.Module): _42.ModuleAmino;
                    fromAminoMsg(object: _42.ModuleAminoMsg): _42.Module;
                    toAminoMsg(message: _42.Module): _42.ModuleAminoMsg;
                    fromProtoMsg(message: _42.ModuleProtoMsg): _42.Module;
                    toProto(message: _42.Module): Uint8Array;
                    toProtoMsg(message: _42.Module): _42.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _45.QueryConfigRequest): Promise<_45.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _45.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.QueryConfigRequest;
                fromPartial(_: Partial<_45.QueryConfigRequest>): _45.QueryConfigRequest;
                fromAmino(_: _45.QueryConfigRequestAmino): _45.QueryConfigRequest;
                toAmino(_: _45.QueryConfigRequest): _45.QueryConfigRequestAmino;
                fromAminoMsg(object: _45.QueryConfigRequestAminoMsg): _45.QueryConfigRequest;
                toAminoMsg(message: _45.QueryConfigRequest): _45.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _45.QueryConfigRequestProtoMsg): _45.QueryConfigRequest;
                toProto(message: _45.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _45.QueryConfigRequest): _45.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _45.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryConfigResponse;
                fromPartial(object: Partial<_45.QueryConfigResponse>): _45.QueryConfigResponse;
                fromAmino(object: _45.QueryConfigResponseAmino): _45.QueryConfigResponse;
                toAmino(message: _45.QueryConfigResponse): _45.QueryConfigResponseAmino;
                fromAminoMsg(object: _45.QueryConfigResponseAminoMsg): _45.QueryConfigResponse;
                toAminoMsg(message: _45.QueryConfigResponse): _45.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _45.QueryConfigResponseProtoMsg): _45.QueryConfigResponse;
                toProto(message: _45.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _45.QueryConfigResponse): _45.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _44.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.ModuleDescriptor;
                fromPartial(object: Partial<_44.ModuleDescriptor>): _44.ModuleDescriptor;
                fromAmino(object: _44.ModuleDescriptorAmino): _44.ModuleDescriptor;
                toAmino(message: _44.ModuleDescriptor): _44.ModuleDescriptorAmino;
                fromAminoMsg(object: _44.ModuleDescriptorAminoMsg): _44.ModuleDescriptor;
                toAminoMsg(message: _44.ModuleDescriptor): _44.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _44.ModuleDescriptorProtoMsg): _44.ModuleDescriptor;
                toProto(message: _44.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _44.ModuleDescriptor): _44.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _44.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.PackageReference;
                fromPartial(object: Partial<_44.PackageReference>): _44.PackageReference;
                fromAmino(object: _44.PackageReferenceAmino): _44.PackageReference;
                toAmino(message: _44.PackageReference): _44.PackageReferenceAmino;
                fromAminoMsg(object: _44.PackageReferenceAminoMsg): _44.PackageReference;
                toAminoMsg(message: _44.PackageReference): _44.PackageReferenceAminoMsg;
                fromProtoMsg(message: _44.PackageReferenceProtoMsg): _44.PackageReference;
                toProto(message: _44.PackageReference): Uint8Array;
                toProtoMsg(message: _44.PackageReference): _44.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _44.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MigrateFromInfo;
                fromPartial(object: Partial<_44.MigrateFromInfo>): _44.MigrateFromInfo;
                fromAmino(object: _44.MigrateFromInfoAmino): _44.MigrateFromInfo;
                toAmino(message: _44.MigrateFromInfo): _44.MigrateFromInfoAmino;
                fromAminoMsg(object: _44.MigrateFromInfoAminoMsg): _44.MigrateFromInfo;
                toAminoMsg(message: _44.MigrateFromInfo): _44.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _44.MigrateFromInfoProtoMsg): _44.MigrateFromInfo;
                toProto(message: _44.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _44.MigrateFromInfo): _44.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _43.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Config;
                fromPartial(object: Partial<_43.Config>): _43.Config;
                fromAmino(object: _43.ConfigAmino): _43.Config;
                toAmino(message: _43.Config): _43.ConfigAmino;
                fromAminoMsg(object: _43.ConfigAminoMsg): _43.Config;
                toAminoMsg(message: _43.Config): _43.ConfigAminoMsg;
                fromProtoMsg(message: _43.ConfigProtoMsg): _43.Config;
                toProto(message: _43.Config): Uint8Array;
                toProtoMsg(message: _43.Config): _43.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _43.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ModuleConfig;
                fromPartial(object: Partial<_43.ModuleConfig>): _43.ModuleConfig;
                fromAmino(object: _43.ModuleConfigAmino): _43.ModuleConfig;
                toAmino(message: _43.ModuleConfig): _43.ModuleConfigAmino;
                fromAminoMsg(object: _43.ModuleConfigAminoMsg): _43.ModuleConfig;
                toAminoMsg(message: _43.ModuleConfig): _43.ModuleConfigAminoMsg;
                fromProtoMsg(message: _43.ModuleConfigProtoMsg): _43.ModuleConfig;
                toProto(message: _43.ModuleConfig): Uint8Array;
                toProtoMsg(message: _43.ModuleConfig): _43.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _48.QueryAccountsRequest): Promise<_48.QueryAccountsResponse>;
                account(request: _48.QueryAccountRequest): Promise<_48.QueryAccountResponse>;
                accountAddressByID(request: _48.QueryAccountAddressByIDRequest): Promise<_48.QueryAccountAddressByIDResponse>;
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                moduleAccounts(request?: _48.QueryModuleAccountsRequest): Promise<_48.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _48.QueryModuleAccountByNameRequest): Promise<_48.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _48.Bech32PrefixRequest): Promise<_48.Bech32PrefixResponse>;
                addressBytesToString(request: _48.AddressBytesToStringRequest): Promise<_48.AddressBytesToStringResponse>;
                addressStringToBytes(request: _48.AddressStringToBytesRequest): Promise<_48.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _48.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAccountsRequest;
                fromPartial(object: Partial<_48.QueryAccountsRequest>): _48.QueryAccountsRequest;
                fromAmino(object: _48.QueryAccountsRequestAmino): _48.QueryAccountsRequest;
                toAmino(message: _48.QueryAccountsRequest): _48.QueryAccountsRequestAmino;
                fromAminoMsg(object: _48.QueryAccountsRequestAminoMsg): _48.QueryAccountsRequest;
                toAminoMsg(message: _48.QueryAccountsRequest): _48.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAccountsRequestProtoMsg): _48.QueryAccountsRequest;
                toProto(message: _48.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAccountsRequest): _48.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _48.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAccountsResponse;
                fromPartial(object: Partial<_48.QueryAccountsResponse>): _48.QueryAccountsResponse;
                fromAmino(object: _48.QueryAccountsResponseAmino): _48.QueryAccountsResponse;
                toAmino(message: _48.QueryAccountsResponse): _48.QueryAccountsResponseAmino;
                fromAminoMsg(object: _48.QueryAccountsResponseAminoMsg): _48.QueryAccountsResponse;
                toAminoMsg(message: _48.QueryAccountsResponse): _48.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAccountsResponseProtoMsg): _48.QueryAccountsResponse;
                toProto(message: _48.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAccountsResponse): _48.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _48.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAccountRequest;
                fromPartial(object: Partial<_48.QueryAccountRequest>): _48.QueryAccountRequest;
                fromAmino(object: _48.QueryAccountRequestAmino): _48.QueryAccountRequest;
                toAmino(message: _48.QueryAccountRequest): _48.QueryAccountRequestAmino;
                fromAminoMsg(object: _48.QueryAccountRequestAminoMsg): _48.QueryAccountRequest;
                toAminoMsg(message: _48.QueryAccountRequest): _48.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAccountRequestProtoMsg): _48.QueryAccountRequest;
                toProto(message: _48.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAccountRequest): _48.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _48.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAccountResponse;
                fromPartial(object: Partial<_48.QueryAccountResponse>): _48.QueryAccountResponse;
                fromAmino(object: _48.QueryAccountResponseAmino): _48.QueryAccountResponse;
                toAmino(message: _48.QueryAccountResponse): _48.QueryAccountResponseAmino;
                fromAminoMsg(object: _48.QueryAccountResponseAminoMsg): _48.QueryAccountResponse;
                toAminoMsg(message: _48.QueryAccountResponse): _48.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAccountResponseProtoMsg): _48.QueryAccountResponse;
                toProto(message: _48.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAccountResponse): _48.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _48.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryParamsRequest;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
                fromAmino(_: _48.QueryParamsRequestAmino): _48.QueryParamsRequest;
                toAmino(_: _48.QueryParamsRequest): _48.QueryParamsRequestAmino;
                fromAminoMsg(object: _48.QueryParamsRequestAminoMsg): _48.QueryParamsRequest;
                toAminoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryParamsRequestProtoMsg): _48.QueryParamsRequest;
                toProto(message: _48.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _48.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryParamsResponse;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
                fromAmino(object: _48.QueryParamsResponseAmino): _48.QueryParamsResponse;
                toAmino(message: _48.QueryParamsResponse): _48.QueryParamsResponseAmino;
                fromAminoMsg(object: _48.QueryParamsResponseAminoMsg): _48.QueryParamsResponse;
                toAminoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryParamsResponseProtoMsg): _48.QueryParamsResponse;
                toProto(message: _48.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _48.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_48.QueryModuleAccountsRequest>): _48.QueryModuleAccountsRequest;
                fromAmino(_: _48.QueryModuleAccountsRequestAmino): _48.QueryModuleAccountsRequest;
                toAmino(_: _48.QueryModuleAccountsRequest): _48.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _48.QueryModuleAccountsRequestAminoMsg): _48.QueryModuleAccountsRequest;
                toAminoMsg(message: _48.QueryModuleAccountsRequest): _48.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryModuleAccountsRequestProtoMsg): _48.QueryModuleAccountsRequest;
                toProto(message: _48.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryModuleAccountsRequest): _48.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _48.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_48.QueryModuleAccountsResponse>): _48.QueryModuleAccountsResponse;
                fromAmino(object: _48.QueryModuleAccountsResponseAmino): _48.QueryModuleAccountsResponse;
                toAmino(message: _48.QueryModuleAccountsResponse): _48.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _48.QueryModuleAccountsResponseAminoMsg): _48.QueryModuleAccountsResponse;
                toAminoMsg(message: _48.QueryModuleAccountsResponse): _48.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryModuleAccountsResponseProtoMsg): _48.QueryModuleAccountsResponse;
                toProto(message: _48.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryModuleAccountsResponse): _48.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _48.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_48.QueryModuleAccountByNameRequest>): _48.QueryModuleAccountByNameRequest;
                fromAmino(object: _48.QueryModuleAccountByNameRequestAmino): _48.QueryModuleAccountByNameRequest;
                toAmino(message: _48.QueryModuleAccountByNameRequest): _48.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _48.QueryModuleAccountByNameRequestAminoMsg): _48.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _48.QueryModuleAccountByNameRequest): _48.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _48.QueryModuleAccountByNameRequestProtoMsg): _48.QueryModuleAccountByNameRequest;
                toProto(message: _48.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _48.QueryModuleAccountByNameRequest): _48.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _48.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_48.QueryModuleAccountByNameResponse>): _48.QueryModuleAccountByNameResponse;
                fromAmino(object: _48.QueryModuleAccountByNameResponseAmino): _48.QueryModuleAccountByNameResponse;
                toAmino(message: _48.QueryModuleAccountByNameResponse): _48.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _48.QueryModuleAccountByNameResponseAminoMsg): _48.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _48.QueryModuleAccountByNameResponse): _48.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _48.QueryModuleAccountByNameResponseProtoMsg): _48.QueryModuleAccountByNameResponse;
                toProto(message: _48.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _48.QueryModuleAccountByNameResponse): _48.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _48.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.Bech32PrefixRequest;
                fromPartial(_: Partial<_48.Bech32PrefixRequest>): _48.Bech32PrefixRequest;
                fromAmino(_: _48.Bech32PrefixRequestAmino): _48.Bech32PrefixRequest;
                toAmino(_: _48.Bech32PrefixRequest): _48.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _48.Bech32PrefixRequestAminoMsg): _48.Bech32PrefixRequest;
                toAminoMsg(message: _48.Bech32PrefixRequest): _48.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _48.Bech32PrefixRequestProtoMsg): _48.Bech32PrefixRequest;
                toProto(message: _48.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _48.Bech32PrefixRequest): _48.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _48.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.Bech32PrefixResponse;
                fromPartial(object: Partial<_48.Bech32PrefixResponse>): _48.Bech32PrefixResponse;
                fromAmino(object: _48.Bech32PrefixResponseAmino): _48.Bech32PrefixResponse;
                toAmino(message: _48.Bech32PrefixResponse): _48.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _48.Bech32PrefixResponseAminoMsg): _48.Bech32PrefixResponse;
                toAminoMsg(message: _48.Bech32PrefixResponse): _48.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _48.Bech32PrefixResponseProtoMsg): _48.Bech32PrefixResponse;
                toProto(message: _48.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _48.Bech32PrefixResponse): _48.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _48.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.AddressBytesToStringRequest;
                fromPartial(object: Partial<_48.AddressBytesToStringRequest>): _48.AddressBytesToStringRequest;
                fromAmino(object: _48.AddressBytesToStringRequestAmino): _48.AddressBytesToStringRequest;
                toAmino(message: _48.AddressBytesToStringRequest): _48.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _48.AddressBytesToStringRequestAminoMsg): _48.AddressBytesToStringRequest;
                toAminoMsg(message: _48.AddressBytesToStringRequest): _48.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _48.AddressBytesToStringRequestProtoMsg): _48.AddressBytesToStringRequest;
                toProto(message: _48.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _48.AddressBytesToStringRequest): _48.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _48.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.AddressBytesToStringResponse;
                fromPartial(object: Partial<_48.AddressBytesToStringResponse>): _48.AddressBytesToStringResponse;
                fromAmino(object: _48.AddressBytesToStringResponseAmino): _48.AddressBytesToStringResponse;
                toAmino(message: _48.AddressBytesToStringResponse): _48.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _48.AddressBytesToStringResponseAminoMsg): _48.AddressBytesToStringResponse;
                toAminoMsg(message: _48.AddressBytesToStringResponse): _48.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _48.AddressBytesToStringResponseProtoMsg): _48.AddressBytesToStringResponse;
                toProto(message: _48.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _48.AddressBytesToStringResponse): _48.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _48.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.AddressStringToBytesRequest;
                fromPartial(object: Partial<_48.AddressStringToBytesRequest>): _48.AddressStringToBytesRequest;
                fromAmino(object: _48.AddressStringToBytesRequestAmino): _48.AddressStringToBytesRequest;
                toAmino(message: _48.AddressStringToBytesRequest): _48.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _48.AddressStringToBytesRequestAminoMsg): _48.AddressStringToBytesRequest;
                toAminoMsg(message: _48.AddressStringToBytesRequest): _48.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _48.AddressStringToBytesRequestProtoMsg): _48.AddressStringToBytesRequest;
                toProto(message: _48.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _48.AddressStringToBytesRequest): _48.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _48.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.AddressStringToBytesResponse;
                fromPartial(object: Partial<_48.AddressStringToBytesResponse>): _48.AddressStringToBytesResponse;
                fromAmino(object: _48.AddressStringToBytesResponseAmino): _48.AddressStringToBytesResponse;
                toAmino(message: _48.AddressStringToBytesResponse): _48.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _48.AddressStringToBytesResponseAminoMsg): _48.AddressStringToBytesResponse;
                toAminoMsg(message: _48.AddressStringToBytesResponse): _48.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _48.AddressStringToBytesResponseProtoMsg): _48.AddressStringToBytesResponse;
                toProto(message: _48.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _48.AddressStringToBytesResponse): _48.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _48.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_48.QueryAccountAddressByIDRequest>): _48.QueryAccountAddressByIDRequest;
                fromAmino(object: _48.QueryAccountAddressByIDRequestAmino): _48.QueryAccountAddressByIDRequest;
                toAmino(message: _48.QueryAccountAddressByIDRequest): _48.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _48.QueryAccountAddressByIDRequestAminoMsg): _48.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _48.QueryAccountAddressByIDRequest): _48.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAccountAddressByIDRequestProtoMsg): _48.QueryAccountAddressByIDRequest;
                toProto(message: _48.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAccountAddressByIDRequest): _48.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _48.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_48.QueryAccountAddressByIDResponse>): _48.QueryAccountAddressByIDResponse;
                fromAmino(object: _48.QueryAccountAddressByIDResponseAmino): _48.QueryAccountAddressByIDResponse;
                toAmino(message: _48.QueryAccountAddressByIDResponse): _48.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _48.QueryAccountAddressByIDResponseAminoMsg): _48.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _48.QueryAccountAddressByIDResponse): _48.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAccountAddressByIDResponseProtoMsg): _48.QueryAccountAddressByIDResponse;
                toProto(message: _48.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAccountAddressByIDResponse): _48.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _46.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _46.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _47.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.GenesisState;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
                fromAmino(object: _47.GenesisStateAmino): _47.GenesisState;
                toAmino(message: _47.GenesisState): _47.GenesisStateAmino;
                fromAminoMsg(object: _47.GenesisStateAminoMsg): _47.GenesisState;
                toAminoMsg(message: _47.GenesisState): _47.GenesisStateAminoMsg;
                fromProtoMsg(message: _47.GenesisStateProtoMsg): _47.GenesisState;
                toProto(message: _47.GenesisState): Uint8Array;
                toProtoMsg(message: _47.GenesisState): _47.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _46.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.BaseAccount;
                fromPartial(object: Partial<_46.BaseAccount>): _46.BaseAccount;
                fromAmino(object: _46.BaseAccountAmino): _46.BaseAccount;
                toAmino(message: _46.BaseAccount): _46.BaseAccountAmino;
                fromAminoMsg(object: _46.BaseAccountAminoMsg): _46.BaseAccount;
                toAminoMsg(message: _46.BaseAccount): _46.BaseAccountAminoMsg;
                fromProtoMsg(message: _46.BaseAccountProtoMsg): _46.BaseAccount;
                toProto(message: _46.BaseAccount): Uint8Array;
                toProtoMsg(message: _46.BaseAccount): _46.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _46.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.ModuleAccount;
                fromPartial(object: Partial<_46.ModuleAccount>): _46.ModuleAccount;
                fromAmino(object: _46.ModuleAccountAmino): _46.ModuleAccount;
                toAmino(message: _46.ModuleAccount): _46.ModuleAccountAmino;
                fromAminoMsg(object: _46.ModuleAccountAminoMsg): _46.ModuleAccount;
                toAminoMsg(message: _46.ModuleAccount): _46.ModuleAccountAminoMsg;
                fromProtoMsg(message: _46.ModuleAccountProtoMsg): _46.ModuleAccount;
                toProto(message: _46.ModuleAccount): Uint8Array;
                toProtoMsg(message: _46.ModuleAccount): _46.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _46.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
                fromAmino(object: _46.ParamsAmino): _46.Params;
                toAmino(message: _46.Params): _46.ParamsAmino;
                fromAminoMsg(object: _46.ParamsAminoMsg): _46.Params;
                toAminoMsg(message: _46.Params): _46.ParamsAminoMsg;
                fromProtoMsg(message: _46.ParamsProtoMsg): _46.Params;
                toProto(message: _46.Params): Uint8Array;
                toProtoMsg(message: _46.Params): _46.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _52.QueryGrantsRequest): Promise<_52.QueryGrantsResponse>;
                granterGrants(request: _52.QueryGranterGrantsRequest): Promise<_52.QueryGranterGrantsResponse>;
                granteeGrants(request: _52.QueryGranteeGrantsRequest): Promise<_52.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _53.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _53.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _53.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _53.MsgGrant): {
                        typeUrl: string;
                        value: _53.MsgGrant;
                    };
                    exec(value: _53.MsgExec): {
                        typeUrl: string;
                        value: _53.MsgExec;
                    };
                    revoke(value: _53.MsgRevoke): {
                        typeUrl: string;
                        value: _53.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _53.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _53.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _53.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _53.MsgGrant): {
                        typeUrl: string;
                        value: _53.MsgGrant;
                    };
                    exec(value: _53.MsgExec): {
                        typeUrl: string;
                        value: _53.MsgExec;
                    };
                    revoke(value: _53.MsgRevoke): {
                        typeUrl: string;
                        value: _53.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _53.MsgGrant) => _53.MsgGrantAmino;
                    fromAmino: (object: _53.MsgGrantAmino) => _53.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _53.MsgExec) => _53.MsgExecAmino;
                    fromAmino: (object: _53.MsgExecAmino) => _53.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _53.MsgRevoke) => _53.MsgRevokeAmino;
                    fromAmino: (object: _53.MsgRevokeAmino) => _53.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _53.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgGrant;
                fromPartial(object: Partial<_53.MsgGrant>): _53.MsgGrant;
                fromAmino(object: _53.MsgGrantAmino): _53.MsgGrant;
                toAmino(message: _53.MsgGrant): _53.MsgGrantAmino;
                fromAminoMsg(object: _53.MsgGrantAminoMsg): _53.MsgGrant;
                toAminoMsg(message: _53.MsgGrant): _53.MsgGrantAminoMsg;
                fromProtoMsg(message: _53.MsgGrantProtoMsg): _53.MsgGrant;
                toProto(message: _53.MsgGrant): Uint8Array;
                toProtoMsg(message: _53.MsgGrant): _53.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _53.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgExecResponse;
                fromPartial(object: Partial<_53.MsgExecResponse>): _53.MsgExecResponse;
                fromAmino(object: _53.MsgExecResponseAmino): _53.MsgExecResponse;
                toAmino(message: _53.MsgExecResponse): _53.MsgExecResponseAmino;
                fromAminoMsg(object: _53.MsgExecResponseAminoMsg): _53.MsgExecResponse;
                toAminoMsg(message: _53.MsgExecResponse): _53.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _53.MsgExecResponseProtoMsg): _53.MsgExecResponse;
                toProto(message: _53.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _53.MsgExecResponse): _53.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _53.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgExec;
                fromPartial(object: Partial<_53.MsgExec>): _53.MsgExec;
                fromAmino(object: _53.MsgExecAmino): _53.MsgExec;
                toAmino(message: _53.MsgExec): _53.MsgExecAmino;
                fromAminoMsg(object: _53.MsgExecAminoMsg): _53.MsgExec;
                toAminoMsg(message: _53.MsgExec): _53.MsgExecAminoMsg;
                fromProtoMsg(message: _53.MsgExecProtoMsg): _53.MsgExec;
                toProto(message: _53.MsgExec): Uint8Array;
                toProtoMsg(message: _53.MsgExec): _53.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _53.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgGrantResponse;
                fromPartial(_: Partial<_53.MsgGrantResponse>): _53.MsgGrantResponse;
                fromAmino(_: _53.MsgGrantResponseAmino): _53.MsgGrantResponse;
                toAmino(_: _53.MsgGrantResponse): _53.MsgGrantResponseAmino;
                fromAminoMsg(object: _53.MsgGrantResponseAminoMsg): _53.MsgGrantResponse;
                toAminoMsg(message: _53.MsgGrantResponse): _53.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _53.MsgGrantResponseProtoMsg): _53.MsgGrantResponse;
                toProto(message: _53.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _53.MsgGrantResponse): _53.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _53.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgRevoke;
                fromPartial(object: Partial<_53.MsgRevoke>): _53.MsgRevoke;
                fromAmino(object: _53.MsgRevokeAmino): _53.MsgRevoke;
                toAmino(message: _53.MsgRevoke): _53.MsgRevokeAmino;
                fromAminoMsg(object: _53.MsgRevokeAminoMsg): _53.MsgRevoke;
                toAminoMsg(message: _53.MsgRevoke): _53.MsgRevokeAminoMsg;
                fromProtoMsg(message: _53.MsgRevokeProtoMsg): _53.MsgRevoke;
                toProto(message: _53.MsgRevoke): Uint8Array;
                toProtoMsg(message: _53.MsgRevoke): _53.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _53.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _53.MsgRevokeResponse;
                fromPartial(_: Partial<_53.MsgRevokeResponse>): _53.MsgRevokeResponse;
                fromAmino(_: _53.MsgRevokeResponseAmino): _53.MsgRevokeResponse;
                toAmino(_: _53.MsgRevokeResponse): _53.MsgRevokeResponseAmino;
                fromAminoMsg(object: _53.MsgRevokeResponseAminoMsg): _53.MsgRevokeResponse;
                toAminoMsg(message: _53.MsgRevokeResponse): _53.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _53.MsgRevokeResponseProtoMsg): _53.MsgRevokeResponse;
                toProto(message: _53.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _53.MsgRevokeResponse): _53.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _52.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryGrantsRequest;
                fromPartial(object: Partial<_52.QueryGrantsRequest>): _52.QueryGrantsRequest;
                fromAmino(object: _52.QueryGrantsRequestAmino): _52.QueryGrantsRequest;
                toAmino(message: _52.QueryGrantsRequest): _52.QueryGrantsRequestAmino;
                fromAminoMsg(object: _52.QueryGrantsRequestAminoMsg): _52.QueryGrantsRequest;
                toAminoMsg(message: _52.QueryGrantsRequest): _52.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryGrantsRequestProtoMsg): _52.QueryGrantsRequest;
                toProto(message: _52.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryGrantsRequest): _52.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _52.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryGrantsResponse;
                fromPartial(object: Partial<_52.QueryGrantsResponse>): _52.QueryGrantsResponse;
                fromAmino(object: _52.QueryGrantsResponseAmino): _52.QueryGrantsResponse;
                toAmino(message: _52.QueryGrantsResponse): _52.QueryGrantsResponseAmino;
                fromAminoMsg(object: _52.QueryGrantsResponseAminoMsg): _52.QueryGrantsResponse;
                toAminoMsg(message: _52.QueryGrantsResponse): _52.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryGrantsResponseProtoMsg): _52.QueryGrantsResponse;
                toProto(message: _52.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryGrantsResponse): _52.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _52.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_52.QueryGranterGrantsRequest>): _52.QueryGranterGrantsRequest;
                fromAmino(object: _52.QueryGranterGrantsRequestAmino): _52.QueryGranterGrantsRequest;
                toAmino(message: _52.QueryGranterGrantsRequest): _52.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _52.QueryGranterGrantsRequestAminoMsg): _52.QueryGranterGrantsRequest;
                toAminoMsg(message: _52.QueryGranterGrantsRequest): _52.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryGranterGrantsRequestProtoMsg): _52.QueryGranterGrantsRequest;
                toProto(message: _52.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryGranterGrantsRequest): _52.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _52.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_52.QueryGranterGrantsResponse>): _52.QueryGranterGrantsResponse;
                fromAmino(object: _52.QueryGranterGrantsResponseAmino): _52.QueryGranterGrantsResponse;
                toAmino(message: _52.QueryGranterGrantsResponse): _52.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _52.QueryGranterGrantsResponseAminoMsg): _52.QueryGranterGrantsResponse;
                toAminoMsg(message: _52.QueryGranterGrantsResponse): _52.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryGranterGrantsResponseProtoMsg): _52.QueryGranterGrantsResponse;
                toProto(message: _52.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryGranterGrantsResponse): _52.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _52.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_52.QueryGranteeGrantsRequest>): _52.QueryGranteeGrantsRequest;
                fromAmino(object: _52.QueryGranteeGrantsRequestAmino): _52.QueryGranteeGrantsRequest;
                toAmino(message: _52.QueryGranteeGrantsRequest): _52.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _52.QueryGranteeGrantsRequestAminoMsg): _52.QueryGranteeGrantsRequest;
                toAminoMsg(message: _52.QueryGranteeGrantsRequest): _52.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryGranteeGrantsRequestProtoMsg): _52.QueryGranteeGrantsRequest;
                toProto(message: _52.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryGranteeGrantsRequest): _52.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _52.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_52.QueryGranteeGrantsResponse>): _52.QueryGranteeGrantsResponse;
                fromAmino(object: _52.QueryGranteeGrantsResponseAmino): _52.QueryGranteeGrantsResponse;
                toAmino(message: _52.QueryGranteeGrantsResponse): _52.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _52.QueryGranteeGrantsResponseAminoMsg): _52.QueryGranteeGrantsResponse;
                toAminoMsg(message: _52.QueryGranteeGrantsResponse): _52.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryGranteeGrantsResponseProtoMsg): _52.QueryGranteeGrantsResponse;
                toProto(message: _52.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryGranteeGrantsResponse): _52.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _51.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
                fromAmino(object: _51.GenesisStateAmino): _51.GenesisState;
                toAmino(message: _51.GenesisState): _51.GenesisStateAmino;
                fromAminoMsg(object: _51.GenesisStateAminoMsg): _51.GenesisState;
                toAminoMsg(message: _51.GenesisState): _51.GenesisStateAminoMsg;
                fromProtoMsg(message: _51.GenesisStateProtoMsg): _51.GenesisState;
                toProto(message: _51.GenesisState): Uint8Array;
                toProtoMsg(message: _51.GenesisState): _51.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _50.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.EventGrant;
                fromPartial(object: Partial<_50.EventGrant>): _50.EventGrant;
                fromAmino(object: _50.EventGrantAmino): _50.EventGrant;
                toAmino(message: _50.EventGrant): _50.EventGrantAmino;
                fromAminoMsg(object: _50.EventGrantAminoMsg): _50.EventGrant;
                toAminoMsg(message: _50.EventGrant): _50.EventGrantAminoMsg;
                fromProtoMsg(message: _50.EventGrantProtoMsg): _50.EventGrant;
                toProto(message: _50.EventGrant): Uint8Array;
                toProtoMsg(message: _50.EventGrant): _50.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _50.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.EventRevoke;
                fromPartial(object: Partial<_50.EventRevoke>): _50.EventRevoke;
                fromAmino(object: _50.EventRevokeAmino): _50.EventRevoke;
                toAmino(message: _50.EventRevoke): _50.EventRevokeAmino;
                fromAminoMsg(object: _50.EventRevokeAminoMsg): _50.EventRevoke;
                toAminoMsg(message: _50.EventRevoke): _50.EventRevokeAminoMsg;
                fromProtoMsg(message: _50.EventRevokeProtoMsg): _50.EventRevoke;
                toProto(message: _50.EventRevoke): Uint8Array;
                toProtoMsg(message: _50.EventRevoke): _50.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _49.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.GenericAuthorization;
                fromPartial(object: Partial<_49.GenericAuthorization>): _49.GenericAuthorization;
                fromAmino(object: _49.GenericAuthorizationAmino): _49.GenericAuthorization;
                toAmino(message: _49.GenericAuthorization): _49.GenericAuthorizationAmino;
                fromAminoMsg(object: _49.GenericAuthorizationAminoMsg): _49.GenericAuthorization;
                toAminoMsg(message: _49.GenericAuthorization): _49.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _49.GenericAuthorizationProtoMsg): _49.GenericAuthorization;
                toProto(message: _49.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _49.GenericAuthorization): _49.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _49.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Grant;
                fromPartial(object: Partial<_49.Grant>): _49.Grant;
                fromAmino(object: _49.GrantAmino): _49.Grant;
                toAmino(message: _49.Grant): _49.GrantAmino;
                fromAminoMsg(object: _49.GrantAminoMsg): _49.Grant;
                toAminoMsg(message: _49.Grant): _49.GrantAminoMsg;
                fromProtoMsg(message: _49.GrantProtoMsg): _49.Grant;
                toProto(message: _49.Grant): Uint8Array;
                toProtoMsg(message: _49.Grant): _49.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _49.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.GrantAuthorization;
                fromPartial(object: Partial<_49.GrantAuthorization>): _49.GrantAuthorization;
                fromAmino(object: _49.GrantAuthorizationAmino): _49.GrantAuthorization;
                toAmino(message: _49.GrantAuthorization): _49.GrantAuthorizationAmino;
                fromAminoMsg(object: _49.GrantAuthorizationAminoMsg): _49.GrantAuthorization;
                toAminoMsg(message: _49.GrantAuthorization): _49.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _49.GrantAuthorizationProtoMsg): _49.GrantAuthorization;
                toProto(message: _49.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _49.GrantAuthorization): _49.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _49.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.GrantQueueItem;
                fromPartial(object: Partial<_49.GrantQueueItem>): _49.GrantQueueItem;
                fromAmino(object: _49.GrantQueueItemAmino): _49.GrantQueueItem;
                toAmino(message: _49.GrantQueueItem): _49.GrantQueueItemAmino;
                fromAminoMsg(object: _49.GrantQueueItemAminoMsg): _49.GrantQueueItem;
                toAminoMsg(message: _49.GrantQueueItem): _49.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _49.GrantQueueItemProtoMsg): _49.GrantQueueItem;
                toProto(message: _49.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _49.GrantQueueItem): _49.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _54.SendAuthorization | _36.StakeAuthorization | _49.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _57.QueryBalanceRequest): Promise<_57.QueryBalanceResponse>;
                allBalances(request: _57.QueryAllBalancesRequest): Promise<_57.QueryAllBalancesResponse>;
                spendableBalances(request: _57.QuerySpendableBalancesRequest): Promise<_57.QuerySpendableBalancesResponse>;
                totalSupply(request?: _57.QueryTotalSupplyRequest): Promise<_57.QueryTotalSupplyResponse>;
                supplyOf(request: _57.QuerySupplyOfRequest): Promise<_57.QuerySupplyOfResponse>;
                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                denomMetadata(request: _57.QueryDenomMetadataRequest): Promise<_57.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _57.QueryDenomsMetadataRequest): Promise<_57.QueryDenomsMetadataResponse>;
                denomOwners(request: _57.QueryDenomOwnersRequest): Promise<_57.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _58.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _58.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _58.MsgSend): {
                        typeUrl: string;
                        value: _58.MsgSend;
                    };
                    multiSend(value: _58.MsgMultiSend): {
                        typeUrl: string;
                        value: _58.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _58.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _58.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _58.MsgSend): {
                        typeUrl: string;
                        value: _58.MsgSend;
                    };
                    multiSend(value: _58.MsgMultiSend): {
                        typeUrl: string;
                        value: _58.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _58.MsgSend) => _58.MsgSendAmino;
                    fromAmino: (object: _58.MsgSendAmino) => _58.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _58.MsgMultiSend) => _58.MsgMultiSendAmino;
                    fromAmino: (object: _58.MsgMultiSendAmino) => _58.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _58.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgSend;
                fromPartial(object: Partial<_58.MsgSend>): _58.MsgSend;
                fromAmino(object: _58.MsgSendAmino): _58.MsgSend;
                toAmino(message: _58.MsgSend): _58.MsgSendAmino;
                fromAminoMsg(object: _58.MsgSendAminoMsg): _58.MsgSend;
                toAminoMsg(message: _58.MsgSend): _58.MsgSendAminoMsg;
                fromProtoMsg(message: _58.MsgSendProtoMsg): _58.MsgSend;
                toProto(message: _58.MsgSend): Uint8Array;
                toProtoMsg(message: _58.MsgSend): _58.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _58.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgSendResponse;
                fromPartial(_: Partial<_58.MsgSendResponse>): _58.MsgSendResponse;
                fromAmino(_: _58.MsgSendResponseAmino): _58.MsgSendResponse;
                toAmino(_: _58.MsgSendResponse): _58.MsgSendResponseAmino;
                fromAminoMsg(object: _58.MsgSendResponseAminoMsg): _58.MsgSendResponse;
                toAminoMsg(message: _58.MsgSendResponse): _58.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _58.MsgSendResponseProtoMsg): _58.MsgSendResponse;
                toProto(message: _58.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _58.MsgSendResponse): _58.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _58.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgMultiSend;
                fromPartial(object: Partial<_58.MsgMultiSend>): _58.MsgMultiSend;
                fromAmino(object: _58.MsgMultiSendAmino): _58.MsgMultiSend;
                toAmino(message: _58.MsgMultiSend): _58.MsgMultiSendAmino;
                fromAminoMsg(object: _58.MsgMultiSendAminoMsg): _58.MsgMultiSend;
                toAminoMsg(message: _58.MsgMultiSend): _58.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _58.MsgMultiSendProtoMsg): _58.MsgMultiSend;
                toProto(message: _58.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _58.MsgMultiSend): _58.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _58.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgMultiSendResponse;
                fromPartial(_: Partial<_58.MsgMultiSendResponse>): _58.MsgMultiSendResponse;
                fromAmino(_: _58.MsgMultiSendResponseAmino): _58.MsgMultiSendResponse;
                toAmino(_: _58.MsgMultiSendResponse): _58.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _58.MsgMultiSendResponseAminoMsg): _58.MsgMultiSendResponse;
                toAminoMsg(message: _58.MsgMultiSendResponse): _58.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _58.MsgMultiSendResponseProtoMsg): _58.MsgMultiSendResponse;
                toProto(message: _58.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _58.MsgMultiSendResponse): _58.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _57.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryBalanceRequest;
                fromPartial(object: Partial<_57.QueryBalanceRequest>): _57.QueryBalanceRequest;
                fromAmino(object: _57.QueryBalanceRequestAmino): _57.QueryBalanceRequest;
                toAmino(message: _57.QueryBalanceRequest): _57.QueryBalanceRequestAmino;
                fromAminoMsg(object: _57.QueryBalanceRequestAminoMsg): _57.QueryBalanceRequest;
                toAminoMsg(message: _57.QueryBalanceRequest): _57.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _57.QueryBalanceRequestProtoMsg): _57.QueryBalanceRequest;
                toProto(message: _57.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _57.QueryBalanceRequest): _57.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _57.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryBalanceResponse;
                fromPartial(object: Partial<_57.QueryBalanceResponse>): _57.QueryBalanceResponse;
                fromAmino(object: _57.QueryBalanceResponseAmino): _57.QueryBalanceResponse;
                toAmino(message: _57.QueryBalanceResponse): _57.QueryBalanceResponseAmino;
                fromAminoMsg(object: _57.QueryBalanceResponseAminoMsg): _57.QueryBalanceResponse;
                toAminoMsg(message: _57.QueryBalanceResponse): _57.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _57.QueryBalanceResponseProtoMsg): _57.QueryBalanceResponse;
                toProto(message: _57.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _57.QueryBalanceResponse): _57.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _57.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAllBalancesRequest;
                fromPartial(object: Partial<_57.QueryAllBalancesRequest>): _57.QueryAllBalancesRequest;
                fromAmino(object: _57.QueryAllBalancesRequestAmino): _57.QueryAllBalancesRequest;
                toAmino(message: _57.QueryAllBalancesRequest): _57.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _57.QueryAllBalancesRequestAminoMsg): _57.QueryAllBalancesRequest;
                toAminoMsg(message: _57.QueryAllBalancesRequest): _57.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _57.QueryAllBalancesRequestProtoMsg): _57.QueryAllBalancesRequest;
                toProto(message: _57.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAllBalancesRequest): _57.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _57.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryAllBalancesResponse;
                fromPartial(object: Partial<_57.QueryAllBalancesResponse>): _57.QueryAllBalancesResponse;
                fromAmino(object: _57.QueryAllBalancesResponseAmino): _57.QueryAllBalancesResponse;
                toAmino(message: _57.QueryAllBalancesResponse): _57.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _57.QueryAllBalancesResponseAminoMsg): _57.QueryAllBalancesResponse;
                toAminoMsg(message: _57.QueryAllBalancesResponse): _57.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _57.QueryAllBalancesResponseProtoMsg): _57.QueryAllBalancesResponse;
                toProto(message: _57.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAllBalancesResponse): _57.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _57.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_57.QuerySpendableBalancesRequest>): _57.QuerySpendableBalancesRequest;
                fromAmino(object: _57.QuerySpendableBalancesRequestAmino): _57.QuerySpendableBalancesRequest;
                toAmino(message: _57.QuerySpendableBalancesRequest): _57.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _57.QuerySpendableBalancesRequestAminoMsg): _57.QuerySpendableBalancesRequest;
                toAminoMsg(message: _57.QuerySpendableBalancesRequest): _57.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _57.QuerySpendableBalancesRequestProtoMsg): _57.QuerySpendableBalancesRequest;
                toProto(message: _57.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _57.QuerySpendableBalancesRequest): _57.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _57.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_57.QuerySpendableBalancesResponse>): _57.QuerySpendableBalancesResponse;
                fromAmino(object: _57.QuerySpendableBalancesResponseAmino): _57.QuerySpendableBalancesResponse;
                toAmino(message: _57.QuerySpendableBalancesResponse): _57.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _57.QuerySpendableBalancesResponseAminoMsg): _57.QuerySpendableBalancesResponse;
                toAminoMsg(message: _57.QuerySpendableBalancesResponse): _57.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _57.QuerySpendableBalancesResponseProtoMsg): _57.QuerySpendableBalancesResponse;
                toProto(message: _57.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _57.QuerySpendableBalancesResponse): _57.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _57.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_57.QueryTotalSupplyRequest>): _57.QueryTotalSupplyRequest;
                fromAmino(object: _57.QueryTotalSupplyRequestAmino): _57.QueryTotalSupplyRequest;
                toAmino(message: _57.QueryTotalSupplyRequest): _57.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _57.QueryTotalSupplyRequestAminoMsg): _57.QueryTotalSupplyRequest;
                toAminoMsg(message: _57.QueryTotalSupplyRequest): _57.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _57.QueryTotalSupplyRequestProtoMsg): _57.QueryTotalSupplyRequest;
                toProto(message: _57.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _57.QueryTotalSupplyRequest): _57.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _57.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_57.QueryTotalSupplyResponse>): _57.QueryTotalSupplyResponse;
                fromAmino(object: _57.QueryTotalSupplyResponseAmino): _57.QueryTotalSupplyResponse;
                toAmino(message: _57.QueryTotalSupplyResponse): _57.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _57.QueryTotalSupplyResponseAminoMsg): _57.QueryTotalSupplyResponse;
                toAminoMsg(message: _57.QueryTotalSupplyResponse): _57.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _57.QueryTotalSupplyResponseProtoMsg): _57.QueryTotalSupplyResponse;
                toProto(message: _57.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _57.QueryTotalSupplyResponse): _57.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _57.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QuerySupplyOfRequest;
                fromPartial(object: Partial<_57.QuerySupplyOfRequest>): _57.QuerySupplyOfRequest;
                fromAmino(object: _57.QuerySupplyOfRequestAmino): _57.QuerySupplyOfRequest;
                toAmino(message: _57.QuerySupplyOfRequest): _57.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _57.QuerySupplyOfRequestAminoMsg): _57.QuerySupplyOfRequest;
                toAminoMsg(message: _57.QuerySupplyOfRequest): _57.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _57.QuerySupplyOfRequestProtoMsg): _57.QuerySupplyOfRequest;
                toProto(message: _57.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _57.QuerySupplyOfRequest): _57.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _57.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QuerySupplyOfResponse;
                fromPartial(object: Partial<_57.QuerySupplyOfResponse>): _57.QuerySupplyOfResponse;
                fromAmino(object: _57.QuerySupplyOfResponseAmino): _57.QuerySupplyOfResponse;
                toAmino(message: _57.QuerySupplyOfResponse): _57.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _57.QuerySupplyOfResponseAminoMsg): _57.QuerySupplyOfResponse;
                toAminoMsg(message: _57.QuerySupplyOfResponse): _57.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _57.QuerySupplyOfResponseProtoMsg): _57.QuerySupplyOfResponse;
                toProto(message: _57.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _57.QuerySupplyOfResponse): _57.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _57.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.QueryParamsRequest;
                fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
                fromAmino(_: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
                toAmino(_: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
                fromAminoMsg(object: _57.QueryParamsRequestAminoMsg): _57.QueryParamsRequest;
                toAminoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryParamsRequestProtoMsg): _57.QueryParamsRequest;
                toProto(message: _57.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _57.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryParamsResponse;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
                fromAmino(object: _57.QueryParamsResponseAmino): _57.QueryParamsResponse;
                toAmino(message: _57.QueryParamsResponse): _57.QueryParamsResponseAmino;
                fromAminoMsg(object: _57.QueryParamsResponseAminoMsg): _57.QueryParamsResponse;
                toAminoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryParamsResponseProtoMsg): _57.QueryParamsResponse;
                toProto(message: _57.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _57.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_57.QueryDenomsMetadataRequest>): _57.QueryDenomsMetadataRequest;
                fromAmino(object: _57.QueryDenomsMetadataRequestAmino): _57.QueryDenomsMetadataRequest;
                toAmino(message: _57.QueryDenomsMetadataRequest): _57.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _57.QueryDenomsMetadataRequestAminoMsg): _57.QueryDenomsMetadataRequest;
                toAminoMsg(message: _57.QueryDenomsMetadataRequest): _57.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _57.QueryDenomsMetadataRequestProtoMsg): _57.QueryDenomsMetadataRequest;
                toProto(message: _57.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDenomsMetadataRequest): _57.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _57.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_57.QueryDenomsMetadataResponse>): _57.QueryDenomsMetadataResponse;
                fromAmino(object: _57.QueryDenomsMetadataResponseAmino): _57.QueryDenomsMetadataResponse;
                toAmino(message: _57.QueryDenomsMetadataResponse): _57.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _57.QueryDenomsMetadataResponseAminoMsg): _57.QueryDenomsMetadataResponse;
                toAminoMsg(message: _57.QueryDenomsMetadataResponse): _57.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _57.QueryDenomsMetadataResponseProtoMsg): _57.QueryDenomsMetadataResponse;
                toProto(message: _57.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDenomsMetadataResponse): _57.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _57.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_57.QueryDenomMetadataRequest>): _57.QueryDenomMetadataRequest;
                fromAmino(object: _57.QueryDenomMetadataRequestAmino): _57.QueryDenomMetadataRequest;
                toAmino(message: _57.QueryDenomMetadataRequest): _57.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _57.QueryDenomMetadataRequestAminoMsg): _57.QueryDenomMetadataRequest;
                toAminoMsg(message: _57.QueryDenomMetadataRequest): _57.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _57.QueryDenomMetadataRequestProtoMsg): _57.QueryDenomMetadataRequest;
                toProto(message: _57.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDenomMetadataRequest): _57.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _57.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_57.QueryDenomMetadataResponse>): _57.QueryDenomMetadataResponse;
                fromAmino(object: _57.QueryDenomMetadataResponseAmino): _57.QueryDenomMetadataResponse;
                toAmino(message: _57.QueryDenomMetadataResponse): _57.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _57.QueryDenomMetadataResponseAminoMsg): _57.QueryDenomMetadataResponse;
                toAminoMsg(message: _57.QueryDenomMetadataResponse): _57.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _57.QueryDenomMetadataResponseProtoMsg): _57.QueryDenomMetadataResponse;
                toProto(message: _57.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDenomMetadataResponse): _57.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _57.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_57.QueryDenomOwnersRequest>): _57.QueryDenomOwnersRequest;
                fromAmino(object: _57.QueryDenomOwnersRequestAmino): _57.QueryDenomOwnersRequest;
                toAmino(message: _57.QueryDenomOwnersRequest): _57.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _57.QueryDenomOwnersRequestAminoMsg): _57.QueryDenomOwnersRequest;
                toAminoMsg(message: _57.QueryDenomOwnersRequest): _57.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _57.QueryDenomOwnersRequestProtoMsg): _57.QueryDenomOwnersRequest;
                toProto(message: _57.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDenomOwnersRequest): _57.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _57.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.DenomOwner;
                fromPartial(object: Partial<_57.DenomOwner>): _57.DenomOwner;
                fromAmino(object: _57.DenomOwnerAmino): _57.DenomOwner;
                toAmino(message: _57.DenomOwner): _57.DenomOwnerAmino;
                fromAminoMsg(object: _57.DenomOwnerAminoMsg): _57.DenomOwner;
                toAminoMsg(message: _57.DenomOwner): _57.DenomOwnerAminoMsg;
                fromProtoMsg(message: _57.DenomOwnerProtoMsg): _57.DenomOwner;
                toProto(message: _57.DenomOwner): Uint8Array;
                toProtoMsg(message: _57.DenomOwner): _57.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _57.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_57.QueryDenomOwnersResponse>): _57.QueryDenomOwnersResponse;
                fromAmino(object: _57.QueryDenomOwnersResponseAmino): _57.QueryDenomOwnersResponse;
                toAmino(message: _57.QueryDenomOwnersResponse): _57.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _57.QueryDenomOwnersResponseAminoMsg): _57.QueryDenomOwnersResponse;
                toAminoMsg(message: _57.QueryDenomOwnersResponse): _57.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _57.QueryDenomOwnersResponseProtoMsg): _57.QueryDenomOwnersResponse;
                toProto(message: _57.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDenomOwnersResponse): _57.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _56.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
                fromAmino(object: _56.GenesisStateAmino): _56.GenesisState;
                toAmino(message: _56.GenesisState): _56.GenesisStateAmino;
                fromAminoMsg(object: _56.GenesisStateAminoMsg): _56.GenesisState;
                toAminoMsg(message: _56.GenesisState): _56.GenesisStateAminoMsg;
                fromProtoMsg(message: _56.GenesisStateProtoMsg): _56.GenesisState;
                toProto(message: _56.GenesisState): Uint8Array;
                toProtoMsg(message: _56.GenesisState): _56.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _56.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Balance;
                fromPartial(object: Partial<_56.Balance>): _56.Balance;
                fromAmino(object: _56.BalanceAmino): _56.Balance;
                toAmino(message: _56.Balance): _56.BalanceAmino;
                fromAminoMsg(object: _56.BalanceAminoMsg): _56.Balance;
                toAminoMsg(message: _56.Balance): _56.BalanceAminoMsg;
                fromProtoMsg(message: _56.BalanceProtoMsg): _56.Balance;
                toProto(message: _56.Balance): Uint8Array;
                toProtoMsg(message: _56.Balance): _56.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _55.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Params;
                fromPartial(object: Partial<_55.Params>): _55.Params;
                fromAmino(object: _55.ParamsAmino): _55.Params;
                toAmino(message: _55.Params): _55.ParamsAmino;
                fromAminoMsg(object: _55.ParamsAminoMsg): _55.Params;
                toAminoMsg(message: _55.Params): _55.ParamsAminoMsg;
                fromProtoMsg(message: _55.ParamsProtoMsg): _55.Params;
                toProto(message: _55.Params): Uint8Array;
                toProtoMsg(message: _55.Params): _55.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _55.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.SendEnabled;
                fromPartial(object: Partial<_55.SendEnabled>): _55.SendEnabled;
                fromAmino(object: _55.SendEnabledAmino): _55.SendEnabled;
                toAmino(message: _55.SendEnabled): _55.SendEnabledAmino;
                fromAminoMsg(object: _55.SendEnabledAminoMsg): _55.SendEnabled;
                toAminoMsg(message: _55.SendEnabled): _55.SendEnabledAminoMsg;
                fromProtoMsg(message: _55.SendEnabledProtoMsg): _55.SendEnabled;
                toProto(message: _55.SendEnabled): Uint8Array;
                toProtoMsg(message: _55.SendEnabled): _55.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _55.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Input;
                fromPartial(object: Partial<_55.Input>): _55.Input;
                fromAmino(object: _55.InputAmino): _55.Input;
                toAmino(message: _55.Input): _55.InputAmino;
                fromAminoMsg(object: _55.InputAminoMsg): _55.Input;
                toAminoMsg(message: _55.Input): _55.InputAminoMsg;
                fromProtoMsg(message: _55.InputProtoMsg): _55.Input;
                toProto(message: _55.Input): Uint8Array;
                toProtoMsg(message: _55.Input): _55.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _55.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Output;
                fromPartial(object: Partial<_55.Output>): _55.Output;
                fromAmino(object: _55.OutputAmino): _55.Output;
                toAmino(message: _55.Output): _55.OutputAmino;
                fromAminoMsg(object: _55.OutputAminoMsg): _55.Output;
                toAminoMsg(message: _55.Output): _55.OutputAminoMsg;
                fromProtoMsg(message: _55.OutputProtoMsg): _55.Output;
                toProto(message: _55.Output): Uint8Array;
                toProtoMsg(message: _55.Output): _55.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _55.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Supply;
                fromPartial(object: Partial<_55.Supply>): _55.Supply;
                fromAmino(object: _55.SupplyAmino): _55.Supply;
                toAmino(message: _55.Supply): _55.SupplyAmino;
                fromAminoMsg(object: _55.SupplyAminoMsg): _55.Supply;
                toAminoMsg(message: _55.Supply): _55.SupplyAminoMsg;
                fromProtoMsg(message: _55.SupplyProtoMsg): _55.Supply;
                toProto(message: _55.Supply): Uint8Array;
                toProtoMsg(message: _55.Supply): _55.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _55.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.DenomUnit;
                fromPartial(object: Partial<_55.DenomUnit>): _55.DenomUnit;
                fromAmino(object: _55.DenomUnitAmino): _55.DenomUnit;
                toAmino(message: _55.DenomUnit): _55.DenomUnitAmino;
                fromAminoMsg(object: _55.DenomUnitAminoMsg): _55.DenomUnit;
                toAminoMsg(message: _55.DenomUnit): _55.DenomUnitAminoMsg;
                fromProtoMsg(message: _55.DenomUnitProtoMsg): _55.DenomUnit;
                toProto(message: _55.DenomUnit): Uint8Array;
                toProtoMsg(message: _55.DenomUnit): _55.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _55.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.Metadata;
                fromPartial(object: Partial<_55.Metadata>): _55.Metadata;
                fromAmino(object: _55.MetadataAmino): _55.Metadata;
                toAmino(message: _55.Metadata): _55.MetadataAmino;
                fromAminoMsg(object: _55.MetadataAminoMsg): _55.Metadata;
                toAminoMsg(message: _55.Metadata): _55.MetadataAminoMsg;
                fromProtoMsg(message: _55.MetadataProtoMsg): _55.Metadata;
                toProto(message: _55.Metadata): Uint8Array;
                toProtoMsg(message: _55.Metadata): _55.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _54.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.SendAuthorization;
                fromPartial(object: Partial<_54.SendAuthorization>): _54.SendAuthorization;
                fromAmino(object: _54.SendAuthorizationAmino): _54.SendAuthorization;
                toAmino(message: _54.SendAuthorization): _54.SendAuthorizationAmino;
                fromAminoMsg(object: _54.SendAuthorizationAminoMsg): _54.SendAuthorization;
                toAminoMsg(message: _54.SendAuthorization): _54.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _54.SendAuthorizationProtoMsg): _54.SendAuthorization;
                toProto(message: _54.SendAuthorization): Uint8Array;
                toProtoMsg(message: _54.SendAuthorization): _54.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _59.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.TxResponse;
                    fromPartial(object: Partial<_59.TxResponse>): _59.TxResponse;
                    fromAmino(object: _59.TxResponseAmino): _59.TxResponse;
                    toAmino(message: _59.TxResponse): _59.TxResponseAmino;
                    fromAminoMsg(object: _59.TxResponseAminoMsg): _59.TxResponse;
                    toAminoMsg(message: _59.TxResponse): _59.TxResponseAminoMsg;
                    fromProtoMsg(message: _59.TxResponseProtoMsg): _59.TxResponse;
                    toProto(message: _59.TxResponse): Uint8Array;
                    toProtoMsg(message: _59.TxResponse): _59.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _59.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.ABCIMessageLog;
                    fromPartial(object: Partial<_59.ABCIMessageLog>): _59.ABCIMessageLog;
                    fromAmino(object: _59.ABCIMessageLogAmino): _59.ABCIMessageLog;
                    toAmino(message: _59.ABCIMessageLog): _59.ABCIMessageLogAmino;
                    fromAminoMsg(object: _59.ABCIMessageLogAminoMsg): _59.ABCIMessageLog;
                    toAminoMsg(message: _59.ABCIMessageLog): _59.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _59.ABCIMessageLogProtoMsg): _59.ABCIMessageLog;
                    toProto(message: _59.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _59.ABCIMessageLog): _59.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _59.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.StringEvent;
                    fromPartial(object: Partial<_59.StringEvent>): _59.StringEvent;
                    fromAmino(object: _59.StringEventAmino): _59.StringEvent;
                    toAmino(message: _59.StringEvent): _59.StringEventAmino;
                    fromAminoMsg(object: _59.StringEventAminoMsg): _59.StringEvent;
                    toAminoMsg(message: _59.StringEvent): _59.StringEventAminoMsg;
                    fromProtoMsg(message: _59.StringEventProtoMsg): _59.StringEvent;
                    toProto(message: _59.StringEvent): Uint8Array;
                    toProtoMsg(message: _59.StringEvent): _59.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _59.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.Attribute;
                    fromPartial(object: Partial<_59.Attribute>): _59.Attribute;
                    fromAmino(object: _59.AttributeAmino): _59.Attribute;
                    toAmino(message: _59.Attribute): _59.AttributeAmino;
                    fromAminoMsg(object: _59.AttributeAminoMsg): _59.Attribute;
                    toAminoMsg(message: _59.Attribute): _59.AttributeAminoMsg;
                    fromProtoMsg(message: _59.AttributeProtoMsg): _59.Attribute;
                    toProto(message: _59.Attribute): Uint8Array;
                    toProtoMsg(message: _59.Attribute): _59.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _59.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.GasInfo;
                    fromPartial(object: Partial<_59.GasInfo>): _59.GasInfo;
                    fromAmino(object: _59.GasInfoAmino): _59.GasInfo;
                    toAmino(message: _59.GasInfo): _59.GasInfoAmino;
                    fromAminoMsg(object: _59.GasInfoAminoMsg): _59.GasInfo;
                    toAminoMsg(message: _59.GasInfo): _59.GasInfoAminoMsg;
                    fromProtoMsg(message: _59.GasInfoProtoMsg): _59.GasInfo;
                    toProto(message: _59.GasInfo): Uint8Array;
                    toProtoMsg(message: _59.GasInfo): _59.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _59.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.Result;
                    fromPartial(object: Partial<_59.Result>): _59.Result;
                    fromAmino(object: _59.ResultAmino): _59.Result;
                    toAmino(message: _59.Result): _59.ResultAmino;
                    fromAminoMsg(object: _59.ResultAminoMsg): _59.Result;
                    toAminoMsg(message: _59.Result): _59.ResultAminoMsg;
                    fromProtoMsg(message: _59.ResultProtoMsg): _59.Result;
                    toProto(message: _59.Result): Uint8Array;
                    toProtoMsg(message: _59.Result): _59.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _59.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SimulationResponse;
                    fromPartial(object: Partial<_59.SimulationResponse>): _59.SimulationResponse;
                    fromAmino(object: _59.SimulationResponseAmino): _59.SimulationResponse;
                    toAmino(message: _59.SimulationResponse): _59.SimulationResponseAmino;
                    fromAminoMsg(object: _59.SimulationResponseAminoMsg): _59.SimulationResponse;
                    toAminoMsg(message: _59.SimulationResponse): _59.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _59.SimulationResponseProtoMsg): _59.SimulationResponse;
                    toProto(message: _59.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _59.SimulationResponse): _59.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _59.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.MsgData;
                    fromPartial(object: Partial<_59.MsgData>): _59.MsgData;
                    fromAmino(object: _59.MsgDataAmino): _59.MsgData;
                    toAmino(message: _59.MsgData): _59.MsgDataAmino;
                    fromAminoMsg(object: _59.MsgDataAminoMsg): _59.MsgData;
                    toAminoMsg(message: _59.MsgData): _59.MsgDataAminoMsg;
                    fromProtoMsg(message: _59.MsgDataProtoMsg): _59.MsgData;
                    toProto(message: _59.MsgData): Uint8Array;
                    toProtoMsg(message: _59.MsgData): _59.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _59.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.TxMsgData;
                    fromPartial(object: Partial<_59.TxMsgData>): _59.TxMsgData;
                    fromAmino(object: _59.TxMsgDataAmino): _59.TxMsgData;
                    toAmino(message: _59.TxMsgData): _59.TxMsgDataAmino;
                    fromAminoMsg(object: _59.TxMsgDataAminoMsg): _59.TxMsgData;
                    toAminoMsg(message: _59.TxMsgData): _59.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _59.TxMsgDataProtoMsg): _59.TxMsgData;
                    toProto(message: _59.TxMsgData): Uint8Array;
                    toProtoMsg(message: _59.TxMsgData): _59.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _59.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _59.SearchTxsResult;
                    fromPartial(object: Partial<_59.SearchTxsResult>): _59.SearchTxsResult;
                    fromAmino(object: _59.SearchTxsResultAmino): _59.SearchTxsResult;
                    toAmino(message: _59.SearchTxsResult): _59.SearchTxsResultAmino;
                    fromAminoMsg(object: _59.SearchTxsResultAminoMsg): _59.SearchTxsResult;
                    toAminoMsg(message: _59.SearchTxsResult): _59.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _59.SearchTxsResultProtoMsg): _59.SearchTxsResult;
                    toProto(message: _59.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _59.SearchTxsResult): _59.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _60.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Pairs;
                    fromPartial(object: Partial<_60.Pairs>): _60.Pairs;
                    fromAmino(object: _60.PairsAmino): _60.Pairs;
                    toAmino(message: _60.Pairs): _60.PairsAmino;
                    fromAminoMsg(object: _60.PairsAminoMsg): _60.Pairs;
                    toAminoMsg(message: _60.Pairs): _60.PairsAminoMsg;
                    fromProtoMsg(message: _60.PairsProtoMsg): _60.Pairs;
                    toProto(message: _60.Pairs): Uint8Array;
                    toProtoMsg(message: _60.Pairs): _60.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _60.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _60.Pair;
                    fromPartial(object: Partial<_60.Pair>): _60.Pair;
                    fromAmino(object: _60.PairAmino): _60.Pair;
                    toAmino(message: _60.Pair): _60.PairAmino;
                    fromAminoMsg(object: _60.PairAminoMsg): _60.Pair;
                    toAminoMsg(message: _60.Pair): _60.PairAminoMsg;
                    fromProtoMsg(message: _60.PairProtoMsg): _60.Pair;
                    toProto(message: _60.Pair): Uint8Array;
                    toProtoMsg(message: _60.Pair): _60.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _274.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _61.ConfigRequest): Promise<_61.ConfigResponse>;
                };
                LCDQueryClient: typeof _255.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _61.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _61.ConfigRequest;
                    fromPartial(_: Partial<_61.ConfigRequest>): _61.ConfigRequest;
                    fromAmino(_: _61.ConfigRequestAmino): _61.ConfigRequest;
                    toAmino(_: _61.ConfigRequest): _61.ConfigRequestAmino;
                    fromAminoMsg(object: _61.ConfigRequestAminoMsg): _61.ConfigRequest;
                    toAminoMsg(message: _61.ConfigRequest): _61.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _61.ConfigRequestProtoMsg): _61.ConfigRequest;
                    toProto(message: _61.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _61.ConfigRequest): _61.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _61.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _61.ConfigResponse;
                    fromPartial(object: Partial<_61.ConfigResponse>): _61.ConfigResponse;
                    fromAmino(object: _61.ConfigResponseAmino): _61.ConfigResponse;
                    toAmino(message: _61.ConfigResponse): _61.ConfigResponseAmino;
                    fromAminoMsg(object: _61.ConfigResponseAminoMsg): _61.ConfigResponse;
                    toAminoMsg(message: _61.ConfigResponse): _61.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _61.ConfigResponseProtoMsg): _61.ConfigResponse;
                    toProto(message: _61.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _61.ConfigResponse): _61.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _62.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.PageRequest;
                    fromPartial(object: Partial<_62.PageRequest>): _62.PageRequest;
                    fromAmino(object: _62.PageRequestAmino): _62.PageRequest;
                    toAmino(message: _62.PageRequest): _62.PageRequestAmino;
                    fromAminoMsg(object: _62.PageRequestAminoMsg): _62.PageRequest;
                    toAminoMsg(message: _62.PageRequest): _62.PageRequestAminoMsg;
                    fromProtoMsg(message: _62.PageRequestProtoMsg): _62.PageRequest;
                    toProto(message: _62.PageRequest): Uint8Array;
                    toProtoMsg(message: _62.PageRequest): _62.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _62.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _62.PageResponse;
                    fromPartial(object: Partial<_62.PageResponse>): _62.PageResponse;
                    fromAmino(object: _62.PageResponseAmino): _62.PageResponse;
                    toAmino(message: _62.PageResponse): _62.PageResponseAmino;
                    fromAminoMsg(object: _62.PageResponseAminoMsg): _62.PageResponse;
                    toAminoMsg(message: _62.PageResponse): _62.PageResponseAminoMsg;
                    fromProtoMsg(message: _62.PageResponseProtoMsg): _62.PageResponse;
                    toProto(message: _62.PageResponse): Uint8Array;
                    toProtoMsg(message: _62.PageResponse): _62.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _63.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _63.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_63.ListAllInterfacesRequest>): _63.ListAllInterfacesRequest;
                    fromAmino(_: _63.ListAllInterfacesRequestAmino): _63.ListAllInterfacesRequest;
                    toAmino(_: _63.ListAllInterfacesRequest): _63.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _63.ListAllInterfacesRequestAminoMsg): _63.ListAllInterfacesRequest;
                    toAminoMsg(message: _63.ListAllInterfacesRequest): _63.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _63.ListAllInterfacesRequestProtoMsg): _63.ListAllInterfacesRequest;
                    toProto(message: _63.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _63.ListAllInterfacesRequest): _63.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _63.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_63.ListAllInterfacesResponse>): _63.ListAllInterfacesResponse;
                    fromAmino(object: _63.ListAllInterfacesResponseAmino): _63.ListAllInterfacesResponse;
                    toAmino(message: _63.ListAllInterfacesResponse): _63.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _63.ListAllInterfacesResponseAminoMsg): _63.ListAllInterfacesResponse;
                    toAminoMsg(message: _63.ListAllInterfacesResponse): _63.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _63.ListAllInterfacesResponseProtoMsg): _63.ListAllInterfacesResponse;
                    toProto(message: _63.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _63.ListAllInterfacesResponse): _63.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _63.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ListImplementationsRequest;
                    fromPartial(object: Partial<_63.ListImplementationsRequest>): _63.ListImplementationsRequest;
                    fromAmino(object: _63.ListImplementationsRequestAmino): _63.ListImplementationsRequest;
                    toAmino(message: _63.ListImplementationsRequest): _63.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _63.ListImplementationsRequestAminoMsg): _63.ListImplementationsRequest;
                    toAminoMsg(message: _63.ListImplementationsRequest): _63.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _63.ListImplementationsRequestProtoMsg): _63.ListImplementationsRequest;
                    toProto(message: _63.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _63.ListImplementationsRequest): _63.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _63.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _63.ListImplementationsResponse;
                    fromPartial(object: Partial<_63.ListImplementationsResponse>): _63.ListImplementationsResponse;
                    fromAmino(object: _63.ListImplementationsResponseAmino): _63.ListImplementationsResponse;
                    toAmino(message: _63.ListImplementationsResponse): _63.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _63.ListImplementationsResponseAminoMsg): _63.ListImplementationsResponse;
                    toAminoMsg(message: _63.ListImplementationsResponse): _63.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _63.ListImplementationsResponseProtoMsg): _63.ListImplementationsResponse;
                    toProto(message: _63.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _63.ListImplementationsResponse): _63.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _64.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.AppDescriptor;
                    fromPartial(object: Partial<_64.AppDescriptor>): _64.AppDescriptor;
                    fromAmino(object: _64.AppDescriptorAmino): _64.AppDescriptor;
                    toAmino(message: _64.AppDescriptor): _64.AppDescriptorAmino;
                    fromAminoMsg(object: _64.AppDescriptorAminoMsg): _64.AppDescriptor;
                    toAminoMsg(message: _64.AppDescriptor): _64.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _64.AppDescriptorProtoMsg): _64.AppDescriptor;
                    toProto(message: _64.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _64.AppDescriptor): _64.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _64.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.TxDescriptor;
                    fromPartial(object: Partial<_64.TxDescriptor>): _64.TxDescriptor;
                    fromAmino(object: _64.TxDescriptorAmino): _64.TxDescriptor;
                    toAmino(message: _64.TxDescriptor): _64.TxDescriptorAmino;
                    fromAminoMsg(object: _64.TxDescriptorAminoMsg): _64.TxDescriptor;
                    toAminoMsg(message: _64.TxDescriptor): _64.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _64.TxDescriptorProtoMsg): _64.TxDescriptor;
                    toProto(message: _64.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _64.TxDescriptor): _64.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _64.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.AuthnDescriptor;
                    fromPartial(object: Partial<_64.AuthnDescriptor>): _64.AuthnDescriptor;
                    fromAmino(object: _64.AuthnDescriptorAmino): _64.AuthnDescriptor;
                    toAmino(message: _64.AuthnDescriptor): _64.AuthnDescriptorAmino;
                    fromAminoMsg(object: _64.AuthnDescriptorAminoMsg): _64.AuthnDescriptor;
                    toAminoMsg(message: _64.AuthnDescriptor): _64.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _64.AuthnDescriptorProtoMsg): _64.AuthnDescriptor;
                    toProto(message: _64.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _64.AuthnDescriptor): _64.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _64.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.SigningModeDescriptor;
                    fromPartial(object: Partial<_64.SigningModeDescriptor>): _64.SigningModeDescriptor;
                    fromAmino(object: _64.SigningModeDescriptorAmino): _64.SigningModeDescriptor;
                    toAmino(message: _64.SigningModeDescriptor): _64.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _64.SigningModeDescriptorAminoMsg): _64.SigningModeDescriptor;
                    toAminoMsg(message: _64.SigningModeDescriptor): _64.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _64.SigningModeDescriptorProtoMsg): _64.SigningModeDescriptor;
                    toProto(message: _64.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _64.SigningModeDescriptor): _64.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _64.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.ChainDescriptor;
                    fromPartial(object: Partial<_64.ChainDescriptor>): _64.ChainDescriptor;
                    fromAmino(object: _64.ChainDescriptorAmino): _64.ChainDescriptor;
                    toAmino(message: _64.ChainDescriptor): _64.ChainDescriptorAmino;
                    fromAminoMsg(object: _64.ChainDescriptorAminoMsg): _64.ChainDescriptor;
                    toAminoMsg(message: _64.ChainDescriptor): _64.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _64.ChainDescriptorProtoMsg): _64.ChainDescriptor;
                    toProto(message: _64.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _64.ChainDescriptor): _64.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _64.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.CodecDescriptor;
                    fromPartial(object: Partial<_64.CodecDescriptor>): _64.CodecDescriptor;
                    fromAmino(object: _64.CodecDescriptorAmino): _64.CodecDescriptor;
                    toAmino(message: _64.CodecDescriptor): _64.CodecDescriptorAmino;
                    fromAminoMsg(object: _64.CodecDescriptorAminoMsg): _64.CodecDescriptor;
                    toAminoMsg(message: _64.CodecDescriptor): _64.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _64.CodecDescriptorProtoMsg): _64.CodecDescriptor;
                    toProto(message: _64.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _64.CodecDescriptor): _64.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _64.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.InterfaceDescriptor;
                    fromPartial(object: Partial<_64.InterfaceDescriptor>): _64.InterfaceDescriptor;
                    fromAmino(object: _64.InterfaceDescriptorAmino): _64.InterfaceDescriptor;
                    toAmino(message: _64.InterfaceDescriptor): _64.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _64.InterfaceDescriptorAminoMsg): _64.InterfaceDescriptor;
                    toAminoMsg(message: _64.InterfaceDescriptor): _64.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _64.InterfaceDescriptorProtoMsg): _64.InterfaceDescriptor;
                    toProto(message: _64.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _64.InterfaceDescriptor): _64.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _64.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_64.InterfaceImplementerDescriptor>): _64.InterfaceImplementerDescriptor;
                    fromAmino(object: _64.InterfaceImplementerDescriptorAmino): _64.InterfaceImplementerDescriptor;
                    toAmino(message: _64.InterfaceImplementerDescriptor): _64.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _64.InterfaceImplementerDescriptorAminoMsg): _64.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _64.InterfaceImplementerDescriptor): _64.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _64.InterfaceImplementerDescriptorProtoMsg): _64.InterfaceImplementerDescriptor;
                    toProto(message: _64.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _64.InterfaceImplementerDescriptor): _64.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _64.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_64.InterfaceAcceptingMessageDescriptor>): _64.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _64.InterfaceAcceptingMessageDescriptorAmino): _64.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _64.InterfaceAcceptingMessageDescriptor): _64.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _64.InterfaceAcceptingMessageDescriptorAminoMsg): _64.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _64.InterfaceAcceptingMessageDescriptor): _64.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _64.InterfaceAcceptingMessageDescriptorProtoMsg): _64.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _64.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _64.InterfaceAcceptingMessageDescriptor): _64.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _64.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.ConfigurationDescriptor;
                    fromPartial(object: Partial<_64.ConfigurationDescriptor>): _64.ConfigurationDescriptor;
                    fromAmino(object: _64.ConfigurationDescriptorAmino): _64.ConfigurationDescriptor;
                    toAmino(message: _64.ConfigurationDescriptor): _64.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _64.ConfigurationDescriptorAminoMsg): _64.ConfigurationDescriptor;
                    toAminoMsg(message: _64.ConfigurationDescriptor): _64.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _64.ConfigurationDescriptorProtoMsg): _64.ConfigurationDescriptor;
                    toProto(message: _64.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _64.ConfigurationDescriptor): _64.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _64.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.MsgDescriptor;
                    fromPartial(object: Partial<_64.MsgDescriptor>): _64.MsgDescriptor;
                    fromAmino(object: _64.MsgDescriptorAmino): _64.MsgDescriptor;
                    toAmino(message: _64.MsgDescriptor): _64.MsgDescriptorAmino;
                    fromAminoMsg(object: _64.MsgDescriptorAminoMsg): _64.MsgDescriptor;
                    toAminoMsg(message: _64.MsgDescriptor): _64.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _64.MsgDescriptorProtoMsg): _64.MsgDescriptor;
                    toProto(message: _64.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _64.MsgDescriptor): _64.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _64.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _64.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_64.GetAuthnDescriptorRequest>): _64.GetAuthnDescriptorRequest;
                    fromAmino(_: _64.GetAuthnDescriptorRequestAmino): _64.GetAuthnDescriptorRequest;
                    toAmino(_: _64.GetAuthnDescriptorRequest): _64.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _64.GetAuthnDescriptorRequestAminoMsg): _64.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _64.GetAuthnDescriptorRequest): _64.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _64.GetAuthnDescriptorRequestProtoMsg): _64.GetAuthnDescriptorRequest;
                    toProto(message: _64.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _64.GetAuthnDescriptorRequest): _64.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _64.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_64.GetAuthnDescriptorResponse>): _64.GetAuthnDescriptorResponse;
                    fromAmino(object: _64.GetAuthnDescriptorResponseAmino): _64.GetAuthnDescriptorResponse;
                    toAmino(message: _64.GetAuthnDescriptorResponse): _64.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _64.GetAuthnDescriptorResponseAminoMsg): _64.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _64.GetAuthnDescriptorResponse): _64.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _64.GetAuthnDescriptorResponseProtoMsg): _64.GetAuthnDescriptorResponse;
                    toProto(message: _64.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _64.GetAuthnDescriptorResponse): _64.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _64.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _64.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_64.GetChainDescriptorRequest>): _64.GetChainDescriptorRequest;
                    fromAmino(_: _64.GetChainDescriptorRequestAmino): _64.GetChainDescriptorRequest;
                    toAmino(_: _64.GetChainDescriptorRequest): _64.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _64.GetChainDescriptorRequestAminoMsg): _64.GetChainDescriptorRequest;
                    toAminoMsg(message: _64.GetChainDescriptorRequest): _64.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _64.GetChainDescriptorRequestProtoMsg): _64.GetChainDescriptorRequest;
                    toProto(message: _64.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _64.GetChainDescriptorRequest): _64.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _64.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_64.GetChainDescriptorResponse>): _64.GetChainDescriptorResponse;
                    fromAmino(object: _64.GetChainDescriptorResponseAmino): _64.GetChainDescriptorResponse;
                    toAmino(message: _64.GetChainDescriptorResponse): _64.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _64.GetChainDescriptorResponseAminoMsg): _64.GetChainDescriptorResponse;
                    toAminoMsg(message: _64.GetChainDescriptorResponse): _64.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _64.GetChainDescriptorResponseProtoMsg): _64.GetChainDescriptorResponse;
                    toProto(message: _64.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _64.GetChainDescriptorResponse): _64.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _64.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _64.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_64.GetCodecDescriptorRequest>): _64.GetCodecDescriptorRequest;
                    fromAmino(_: _64.GetCodecDescriptorRequestAmino): _64.GetCodecDescriptorRequest;
                    toAmino(_: _64.GetCodecDescriptorRequest): _64.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _64.GetCodecDescriptorRequestAminoMsg): _64.GetCodecDescriptorRequest;
                    toAminoMsg(message: _64.GetCodecDescriptorRequest): _64.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _64.GetCodecDescriptorRequestProtoMsg): _64.GetCodecDescriptorRequest;
                    toProto(message: _64.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _64.GetCodecDescriptorRequest): _64.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _64.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_64.GetCodecDescriptorResponse>): _64.GetCodecDescriptorResponse;
                    fromAmino(object: _64.GetCodecDescriptorResponseAmino): _64.GetCodecDescriptorResponse;
                    toAmino(message: _64.GetCodecDescriptorResponse): _64.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _64.GetCodecDescriptorResponseAminoMsg): _64.GetCodecDescriptorResponse;
                    toAminoMsg(message: _64.GetCodecDescriptorResponse): _64.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _64.GetCodecDescriptorResponseProtoMsg): _64.GetCodecDescriptorResponse;
                    toProto(message: _64.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _64.GetCodecDescriptorResponse): _64.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _64.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _64.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_64.GetConfigurationDescriptorRequest>): _64.GetConfigurationDescriptorRequest;
                    fromAmino(_: _64.GetConfigurationDescriptorRequestAmino): _64.GetConfigurationDescriptorRequest;
                    toAmino(_: _64.GetConfigurationDescriptorRequest): _64.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _64.GetConfigurationDescriptorRequestAminoMsg): _64.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _64.GetConfigurationDescriptorRequest): _64.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _64.GetConfigurationDescriptorRequestProtoMsg): _64.GetConfigurationDescriptorRequest;
                    toProto(message: _64.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _64.GetConfigurationDescriptorRequest): _64.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _64.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_64.GetConfigurationDescriptorResponse>): _64.GetConfigurationDescriptorResponse;
                    fromAmino(object: _64.GetConfigurationDescriptorResponseAmino): _64.GetConfigurationDescriptorResponse;
                    toAmino(message: _64.GetConfigurationDescriptorResponse): _64.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _64.GetConfigurationDescriptorResponseAminoMsg): _64.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _64.GetConfigurationDescriptorResponse): _64.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _64.GetConfigurationDescriptorResponseProtoMsg): _64.GetConfigurationDescriptorResponse;
                    toProto(message: _64.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _64.GetConfigurationDescriptorResponse): _64.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _64.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _64.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_64.GetQueryServicesDescriptorRequest>): _64.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _64.GetQueryServicesDescriptorRequestAmino): _64.GetQueryServicesDescriptorRequest;
                    toAmino(_: _64.GetQueryServicesDescriptorRequest): _64.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _64.GetQueryServicesDescriptorRequestAminoMsg): _64.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _64.GetQueryServicesDescriptorRequest): _64.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _64.GetQueryServicesDescriptorRequestProtoMsg): _64.GetQueryServicesDescriptorRequest;
                    toProto(message: _64.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _64.GetQueryServicesDescriptorRequest): _64.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _64.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_64.GetQueryServicesDescriptorResponse>): _64.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _64.GetQueryServicesDescriptorResponseAmino): _64.GetQueryServicesDescriptorResponse;
                    toAmino(message: _64.GetQueryServicesDescriptorResponse): _64.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _64.GetQueryServicesDescriptorResponseAminoMsg): _64.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _64.GetQueryServicesDescriptorResponse): _64.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _64.GetQueryServicesDescriptorResponseProtoMsg): _64.GetQueryServicesDescriptorResponse;
                    toProto(message: _64.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _64.GetQueryServicesDescriptorResponse): _64.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _64.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _64.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_64.GetTxDescriptorRequest>): _64.GetTxDescriptorRequest;
                    fromAmino(_: _64.GetTxDescriptorRequestAmino): _64.GetTxDescriptorRequest;
                    toAmino(_: _64.GetTxDescriptorRequest): _64.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _64.GetTxDescriptorRequestAminoMsg): _64.GetTxDescriptorRequest;
                    toAminoMsg(message: _64.GetTxDescriptorRequest): _64.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _64.GetTxDescriptorRequestProtoMsg): _64.GetTxDescriptorRequest;
                    toProto(message: _64.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _64.GetTxDescriptorRequest): _64.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _64.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_64.GetTxDescriptorResponse>): _64.GetTxDescriptorResponse;
                    fromAmino(object: _64.GetTxDescriptorResponseAmino): _64.GetTxDescriptorResponse;
                    toAmino(message: _64.GetTxDescriptorResponse): _64.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _64.GetTxDescriptorResponseAminoMsg): _64.GetTxDescriptorResponse;
                    toAminoMsg(message: _64.GetTxDescriptorResponse): _64.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _64.GetTxDescriptorResponseProtoMsg): _64.GetTxDescriptorResponse;
                    toProto(message: _64.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _64.GetTxDescriptorResponse): _64.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _64.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.QueryServicesDescriptor;
                    fromPartial(object: Partial<_64.QueryServicesDescriptor>): _64.QueryServicesDescriptor;
                    fromAmino(object: _64.QueryServicesDescriptorAmino): _64.QueryServicesDescriptor;
                    toAmino(message: _64.QueryServicesDescriptor): _64.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _64.QueryServicesDescriptorAminoMsg): _64.QueryServicesDescriptor;
                    toAminoMsg(message: _64.QueryServicesDescriptor): _64.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _64.QueryServicesDescriptorProtoMsg): _64.QueryServicesDescriptor;
                    toProto(message: _64.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _64.QueryServicesDescriptor): _64.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _64.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.QueryServiceDescriptor;
                    fromPartial(object: Partial<_64.QueryServiceDescriptor>): _64.QueryServiceDescriptor;
                    fromAmino(object: _64.QueryServiceDescriptorAmino): _64.QueryServiceDescriptor;
                    toAmino(message: _64.QueryServiceDescriptor): _64.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _64.QueryServiceDescriptorAminoMsg): _64.QueryServiceDescriptor;
                    toAminoMsg(message: _64.QueryServiceDescriptor): _64.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _64.QueryServiceDescriptorProtoMsg): _64.QueryServiceDescriptor;
                    toProto(message: _64.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _64.QueryServiceDescriptor): _64.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _64.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _64.QueryMethodDescriptor;
                    fromPartial(object: Partial<_64.QueryMethodDescriptor>): _64.QueryMethodDescriptor;
                    fromAmino(object: _64.QueryMethodDescriptorAmino): _64.QueryMethodDescriptor;
                    toAmino(message: _64.QueryMethodDescriptor): _64.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _64.QueryMethodDescriptorAminoMsg): _64.QueryMethodDescriptor;
                    toAminoMsg(message: _64.QueryMethodDescriptor): _64.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _64.QueryMethodDescriptorProtoMsg): _64.QueryMethodDescriptor;
                    toProto(message: _64.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _64.QueryMethodDescriptor): _64.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _65.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.Snapshot;
                    fromPartial(object: Partial<_65.Snapshot>): _65.Snapshot;
                    fromAmino(object: _65.SnapshotAmino): _65.Snapshot;
                    toAmino(message: _65.Snapshot): _65.SnapshotAmino;
                    fromAminoMsg(object: _65.SnapshotAminoMsg): _65.Snapshot;
                    toAminoMsg(message: _65.Snapshot): _65.SnapshotAminoMsg;
                    fromProtoMsg(message: _65.SnapshotProtoMsg): _65.Snapshot;
                    toProto(message: _65.Snapshot): Uint8Array;
                    toProtoMsg(message: _65.Snapshot): _65.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _65.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.Metadata;
                    fromPartial(object: Partial<_65.Metadata>): _65.Metadata;
                    fromAmino(object: _65.MetadataAmino): _65.Metadata;
                    toAmino(message: _65.Metadata): _65.MetadataAmino;
                    fromAminoMsg(object: _65.MetadataAminoMsg): _65.Metadata;
                    toAminoMsg(message: _65.Metadata): _65.MetadataAminoMsg;
                    fromProtoMsg(message: _65.MetadataProtoMsg): _65.Metadata;
                    toProto(message: _65.Metadata): Uint8Array;
                    toProtoMsg(message: _65.Metadata): _65.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _65.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SnapshotItem;
                    fromPartial(object: Partial<_65.SnapshotItem>): _65.SnapshotItem;
                    fromAmino(object: _65.SnapshotItemAmino): _65.SnapshotItem;
                    toAmino(message: _65.SnapshotItem): _65.SnapshotItemAmino;
                    fromAminoMsg(object: _65.SnapshotItemAminoMsg): _65.SnapshotItem;
                    toAminoMsg(message: _65.SnapshotItem): _65.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _65.SnapshotItemProtoMsg): _65.SnapshotItem;
                    toProto(message: _65.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _65.SnapshotItem): _65.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _65.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SnapshotStoreItem;
                    fromPartial(object: Partial<_65.SnapshotStoreItem>): _65.SnapshotStoreItem;
                    fromAmino(object: _65.SnapshotStoreItemAmino): _65.SnapshotStoreItem;
                    toAmino(message: _65.SnapshotStoreItem): _65.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _65.SnapshotStoreItemAminoMsg): _65.SnapshotStoreItem;
                    toAminoMsg(message: _65.SnapshotStoreItem): _65.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _65.SnapshotStoreItemProtoMsg): _65.SnapshotStoreItem;
                    toProto(message: _65.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _65.SnapshotStoreItem): _65.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _65.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SnapshotIAVLItem;
                    fromPartial(object: Partial<_65.SnapshotIAVLItem>): _65.SnapshotIAVLItem;
                    fromAmino(object: _65.SnapshotIAVLItemAmino): _65.SnapshotIAVLItem;
                    toAmino(message: _65.SnapshotIAVLItem): _65.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _65.SnapshotIAVLItemAminoMsg): _65.SnapshotIAVLItem;
                    toAminoMsg(message: _65.SnapshotIAVLItem): _65.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _65.SnapshotIAVLItemProtoMsg): _65.SnapshotIAVLItem;
                    toProto(message: _65.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _65.SnapshotIAVLItem): _65.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _65.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_65.SnapshotExtensionMeta>): _65.SnapshotExtensionMeta;
                    fromAmino(object: _65.SnapshotExtensionMetaAmino): _65.SnapshotExtensionMeta;
                    toAmino(message: _65.SnapshotExtensionMeta): _65.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _65.SnapshotExtensionMetaAminoMsg): _65.SnapshotExtensionMeta;
                    toAminoMsg(message: _65.SnapshotExtensionMeta): _65.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _65.SnapshotExtensionMetaProtoMsg): _65.SnapshotExtensionMeta;
                    toProto(message: _65.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _65.SnapshotExtensionMeta): _65.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _65.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_65.SnapshotExtensionPayload>): _65.SnapshotExtensionPayload;
                    fromAmino(object: _65.SnapshotExtensionPayloadAmino): _65.SnapshotExtensionPayload;
                    toAmino(message: _65.SnapshotExtensionPayload): _65.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _65.SnapshotExtensionPayloadAminoMsg): _65.SnapshotExtensionPayload;
                    toAminoMsg(message: _65.SnapshotExtensionPayload): _65.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _65.SnapshotExtensionPayloadProtoMsg): _65.SnapshotExtensionPayload;
                    toProto(message: _65.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _65.SnapshotExtensionPayload): _65.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _65.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SnapshotKVItem;
                    fromPartial(object: Partial<_65.SnapshotKVItem>): _65.SnapshotKVItem;
                    fromAmino(object: _65.SnapshotKVItemAmino): _65.SnapshotKVItem;
                    toAmino(message: _65.SnapshotKVItem): _65.SnapshotKVItemAmino;
                    fromAminoMsg(object: _65.SnapshotKVItemAminoMsg): _65.SnapshotKVItem;
                    toAminoMsg(message: _65.SnapshotKVItem): _65.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _65.SnapshotKVItemProtoMsg): _65.SnapshotKVItem;
                    toProto(message: _65.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _65.SnapshotKVItem): _65.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _65.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _65.SnapshotSchema;
                    fromPartial(object: Partial<_65.SnapshotSchema>): _65.SnapshotSchema;
                    fromAmino(object: _65.SnapshotSchemaAmino): _65.SnapshotSchema;
                    toAmino(message: _65.SnapshotSchema): _65.SnapshotSchemaAmino;
                    fromAminoMsg(object: _65.SnapshotSchemaAminoMsg): _65.SnapshotSchema;
                    toAminoMsg(message: _65.SnapshotSchema): _65.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _65.SnapshotSchemaProtoMsg): _65.SnapshotSchema;
                    toProto(message: _65.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _65.SnapshotSchema): _65.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _67.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.StoreKVPair;
                    fromPartial(object: Partial<_67.StoreKVPair>): _67.StoreKVPair;
                    fromAmino(object: _67.StoreKVPairAmino): _67.StoreKVPair;
                    toAmino(message: _67.StoreKVPair): _67.StoreKVPairAmino;
                    fromAminoMsg(object: _67.StoreKVPairAminoMsg): _67.StoreKVPair;
                    toAminoMsg(message: _67.StoreKVPair): _67.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _67.StoreKVPairProtoMsg): _67.StoreKVPair;
                    toProto(message: _67.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _67.StoreKVPair): _67.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _67.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.BlockMetadata;
                    fromPartial(object: Partial<_67.BlockMetadata>): _67.BlockMetadata;
                    fromAmino(object: _67.BlockMetadataAmino): _67.BlockMetadata;
                    toAmino(message: _67.BlockMetadata): _67.BlockMetadataAmino;
                    fromAminoMsg(object: _67.BlockMetadataAminoMsg): _67.BlockMetadata;
                    toAminoMsg(message: _67.BlockMetadata): _67.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _67.BlockMetadataProtoMsg): _67.BlockMetadata;
                    toProto(message: _67.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _67.BlockMetadata): _67.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _67.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _67.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_67.BlockMetadata_DeliverTx>): _67.BlockMetadata_DeliverTx;
                    fromAmino(object: _67.BlockMetadata_DeliverTxAmino): _67.BlockMetadata_DeliverTx;
                    toAmino(message: _67.BlockMetadata_DeliverTx): _67.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _67.BlockMetadata_DeliverTxAminoMsg): _67.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _67.BlockMetadata_DeliverTx): _67.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _67.BlockMetadata_DeliverTxProtoMsg): _67.BlockMetadata_DeliverTx;
                    toProto(message: _67.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _67.BlockMetadata_DeliverTx): _67.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _66.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.CommitInfo;
                    fromPartial(object: Partial<_66.CommitInfo>): _66.CommitInfo;
                    fromAmino(object: _66.CommitInfoAmino): _66.CommitInfo;
                    toAmino(message: _66.CommitInfo): _66.CommitInfoAmino;
                    fromAminoMsg(object: _66.CommitInfoAminoMsg): _66.CommitInfo;
                    toAminoMsg(message: _66.CommitInfo): _66.CommitInfoAminoMsg;
                    fromProtoMsg(message: _66.CommitInfoProtoMsg): _66.CommitInfo;
                    toProto(message: _66.CommitInfo): Uint8Array;
                    toProtoMsg(message: _66.CommitInfo): _66.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _66.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.StoreInfo;
                    fromPartial(object: Partial<_66.StoreInfo>): _66.StoreInfo;
                    fromAmino(object: _66.StoreInfoAmino): _66.StoreInfo;
                    toAmino(message: _66.StoreInfo): _66.StoreInfoAmino;
                    fromAminoMsg(object: _66.StoreInfoAminoMsg): _66.StoreInfo;
                    toAminoMsg(message: _66.StoreInfo): _66.StoreInfoAminoMsg;
                    fromProtoMsg(message: _66.StoreInfoProtoMsg): _66.StoreInfo;
                    toProto(message: _66.StoreInfo): Uint8Array;
                    toProtoMsg(message: _66.StoreInfo): _66.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _66.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _66.CommitID;
                    fromPartial(object: Partial<_66.CommitID>): _66.CommitID;
                    fromAmino(object: _66.CommitIDAmino): _66.CommitID;
                    toAmino(message: _66.CommitID): _66.CommitIDAmino;
                    fromAminoMsg(object: _66.CommitIDAminoMsg): _66.CommitID;
                    toAminoMsg(message: _66.CommitID): _66.CommitIDAminoMsg;
                    fromProtoMsg(message: _66.CommitIDProtoMsg): _66.CommitID;
                    toProto(message: _66.CommitID): Uint8Array;
                    toProtoMsg(message: _66.CommitID): _66.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _275.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _68.GetNodeInfoRequest): Promise<_68.GetNodeInfoResponse>;
                    getSyncing(request?: _68.GetSyncingRequest): Promise<_68.GetSyncingResponse>;
                    getLatestBlock(request?: _68.GetLatestBlockRequest): Promise<_68.GetLatestBlockResponse>;
                    getBlockByHeight(request: _68.GetBlockByHeightRequest): Promise<_68.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _68.GetLatestValidatorSetRequest): Promise<_68.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _68.GetValidatorSetByHeightRequest): Promise<_68.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _68.ABCIQueryRequest): Promise<_68.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _256.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _69.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Block;
                    fromPartial(object: Partial<_69.Block>): _69.Block;
                    fromAmino(object: _69.BlockAmino): _69.Block;
                    toAmino(message: _69.Block): _69.BlockAmino;
                    fromAminoMsg(object: _69.BlockAminoMsg): _69.Block;
                    toAminoMsg(message: _69.Block): _69.BlockAminoMsg;
                    fromProtoMsg(message: _69.BlockProtoMsg): _69.Block;
                    toProto(message: _69.Block): Uint8Array;
                    toProtoMsg(message: _69.Block): _69.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _69.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _69.Header;
                    fromPartial(object: Partial<_69.Header>): _69.Header;
                    fromAmino(object: _69.HeaderAmino): _69.Header;
                    toAmino(message: _69.Header): _69.HeaderAmino;
                    fromAminoMsg(object: _69.HeaderAminoMsg): _69.Header;
                    toAminoMsg(message: _69.Header): _69.HeaderAminoMsg;
                    fromProtoMsg(message: _69.HeaderProtoMsg): _69.Header;
                    toProto(message: _69.Header): Uint8Array;
                    toProtoMsg(message: _69.Header): _69.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _68.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_68.GetValidatorSetByHeightRequest>): _68.GetValidatorSetByHeightRequest;
                    fromAmino(object: _68.GetValidatorSetByHeightRequestAmino): _68.GetValidatorSetByHeightRequest;
                    toAmino(message: _68.GetValidatorSetByHeightRequest): _68.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _68.GetValidatorSetByHeightRequestAminoMsg): _68.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _68.GetValidatorSetByHeightRequest): _68.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _68.GetValidatorSetByHeightRequestProtoMsg): _68.GetValidatorSetByHeightRequest;
                    toProto(message: _68.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _68.GetValidatorSetByHeightRequest): _68.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _68.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_68.GetValidatorSetByHeightResponse>): _68.GetValidatorSetByHeightResponse;
                    fromAmino(object: _68.GetValidatorSetByHeightResponseAmino): _68.GetValidatorSetByHeightResponse;
                    toAmino(message: _68.GetValidatorSetByHeightResponse): _68.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _68.GetValidatorSetByHeightResponseAminoMsg): _68.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _68.GetValidatorSetByHeightResponse): _68.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _68.GetValidatorSetByHeightResponseProtoMsg): _68.GetValidatorSetByHeightResponse;
                    toProto(message: _68.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _68.GetValidatorSetByHeightResponse): _68.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _68.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_68.GetLatestValidatorSetRequest>): _68.GetLatestValidatorSetRequest;
                    fromAmino(object: _68.GetLatestValidatorSetRequestAmino): _68.GetLatestValidatorSetRequest;
                    toAmino(message: _68.GetLatestValidatorSetRequest): _68.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _68.GetLatestValidatorSetRequestAminoMsg): _68.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _68.GetLatestValidatorSetRequest): _68.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _68.GetLatestValidatorSetRequestProtoMsg): _68.GetLatestValidatorSetRequest;
                    toProto(message: _68.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _68.GetLatestValidatorSetRequest): _68.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _68.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_68.GetLatestValidatorSetResponse>): _68.GetLatestValidatorSetResponse;
                    fromAmino(object: _68.GetLatestValidatorSetResponseAmino): _68.GetLatestValidatorSetResponse;
                    toAmino(message: _68.GetLatestValidatorSetResponse): _68.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _68.GetLatestValidatorSetResponseAminoMsg): _68.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _68.GetLatestValidatorSetResponse): _68.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _68.GetLatestValidatorSetResponseProtoMsg): _68.GetLatestValidatorSetResponse;
                    toProto(message: _68.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _68.GetLatestValidatorSetResponse): _68.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _68.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Validator;
                    fromPartial(object: Partial<_68.Validator>): _68.Validator;
                    fromAmino(object: _68.ValidatorAmino): _68.Validator;
                    toAmino(message: _68.Validator): _68.ValidatorAmino;
                    fromAminoMsg(object: _68.ValidatorAminoMsg): _68.Validator;
                    toAminoMsg(message: _68.Validator): _68.ValidatorAminoMsg;
                    fromProtoMsg(message: _68.ValidatorProtoMsg): _68.Validator;
                    toProto(message: _68.Validator): Uint8Array;
                    toProtoMsg(message: _68.Validator): _68.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _68.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_68.GetBlockByHeightRequest>): _68.GetBlockByHeightRequest;
                    fromAmino(object: _68.GetBlockByHeightRequestAmino): _68.GetBlockByHeightRequest;
                    toAmino(message: _68.GetBlockByHeightRequest): _68.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _68.GetBlockByHeightRequestAminoMsg): _68.GetBlockByHeightRequest;
                    toAminoMsg(message: _68.GetBlockByHeightRequest): _68.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _68.GetBlockByHeightRequestProtoMsg): _68.GetBlockByHeightRequest;
                    toProto(message: _68.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _68.GetBlockByHeightRequest): _68.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _68.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_68.GetBlockByHeightResponse>): _68.GetBlockByHeightResponse;
                    fromAmino(object: _68.GetBlockByHeightResponseAmino): _68.GetBlockByHeightResponse;
                    toAmino(message: _68.GetBlockByHeightResponse): _68.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _68.GetBlockByHeightResponseAminoMsg): _68.GetBlockByHeightResponse;
                    toAminoMsg(message: _68.GetBlockByHeightResponse): _68.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _68.GetBlockByHeightResponseProtoMsg): _68.GetBlockByHeightResponse;
                    toProto(message: _68.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _68.GetBlockByHeightResponse): _68.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _68.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.GetLatestBlockRequest;
                    fromPartial(_: Partial<_68.GetLatestBlockRequest>): _68.GetLatestBlockRequest;
                    fromAmino(_: _68.GetLatestBlockRequestAmino): _68.GetLatestBlockRequest;
                    toAmino(_: _68.GetLatestBlockRequest): _68.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _68.GetLatestBlockRequestAminoMsg): _68.GetLatestBlockRequest;
                    toAminoMsg(message: _68.GetLatestBlockRequest): _68.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _68.GetLatestBlockRequestProtoMsg): _68.GetLatestBlockRequest;
                    toProto(message: _68.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _68.GetLatestBlockRequest): _68.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _68.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetLatestBlockResponse;
                    fromPartial(object: Partial<_68.GetLatestBlockResponse>): _68.GetLatestBlockResponse;
                    fromAmino(object: _68.GetLatestBlockResponseAmino): _68.GetLatestBlockResponse;
                    toAmino(message: _68.GetLatestBlockResponse): _68.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _68.GetLatestBlockResponseAminoMsg): _68.GetLatestBlockResponse;
                    toAminoMsg(message: _68.GetLatestBlockResponse): _68.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _68.GetLatestBlockResponseProtoMsg): _68.GetLatestBlockResponse;
                    toProto(message: _68.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _68.GetLatestBlockResponse): _68.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _68.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.GetSyncingRequest;
                    fromPartial(_: Partial<_68.GetSyncingRequest>): _68.GetSyncingRequest;
                    fromAmino(_: _68.GetSyncingRequestAmino): _68.GetSyncingRequest;
                    toAmino(_: _68.GetSyncingRequest): _68.GetSyncingRequestAmino;
                    fromAminoMsg(object: _68.GetSyncingRequestAminoMsg): _68.GetSyncingRequest;
                    toAminoMsg(message: _68.GetSyncingRequest): _68.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _68.GetSyncingRequestProtoMsg): _68.GetSyncingRequest;
                    toProto(message: _68.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _68.GetSyncingRequest): _68.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _68.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetSyncingResponse;
                    fromPartial(object: Partial<_68.GetSyncingResponse>): _68.GetSyncingResponse;
                    fromAmino(object: _68.GetSyncingResponseAmino): _68.GetSyncingResponse;
                    toAmino(message: _68.GetSyncingResponse): _68.GetSyncingResponseAmino;
                    fromAminoMsg(object: _68.GetSyncingResponseAminoMsg): _68.GetSyncingResponse;
                    toAminoMsg(message: _68.GetSyncingResponse): _68.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _68.GetSyncingResponseProtoMsg): _68.GetSyncingResponse;
                    toProto(message: _68.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _68.GetSyncingResponse): _68.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _68.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _68.GetNodeInfoRequest;
                    fromPartial(_: Partial<_68.GetNodeInfoRequest>): _68.GetNodeInfoRequest;
                    fromAmino(_: _68.GetNodeInfoRequestAmino): _68.GetNodeInfoRequest;
                    toAmino(_: _68.GetNodeInfoRequest): _68.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _68.GetNodeInfoRequestAminoMsg): _68.GetNodeInfoRequest;
                    toAminoMsg(message: _68.GetNodeInfoRequest): _68.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _68.GetNodeInfoRequestProtoMsg): _68.GetNodeInfoRequest;
                    toProto(message: _68.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _68.GetNodeInfoRequest): _68.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _68.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.GetNodeInfoResponse;
                    fromPartial(object: Partial<_68.GetNodeInfoResponse>): _68.GetNodeInfoResponse;
                    fromAmino(object: _68.GetNodeInfoResponseAmino): _68.GetNodeInfoResponse;
                    toAmino(message: _68.GetNodeInfoResponse): _68.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _68.GetNodeInfoResponseAminoMsg): _68.GetNodeInfoResponse;
                    toAminoMsg(message: _68.GetNodeInfoResponse): _68.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _68.GetNodeInfoResponseProtoMsg): _68.GetNodeInfoResponse;
                    toProto(message: _68.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _68.GetNodeInfoResponse): _68.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _68.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.VersionInfo;
                    fromPartial(object: Partial<_68.VersionInfo>): _68.VersionInfo;
                    fromAmino(object: _68.VersionInfoAmino): _68.VersionInfo;
                    toAmino(message: _68.VersionInfo): _68.VersionInfoAmino;
                    fromAminoMsg(object: _68.VersionInfoAminoMsg): _68.VersionInfo;
                    toAminoMsg(message: _68.VersionInfo): _68.VersionInfoAminoMsg;
                    fromProtoMsg(message: _68.VersionInfoProtoMsg): _68.VersionInfo;
                    toProto(message: _68.VersionInfo): Uint8Array;
                    toProtoMsg(message: _68.VersionInfo): _68.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _68.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.Module;
                    fromPartial(object: Partial<_68.Module>): _68.Module;
                    fromAmino(object: _68.ModuleAmino): _68.Module;
                    toAmino(message: _68.Module): _68.ModuleAmino;
                    fromAminoMsg(object: _68.ModuleAminoMsg): _68.Module;
                    toAminoMsg(message: _68.Module): _68.ModuleAminoMsg;
                    fromProtoMsg(message: _68.ModuleProtoMsg): _68.Module;
                    toProto(message: _68.Module): Uint8Array;
                    toProtoMsg(message: _68.Module): _68.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _68.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.ABCIQueryRequest;
                    fromPartial(object: Partial<_68.ABCIQueryRequest>): _68.ABCIQueryRequest;
                    fromAmino(object: _68.ABCIQueryRequestAmino): _68.ABCIQueryRequest;
                    toAmino(message: _68.ABCIQueryRequest): _68.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _68.ABCIQueryRequestAminoMsg): _68.ABCIQueryRequest;
                    toAminoMsg(message: _68.ABCIQueryRequest): _68.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _68.ABCIQueryRequestProtoMsg): _68.ABCIQueryRequest;
                    toProto(message: _68.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _68.ABCIQueryRequest): _68.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _68.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.ABCIQueryResponse;
                    fromPartial(object: Partial<_68.ABCIQueryResponse>): _68.ABCIQueryResponse;
                    fromAmino(object: _68.ABCIQueryResponseAmino): _68.ABCIQueryResponse;
                    toAmino(message: _68.ABCIQueryResponse): _68.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _68.ABCIQueryResponseAminoMsg): _68.ABCIQueryResponse;
                    toAminoMsg(message: _68.ABCIQueryResponse): _68.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _68.ABCIQueryResponseProtoMsg): _68.ABCIQueryResponse;
                    toProto(message: _68.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _68.ABCIQueryResponse): _68.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _68.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.ProofOp;
                    fromPartial(object: Partial<_68.ProofOp>): _68.ProofOp;
                    fromAmino(object: _68.ProofOpAmino): _68.ProofOp;
                    toAmino(message: _68.ProofOp): _68.ProofOpAmino;
                    fromAminoMsg(object: _68.ProofOpAminoMsg): _68.ProofOp;
                    toAminoMsg(message: _68.ProofOp): _68.ProofOpAminoMsg;
                    fromProtoMsg(message: _68.ProofOpProtoMsg): _68.ProofOp;
                    toProto(message: _68.ProofOp): Uint8Array;
                    toProtoMsg(message: _68.ProofOp): _68.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _68.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _68.ProofOps;
                    fromPartial(object: Partial<_68.ProofOps>): _68.ProofOps;
                    fromAmino(object: _68.ProofOpsAmino): _68.ProofOps;
                    toAmino(message: _68.ProofOps): _68.ProofOpsAmino;
                    fromAminoMsg(object: _68.ProofOpsAminoMsg): _68.ProofOps;
                    toAminoMsg(message: _68.ProofOps): _68.ProofOpsAminoMsg;
                    fromProtoMsg(message: _68.ProofOpsProtoMsg): _68.ProofOps;
                    toProto(message: _68.ProofOps): Uint8Array;
                    toProtoMsg(message: _68.ProofOps): _68.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _70.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Coin;
                fromPartial(object: Partial<_70.Coin>): _70.Coin;
                fromAmino(object: _70.CoinAmino): _70.Coin;
                toAmino(message: _70.Coin): _70.CoinAmino;
                fromAminoMsg(object: _70.CoinAminoMsg): _70.Coin;
                toAminoMsg(message: _70.Coin): _70.CoinAminoMsg;
                fromProtoMsg(message: _70.CoinProtoMsg): _70.Coin;
                toProto(message: _70.Coin): Uint8Array;
                toProtoMsg(message: _70.Coin): _70.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _70.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DecCoin;
                fromPartial(object: Partial<_70.DecCoin>): _70.DecCoin;
                fromAmino(object: _70.DecCoinAmino): _70.DecCoin;
                toAmino(message: _70.DecCoin): _70.DecCoinAmino;
                fromAminoMsg(object: _70.DecCoinAminoMsg): _70.DecCoin;
                toAminoMsg(message: _70.DecCoin): _70.DecCoinAminoMsg;
                fromProtoMsg(message: _70.DecCoinProtoMsg): _70.DecCoin;
                toProto(message: _70.DecCoin): Uint8Array;
                toProtoMsg(message: _70.DecCoin): _70.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _70.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.IntProto;
                fromPartial(object: Partial<_70.IntProto>): _70.IntProto;
                fromAmino(object: _70.IntProtoAmino): _70.IntProto;
                toAmino(message: _70.IntProto): _70.IntProtoAmino;
                fromAminoMsg(object: _70.IntProtoAminoMsg): _70.IntProto;
                toAminoMsg(message: _70.IntProto): _70.IntProtoAminoMsg;
                fromProtoMsg(message: _70.IntProtoProtoMsg): _70.IntProto;
                toProto(message: _70.IntProto): Uint8Array;
                toProtoMsg(message: _70.IntProto): _70.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _70.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DecProto;
                fromPartial(object: Partial<_70.DecProto>): _70.DecProto;
                fromAmino(object: _70.DecProtoAmino): _70.DecProto;
                toAmino(message: _70.DecProto): _70.DecProtoAmino;
                fromAminoMsg(object: _70.DecProtoAminoMsg): _70.DecProto;
                toAminoMsg(message: _70.DecProto): _70.DecProtoAminoMsg;
                fromProtoMsg(message: _70.DecProtoProtoMsg): _70.DecProto;
                toProto(message: _70.DecProto): Uint8Array;
                toProtoMsg(message: _70.DecProto): _70.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _72.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.GenesisOwners;
                fromPartial(object: Partial<_72.GenesisOwners>): _72.GenesisOwners;
                fromAmino(object: _72.GenesisOwnersAmino): _72.GenesisOwners;
                toAmino(message: _72.GenesisOwners): _72.GenesisOwnersAmino;
                fromAminoMsg(object: _72.GenesisOwnersAminoMsg): _72.GenesisOwners;
                toAminoMsg(message: _72.GenesisOwners): _72.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _72.GenesisOwnersProtoMsg): _72.GenesisOwners;
                toProto(message: _72.GenesisOwners): Uint8Array;
                toProtoMsg(message: _72.GenesisOwners): _72.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _72.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.GenesisState;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                fromAmino(object: _72.GenesisStateAmino): _72.GenesisState;
                toAmino(message: _72.GenesisState): _72.GenesisStateAmino;
                fromAminoMsg(object: _72.GenesisStateAminoMsg): _72.GenesisState;
                toAminoMsg(message: _72.GenesisState): _72.GenesisStateAminoMsg;
                fromProtoMsg(message: _72.GenesisStateProtoMsg): _72.GenesisState;
                toProto(message: _72.GenesisState): Uint8Array;
                toProtoMsg(message: _72.GenesisState): _72.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _71.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Capability;
                fromPartial(object: Partial<_71.Capability>): _71.Capability;
                fromAmino(object: _71.CapabilityAmino): _71.Capability;
                toAmino(message: _71.Capability): _71.CapabilityAmino;
                fromAminoMsg(object: _71.CapabilityAminoMsg): _71.Capability;
                toAminoMsg(message: _71.Capability): _71.CapabilityAminoMsg;
                fromProtoMsg(message: _71.CapabilityProtoMsg): _71.Capability;
                toProto(message: _71.Capability): Uint8Array;
                toProtoMsg(message: _71.Capability): _71.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _71.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.Owner;
                fromPartial(object: Partial<_71.Owner>): _71.Owner;
                fromAmino(object: _71.OwnerAmino): _71.Owner;
                toAmino(message: _71.Owner): _71.OwnerAmino;
                fromAminoMsg(object: _71.OwnerAminoMsg): _71.Owner;
                toAminoMsg(message: _71.Owner): _71.OwnerAminoMsg;
                fromProtoMsg(message: _71.OwnerProtoMsg): _71.Owner;
                toProto(message: _71.Owner): Uint8Array;
                toProtoMsg(message: _71.Owner): _71.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _71.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.CapabilityOwners;
                fromPartial(object: Partial<_71.CapabilityOwners>): _71.CapabilityOwners;
                fromAmino(object: _71.CapabilityOwnersAmino): _71.CapabilityOwners;
                toAmino(message: _71.CapabilityOwners): _71.CapabilityOwnersAmino;
                fromAminoMsg(object: _71.CapabilityOwnersAminoMsg): _71.CapabilityOwners;
                toAminoMsg(message: _71.CapabilityOwners): _71.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _71.CapabilityOwnersProtoMsg): _71.CapabilityOwners;
                toProto(message: _71.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _71.CapabilityOwners): _71.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _74.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _74.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _74.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _74.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _74.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _74.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _74.MsgVerifyInvariant) => _74.MsgVerifyInvariantAmino;
                    fromAmino: (object: _74.MsgVerifyInvariantAmino) => _74.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _74.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.MsgVerifyInvariant;
                fromPartial(object: Partial<_74.MsgVerifyInvariant>): _74.MsgVerifyInvariant;
                fromAmino(object: _74.MsgVerifyInvariantAmino): _74.MsgVerifyInvariant;
                toAmino(message: _74.MsgVerifyInvariant): _74.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _74.MsgVerifyInvariantAminoMsg): _74.MsgVerifyInvariant;
                toAminoMsg(message: _74.MsgVerifyInvariant): _74.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _74.MsgVerifyInvariantProtoMsg): _74.MsgVerifyInvariant;
                toProto(message: _74.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _74.MsgVerifyInvariant): _74.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _74.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _74.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_74.MsgVerifyInvariantResponse>): _74.MsgVerifyInvariantResponse;
                fromAmino(_: _74.MsgVerifyInvariantResponseAmino): _74.MsgVerifyInvariantResponse;
                toAmino(_: _74.MsgVerifyInvariantResponse): _74.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _74.MsgVerifyInvariantResponseAminoMsg): _74.MsgVerifyInvariantResponse;
                toAminoMsg(message: _74.MsgVerifyInvariantResponse): _74.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _74.MsgVerifyInvariantResponseProtoMsg): _74.MsgVerifyInvariantResponse;
                toProto(message: _74.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _74.MsgVerifyInvariantResponse): _74.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _73.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                toAminoMsg(message: _73.GenesisState): _73.GenesisStateAminoMsg;
                fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                toProto(message: _73.GenesisState): Uint8Array;
                toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _75.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.PubKey;
                fromPartial(object: Partial<_75.PubKey>): _75.PubKey;
                fromAmino(object: _75.PubKeyAmino): _75.PubKey;
                toAmino(message: _75.PubKey): _75.PubKeyAmino;
                fromAminoMsg(object: _75.PubKeyAminoMsg): _75.PubKey;
                toAminoMsg(message: _75.PubKey): _75.PubKeyAminoMsg;
                fromProtoMsg(message: _75.PubKeyProtoMsg): _75.PubKey;
                toProto(message: _75.PubKey): Uint8Array;
                toProtoMsg(message: _75.PubKey): _75.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _75.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.PrivKey;
                fromPartial(object: Partial<_75.PrivKey>): _75.PrivKey;
                fromAmino(object: _75.PrivKeyAmino): _75.PrivKey;
                toAmino(message: _75.PrivKey): _75.PrivKeyAmino;
                fromAminoMsg(object: _75.PrivKeyAminoMsg): _75.PrivKey;
                toAminoMsg(message: _75.PrivKey): _75.PrivKeyAminoMsg;
                fromProtoMsg(message: _75.PrivKeyProtoMsg): _75.PrivKey;
                toProto(message: _75.PrivKey): Uint8Array;
                toProtoMsg(message: _75.PrivKey): _75.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _76.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _76.BIP44Params;
                    fromPartial(object: Partial<_76.BIP44Params>): _76.BIP44Params;
                    fromAmino(object: _76.BIP44ParamsAmino): _76.BIP44Params;
                    toAmino(message: _76.BIP44Params): _76.BIP44ParamsAmino;
                    fromAminoMsg(object: _76.BIP44ParamsAminoMsg): _76.BIP44Params;
                    toAminoMsg(message: _76.BIP44Params): _76.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _76.BIP44ParamsProtoMsg): _76.BIP44Params;
                    toProto(message: _76.BIP44Params): Uint8Array;
                    toProtoMsg(message: _76.BIP44Params): _76.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _77.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Record;
                    fromPartial(object: Partial<_77.Record>): _77.Record;
                    fromAmino(object: _77.RecordAmino): _77.Record;
                    toAmino(message: _77.Record): _77.RecordAmino;
                    fromAminoMsg(object: _77.RecordAminoMsg): _77.Record;
                    toAminoMsg(message: _77.Record): _77.RecordAminoMsg;
                    fromProtoMsg(message: _77.RecordProtoMsg): _77.Record;
                    toProto(message: _77.Record): Uint8Array;
                    toProtoMsg(message: _77.Record): _77.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _77.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Record_Local;
                    fromPartial(object: Partial<_77.Record_Local>): _77.Record_Local;
                    fromAmino(object: _77.Record_LocalAmino): _77.Record_Local;
                    toAmino(message: _77.Record_Local): _77.Record_LocalAmino;
                    fromAminoMsg(object: _77.Record_LocalAminoMsg): _77.Record_Local;
                    toAminoMsg(message: _77.Record_Local): _77.Record_LocalAminoMsg;
                    fromProtoMsg(message: _77.Record_LocalProtoMsg): _77.Record_Local;
                    toProto(message: _77.Record_Local): Uint8Array;
                    toProtoMsg(message: _77.Record_Local): _77.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _77.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _77.Record_Ledger;
                    fromPartial(object: Partial<_77.Record_Ledger>): _77.Record_Ledger;
                    fromAmino(object: _77.Record_LedgerAmino): _77.Record_Ledger;
                    toAmino(message: _77.Record_Ledger): _77.Record_LedgerAmino;
                    fromAminoMsg(object: _77.Record_LedgerAminoMsg): _77.Record_Ledger;
                    toAminoMsg(message: _77.Record_Ledger): _77.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _77.Record_LedgerProtoMsg): _77.Record_Ledger;
                    toProto(message: _77.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _77.Record_Ledger): _77.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _77.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.Record_Multi;
                    fromPartial(_: Partial<_77.Record_Multi>): _77.Record_Multi;
                    fromAmino(_: _77.Record_MultiAmino): _77.Record_Multi;
                    toAmino(_: _77.Record_Multi): _77.Record_MultiAmino;
                    fromAminoMsg(object: _77.Record_MultiAminoMsg): _77.Record_Multi;
                    toAminoMsg(message: _77.Record_Multi): _77.Record_MultiAminoMsg;
                    fromProtoMsg(message: _77.Record_MultiProtoMsg): _77.Record_Multi;
                    toProto(message: _77.Record_Multi): Uint8Array;
                    toProtoMsg(message: _77.Record_Multi): _77.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _77.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _77.Record_Offline;
                    fromPartial(_: Partial<_77.Record_Offline>): _77.Record_Offline;
                    fromAmino(_: _77.Record_OfflineAmino): _77.Record_Offline;
                    toAmino(_: _77.Record_Offline): _77.Record_OfflineAmino;
                    fromAminoMsg(object: _77.Record_OfflineAminoMsg): _77.Record_Offline;
                    toAminoMsg(message: _77.Record_Offline): _77.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _77.Record_OfflineProtoMsg): _77.Record_Offline;
                    toProto(message: _77.Record_Offline): Uint8Array;
                    toProtoMsg(message: _77.Record_Offline): _77.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _78.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.LegacyAminoPubKey;
                fromPartial(object: Partial<_78.LegacyAminoPubKey>): _78.LegacyAminoPubKey;
                fromAmino(object: _78.LegacyAminoPubKeyAmino): _78.LegacyAminoPubKey;
                toAmino(message: _78.LegacyAminoPubKey): _78.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _78.LegacyAminoPubKeyAminoMsg): _78.LegacyAminoPubKey;
                toAminoMsg(message: _78.LegacyAminoPubKey): _78.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _78.LegacyAminoPubKeyProtoMsg): _78.LegacyAminoPubKey;
                toProto(message: _78.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _78.LegacyAminoPubKey): _78.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _79.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.PubKey;
                fromPartial(object: Partial<_79.PubKey>): _79.PubKey;
                fromAmino(object: _79.PubKeyAmino): _79.PubKey;
                toAmino(message: _79.PubKey): _79.PubKeyAmino;
                fromAminoMsg(object: _79.PubKeyAminoMsg): _79.PubKey;
                toAminoMsg(message: _79.PubKey): _79.PubKeyAminoMsg;
                fromProtoMsg(message: _79.PubKeyProtoMsg): _79.PubKey;
                toProto(message: _79.PubKey): Uint8Array;
                toProtoMsg(message: _79.PubKey): _79.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _79.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.PrivKey;
                fromPartial(object: Partial<_79.PrivKey>): _79.PrivKey;
                fromAmino(object: _79.PrivKeyAmino): _79.PrivKey;
                toAmino(message: _79.PrivKey): _79.PrivKeyAmino;
                fromAminoMsg(object: _79.PrivKeyAminoMsg): _79.PrivKey;
                toAminoMsg(message: _79.PrivKey): _79.PrivKeyAminoMsg;
                fromProtoMsg(message: _79.PrivKeyProtoMsg): _79.PrivKey;
                toProto(message: _79.PrivKey): Uint8Array;
                toProtoMsg(message: _79.PrivKey): _79.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _80.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.PubKey;
                fromPartial(object: Partial<_80.PubKey>): _80.PubKey;
                fromAmino(object: _80.PubKeyAmino): _80.PubKey;
                toAmino(message: _80.PubKey): _80.PubKeyAmino;
                fromAminoMsg(object: _80.PubKeyAminoMsg): _80.PubKey;
                toAminoMsg(message: _80.PubKey): _80.PubKeyAminoMsg;
                fromProtoMsg(message: _80.PubKeyProtoMsg): _80.PubKey;
                toProto(message: _80.PubKey): Uint8Array;
                toProtoMsg(message: _80.PubKey): _80.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _80.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.PrivKey;
                fromPartial(object: Partial<_80.PrivKey>): _80.PrivKey;
                fromAmino(object: _80.PrivKeyAmino): _80.PrivKey;
                toAmino(message: _80.PrivKey): _80.PrivKeyAmino;
                fromAminoMsg(object: _80.PrivKeyAminoMsg): _80.PrivKey;
                toAminoMsg(message: _80.PrivKey): _80.PrivKeyAminoMsg;
                fromProtoMsg(message: _80.PrivKeyProtoMsg): _80.PrivKey;
                toProto(message: _80.PrivKey): Uint8Array;
                toProtoMsg(message: _80.PrivKey): _80.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                validatorOutstandingRewards(request: _83.QueryValidatorOutstandingRewardsRequest): Promise<_83.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _83.QueryValidatorCommissionRequest): Promise<_83.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _83.QueryValidatorSlashesRequest): Promise<_83.QueryValidatorSlashesResponse>;
                delegationRewards(request: _83.QueryDelegationRewardsRequest): Promise<_83.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _83.QueryDelegationTotalRewardsRequest): Promise<_83.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _83.QueryDelegatorValidatorsRequest): Promise<_83.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _83.QueryDelegatorWithdrawAddressRequest): Promise<_83.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _83.QueryCommunityPoolRequest): Promise<_83.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _84.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _84.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _84.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _84.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _84.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _84.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _84.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _84.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _84.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _84.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _84.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _84.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _84.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _84.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _84.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _84.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _84.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _84.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _84.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _84.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _84.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _84.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _84.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _84.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _84.MsgSetWithdrawAddress) => _84.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _84.MsgSetWithdrawAddressAmino) => _84.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _84.MsgWithdrawDelegatorReward) => _84.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _84.MsgWithdrawDelegatorRewardAmino) => _84.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _84.MsgWithdrawValidatorCommission) => _84.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _84.MsgWithdrawValidatorCommissionAmino) => _84.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _84.MsgFundCommunityPool) => _84.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _84.MsgFundCommunityPoolAmino) => _84.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _84.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_84.MsgSetWithdrawAddress>): _84.MsgSetWithdrawAddress;
                fromAmino(object: _84.MsgSetWithdrawAddressAmino): _84.MsgSetWithdrawAddress;
                toAmino(message: _84.MsgSetWithdrawAddress): _84.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _84.MsgSetWithdrawAddressAminoMsg): _84.MsgSetWithdrawAddress;
                toAminoMsg(message: _84.MsgSetWithdrawAddress): _84.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _84.MsgSetWithdrawAddressProtoMsg): _84.MsgSetWithdrawAddress;
                toProto(message: _84.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _84.MsgSetWithdrawAddress): _84.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _84.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_84.MsgSetWithdrawAddressResponse>): _84.MsgSetWithdrawAddressResponse;
                fromAmino(_: _84.MsgSetWithdrawAddressResponseAmino): _84.MsgSetWithdrawAddressResponse;
                toAmino(_: _84.MsgSetWithdrawAddressResponse): _84.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _84.MsgSetWithdrawAddressResponseAminoMsg): _84.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _84.MsgSetWithdrawAddressResponse): _84.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _84.MsgSetWithdrawAddressResponseProtoMsg): _84.MsgSetWithdrawAddressResponse;
                toProto(message: _84.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _84.MsgSetWithdrawAddressResponse): _84.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _84.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_84.MsgWithdrawDelegatorReward>): _84.MsgWithdrawDelegatorReward;
                fromAmino(object: _84.MsgWithdrawDelegatorRewardAmino): _84.MsgWithdrawDelegatorReward;
                toAmino(message: _84.MsgWithdrawDelegatorReward): _84.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _84.MsgWithdrawDelegatorRewardAminoMsg): _84.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _84.MsgWithdrawDelegatorReward): _84.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawDelegatorRewardProtoMsg): _84.MsgWithdrawDelegatorReward;
                toProto(message: _84.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawDelegatorReward): _84.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _84.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_84.MsgWithdrawDelegatorRewardResponse>): _84.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _84.MsgWithdrawDelegatorRewardResponseAmino): _84.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _84.MsgWithdrawDelegatorRewardResponse): _84.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _84.MsgWithdrawDelegatorRewardResponseAminoMsg): _84.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _84.MsgWithdrawDelegatorRewardResponse): _84.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawDelegatorRewardResponseProtoMsg): _84.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _84.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawDelegatorRewardResponse): _84.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _84.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_84.MsgWithdrawValidatorCommission>): _84.MsgWithdrawValidatorCommission;
                fromAmino(object: _84.MsgWithdrawValidatorCommissionAmino): _84.MsgWithdrawValidatorCommission;
                toAmino(message: _84.MsgWithdrawValidatorCommission): _84.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _84.MsgWithdrawValidatorCommissionAminoMsg): _84.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _84.MsgWithdrawValidatorCommission): _84.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawValidatorCommissionProtoMsg): _84.MsgWithdrawValidatorCommission;
                toProto(message: _84.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawValidatorCommission): _84.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _84.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_84.MsgWithdrawValidatorCommissionResponse>): _84.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _84.MsgWithdrawValidatorCommissionResponseAmino): _84.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _84.MsgWithdrawValidatorCommissionResponse): _84.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _84.MsgWithdrawValidatorCommissionResponseAminoMsg): _84.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _84.MsgWithdrawValidatorCommissionResponse): _84.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawValidatorCommissionResponseProtoMsg): _84.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _84.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawValidatorCommissionResponse): _84.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _84.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgFundCommunityPool;
                fromPartial(object: Partial<_84.MsgFundCommunityPool>): _84.MsgFundCommunityPool;
                fromAmino(object: _84.MsgFundCommunityPoolAmino): _84.MsgFundCommunityPool;
                toAmino(message: _84.MsgFundCommunityPool): _84.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _84.MsgFundCommunityPoolAminoMsg): _84.MsgFundCommunityPool;
                toAminoMsg(message: _84.MsgFundCommunityPool): _84.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _84.MsgFundCommunityPoolProtoMsg): _84.MsgFundCommunityPool;
                toProto(message: _84.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _84.MsgFundCommunityPool): _84.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _84.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_84.MsgFundCommunityPoolResponse>): _84.MsgFundCommunityPoolResponse;
                fromAmino(_: _84.MsgFundCommunityPoolResponseAmino): _84.MsgFundCommunityPoolResponse;
                toAmino(_: _84.MsgFundCommunityPoolResponse): _84.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _84.MsgFundCommunityPoolResponseAminoMsg): _84.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _84.MsgFundCommunityPoolResponse): _84.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _84.MsgFundCommunityPoolResponseProtoMsg): _84.MsgFundCommunityPoolResponse;
                toProto(message: _84.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _84.MsgFundCommunityPoolResponse): _84.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _83.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryParamsRequest;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
                fromAmino(_: _83.QueryParamsRequestAmino): _83.QueryParamsRequest;
                toAmino(_: _83.QueryParamsRequest): _83.QueryParamsRequestAmino;
                fromAminoMsg(object: _83.QueryParamsRequestAminoMsg): _83.QueryParamsRequest;
                toAminoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryParamsRequestProtoMsg): _83.QueryParamsRequest;
                toProto(message: _83.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _83.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryParamsResponse;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
                fromAmino(object: _83.QueryParamsResponseAmino): _83.QueryParamsResponse;
                toAmino(message: _83.QueryParamsResponse): _83.QueryParamsResponseAmino;
                fromAminoMsg(object: _83.QueryParamsResponseAminoMsg): _83.QueryParamsResponse;
                toAminoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryParamsResponseProtoMsg): _83.QueryParamsResponse;
                toProto(message: _83.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_83.QueryValidatorOutstandingRewardsRequest>): _83.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _83.QueryValidatorOutstandingRewardsRequestAmino): _83.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _83.QueryValidatorOutstandingRewardsRequest): _83.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorOutstandingRewardsRequestAminoMsg): _83.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _83.QueryValidatorOutstandingRewardsRequest): _83.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorOutstandingRewardsRequestProtoMsg): _83.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _83.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorOutstandingRewardsRequest): _83.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_83.QueryValidatorOutstandingRewardsResponse>): _83.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _83.QueryValidatorOutstandingRewardsResponseAmino): _83.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _83.QueryValidatorOutstandingRewardsResponse): _83.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorOutstandingRewardsResponseAminoMsg): _83.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _83.QueryValidatorOutstandingRewardsResponse): _83.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorOutstandingRewardsResponseProtoMsg): _83.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _83.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorOutstandingRewardsResponse): _83.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_83.QueryValidatorCommissionRequest>): _83.QueryValidatorCommissionRequest;
                fromAmino(object: _83.QueryValidatorCommissionRequestAmino): _83.QueryValidatorCommissionRequest;
                toAmino(message: _83.QueryValidatorCommissionRequest): _83.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorCommissionRequestAminoMsg): _83.QueryValidatorCommissionRequest;
                toAminoMsg(message: _83.QueryValidatorCommissionRequest): _83.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorCommissionRequestProtoMsg): _83.QueryValidatorCommissionRequest;
                toProto(message: _83.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorCommissionRequest): _83.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_83.QueryValidatorCommissionResponse>): _83.QueryValidatorCommissionResponse;
                fromAmino(object: _83.QueryValidatorCommissionResponseAmino): _83.QueryValidatorCommissionResponse;
                toAmino(message: _83.QueryValidatorCommissionResponse): _83.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorCommissionResponseAminoMsg): _83.QueryValidatorCommissionResponse;
                toAminoMsg(message: _83.QueryValidatorCommissionResponse): _83.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorCommissionResponseProtoMsg): _83.QueryValidatorCommissionResponse;
                toProto(message: _83.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorCommissionResponse): _83.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_83.QueryValidatorSlashesRequest>): _83.QueryValidatorSlashesRequest;
                fromAmino(object: _83.QueryValidatorSlashesRequestAmino): _83.QueryValidatorSlashesRequest;
                toAmino(message: _83.QueryValidatorSlashesRequest): _83.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorSlashesRequestAminoMsg): _83.QueryValidatorSlashesRequest;
                toAminoMsg(message: _83.QueryValidatorSlashesRequest): _83.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorSlashesRequestProtoMsg): _83.QueryValidatorSlashesRequest;
                toProto(message: _83.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorSlashesRequest): _83.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_83.QueryValidatorSlashesResponse>): _83.QueryValidatorSlashesResponse;
                fromAmino(object: _83.QueryValidatorSlashesResponseAmino): _83.QueryValidatorSlashesResponse;
                toAmino(message: _83.QueryValidatorSlashesResponse): _83.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorSlashesResponseAminoMsg): _83.QueryValidatorSlashesResponse;
                toAminoMsg(message: _83.QueryValidatorSlashesResponse): _83.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorSlashesResponseProtoMsg): _83.QueryValidatorSlashesResponse;
                toProto(message: _83.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorSlashesResponse): _83.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_83.QueryDelegationRewardsRequest>): _83.QueryDelegationRewardsRequest;
                fromAmino(object: _83.QueryDelegationRewardsRequestAmino): _83.QueryDelegationRewardsRequest;
                toAmino(message: _83.QueryDelegationRewardsRequest): _83.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _83.QueryDelegationRewardsRequestAminoMsg): _83.QueryDelegationRewardsRequest;
                toAminoMsg(message: _83.QueryDelegationRewardsRequest): _83.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationRewardsRequestProtoMsg): _83.QueryDelegationRewardsRequest;
                toProto(message: _83.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationRewardsRequest): _83.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_83.QueryDelegationRewardsResponse>): _83.QueryDelegationRewardsResponse;
                fromAmino(object: _83.QueryDelegationRewardsResponseAmino): _83.QueryDelegationRewardsResponse;
                toAmino(message: _83.QueryDelegationRewardsResponse): _83.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _83.QueryDelegationRewardsResponseAminoMsg): _83.QueryDelegationRewardsResponse;
                toAminoMsg(message: _83.QueryDelegationRewardsResponse): _83.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationRewardsResponseProtoMsg): _83.QueryDelegationRewardsResponse;
                toProto(message: _83.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationRewardsResponse): _83.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_83.QueryDelegationTotalRewardsRequest>): _83.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _83.QueryDelegationTotalRewardsRequestAmino): _83.QueryDelegationTotalRewardsRequest;
                toAmino(message: _83.QueryDelegationTotalRewardsRequest): _83.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _83.QueryDelegationTotalRewardsRequestAminoMsg): _83.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _83.QueryDelegationTotalRewardsRequest): _83.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationTotalRewardsRequestProtoMsg): _83.QueryDelegationTotalRewardsRequest;
                toProto(message: _83.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationTotalRewardsRequest): _83.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_83.QueryDelegationTotalRewardsResponse>): _83.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _83.QueryDelegationTotalRewardsResponseAmino): _83.QueryDelegationTotalRewardsResponse;
                toAmino(message: _83.QueryDelegationTotalRewardsResponse): _83.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _83.QueryDelegationTotalRewardsResponseAminoMsg): _83.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _83.QueryDelegationTotalRewardsResponse): _83.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationTotalRewardsResponseProtoMsg): _83.QueryDelegationTotalRewardsResponse;
                toProto(message: _83.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationTotalRewardsResponse): _83.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorsRequest>): _83.QueryDelegatorValidatorsRequest;
                fromAmino(object: _83.QueryDelegatorValidatorsRequestAmino): _83.QueryDelegatorValidatorsRequest;
                toAmino(message: _83.QueryDelegatorValidatorsRequest): _83.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _83.QueryDelegatorValidatorsRequestAminoMsg): _83.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _83.QueryDelegatorValidatorsRequest): _83.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorValidatorsRequestProtoMsg): _83.QueryDelegatorValidatorsRequest;
                toProto(message: _83.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorValidatorsRequest): _83.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorsResponse>): _83.QueryDelegatorValidatorsResponse;
                fromAmino(object: _83.QueryDelegatorValidatorsResponseAmino): _83.QueryDelegatorValidatorsResponse;
                toAmino(message: _83.QueryDelegatorValidatorsResponse): _83.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _83.QueryDelegatorValidatorsResponseAminoMsg): _83.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _83.QueryDelegatorValidatorsResponse): _83.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorValidatorsResponseProtoMsg): _83.QueryDelegatorValidatorsResponse;
                toProto(message: _83.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorValidatorsResponse): _83.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_83.QueryDelegatorWithdrawAddressRequest>): _83.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _83.QueryDelegatorWithdrawAddressRequestAmino): _83.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _83.QueryDelegatorWithdrawAddressRequest): _83.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _83.QueryDelegatorWithdrawAddressRequestAminoMsg): _83.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _83.QueryDelegatorWithdrawAddressRequest): _83.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorWithdrawAddressRequestProtoMsg): _83.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _83.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorWithdrawAddressRequest): _83.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_83.QueryDelegatorWithdrawAddressResponse>): _83.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _83.QueryDelegatorWithdrawAddressResponseAmino): _83.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _83.QueryDelegatorWithdrawAddressResponse): _83.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _83.QueryDelegatorWithdrawAddressResponseAminoMsg): _83.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _83.QueryDelegatorWithdrawAddressResponse): _83.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorWithdrawAddressResponseProtoMsg): _83.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _83.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorWithdrawAddressResponse): _83.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _83.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_83.QueryCommunityPoolRequest>): _83.QueryCommunityPoolRequest;
                fromAmino(_: _83.QueryCommunityPoolRequestAmino): _83.QueryCommunityPoolRequest;
                toAmino(_: _83.QueryCommunityPoolRequest): _83.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _83.QueryCommunityPoolRequestAminoMsg): _83.QueryCommunityPoolRequest;
                toAminoMsg(message: _83.QueryCommunityPoolRequest): _83.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _83.QueryCommunityPoolRequestProtoMsg): _83.QueryCommunityPoolRequest;
                toProto(message: _83.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _83.QueryCommunityPoolRequest): _83.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _83.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_83.QueryCommunityPoolResponse>): _83.QueryCommunityPoolResponse;
                fromAmino(object: _83.QueryCommunityPoolResponseAmino): _83.QueryCommunityPoolResponse;
                toAmino(message: _83.QueryCommunityPoolResponse): _83.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _83.QueryCommunityPoolResponseAminoMsg): _83.QueryCommunityPoolResponse;
                toAminoMsg(message: _83.QueryCommunityPoolResponse): _83.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _83.QueryCommunityPoolResponseProtoMsg): _83.QueryCommunityPoolResponse;
                toProto(message: _83.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _83.QueryCommunityPoolResponse): _83.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _82.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_82.DelegatorWithdrawInfo>): _82.DelegatorWithdrawInfo;
                fromAmino(object: _82.DelegatorWithdrawInfoAmino): _82.DelegatorWithdrawInfo;
                toAmino(message: _82.DelegatorWithdrawInfo): _82.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _82.DelegatorWithdrawInfoAminoMsg): _82.DelegatorWithdrawInfo;
                toAminoMsg(message: _82.DelegatorWithdrawInfo): _82.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _82.DelegatorWithdrawInfoProtoMsg): _82.DelegatorWithdrawInfo;
                toProto(message: _82.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _82.DelegatorWithdrawInfo): _82.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_82.ValidatorOutstandingRewardsRecord>): _82.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _82.ValidatorOutstandingRewardsRecordAmino): _82.ValidatorOutstandingRewardsRecord;
                toAmino(message: _82.ValidatorOutstandingRewardsRecord): _82.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _82.ValidatorOutstandingRewardsRecordAminoMsg): _82.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _82.ValidatorOutstandingRewardsRecord): _82.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorOutstandingRewardsRecordProtoMsg): _82.ValidatorOutstandingRewardsRecord;
                toProto(message: _82.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorOutstandingRewardsRecord): _82.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_82.ValidatorAccumulatedCommissionRecord>): _82.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _82.ValidatorAccumulatedCommissionRecordAmino): _82.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _82.ValidatorAccumulatedCommissionRecord): _82.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _82.ValidatorAccumulatedCommissionRecordAminoMsg): _82.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _82.ValidatorAccumulatedCommissionRecord): _82.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorAccumulatedCommissionRecordProtoMsg): _82.ValidatorAccumulatedCommissionRecord;
                toProto(message: _82.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorAccumulatedCommissionRecord): _82.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_82.ValidatorHistoricalRewardsRecord>): _82.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _82.ValidatorHistoricalRewardsRecordAmino): _82.ValidatorHistoricalRewardsRecord;
                toAmino(message: _82.ValidatorHistoricalRewardsRecord): _82.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _82.ValidatorHistoricalRewardsRecordAminoMsg): _82.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _82.ValidatorHistoricalRewardsRecord): _82.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorHistoricalRewardsRecordProtoMsg): _82.ValidatorHistoricalRewardsRecord;
                toProto(message: _82.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorHistoricalRewardsRecord): _82.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_82.ValidatorCurrentRewardsRecord>): _82.ValidatorCurrentRewardsRecord;
                fromAmino(object: _82.ValidatorCurrentRewardsRecordAmino): _82.ValidatorCurrentRewardsRecord;
                toAmino(message: _82.ValidatorCurrentRewardsRecord): _82.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _82.ValidatorCurrentRewardsRecordAminoMsg): _82.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _82.ValidatorCurrentRewardsRecord): _82.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorCurrentRewardsRecordProtoMsg): _82.ValidatorCurrentRewardsRecord;
                toProto(message: _82.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorCurrentRewardsRecord): _82.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _82.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_82.DelegatorStartingInfoRecord>): _82.DelegatorStartingInfoRecord;
                fromAmino(object: _82.DelegatorStartingInfoRecordAmino): _82.DelegatorStartingInfoRecord;
                toAmino(message: _82.DelegatorStartingInfoRecord): _82.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _82.DelegatorStartingInfoRecordAminoMsg): _82.DelegatorStartingInfoRecord;
                toAminoMsg(message: _82.DelegatorStartingInfoRecord): _82.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _82.DelegatorStartingInfoRecordProtoMsg): _82.DelegatorStartingInfoRecord;
                toProto(message: _82.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _82.DelegatorStartingInfoRecord): _82.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _82.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_82.ValidatorSlashEventRecord>): _82.ValidatorSlashEventRecord;
                fromAmino(object: _82.ValidatorSlashEventRecordAmino): _82.ValidatorSlashEventRecord;
                toAmino(message: _82.ValidatorSlashEventRecord): _82.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _82.ValidatorSlashEventRecordAminoMsg): _82.ValidatorSlashEventRecord;
                toAminoMsg(message: _82.ValidatorSlashEventRecord): _82.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _82.ValidatorSlashEventRecordProtoMsg): _82.ValidatorSlashEventRecord;
                toProto(message: _82.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _82.ValidatorSlashEventRecord): _82.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _82.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.GenesisState;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
                fromAmino(object: _82.GenesisStateAmino): _82.GenesisState;
                toAmino(message: _82.GenesisState): _82.GenesisStateAmino;
                fromAminoMsg(object: _82.GenesisStateAminoMsg): _82.GenesisState;
                toAminoMsg(message: _82.GenesisState): _82.GenesisStateAminoMsg;
                fromProtoMsg(message: _82.GenesisStateProtoMsg): _82.GenesisState;
                toProto(message: _82.GenesisState): Uint8Array;
                toProtoMsg(message: _82.GenesisState): _82.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _81.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Params;
                fromPartial(object: Partial<_81.Params>): _81.Params;
                fromAmino(object: _81.ParamsAmino): _81.Params;
                toAmino(message: _81.Params): _81.ParamsAmino;
                fromAminoMsg(object: _81.ParamsAminoMsg): _81.Params;
                toAminoMsg(message: _81.Params): _81.ParamsAminoMsg;
                fromProtoMsg(message: _81.ParamsProtoMsg): _81.Params;
                toProto(message: _81.Params): Uint8Array;
                toProtoMsg(message: _81.Params): _81.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _81.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_81.ValidatorHistoricalRewards>): _81.ValidatorHistoricalRewards;
                fromAmino(object: _81.ValidatorHistoricalRewardsAmino): _81.ValidatorHistoricalRewards;
                toAmino(message: _81.ValidatorHistoricalRewards): _81.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _81.ValidatorHistoricalRewardsAminoMsg): _81.ValidatorHistoricalRewards;
                toAminoMsg(message: _81.ValidatorHistoricalRewards): _81.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _81.ValidatorHistoricalRewardsProtoMsg): _81.ValidatorHistoricalRewards;
                toProto(message: _81.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _81.ValidatorHistoricalRewards): _81.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _81.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorCurrentRewards;
                fromPartial(object: Partial<_81.ValidatorCurrentRewards>): _81.ValidatorCurrentRewards;
                fromAmino(object: _81.ValidatorCurrentRewardsAmino): _81.ValidatorCurrentRewards;
                toAmino(message: _81.ValidatorCurrentRewards): _81.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _81.ValidatorCurrentRewardsAminoMsg): _81.ValidatorCurrentRewards;
                toAminoMsg(message: _81.ValidatorCurrentRewards): _81.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _81.ValidatorCurrentRewardsProtoMsg): _81.ValidatorCurrentRewards;
                toProto(message: _81.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _81.ValidatorCurrentRewards): _81.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _81.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_81.ValidatorAccumulatedCommission>): _81.ValidatorAccumulatedCommission;
                fromAmino(object: _81.ValidatorAccumulatedCommissionAmino): _81.ValidatorAccumulatedCommission;
                toAmino(message: _81.ValidatorAccumulatedCommission): _81.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _81.ValidatorAccumulatedCommissionAminoMsg): _81.ValidatorAccumulatedCommission;
                toAminoMsg(message: _81.ValidatorAccumulatedCommission): _81.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _81.ValidatorAccumulatedCommissionProtoMsg): _81.ValidatorAccumulatedCommission;
                toProto(message: _81.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _81.ValidatorAccumulatedCommission): _81.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _81.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_81.ValidatorOutstandingRewards>): _81.ValidatorOutstandingRewards;
                fromAmino(object: _81.ValidatorOutstandingRewardsAmino): _81.ValidatorOutstandingRewards;
                toAmino(message: _81.ValidatorOutstandingRewards): _81.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _81.ValidatorOutstandingRewardsAminoMsg): _81.ValidatorOutstandingRewards;
                toAminoMsg(message: _81.ValidatorOutstandingRewards): _81.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _81.ValidatorOutstandingRewardsProtoMsg): _81.ValidatorOutstandingRewards;
                toProto(message: _81.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _81.ValidatorOutstandingRewards): _81.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _81.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorSlashEvent;
                fromPartial(object: Partial<_81.ValidatorSlashEvent>): _81.ValidatorSlashEvent;
                fromAmino(object: _81.ValidatorSlashEventAmino): _81.ValidatorSlashEvent;
                toAmino(message: _81.ValidatorSlashEvent): _81.ValidatorSlashEventAmino;
                fromAminoMsg(object: _81.ValidatorSlashEventAminoMsg): _81.ValidatorSlashEvent;
                toAminoMsg(message: _81.ValidatorSlashEvent): _81.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _81.ValidatorSlashEventProtoMsg): _81.ValidatorSlashEvent;
                toProto(message: _81.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _81.ValidatorSlashEvent): _81.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _81.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ValidatorSlashEvents;
                fromPartial(object: Partial<_81.ValidatorSlashEvents>): _81.ValidatorSlashEvents;
                fromAmino(object: _81.ValidatorSlashEventsAmino): _81.ValidatorSlashEvents;
                toAmino(message: _81.ValidatorSlashEvents): _81.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _81.ValidatorSlashEventsAminoMsg): _81.ValidatorSlashEvents;
                toAminoMsg(message: _81.ValidatorSlashEvents): _81.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _81.ValidatorSlashEventsProtoMsg): _81.ValidatorSlashEvents;
                toProto(message: _81.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _81.ValidatorSlashEvents): _81.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _81.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.FeePool;
                fromPartial(object: Partial<_81.FeePool>): _81.FeePool;
                fromAmino(object: _81.FeePoolAmino): _81.FeePool;
                toAmino(message: _81.FeePool): _81.FeePoolAmino;
                fromAminoMsg(object: _81.FeePoolAminoMsg): _81.FeePool;
                toAminoMsg(message: _81.FeePool): _81.FeePoolAminoMsg;
                fromProtoMsg(message: _81.FeePoolProtoMsg): _81.FeePool;
                toProto(message: _81.FeePool): Uint8Array;
                toProtoMsg(message: _81.FeePool): _81.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _81.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_81.CommunityPoolSpendProposal>): _81.CommunityPoolSpendProposal;
                fromAmino(object: _81.CommunityPoolSpendProposalAmino): _81.CommunityPoolSpendProposal;
                toAmino(message: _81.CommunityPoolSpendProposal): _81.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _81.CommunityPoolSpendProposalAminoMsg): _81.CommunityPoolSpendProposal;
                toAminoMsg(message: _81.CommunityPoolSpendProposal): _81.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _81.CommunityPoolSpendProposalProtoMsg): _81.CommunityPoolSpendProposal;
                toProto(message: _81.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _81.CommunityPoolSpendProposal): _81.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _81.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.DelegatorStartingInfo;
                fromPartial(object: Partial<_81.DelegatorStartingInfo>): _81.DelegatorStartingInfo;
                fromAmino(object: _81.DelegatorStartingInfoAmino): _81.DelegatorStartingInfo;
                toAmino(message: _81.DelegatorStartingInfo): _81.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _81.DelegatorStartingInfoAminoMsg): _81.DelegatorStartingInfo;
                toAminoMsg(message: _81.DelegatorStartingInfo): _81.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _81.DelegatorStartingInfoProtoMsg): _81.DelegatorStartingInfo;
                toProto(message: _81.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _81.DelegatorStartingInfo): _81.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _81.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.DelegationDelegatorReward;
                fromPartial(object: Partial<_81.DelegationDelegatorReward>): _81.DelegationDelegatorReward;
                fromAmino(object: _81.DelegationDelegatorRewardAmino): _81.DelegationDelegatorReward;
                toAmino(message: _81.DelegationDelegatorReward): _81.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _81.DelegationDelegatorRewardAminoMsg): _81.DelegationDelegatorReward;
                toAminoMsg(message: _81.DelegationDelegatorReward): _81.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _81.DelegationDelegatorRewardProtoMsg): _81.DelegationDelegatorReward;
                toProto(message: _81.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _81.DelegationDelegatorReward): _81.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _81.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_81.CommunityPoolSpendProposalWithDeposit>): _81.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _81.CommunityPoolSpendProposalWithDepositAmino): _81.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _81.CommunityPoolSpendProposalWithDeposit): _81.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _81.CommunityPoolSpendProposalWithDepositAminoMsg): _81.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _81.CommunityPoolSpendProposalWithDeposit): _81.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _81.CommunityPoolSpendProposalWithDepositProtoMsg): _81.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _81.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _81.CommunityPoolSpendProposalWithDeposit): _81.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _87.QueryEvidenceRequest): Promise<_87.QueryEvidenceResponse>;
                allEvidence(request?: _87.QueryAllEvidenceRequest): Promise<_87.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _88.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _88.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _88.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _88.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _88.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _88.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _88.MsgSubmitEvidence) => _88.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _88.MsgSubmitEvidenceAmino) => _88.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _88.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgSubmitEvidence;
                fromPartial(object: Partial<_88.MsgSubmitEvidence>): _88.MsgSubmitEvidence;
                fromAmino(object: _88.MsgSubmitEvidenceAmino): _88.MsgSubmitEvidence;
                toAmino(message: _88.MsgSubmitEvidence): _88.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _88.MsgSubmitEvidenceAminoMsg): _88.MsgSubmitEvidence;
                toAminoMsg(message: _88.MsgSubmitEvidence): _88.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _88.MsgSubmitEvidenceProtoMsg): _88.MsgSubmitEvidence;
                toProto(message: _88.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _88.MsgSubmitEvidence): _88.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _88.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_88.MsgSubmitEvidenceResponse>): _88.MsgSubmitEvidenceResponse;
                fromAmino(object: _88.MsgSubmitEvidenceResponseAmino): _88.MsgSubmitEvidenceResponse;
                toAmino(message: _88.MsgSubmitEvidenceResponse): _88.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _88.MsgSubmitEvidenceResponseAminoMsg): _88.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _88.MsgSubmitEvidenceResponse): _88.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _88.MsgSubmitEvidenceResponseProtoMsg): _88.MsgSubmitEvidenceResponse;
                toProto(message: _88.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _88.MsgSubmitEvidenceResponse): _88.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _87.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryEvidenceRequest;
                fromPartial(object: Partial<_87.QueryEvidenceRequest>): _87.QueryEvidenceRequest;
                fromAmino(object: _87.QueryEvidenceRequestAmino): _87.QueryEvidenceRequest;
                toAmino(message: _87.QueryEvidenceRequest): _87.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _87.QueryEvidenceRequestAminoMsg): _87.QueryEvidenceRequest;
                toAminoMsg(message: _87.QueryEvidenceRequest): _87.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _87.QueryEvidenceRequestProtoMsg): _87.QueryEvidenceRequest;
                toProto(message: _87.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _87.QueryEvidenceRequest): _87.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _87.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryEvidenceResponse;
                fromPartial(object: Partial<_87.QueryEvidenceResponse>): _87.QueryEvidenceResponse;
                fromAmino(object: _87.QueryEvidenceResponseAmino): _87.QueryEvidenceResponse;
                toAmino(message: _87.QueryEvidenceResponse): _87.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _87.QueryEvidenceResponseAminoMsg): _87.QueryEvidenceResponse;
                toAminoMsg(message: _87.QueryEvidenceResponse): _87.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _87.QueryEvidenceResponseProtoMsg): _87.QueryEvidenceResponse;
                toProto(message: _87.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _87.QueryEvidenceResponse): _87.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _87.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_87.QueryAllEvidenceRequest>): _87.QueryAllEvidenceRequest;
                fromAmino(object: _87.QueryAllEvidenceRequestAmino): _87.QueryAllEvidenceRequest;
                toAmino(message: _87.QueryAllEvidenceRequest): _87.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _87.QueryAllEvidenceRequestAminoMsg): _87.QueryAllEvidenceRequest;
                toAminoMsg(message: _87.QueryAllEvidenceRequest): _87.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _87.QueryAllEvidenceRequestProtoMsg): _87.QueryAllEvidenceRequest;
                toProto(message: _87.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAllEvidenceRequest): _87.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _87.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_87.QueryAllEvidenceResponse>): _87.QueryAllEvidenceResponse;
                fromAmino(object: _87.QueryAllEvidenceResponseAmino): _87.QueryAllEvidenceResponse;
                toAmino(message: _87.QueryAllEvidenceResponse): _87.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _87.QueryAllEvidenceResponseAminoMsg): _87.QueryAllEvidenceResponse;
                toAminoMsg(message: _87.QueryAllEvidenceResponse): _87.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _87.QueryAllEvidenceResponseProtoMsg): _87.QueryAllEvidenceResponse;
                toProto(message: _87.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _87.QueryAllEvidenceResponse): _87.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GenesisState;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _85.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.Equivocation;
                fromPartial(object: Partial<_85.Equivocation>): _85.Equivocation;
                fromAmino(object: _85.EquivocationAmino): _85.Equivocation;
                toAmino(message: _85.Equivocation): _85.EquivocationAmino;
                fromAminoMsg(object: _85.EquivocationAminoMsg): _85.Equivocation;
                toAminoMsg(message: _85.Equivocation): _85.EquivocationAminoMsg;
                fromProtoMsg(message: _85.EquivocationProtoMsg): _85.Equivocation;
                toProto(message: _85.Equivocation): Uint8Array;
                toProtoMsg(message: _85.Equivocation): _85.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _91.QueryAllowanceRequest): Promise<_91.QueryAllowanceResponse>;
                allowances(request: _91.QueryAllowancesRequest): Promise<_91.QueryAllowancesResponse>;
                allowancesByGranter(request: _91.QueryAllowancesByGranterRequest): Promise<_91.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _92.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _92.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _92.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _92.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _92.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _92.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _92.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _92.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _92.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _92.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _92.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _92.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _92.MsgGrantAllowance) => _92.MsgGrantAllowanceAmino;
                    fromAmino: (object: _92.MsgGrantAllowanceAmino) => _92.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _92.MsgRevokeAllowance) => _92.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _92.MsgRevokeAllowanceAmino) => _92.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _92.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgGrantAllowance;
                fromPartial(object: Partial<_92.MsgGrantAllowance>): _92.MsgGrantAllowance;
                fromAmino(object: _92.MsgGrantAllowanceAmino): _92.MsgGrantAllowance;
                toAmino(message: _92.MsgGrantAllowance): _92.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _92.MsgGrantAllowanceAminoMsg): _92.MsgGrantAllowance;
                toAminoMsg(message: _92.MsgGrantAllowance): _92.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _92.MsgGrantAllowanceProtoMsg): _92.MsgGrantAllowance;
                toProto(message: _92.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _92.MsgGrantAllowance): _92.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _92.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_92.MsgGrantAllowanceResponse>): _92.MsgGrantAllowanceResponse;
                fromAmino(_: _92.MsgGrantAllowanceResponseAmino): _92.MsgGrantAllowanceResponse;
                toAmino(_: _92.MsgGrantAllowanceResponse): _92.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _92.MsgGrantAllowanceResponseAminoMsg): _92.MsgGrantAllowanceResponse;
                toAminoMsg(message: _92.MsgGrantAllowanceResponse): _92.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _92.MsgGrantAllowanceResponseProtoMsg): _92.MsgGrantAllowanceResponse;
                toProto(message: _92.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _92.MsgGrantAllowanceResponse): _92.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _92.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MsgRevokeAllowance;
                fromPartial(object: Partial<_92.MsgRevokeAllowance>): _92.MsgRevokeAllowance;
                fromAmino(object: _92.MsgRevokeAllowanceAmino): _92.MsgRevokeAllowance;
                toAmino(message: _92.MsgRevokeAllowance): _92.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _92.MsgRevokeAllowanceAminoMsg): _92.MsgRevokeAllowance;
                toAminoMsg(message: _92.MsgRevokeAllowance): _92.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _92.MsgRevokeAllowanceProtoMsg): _92.MsgRevokeAllowance;
                toProto(message: _92.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _92.MsgRevokeAllowance): _92.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _92.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_92.MsgRevokeAllowanceResponse>): _92.MsgRevokeAllowanceResponse;
                fromAmino(_: _92.MsgRevokeAllowanceResponseAmino): _92.MsgRevokeAllowanceResponse;
                toAmino(_: _92.MsgRevokeAllowanceResponse): _92.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _92.MsgRevokeAllowanceResponseAminoMsg): _92.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _92.MsgRevokeAllowanceResponse): _92.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _92.MsgRevokeAllowanceResponseProtoMsg): _92.MsgRevokeAllowanceResponse;
                toProto(message: _92.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _92.MsgRevokeAllowanceResponse): _92.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _89.BasicAllowance | _89.PeriodicAllowance | _89.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _91.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryAllowanceRequest;
                fromPartial(object: Partial<_91.QueryAllowanceRequest>): _91.QueryAllowanceRequest;
                fromAmino(object: _91.QueryAllowanceRequestAmino): _91.QueryAllowanceRequest;
                toAmino(message: _91.QueryAllowanceRequest): _91.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _91.QueryAllowanceRequestAminoMsg): _91.QueryAllowanceRequest;
                toAminoMsg(message: _91.QueryAllowanceRequest): _91.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _91.QueryAllowanceRequestProtoMsg): _91.QueryAllowanceRequest;
                toProto(message: _91.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAllowanceRequest): _91.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _91.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryAllowanceResponse;
                fromPartial(object: Partial<_91.QueryAllowanceResponse>): _91.QueryAllowanceResponse;
                fromAmino(object: _91.QueryAllowanceResponseAmino): _91.QueryAllowanceResponse;
                toAmino(message: _91.QueryAllowanceResponse): _91.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _91.QueryAllowanceResponseAminoMsg): _91.QueryAllowanceResponse;
                toAminoMsg(message: _91.QueryAllowanceResponse): _91.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _91.QueryAllowanceResponseProtoMsg): _91.QueryAllowanceResponse;
                toProto(message: _91.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAllowanceResponse): _91.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _91.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryAllowancesRequest;
                fromPartial(object: Partial<_91.QueryAllowancesRequest>): _91.QueryAllowancesRequest;
                fromAmino(object: _91.QueryAllowancesRequestAmino): _91.QueryAllowancesRequest;
                toAmino(message: _91.QueryAllowancesRequest): _91.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _91.QueryAllowancesRequestAminoMsg): _91.QueryAllowancesRequest;
                toAminoMsg(message: _91.QueryAllowancesRequest): _91.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _91.QueryAllowancesRequestProtoMsg): _91.QueryAllowancesRequest;
                toProto(message: _91.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAllowancesRequest): _91.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _91.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryAllowancesResponse;
                fromPartial(object: Partial<_91.QueryAllowancesResponse>): _91.QueryAllowancesResponse;
                fromAmino(object: _91.QueryAllowancesResponseAmino): _91.QueryAllowancesResponse;
                toAmino(message: _91.QueryAllowancesResponse): _91.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _91.QueryAllowancesResponseAminoMsg): _91.QueryAllowancesResponse;
                toAminoMsg(message: _91.QueryAllowancesResponse): _91.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _91.QueryAllowancesResponseProtoMsg): _91.QueryAllowancesResponse;
                toProto(message: _91.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAllowancesResponse): _91.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _91.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_91.QueryAllowancesByGranterRequest>): _91.QueryAllowancesByGranterRequest;
                fromAmino(object: _91.QueryAllowancesByGranterRequestAmino): _91.QueryAllowancesByGranterRequest;
                toAmino(message: _91.QueryAllowancesByGranterRequest): _91.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _91.QueryAllowancesByGranterRequestAminoMsg): _91.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _91.QueryAllowancesByGranterRequest): _91.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _91.QueryAllowancesByGranterRequestProtoMsg): _91.QueryAllowancesByGranterRequest;
                toProto(message: _91.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAllowancesByGranterRequest): _91.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _91.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_91.QueryAllowancesByGranterResponse>): _91.QueryAllowancesByGranterResponse;
                fromAmino(object: _91.QueryAllowancesByGranterResponseAmino): _91.QueryAllowancesByGranterResponse;
                toAmino(message: _91.QueryAllowancesByGranterResponse): _91.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _91.QueryAllowancesByGranterResponseAminoMsg): _91.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _91.QueryAllowancesByGranterResponse): _91.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _91.QueryAllowancesByGranterResponseProtoMsg): _91.QueryAllowancesByGranterResponse;
                toProto(message: _91.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAllowancesByGranterResponse): _91.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _90.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.GenesisState;
                fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
                fromAmino(object: _90.GenesisStateAmino): _90.GenesisState;
                toAmino(message: _90.GenesisState): _90.GenesisStateAmino;
                fromAminoMsg(object: _90.GenesisStateAminoMsg): _90.GenesisState;
                toAminoMsg(message: _90.GenesisState): _90.GenesisStateAminoMsg;
                fromProtoMsg(message: _90.GenesisStateProtoMsg): _90.GenesisState;
                toProto(message: _90.GenesisState): Uint8Array;
                toProtoMsg(message: _90.GenesisState): _90.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _89.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.BasicAllowance;
                fromPartial(object: Partial<_89.BasicAllowance>): _89.BasicAllowance;
                fromAmino(object: _89.BasicAllowanceAmino): _89.BasicAllowance;
                toAmino(message: _89.BasicAllowance): _89.BasicAllowanceAmino;
                fromAminoMsg(object: _89.BasicAllowanceAminoMsg): _89.BasicAllowance;
                toAminoMsg(message: _89.BasicAllowance): _89.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _89.BasicAllowanceProtoMsg): _89.BasicAllowance;
                toProto(message: _89.BasicAllowance): Uint8Array;
                toProtoMsg(message: _89.BasicAllowance): _89.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _89.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.PeriodicAllowance;
                fromPartial(object: Partial<_89.PeriodicAllowance>): _89.PeriodicAllowance;
                fromAmino(object: _89.PeriodicAllowanceAmino): _89.PeriodicAllowance;
                toAmino(message: _89.PeriodicAllowance): _89.PeriodicAllowanceAmino;
                fromAminoMsg(object: _89.PeriodicAllowanceAminoMsg): _89.PeriodicAllowance;
                toAminoMsg(message: _89.PeriodicAllowance): _89.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _89.PeriodicAllowanceProtoMsg): _89.PeriodicAllowance;
                toProto(message: _89.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _89.PeriodicAllowance): _89.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _89.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.AllowedMsgAllowance;
                fromPartial(object: Partial<_89.AllowedMsgAllowance>): _89.AllowedMsgAllowance;
                fromAmino(object: _89.AllowedMsgAllowanceAmino): _89.AllowedMsgAllowance;
                toAmino(message: _89.AllowedMsgAllowance): _89.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _89.AllowedMsgAllowanceAminoMsg): _89.AllowedMsgAllowance;
                toAminoMsg(message: _89.AllowedMsgAllowance): _89.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _89.AllowedMsgAllowanceProtoMsg): _89.AllowedMsgAllowance;
                toProto(message: _89.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _89.AllowedMsgAllowance): _89.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _89.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.Grant;
                fromPartial(object: Partial<_89.Grant>): _89.Grant;
                fromAmino(object: _89.GrantAmino): _89.Grant;
                toAmino(message: _89.Grant): _89.GrantAmino;
                fromAminoMsg(object: _89.GrantAminoMsg): _89.Grant;
                toAminoMsg(message: _89.Grant): _89.GrantAminoMsg;
                fromProtoMsg(message: _89.GrantProtoMsg): _89.Grant;
                toProto(message: _89.Grant): Uint8Array;
                toProtoMsg(message: _89.Grant): _89.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _93.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
                fromAmino(object: _93.GenesisStateAmino): _93.GenesisState;
                toAmino(message: _93.GenesisState): _93.GenesisStateAmino;
                fromAminoMsg(object: _93.GenesisStateAminoMsg): _93.GenesisState;
                toAminoMsg(message: _93.GenesisState): _93.GenesisStateAminoMsg;
                fromProtoMsg(message: _93.GenesisStateProtoMsg): _93.GenesisState;
                toProto(message: _93.GenesisState): Uint8Array;
                toProtoMsg(message: _93.GenesisState): _93.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _96.QueryProposalRequest): Promise<_96.QueryProposalResponse>;
                proposals(request: _96.QueryProposalsRequest): Promise<_96.QueryProposalsResponse>;
                vote(request: _96.QueryVoteRequest): Promise<_96.QueryVoteResponse>;
                votes(request: _96.QueryVotesRequest): Promise<_96.QueryVotesResponse>;
                params(request: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
                deposit(request: _96.QueryDepositRequest): Promise<_96.QueryDepositResponse>;
                deposits(request: _96.QueryDepositsRequest): Promise<_96.QueryDepositsResponse>;
                tallyResult(request: _96.QueryTallyResultRequest): Promise<_96.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _97.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _97.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _97.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _97.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _97.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _97.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _97.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _97.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _97.MsgExecLegacyContent;
                    };
                    vote(value: _97.MsgVote): {
                        typeUrl: string;
                        value: _97.MsgVote;
                    };
                    voteWeighted(value: _97.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _97.MsgVoteWeighted;
                    };
                    deposit(value: _97.MsgDeposit): {
                        typeUrl: string;
                        value: _97.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _97.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _97.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _97.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _97.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _97.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _97.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _97.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _97.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _97.MsgExecLegacyContent;
                    };
                    vote(value: _97.MsgVote): {
                        typeUrl: string;
                        value: _97.MsgVote;
                    };
                    voteWeighted(value: _97.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _97.MsgVoteWeighted;
                    };
                    deposit(value: _97.MsgDeposit): {
                        typeUrl: string;
                        value: _97.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _97.MsgSubmitProposal) => _97.MsgSubmitProposalAmino;
                    fromAmino: (object: _97.MsgSubmitProposalAmino) => _97.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _97.MsgExecLegacyContent) => _97.MsgExecLegacyContentAmino;
                    fromAmino: (object: _97.MsgExecLegacyContentAmino) => _97.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _97.MsgVote) => _97.MsgVoteAmino;
                    fromAmino: (object: _97.MsgVoteAmino) => _97.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _97.MsgVoteWeighted) => _97.MsgVoteWeightedAmino;
                    fromAmino: (object: _97.MsgVoteWeightedAmino) => _97.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _97.MsgDeposit) => _97.MsgDepositAmino;
                    fromAmino: (object: _97.MsgDepositAmino) => _97.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _97.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgSubmitProposal;
                fromPartial(object: Partial<_97.MsgSubmitProposal>): _97.MsgSubmitProposal;
                fromAmino(object: _97.MsgSubmitProposalAmino): _97.MsgSubmitProposal;
                toAmino(message: _97.MsgSubmitProposal): _97.MsgSubmitProposalAmino;
                fromAminoMsg(object: _97.MsgSubmitProposalAminoMsg): _97.MsgSubmitProposal;
                toAminoMsg(message: _97.MsgSubmitProposal): _97.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _97.MsgSubmitProposalProtoMsg): _97.MsgSubmitProposal;
                toProto(message: _97.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _97.MsgSubmitProposal): _97.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _97.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_97.MsgSubmitProposalResponse>): _97.MsgSubmitProposalResponse;
                fromAmino(object: _97.MsgSubmitProposalResponseAmino): _97.MsgSubmitProposalResponse;
                toAmino(message: _97.MsgSubmitProposalResponse): _97.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _97.MsgSubmitProposalResponseAminoMsg): _97.MsgSubmitProposalResponse;
                toAminoMsg(message: _97.MsgSubmitProposalResponse): _97.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _97.MsgSubmitProposalResponseProtoMsg): _97.MsgSubmitProposalResponse;
                toProto(message: _97.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _97.MsgSubmitProposalResponse): _97.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _97.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgExecLegacyContent;
                fromPartial(object: Partial<_97.MsgExecLegacyContent>): _97.MsgExecLegacyContent;
                fromAmino(object: _97.MsgExecLegacyContentAmino): _97.MsgExecLegacyContent;
                toAmino(message: _97.MsgExecLegacyContent): _97.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _97.MsgExecLegacyContentAminoMsg): _97.MsgExecLegacyContent;
                toAminoMsg(message: _97.MsgExecLegacyContent): _97.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _97.MsgExecLegacyContentProtoMsg): _97.MsgExecLegacyContent;
                toProto(message: _97.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _97.MsgExecLegacyContent): _97.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _97.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_97.MsgExecLegacyContentResponse>): _97.MsgExecLegacyContentResponse;
                fromAmino(_: _97.MsgExecLegacyContentResponseAmino): _97.MsgExecLegacyContentResponse;
                toAmino(_: _97.MsgExecLegacyContentResponse): _97.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _97.MsgExecLegacyContentResponseAminoMsg): _97.MsgExecLegacyContentResponse;
                toAminoMsg(message: _97.MsgExecLegacyContentResponse): _97.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _97.MsgExecLegacyContentResponseProtoMsg): _97.MsgExecLegacyContentResponse;
                toProto(message: _97.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _97.MsgExecLegacyContentResponse): _97.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _97.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgVote;
                fromPartial(object: Partial<_97.MsgVote>): _97.MsgVote;
                fromAmino(object: _97.MsgVoteAmino): _97.MsgVote;
                toAmino(message: _97.MsgVote): _97.MsgVoteAmino;
                fromAminoMsg(object: _97.MsgVoteAminoMsg): _97.MsgVote;
                toAminoMsg(message: _97.MsgVote): _97.MsgVoteAminoMsg;
                fromProtoMsg(message: _97.MsgVoteProtoMsg): _97.MsgVote;
                toProto(message: _97.MsgVote): Uint8Array;
                toProtoMsg(message: _97.MsgVote): _97.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _97.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.MsgVoteResponse;
                fromPartial(_: Partial<_97.MsgVoteResponse>): _97.MsgVoteResponse;
                fromAmino(_: _97.MsgVoteResponseAmino): _97.MsgVoteResponse;
                toAmino(_: _97.MsgVoteResponse): _97.MsgVoteResponseAmino;
                fromAminoMsg(object: _97.MsgVoteResponseAminoMsg): _97.MsgVoteResponse;
                toAminoMsg(message: _97.MsgVoteResponse): _97.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _97.MsgVoteResponseProtoMsg): _97.MsgVoteResponse;
                toProto(message: _97.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _97.MsgVoteResponse): _97.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _97.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgVoteWeighted;
                fromPartial(object: Partial<_97.MsgVoteWeighted>): _97.MsgVoteWeighted;
                fromAmino(object: _97.MsgVoteWeightedAmino): _97.MsgVoteWeighted;
                toAmino(message: _97.MsgVoteWeighted): _97.MsgVoteWeightedAmino;
                fromAminoMsg(object: _97.MsgVoteWeightedAminoMsg): _97.MsgVoteWeighted;
                toAminoMsg(message: _97.MsgVoteWeighted): _97.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _97.MsgVoteWeightedProtoMsg): _97.MsgVoteWeighted;
                toProto(message: _97.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _97.MsgVoteWeighted): _97.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _97.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_97.MsgVoteWeightedResponse>): _97.MsgVoteWeightedResponse;
                fromAmino(_: _97.MsgVoteWeightedResponseAmino): _97.MsgVoteWeightedResponse;
                toAmino(_: _97.MsgVoteWeightedResponse): _97.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _97.MsgVoteWeightedResponseAminoMsg): _97.MsgVoteWeightedResponse;
                toAminoMsg(message: _97.MsgVoteWeightedResponse): _97.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _97.MsgVoteWeightedResponseProtoMsg): _97.MsgVoteWeightedResponse;
                toProto(message: _97.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _97.MsgVoteWeightedResponse): _97.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _97.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgDeposit;
                fromPartial(object: Partial<_97.MsgDeposit>): _97.MsgDeposit;
                fromAmino(object: _97.MsgDepositAmino): _97.MsgDeposit;
                toAmino(message: _97.MsgDeposit): _97.MsgDepositAmino;
                fromAminoMsg(object: _97.MsgDepositAminoMsg): _97.MsgDeposit;
                toAminoMsg(message: _97.MsgDeposit): _97.MsgDepositAminoMsg;
                fromProtoMsg(message: _97.MsgDepositProtoMsg): _97.MsgDeposit;
                toProto(message: _97.MsgDeposit): Uint8Array;
                toProtoMsg(message: _97.MsgDeposit): _97.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _97.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.MsgDepositResponse;
                fromPartial(_: Partial<_97.MsgDepositResponse>): _97.MsgDepositResponse;
                fromAmino(_: _97.MsgDepositResponseAmino): _97.MsgDepositResponse;
                toAmino(_: _97.MsgDepositResponse): _97.MsgDepositResponseAmino;
                fromAminoMsg(object: _97.MsgDepositResponseAminoMsg): _97.MsgDepositResponse;
                toAminoMsg(message: _97.MsgDepositResponse): _97.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _97.MsgDepositResponseProtoMsg): _97.MsgDepositResponse;
                toProto(message: _97.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _97.MsgDepositResponse): _97.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _99.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _96.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryProposalRequest;
                fromPartial(object: Partial<_96.QueryProposalRequest>): _96.QueryProposalRequest;
                fromAmino(object: _96.QueryProposalRequestAmino): _96.QueryProposalRequest;
                toAmino(message: _96.QueryProposalRequest): _96.QueryProposalRequestAmino;
                fromAminoMsg(object: _96.QueryProposalRequestAminoMsg): _96.QueryProposalRequest;
                toAminoMsg(message: _96.QueryProposalRequest): _96.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _96.QueryProposalRequestProtoMsg): _96.QueryProposalRequest;
                toProto(message: _96.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _96.QueryProposalRequest): _96.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _96.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryProposalResponse;
                fromPartial(object: Partial<_96.QueryProposalResponse>): _96.QueryProposalResponse;
                fromAmino(object: _96.QueryProposalResponseAmino): _96.QueryProposalResponse;
                toAmino(message: _96.QueryProposalResponse): _96.QueryProposalResponseAmino;
                fromAminoMsg(object: _96.QueryProposalResponseAminoMsg): _96.QueryProposalResponse;
                toAminoMsg(message: _96.QueryProposalResponse): _96.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _96.QueryProposalResponseProtoMsg): _96.QueryProposalResponse;
                toProto(message: _96.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _96.QueryProposalResponse): _96.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _96.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryProposalsRequest;
                fromPartial(object: Partial<_96.QueryProposalsRequest>): _96.QueryProposalsRequest;
                fromAmino(object: _96.QueryProposalsRequestAmino): _96.QueryProposalsRequest;
                toAmino(message: _96.QueryProposalsRequest): _96.QueryProposalsRequestAmino;
                fromAminoMsg(object: _96.QueryProposalsRequestAminoMsg): _96.QueryProposalsRequest;
                toAminoMsg(message: _96.QueryProposalsRequest): _96.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _96.QueryProposalsRequestProtoMsg): _96.QueryProposalsRequest;
                toProto(message: _96.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _96.QueryProposalsRequest): _96.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _96.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryProposalsResponse;
                fromPartial(object: Partial<_96.QueryProposalsResponse>): _96.QueryProposalsResponse;
                fromAmino(object: _96.QueryProposalsResponseAmino): _96.QueryProposalsResponse;
                toAmino(message: _96.QueryProposalsResponse): _96.QueryProposalsResponseAmino;
                fromAminoMsg(object: _96.QueryProposalsResponseAminoMsg): _96.QueryProposalsResponse;
                toAminoMsg(message: _96.QueryProposalsResponse): _96.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _96.QueryProposalsResponseProtoMsg): _96.QueryProposalsResponse;
                toProto(message: _96.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _96.QueryProposalsResponse): _96.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _96.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryVoteRequest;
                fromPartial(object: Partial<_96.QueryVoteRequest>): _96.QueryVoteRequest;
                fromAmino(object: _96.QueryVoteRequestAmino): _96.QueryVoteRequest;
                toAmino(message: _96.QueryVoteRequest): _96.QueryVoteRequestAmino;
                fromAminoMsg(object: _96.QueryVoteRequestAminoMsg): _96.QueryVoteRequest;
                toAminoMsg(message: _96.QueryVoteRequest): _96.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _96.QueryVoteRequestProtoMsg): _96.QueryVoteRequest;
                toProto(message: _96.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _96.QueryVoteRequest): _96.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _96.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryVoteResponse;
                fromPartial(object: Partial<_96.QueryVoteResponse>): _96.QueryVoteResponse;
                fromAmino(object: _96.QueryVoteResponseAmino): _96.QueryVoteResponse;
                toAmino(message: _96.QueryVoteResponse): _96.QueryVoteResponseAmino;
                fromAminoMsg(object: _96.QueryVoteResponseAminoMsg): _96.QueryVoteResponse;
                toAminoMsg(message: _96.QueryVoteResponse): _96.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _96.QueryVoteResponseProtoMsg): _96.QueryVoteResponse;
                toProto(message: _96.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _96.QueryVoteResponse): _96.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _96.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryVotesRequest;
                fromPartial(object: Partial<_96.QueryVotesRequest>): _96.QueryVotesRequest;
                fromAmino(object: _96.QueryVotesRequestAmino): _96.QueryVotesRequest;
                toAmino(message: _96.QueryVotesRequest): _96.QueryVotesRequestAmino;
                fromAminoMsg(object: _96.QueryVotesRequestAminoMsg): _96.QueryVotesRequest;
                toAminoMsg(message: _96.QueryVotesRequest): _96.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _96.QueryVotesRequestProtoMsg): _96.QueryVotesRequest;
                toProto(message: _96.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _96.QueryVotesRequest): _96.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _96.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryVotesResponse;
                fromPartial(object: Partial<_96.QueryVotesResponse>): _96.QueryVotesResponse;
                fromAmino(object: _96.QueryVotesResponseAmino): _96.QueryVotesResponse;
                toAmino(message: _96.QueryVotesResponse): _96.QueryVotesResponseAmino;
                fromAminoMsg(object: _96.QueryVotesResponseAminoMsg): _96.QueryVotesResponse;
                toAminoMsg(message: _96.QueryVotesResponse): _96.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _96.QueryVotesResponseProtoMsg): _96.QueryVotesResponse;
                toProto(message: _96.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _96.QueryVotesResponse): _96.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _96.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryParamsRequest;
                fromPartial(object: Partial<_96.QueryParamsRequest>): _96.QueryParamsRequest;
                fromAmino(object: _96.QueryParamsRequestAmino): _96.QueryParamsRequest;
                toAmino(message: _96.QueryParamsRequest): _96.QueryParamsRequestAmino;
                fromAminoMsg(object: _96.QueryParamsRequestAminoMsg): _96.QueryParamsRequest;
                toAminoMsg(message: _96.QueryParamsRequest): _96.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _96.QueryParamsRequestProtoMsg): _96.QueryParamsRequest;
                toProto(message: _96.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _96.QueryParamsRequest): _96.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _96.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryParamsResponse;
                fromPartial(object: Partial<_96.QueryParamsResponse>): _96.QueryParamsResponse;
                fromAmino(object: _96.QueryParamsResponseAmino): _96.QueryParamsResponse;
                toAmino(message: _96.QueryParamsResponse): _96.QueryParamsResponseAmino;
                fromAminoMsg(object: _96.QueryParamsResponseAminoMsg): _96.QueryParamsResponse;
                toAminoMsg(message: _96.QueryParamsResponse): _96.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _96.QueryParamsResponseProtoMsg): _96.QueryParamsResponse;
                toProto(message: _96.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _96.QueryParamsResponse): _96.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _96.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryDepositRequest;
                fromPartial(object: Partial<_96.QueryDepositRequest>): _96.QueryDepositRequest;
                fromAmino(object: _96.QueryDepositRequestAmino): _96.QueryDepositRequest;
                toAmino(message: _96.QueryDepositRequest): _96.QueryDepositRequestAmino;
                fromAminoMsg(object: _96.QueryDepositRequestAminoMsg): _96.QueryDepositRequest;
                toAminoMsg(message: _96.QueryDepositRequest): _96.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _96.QueryDepositRequestProtoMsg): _96.QueryDepositRequest;
                toProto(message: _96.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _96.QueryDepositRequest): _96.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _96.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryDepositResponse;
                fromPartial(object: Partial<_96.QueryDepositResponse>): _96.QueryDepositResponse;
                fromAmino(object: _96.QueryDepositResponseAmino): _96.QueryDepositResponse;
                toAmino(message: _96.QueryDepositResponse): _96.QueryDepositResponseAmino;
                fromAminoMsg(object: _96.QueryDepositResponseAminoMsg): _96.QueryDepositResponse;
                toAminoMsg(message: _96.QueryDepositResponse): _96.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _96.QueryDepositResponseProtoMsg): _96.QueryDepositResponse;
                toProto(message: _96.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _96.QueryDepositResponse): _96.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _96.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryDepositsRequest;
                fromPartial(object: Partial<_96.QueryDepositsRequest>): _96.QueryDepositsRequest;
                fromAmino(object: _96.QueryDepositsRequestAmino): _96.QueryDepositsRequest;
                toAmino(message: _96.QueryDepositsRequest): _96.QueryDepositsRequestAmino;
                fromAminoMsg(object: _96.QueryDepositsRequestAminoMsg): _96.QueryDepositsRequest;
                toAminoMsg(message: _96.QueryDepositsRequest): _96.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _96.QueryDepositsRequestProtoMsg): _96.QueryDepositsRequest;
                toProto(message: _96.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _96.QueryDepositsRequest): _96.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _96.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryDepositsResponse;
                fromPartial(object: Partial<_96.QueryDepositsResponse>): _96.QueryDepositsResponse;
                fromAmino(object: _96.QueryDepositsResponseAmino): _96.QueryDepositsResponse;
                toAmino(message: _96.QueryDepositsResponse): _96.QueryDepositsResponseAmino;
                fromAminoMsg(object: _96.QueryDepositsResponseAminoMsg): _96.QueryDepositsResponse;
                toAminoMsg(message: _96.QueryDepositsResponse): _96.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _96.QueryDepositsResponseProtoMsg): _96.QueryDepositsResponse;
                toProto(message: _96.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _96.QueryDepositsResponse): _96.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _96.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryTallyResultRequest;
                fromPartial(object: Partial<_96.QueryTallyResultRequest>): _96.QueryTallyResultRequest;
                fromAmino(object: _96.QueryTallyResultRequestAmino): _96.QueryTallyResultRequest;
                toAmino(message: _96.QueryTallyResultRequest): _96.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _96.QueryTallyResultRequestAminoMsg): _96.QueryTallyResultRequest;
                toAminoMsg(message: _96.QueryTallyResultRequest): _96.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _96.QueryTallyResultRequestProtoMsg): _96.QueryTallyResultRequest;
                toProto(message: _96.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _96.QueryTallyResultRequest): _96.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _96.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryTallyResultResponse;
                fromPartial(object: Partial<_96.QueryTallyResultResponse>): _96.QueryTallyResultResponse;
                fromAmino(object: _96.QueryTallyResultResponseAmino): _96.QueryTallyResultResponse;
                toAmino(message: _96.QueryTallyResultResponse): _96.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _96.QueryTallyResultResponseAminoMsg): _96.QueryTallyResultResponse;
                toAminoMsg(message: _96.QueryTallyResultResponse): _96.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _96.QueryTallyResultResponseProtoMsg): _96.QueryTallyResultResponse;
                toProto(message: _96.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _96.QueryTallyResultResponse): _96.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _95.VoteOption;
            voteOptionToJSON(object: _95.VoteOption): string;
            proposalStatusFromJSON(object: any): _95.ProposalStatus;
            proposalStatusToJSON(object: _95.ProposalStatus): string;
            VoteOption: typeof _95.VoteOption;
            VoteOptionSDKType: typeof _95.VoteOption;
            VoteOptionAmino: typeof _95.VoteOption;
            ProposalStatus: typeof _95.ProposalStatus;
            ProposalStatusSDKType: typeof _95.ProposalStatus;
            ProposalStatusAmino: typeof _95.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _95.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.WeightedVoteOption;
                fromPartial(object: Partial<_95.WeightedVoteOption>): _95.WeightedVoteOption;
                fromAmino(object: _95.WeightedVoteOptionAmino): _95.WeightedVoteOption;
                toAmino(message: _95.WeightedVoteOption): _95.WeightedVoteOptionAmino;
                fromAminoMsg(object: _95.WeightedVoteOptionAminoMsg): _95.WeightedVoteOption;
                toAminoMsg(message: _95.WeightedVoteOption): _95.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _95.WeightedVoteOptionProtoMsg): _95.WeightedVoteOption;
                toProto(message: _95.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _95.WeightedVoteOption): _95.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _95.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Deposit;
                fromPartial(object: Partial<_95.Deposit>): _95.Deposit;
                fromAmino(object: _95.DepositAmino): _95.Deposit;
                toAmino(message: _95.Deposit): _95.DepositAmino;
                fromAminoMsg(object: _95.DepositAminoMsg): _95.Deposit;
                toAminoMsg(message: _95.Deposit): _95.DepositAminoMsg;
                fromProtoMsg(message: _95.DepositProtoMsg): _95.Deposit;
                toProto(message: _95.Deposit): Uint8Array;
                toProtoMsg(message: _95.Deposit): _95.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _95.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Proposal;
                fromPartial(object: Partial<_95.Proposal>): _95.Proposal;
                fromAmino(object: _95.ProposalAmino): _95.Proposal;
                toAmino(message: _95.Proposal): _95.ProposalAmino;
                fromAminoMsg(object: _95.ProposalAminoMsg): _95.Proposal;
                toAminoMsg(message: _95.Proposal): _95.ProposalAminoMsg;
                fromProtoMsg(message: _95.ProposalProtoMsg): _95.Proposal;
                toProto(message: _95.Proposal): Uint8Array;
                toProtoMsg(message: _95.Proposal): _95.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _95.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.TallyResult;
                fromPartial(object: Partial<_95.TallyResult>): _95.TallyResult;
                fromAmino(object: _95.TallyResultAmino): _95.TallyResult;
                toAmino(message: _95.TallyResult): _95.TallyResultAmino;
                fromAminoMsg(object: _95.TallyResultAminoMsg): _95.TallyResult;
                toAminoMsg(message: _95.TallyResult): _95.TallyResultAminoMsg;
                fromProtoMsg(message: _95.TallyResultProtoMsg): _95.TallyResult;
                toProto(message: _95.TallyResult): Uint8Array;
                toProtoMsg(message: _95.TallyResult): _95.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _95.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Vote;
                fromPartial(object: Partial<_95.Vote>): _95.Vote;
                fromAmino(object: _95.VoteAmino): _95.Vote;
                toAmino(message: _95.Vote): _95.VoteAmino;
                fromAminoMsg(object: _95.VoteAminoMsg): _95.Vote;
                toAminoMsg(message: _95.Vote): _95.VoteAminoMsg;
                fromProtoMsg(message: _95.VoteProtoMsg): _95.Vote;
                toProto(message: _95.Vote): Uint8Array;
                toProtoMsg(message: _95.Vote): _95.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _95.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.DepositParams;
                fromPartial(object: Partial<_95.DepositParams>): _95.DepositParams;
                fromAmino(object: _95.DepositParamsAmino): _95.DepositParams;
                toAmino(message: _95.DepositParams): _95.DepositParamsAmino;
                fromAminoMsg(object: _95.DepositParamsAminoMsg): _95.DepositParams;
                toAminoMsg(message: _95.DepositParams): _95.DepositParamsAminoMsg;
                fromProtoMsg(message: _95.DepositParamsProtoMsg): _95.DepositParams;
                toProto(message: _95.DepositParams): Uint8Array;
                toProtoMsg(message: _95.DepositParams): _95.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _95.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.VotingParams;
                fromPartial(object: Partial<_95.VotingParams>): _95.VotingParams;
                fromAmino(object: _95.VotingParamsAmino): _95.VotingParams;
                toAmino(message: _95.VotingParams): _95.VotingParamsAmino;
                fromAminoMsg(object: _95.VotingParamsAminoMsg): _95.VotingParams;
                toAminoMsg(message: _95.VotingParams): _95.VotingParamsAminoMsg;
                fromProtoMsg(message: _95.VotingParamsProtoMsg): _95.VotingParams;
                toProto(message: _95.VotingParams): Uint8Array;
                toProtoMsg(message: _95.VotingParams): _95.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _95.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.TallyParams;
                fromPartial(object: Partial<_95.TallyParams>): _95.TallyParams;
                fromAmino(object: _95.TallyParamsAmino): _95.TallyParams;
                toAmino(message: _95.TallyParams): _95.TallyParamsAmino;
                fromAminoMsg(object: _95.TallyParamsAminoMsg): _95.TallyParams;
                toAminoMsg(message: _95.TallyParams): _95.TallyParamsAminoMsg;
                fromProtoMsg(message: _95.TallyParamsProtoMsg): _95.TallyParams;
                toProto(message: _95.TallyParams): Uint8Array;
                toProtoMsg(message: _95.TallyParams): _95.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _94.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.GenesisState;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
                fromAmino(object: _94.GenesisStateAmino): _94.GenesisState;
                toAmino(message: _94.GenesisState): _94.GenesisStateAmino;
                fromAminoMsg(object: _94.GenesisStateAminoMsg): _94.GenesisState;
                toAminoMsg(message: _94.GenesisState): _94.GenesisStateAminoMsg;
                fromProtoMsg(message: _94.GenesisStateProtoMsg): _94.GenesisState;
                toProto(message: _94.GenesisState): Uint8Array;
                toProtoMsg(message: _94.GenesisState): _94.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _100.QueryProposalRequest): Promise<_100.QueryProposalResponse>;
                proposals(request: _100.QueryProposalsRequest): Promise<_100.QueryProposalsResponse>;
                vote(request: _100.QueryVoteRequest): Promise<_100.QueryVoteResponse>;
                votes(request: _100.QueryVotesRequest): Promise<_100.QueryVotesResponse>;
                params(request: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                deposit(request: _100.QueryDepositRequest): Promise<_100.QueryDepositResponse>;
                deposits(request: _100.QueryDepositsRequest): Promise<_100.QueryDepositsResponse>;
                tallyResult(request: _100.QueryTallyResultRequest): Promise<_100.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _101.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _101.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _101.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _101.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _101.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _101.MsgSubmitProposal;
                    };
                    vote(value: _101.MsgVote): {
                        typeUrl: string;
                        value: _101.MsgVote;
                    };
                    voteWeighted(value: _101.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _101.MsgVoteWeighted;
                    };
                    deposit(value: _101.MsgDeposit): {
                        typeUrl: string;
                        value: _101.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _101.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _101.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _101.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _101.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _101.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _101.MsgSubmitProposal;
                    };
                    vote(value: _101.MsgVote): {
                        typeUrl: string;
                        value: _101.MsgVote;
                    };
                    voteWeighted(value: _101.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _101.MsgVoteWeighted;
                    };
                    deposit(value: _101.MsgDeposit): {
                        typeUrl: string;
                        value: _101.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _101.MsgSubmitProposal) => _101.MsgSubmitProposalAmino;
                    fromAmino: (object: _101.MsgSubmitProposalAmino) => _101.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _101.MsgVote) => _101.MsgVoteAmino;
                    fromAmino: (object: _101.MsgVoteAmino) => _101.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _101.MsgVoteWeighted) => _101.MsgVoteWeightedAmino;
                    fromAmino: (object: _101.MsgVoteWeightedAmino) => _101.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _101.MsgDeposit) => _101.MsgDepositAmino;
                    fromAmino: (object: _101.MsgDepositAmino) => _101.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _101.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgSubmitProposal;
                fromPartial(object: Partial<_101.MsgSubmitProposal>): _101.MsgSubmitProposal;
                fromAmino(object: _101.MsgSubmitProposalAmino): _101.MsgSubmitProposal;
                toAmino(message: _101.MsgSubmitProposal): _101.MsgSubmitProposalAmino;
                fromAminoMsg(object: _101.MsgSubmitProposalAminoMsg): _101.MsgSubmitProposal;
                toAminoMsg(message: _101.MsgSubmitProposal): _101.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _101.MsgSubmitProposalProtoMsg): _101.MsgSubmitProposal;
                toProto(message: _101.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _101.MsgSubmitProposal): _101.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _101.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_101.MsgSubmitProposalResponse>): _101.MsgSubmitProposalResponse;
                fromAmino(object: _101.MsgSubmitProposalResponseAmino): _101.MsgSubmitProposalResponse;
                toAmino(message: _101.MsgSubmitProposalResponse): _101.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _101.MsgSubmitProposalResponseAminoMsg): _101.MsgSubmitProposalResponse;
                toAminoMsg(message: _101.MsgSubmitProposalResponse): _101.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _101.MsgSubmitProposalResponseProtoMsg): _101.MsgSubmitProposalResponse;
                toProto(message: _101.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _101.MsgSubmitProposalResponse): _101.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _101.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgVote;
                fromPartial(object: Partial<_101.MsgVote>): _101.MsgVote;
                fromAmino(object: _101.MsgVoteAmino): _101.MsgVote;
                toAmino(message: _101.MsgVote): _101.MsgVoteAmino;
                fromAminoMsg(object: _101.MsgVoteAminoMsg): _101.MsgVote;
                toAminoMsg(message: _101.MsgVote): _101.MsgVoteAminoMsg;
                fromProtoMsg(message: _101.MsgVoteProtoMsg): _101.MsgVote;
                toProto(message: _101.MsgVote): Uint8Array;
                toProtoMsg(message: _101.MsgVote): _101.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _101.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgVoteResponse;
                fromPartial(_: Partial<_101.MsgVoteResponse>): _101.MsgVoteResponse;
                fromAmino(_: _101.MsgVoteResponseAmino): _101.MsgVoteResponse;
                toAmino(_: _101.MsgVoteResponse): _101.MsgVoteResponseAmino;
                fromAminoMsg(object: _101.MsgVoteResponseAminoMsg): _101.MsgVoteResponse;
                toAminoMsg(message: _101.MsgVoteResponse): _101.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _101.MsgVoteResponseProtoMsg): _101.MsgVoteResponse;
                toProto(message: _101.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _101.MsgVoteResponse): _101.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _101.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgVoteWeighted;
                fromPartial(object: Partial<_101.MsgVoteWeighted>): _101.MsgVoteWeighted;
                fromAmino(object: _101.MsgVoteWeightedAmino): _101.MsgVoteWeighted;
                toAmino(message: _101.MsgVoteWeighted): _101.MsgVoteWeightedAmino;
                fromAminoMsg(object: _101.MsgVoteWeightedAminoMsg): _101.MsgVoteWeighted;
                toAminoMsg(message: _101.MsgVoteWeighted): _101.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _101.MsgVoteWeightedProtoMsg): _101.MsgVoteWeighted;
                toProto(message: _101.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _101.MsgVoteWeighted): _101.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _101.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_101.MsgVoteWeightedResponse>): _101.MsgVoteWeightedResponse;
                fromAmino(_: _101.MsgVoteWeightedResponseAmino): _101.MsgVoteWeightedResponse;
                toAmino(_: _101.MsgVoteWeightedResponse): _101.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _101.MsgVoteWeightedResponseAminoMsg): _101.MsgVoteWeightedResponse;
                toAminoMsg(message: _101.MsgVoteWeightedResponse): _101.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _101.MsgVoteWeightedResponseProtoMsg): _101.MsgVoteWeightedResponse;
                toProto(message: _101.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _101.MsgVoteWeightedResponse): _101.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _101.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.MsgDeposit;
                fromPartial(object: Partial<_101.MsgDeposit>): _101.MsgDeposit;
                fromAmino(object: _101.MsgDepositAmino): _101.MsgDeposit;
                toAmino(message: _101.MsgDeposit): _101.MsgDepositAmino;
                fromAminoMsg(object: _101.MsgDepositAminoMsg): _101.MsgDeposit;
                toAminoMsg(message: _101.MsgDeposit): _101.MsgDepositAminoMsg;
                fromProtoMsg(message: _101.MsgDepositProtoMsg): _101.MsgDeposit;
                toProto(message: _101.MsgDeposit): Uint8Array;
                toProtoMsg(message: _101.MsgDeposit): _101.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _101.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _101.MsgDepositResponse;
                fromPartial(_: Partial<_101.MsgDepositResponse>): _101.MsgDepositResponse;
                fromAmino(_: _101.MsgDepositResponseAmino): _101.MsgDepositResponse;
                toAmino(_: _101.MsgDepositResponse): _101.MsgDepositResponseAmino;
                fromAminoMsg(object: _101.MsgDepositResponseAminoMsg): _101.MsgDepositResponse;
                toAminoMsg(message: _101.MsgDepositResponse): _101.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _101.MsgDepositResponseProtoMsg): _101.MsgDepositResponse;
                toProto(message: _101.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _101.MsgDepositResponse): _101.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _99.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _100.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryProposalRequest;
                fromPartial(object: Partial<_100.QueryProposalRequest>): _100.QueryProposalRequest;
                fromAmino(object: _100.QueryProposalRequestAmino): _100.QueryProposalRequest;
                toAmino(message: _100.QueryProposalRequest): _100.QueryProposalRequestAmino;
                fromAminoMsg(object: _100.QueryProposalRequestAminoMsg): _100.QueryProposalRequest;
                toAminoMsg(message: _100.QueryProposalRequest): _100.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _100.QueryProposalRequestProtoMsg): _100.QueryProposalRequest;
                toProto(message: _100.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _100.QueryProposalRequest): _100.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _100.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryProposalResponse;
                fromPartial(object: Partial<_100.QueryProposalResponse>): _100.QueryProposalResponse;
                fromAmino(object: _100.QueryProposalResponseAmino): _100.QueryProposalResponse;
                toAmino(message: _100.QueryProposalResponse): _100.QueryProposalResponseAmino;
                fromAminoMsg(object: _100.QueryProposalResponseAminoMsg): _100.QueryProposalResponse;
                toAminoMsg(message: _100.QueryProposalResponse): _100.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _100.QueryProposalResponseProtoMsg): _100.QueryProposalResponse;
                toProto(message: _100.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _100.QueryProposalResponse): _100.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _100.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryProposalsRequest;
                fromPartial(object: Partial<_100.QueryProposalsRequest>): _100.QueryProposalsRequest;
                fromAmino(object: _100.QueryProposalsRequestAmino): _100.QueryProposalsRequest;
                toAmino(message: _100.QueryProposalsRequest): _100.QueryProposalsRequestAmino;
                fromAminoMsg(object: _100.QueryProposalsRequestAminoMsg): _100.QueryProposalsRequest;
                toAminoMsg(message: _100.QueryProposalsRequest): _100.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryProposalsRequestProtoMsg): _100.QueryProposalsRequest;
                toProto(message: _100.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryProposalsRequest): _100.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _100.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryProposalsResponse;
                fromPartial(object: Partial<_100.QueryProposalsResponse>): _100.QueryProposalsResponse;
                fromAmino(object: _100.QueryProposalsResponseAmino): _100.QueryProposalsResponse;
                toAmino(message: _100.QueryProposalsResponse): _100.QueryProposalsResponseAmino;
                fromAminoMsg(object: _100.QueryProposalsResponseAminoMsg): _100.QueryProposalsResponse;
                toAminoMsg(message: _100.QueryProposalsResponse): _100.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryProposalsResponseProtoMsg): _100.QueryProposalsResponse;
                toProto(message: _100.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryProposalsResponse): _100.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _100.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryVoteRequest;
                fromPartial(object: Partial<_100.QueryVoteRequest>): _100.QueryVoteRequest;
                fromAmino(object: _100.QueryVoteRequestAmino): _100.QueryVoteRequest;
                toAmino(message: _100.QueryVoteRequest): _100.QueryVoteRequestAmino;
                fromAminoMsg(object: _100.QueryVoteRequestAminoMsg): _100.QueryVoteRequest;
                toAminoMsg(message: _100.QueryVoteRequest): _100.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _100.QueryVoteRequestProtoMsg): _100.QueryVoteRequest;
                toProto(message: _100.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _100.QueryVoteRequest): _100.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _100.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryVoteResponse;
                fromPartial(object: Partial<_100.QueryVoteResponse>): _100.QueryVoteResponse;
                fromAmino(object: _100.QueryVoteResponseAmino): _100.QueryVoteResponse;
                toAmino(message: _100.QueryVoteResponse): _100.QueryVoteResponseAmino;
                fromAminoMsg(object: _100.QueryVoteResponseAminoMsg): _100.QueryVoteResponse;
                toAminoMsg(message: _100.QueryVoteResponse): _100.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _100.QueryVoteResponseProtoMsg): _100.QueryVoteResponse;
                toProto(message: _100.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _100.QueryVoteResponse): _100.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _100.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryVotesRequest;
                fromPartial(object: Partial<_100.QueryVotesRequest>): _100.QueryVotesRequest;
                fromAmino(object: _100.QueryVotesRequestAmino): _100.QueryVotesRequest;
                toAmino(message: _100.QueryVotesRequest): _100.QueryVotesRequestAmino;
                fromAminoMsg(object: _100.QueryVotesRequestAminoMsg): _100.QueryVotesRequest;
                toAminoMsg(message: _100.QueryVotesRequest): _100.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _100.QueryVotesRequestProtoMsg): _100.QueryVotesRequest;
                toProto(message: _100.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _100.QueryVotesRequest): _100.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _100.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryVotesResponse;
                fromPartial(object: Partial<_100.QueryVotesResponse>): _100.QueryVotesResponse;
                fromAmino(object: _100.QueryVotesResponseAmino): _100.QueryVotesResponse;
                toAmino(message: _100.QueryVotesResponse): _100.QueryVotesResponseAmino;
                fromAminoMsg(object: _100.QueryVotesResponseAminoMsg): _100.QueryVotesResponse;
                toAminoMsg(message: _100.QueryVotesResponse): _100.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _100.QueryVotesResponseProtoMsg): _100.QueryVotesResponse;
                toProto(message: _100.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _100.QueryVotesResponse): _100.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _100.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryParamsRequest;
                fromPartial(object: Partial<_100.QueryParamsRequest>): _100.QueryParamsRequest;
                fromAmino(object: _100.QueryParamsRequestAmino): _100.QueryParamsRequest;
                toAmino(message: _100.QueryParamsRequest): _100.QueryParamsRequestAmino;
                fromAminoMsg(object: _100.QueryParamsRequestAminoMsg): _100.QueryParamsRequest;
                toAminoMsg(message: _100.QueryParamsRequest): _100.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryParamsRequestProtoMsg): _100.QueryParamsRequest;
                toProto(message: _100.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryParamsRequest): _100.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _100.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryParamsResponse;
                fromPartial(object: Partial<_100.QueryParamsResponse>): _100.QueryParamsResponse;
                fromAmino(object: _100.QueryParamsResponseAmino): _100.QueryParamsResponse;
                toAmino(message: _100.QueryParamsResponse): _100.QueryParamsResponseAmino;
                fromAminoMsg(object: _100.QueryParamsResponseAminoMsg): _100.QueryParamsResponse;
                toAminoMsg(message: _100.QueryParamsResponse): _100.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryParamsResponseProtoMsg): _100.QueryParamsResponse;
                toProto(message: _100.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryParamsResponse): _100.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _100.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryDepositRequest;
                fromPartial(object: Partial<_100.QueryDepositRequest>): _100.QueryDepositRequest;
                fromAmino(object: _100.QueryDepositRequestAmino): _100.QueryDepositRequest;
                toAmino(message: _100.QueryDepositRequest): _100.QueryDepositRequestAmino;
                fromAminoMsg(object: _100.QueryDepositRequestAminoMsg): _100.QueryDepositRequest;
                toAminoMsg(message: _100.QueryDepositRequest): _100.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _100.QueryDepositRequestProtoMsg): _100.QueryDepositRequest;
                toProto(message: _100.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _100.QueryDepositRequest): _100.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _100.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryDepositResponse;
                fromPartial(object: Partial<_100.QueryDepositResponse>): _100.QueryDepositResponse;
                fromAmino(object: _100.QueryDepositResponseAmino): _100.QueryDepositResponse;
                toAmino(message: _100.QueryDepositResponse): _100.QueryDepositResponseAmino;
                fromAminoMsg(object: _100.QueryDepositResponseAminoMsg): _100.QueryDepositResponse;
                toAminoMsg(message: _100.QueryDepositResponse): _100.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _100.QueryDepositResponseProtoMsg): _100.QueryDepositResponse;
                toProto(message: _100.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _100.QueryDepositResponse): _100.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _100.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryDepositsRequest;
                fromPartial(object: Partial<_100.QueryDepositsRequest>): _100.QueryDepositsRequest;
                fromAmino(object: _100.QueryDepositsRequestAmino): _100.QueryDepositsRequest;
                toAmino(message: _100.QueryDepositsRequest): _100.QueryDepositsRequestAmino;
                fromAminoMsg(object: _100.QueryDepositsRequestAminoMsg): _100.QueryDepositsRequest;
                toAminoMsg(message: _100.QueryDepositsRequest): _100.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryDepositsRequestProtoMsg): _100.QueryDepositsRequest;
                toProto(message: _100.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryDepositsRequest): _100.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _100.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryDepositsResponse;
                fromPartial(object: Partial<_100.QueryDepositsResponse>): _100.QueryDepositsResponse;
                fromAmino(object: _100.QueryDepositsResponseAmino): _100.QueryDepositsResponse;
                toAmino(message: _100.QueryDepositsResponse): _100.QueryDepositsResponseAmino;
                fromAminoMsg(object: _100.QueryDepositsResponseAminoMsg): _100.QueryDepositsResponse;
                toAminoMsg(message: _100.QueryDepositsResponse): _100.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryDepositsResponseProtoMsg): _100.QueryDepositsResponse;
                toProto(message: _100.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryDepositsResponse): _100.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _100.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryTallyResultRequest;
                fromPartial(object: Partial<_100.QueryTallyResultRequest>): _100.QueryTallyResultRequest;
                fromAmino(object: _100.QueryTallyResultRequestAmino): _100.QueryTallyResultRequest;
                toAmino(message: _100.QueryTallyResultRequest): _100.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _100.QueryTallyResultRequestAminoMsg): _100.QueryTallyResultRequest;
                toAminoMsg(message: _100.QueryTallyResultRequest): _100.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _100.QueryTallyResultRequestProtoMsg): _100.QueryTallyResultRequest;
                toProto(message: _100.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _100.QueryTallyResultRequest): _100.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _100.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.QueryTallyResultResponse;
                fromPartial(object: Partial<_100.QueryTallyResultResponse>): _100.QueryTallyResultResponse;
                fromAmino(object: _100.QueryTallyResultResponseAmino): _100.QueryTallyResultResponse;
                toAmino(message: _100.QueryTallyResultResponse): _100.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _100.QueryTallyResultResponseAminoMsg): _100.QueryTallyResultResponse;
                toAminoMsg(message: _100.QueryTallyResultResponse): _100.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _100.QueryTallyResultResponseProtoMsg): _100.QueryTallyResultResponse;
                toProto(message: _100.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _100.QueryTallyResultResponse): _100.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _99.VoteOption;
            voteOptionToJSON(object: _99.VoteOption): string;
            proposalStatusFromJSON(object: any): _99.ProposalStatus;
            proposalStatusToJSON(object: _99.ProposalStatus): string;
            VoteOption: typeof _99.VoteOption;
            VoteOptionSDKType: typeof _99.VoteOption;
            VoteOptionAmino: typeof _99.VoteOption;
            ProposalStatus: typeof _99.ProposalStatus;
            ProposalStatusSDKType: typeof _99.ProposalStatus;
            ProposalStatusAmino: typeof _99.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _99.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.WeightedVoteOption;
                fromPartial(object: Partial<_99.WeightedVoteOption>): _99.WeightedVoteOption;
                fromAmino(object: _99.WeightedVoteOptionAmino): _99.WeightedVoteOption;
                toAmino(message: _99.WeightedVoteOption): _99.WeightedVoteOptionAmino;
                fromAminoMsg(object: _99.WeightedVoteOptionAminoMsg): _99.WeightedVoteOption;
                toAminoMsg(message: _99.WeightedVoteOption): _99.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _99.WeightedVoteOptionProtoMsg): _99.WeightedVoteOption;
                toProto(message: _99.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _99.WeightedVoteOption): _99.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _99.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.TextProposal;
                fromPartial(object: Partial<_99.TextProposal>): _99.TextProposal;
                fromAmino(object: _99.TextProposalAmino): _99.TextProposal;
                toAmino(message: _99.TextProposal): _99.TextProposalAmino;
                fromAminoMsg(object: _99.TextProposalAminoMsg): _99.TextProposal;
                toAminoMsg(message: _99.TextProposal): _99.TextProposalAminoMsg;
                fromProtoMsg(message: _99.TextProposalProtoMsg): _99.TextProposal;
                toProto(message: _99.TextProposal): Uint8Array;
                toProtoMsg(message: _99.TextProposal): _99.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _99.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Deposit;
                fromPartial(object: Partial<_99.Deposit>): _99.Deposit;
                fromAmino(object: _99.DepositAmino): _99.Deposit;
                toAmino(message: _99.Deposit): _99.DepositAmino;
                fromAminoMsg(object: _99.DepositAminoMsg): _99.Deposit;
                toAminoMsg(message: _99.Deposit): _99.DepositAminoMsg;
                fromProtoMsg(message: _99.DepositProtoMsg): _99.Deposit;
                toProto(message: _99.Deposit): Uint8Array;
                toProtoMsg(message: _99.Deposit): _99.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _99.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Proposal;
                fromPartial(object: Partial<_99.Proposal>): _99.Proposal;
                fromAmino(object: _99.ProposalAmino): _99.Proposal;
                toAmino(message: _99.Proposal): _99.ProposalAmino;
                fromAminoMsg(object: _99.ProposalAminoMsg): _99.Proposal;
                toAminoMsg(message: _99.Proposal): _99.ProposalAminoMsg;
                fromProtoMsg(message: _99.ProposalProtoMsg): _99.Proposal;
                toProto(message: _99.Proposal): Uint8Array;
                toProtoMsg(message: _99.Proposal): _99.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _99.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.TallyResult;
                fromPartial(object: Partial<_99.TallyResult>): _99.TallyResult;
                fromAmino(object: _99.TallyResultAmino): _99.TallyResult;
                toAmino(message: _99.TallyResult): _99.TallyResultAmino;
                fromAminoMsg(object: _99.TallyResultAminoMsg): _99.TallyResult;
                toAminoMsg(message: _99.TallyResult): _99.TallyResultAminoMsg;
                fromProtoMsg(message: _99.TallyResultProtoMsg): _99.TallyResult;
                toProto(message: _99.TallyResult): Uint8Array;
                toProtoMsg(message: _99.TallyResult): _99.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _99.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Vote;
                fromPartial(object: Partial<_99.Vote>): _99.Vote;
                fromAmino(object: _99.VoteAmino): _99.Vote;
                toAmino(message: _99.Vote): _99.VoteAmino;
                fromAminoMsg(object: _99.VoteAminoMsg): _99.Vote;
                toAminoMsg(message: _99.Vote): _99.VoteAminoMsg;
                fromProtoMsg(message: _99.VoteProtoMsg): _99.Vote;
                toProto(message: _99.Vote): Uint8Array;
                toProtoMsg(message: _99.Vote): _99.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _99.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.DepositParams;
                fromPartial(object: Partial<_99.DepositParams>): _99.DepositParams;
                fromAmino(object: _99.DepositParamsAmino): _99.DepositParams;
                toAmino(message: _99.DepositParams): _99.DepositParamsAmino;
                fromAminoMsg(object: _99.DepositParamsAminoMsg): _99.DepositParams;
                toAminoMsg(message: _99.DepositParams): _99.DepositParamsAminoMsg;
                fromProtoMsg(message: _99.DepositParamsProtoMsg): _99.DepositParams;
                toProto(message: _99.DepositParams): Uint8Array;
                toProtoMsg(message: _99.DepositParams): _99.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _99.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.VotingParams;
                fromPartial(object: Partial<_99.VotingParams>): _99.VotingParams;
                fromAmino(object: _99.VotingParamsAmino): _99.VotingParams;
                toAmino(message: _99.VotingParams): _99.VotingParamsAmino;
                fromAminoMsg(object: _99.VotingParamsAminoMsg): _99.VotingParams;
                toAminoMsg(message: _99.VotingParams): _99.VotingParamsAminoMsg;
                fromProtoMsg(message: _99.VotingParamsProtoMsg): _99.VotingParams;
                toProto(message: _99.VotingParams): Uint8Array;
                toProtoMsg(message: _99.VotingParams): _99.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _99.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.TallyParams;
                fromPartial(object: Partial<_99.TallyParams>): _99.TallyParams;
                fromAmino(object: _99.TallyParamsAmino): _99.TallyParams;
                toAmino(message: _99.TallyParams): _99.TallyParamsAmino;
                fromAminoMsg(object: _99.TallyParamsAminoMsg): _99.TallyParams;
                toAminoMsg(message: _99.TallyParams): _99.TallyParamsAminoMsg;
                fromProtoMsg(message: _99.TallyParamsProtoMsg): _99.TallyParams;
                toProto(message: _99.TallyParams): Uint8Array;
                toProtoMsg(message: _99.TallyParams): _99.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _98.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.GenesisState;
                fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
                fromAmino(object: _98.GenesisStateAmino): _98.GenesisState;
                toAmino(message: _98.GenesisState): _98.GenesisStateAmino;
                fromAminoMsg(object: _98.GenesisStateAminoMsg): _98.GenesisState;
                toAminoMsg(message: _98.GenesisState): _98.GenesisStateAminoMsg;
                fromProtoMsg(message: _98.GenesisStateProtoMsg): _98.GenesisState;
                toProto(message: _98.GenesisState): Uint8Array;
                toProtoMsg(message: _98.GenesisState): _98.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _104.QueryGroupInfoRequest): Promise<_104.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _104.QueryGroupPolicyInfoRequest): Promise<_104.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _104.QueryGroupMembersRequest): Promise<_104.QueryGroupMembersResponse>;
                groupsByAdmin(request: _104.QueryGroupsByAdminRequest): Promise<_104.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _104.QueryGroupPoliciesByGroupRequest): Promise<_104.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _104.QueryGroupPoliciesByAdminRequest): Promise<_104.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _104.QueryProposalRequest): Promise<_104.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _104.QueryProposalsByGroupPolicyRequest): Promise<_104.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _104.QueryVoteByProposalVoterRequest): Promise<_104.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _104.QueryVotesByProposalRequest): Promise<_104.QueryVotesByProposalResponse>;
                votesByVoter(request: _104.QueryVotesByVoterRequest): Promise<_104.QueryVotesByVoterResponse>;
                groupsByMember(request: _104.QueryGroupsByMemberRequest): Promise<_104.QueryGroupsByMemberResponse>;
                tallyResult(request: _104.QueryTallyResultRequest): Promise<_104.QueryTallyResultResponse>;
                groups(request?: _104.QueryGroupsRequest): Promise<_104.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _105.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _105.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _105.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _105.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _105.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _105.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _105.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _105.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _105.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _105.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _105.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _105.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _105.MsgCreateGroup): {
                        typeUrl: string;
                        value: _105.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _105.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _105.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _105.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _105.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _105.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _105.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _105.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _105.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _105.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _105.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _105.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _105.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _105.MsgWithdrawProposal;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: _105.MsgVote;
                    };
                    exec(value: _105.MsgExec): {
                        typeUrl: string;
                        value: _105.MsgExec;
                    };
                    leaveGroup(value: _105.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _105.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _105.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _105.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _105.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _105.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _105.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _105.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _105.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _105.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _105.MsgCreateGroup): {
                        typeUrl: string;
                        value: _105.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _105.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _105.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _105.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _105.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _105.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _105.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _105.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _105.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _105.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _105.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _105.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _105.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _105.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _105.MsgWithdrawProposal;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: _105.MsgVote;
                    };
                    exec(value: _105.MsgExec): {
                        typeUrl: string;
                        value: _105.MsgExec;
                    };
                    leaveGroup(value: _105.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _105.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _105.MsgCreateGroup) => _105.MsgCreateGroupAmino;
                    fromAmino: (object: _105.MsgCreateGroupAmino) => _105.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateGroupMembers) => _105.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _105.MsgUpdateGroupMembersAmino) => _105.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateGroupAdmin) => _105.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _105.MsgUpdateGroupAdminAmino) => _105.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateGroupMetadata) => _105.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _105.MsgUpdateGroupMetadataAmino) => _105.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _105.MsgCreateGroupPolicy) => _105.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _105.MsgCreateGroupPolicyAmino) => _105.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _105.MsgCreateGroupWithPolicy) => _105.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _105.MsgCreateGroupWithPolicyAmino) => _105.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateGroupPolicyAdmin) => _105.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _105.MsgUpdateGroupPolicyAdminAmino) => _105.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateGroupPolicyDecisionPolicy) => _105.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _105.MsgUpdateGroupPolicyDecisionPolicyAmino) => _105.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateGroupPolicyMetadata) => _105.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _105.MsgUpdateGroupPolicyMetadataAmino) => _105.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _105.MsgSubmitProposal) => _105.MsgSubmitProposalAmino;
                    fromAmino: (object: _105.MsgSubmitProposalAmino) => _105.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _105.MsgWithdrawProposal) => _105.MsgWithdrawProposalAmino;
                    fromAmino: (object: _105.MsgWithdrawProposalAmino) => _105.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _105.MsgVote) => _105.MsgVoteAmino;
                    fromAmino: (object: _105.MsgVoteAmino) => _105.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _105.MsgExec) => _105.MsgExecAmino;
                    fromAmino: (object: _105.MsgExecAmino) => _105.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _105.MsgLeaveGroup) => _105.MsgLeaveGroupAmino;
                    fromAmino: (object: _105.MsgLeaveGroupAmino) => _105.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _106.VoteOption;
            voteOptionToJSON(object: _106.VoteOption): string;
            proposalStatusFromJSON(object: any): _106.ProposalStatus;
            proposalStatusToJSON(object: _106.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _106.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _106.ProposalExecutorResult): string;
            VoteOption: typeof _106.VoteOption;
            VoteOptionSDKType: typeof _106.VoteOption;
            VoteOptionAmino: typeof _106.VoteOption;
            ProposalStatus: typeof _106.ProposalStatus;
            ProposalStatusSDKType: typeof _106.ProposalStatus;
            ProposalStatusAmino: typeof _106.ProposalStatus;
            ProposalExecutorResult: typeof _106.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _106.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _106.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _106.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Member;
                fromPartial(object: Partial<_106.Member>): _106.Member;
                fromAmino(object: _106.MemberAmino): _106.Member;
                toAmino(message: _106.Member): _106.MemberAmino;
                fromAminoMsg(object: _106.MemberAminoMsg): _106.Member;
                toAminoMsg(message: _106.Member): _106.MemberAminoMsg;
                fromProtoMsg(message: _106.MemberProtoMsg): _106.Member;
                toProto(message: _106.Member): Uint8Array;
                toProtoMsg(message: _106.Member): _106.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _106.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.MemberRequest;
                fromPartial(object: Partial<_106.MemberRequest>): _106.MemberRequest;
                fromAmino(object: _106.MemberRequestAmino): _106.MemberRequest;
                toAmino(message: _106.MemberRequest): _106.MemberRequestAmino;
                fromAminoMsg(object: _106.MemberRequestAminoMsg): _106.MemberRequest;
                toAminoMsg(message: _106.MemberRequest): _106.MemberRequestAminoMsg;
                fromProtoMsg(message: _106.MemberRequestProtoMsg): _106.MemberRequest;
                toProto(message: _106.MemberRequest): Uint8Array;
                toProtoMsg(message: _106.MemberRequest): _106.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _106.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_106.ThresholdDecisionPolicy>): _106.ThresholdDecisionPolicy;
                fromAmino(object: _106.ThresholdDecisionPolicyAmino): _106.ThresholdDecisionPolicy;
                toAmino(message: _106.ThresholdDecisionPolicy): _106.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _106.ThresholdDecisionPolicyAminoMsg): _106.ThresholdDecisionPolicy;
                toAminoMsg(message: _106.ThresholdDecisionPolicy): _106.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _106.ThresholdDecisionPolicyProtoMsg): _106.ThresholdDecisionPolicy;
                toProto(message: _106.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _106.ThresholdDecisionPolicy): _106.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _106.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.PercentageDecisionPolicy;
                fromPartial(object: Partial<_106.PercentageDecisionPolicy>): _106.PercentageDecisionPolicy;
                fromAmino(object: _106.PercentageDecisionPolicyAmino): _106.PercentageDecisionPolicy;
                toAmino(message: _106.PercentageDecisionPolicy): _106.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _106.PercentageDecisionPolicyAminoMsg): _106.PercentageDecisionPolicy;
                toAminoMsg(message: _106.PercentageDecisionPolicy): _106.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _106.PercentageDecisionPolicyProtoMsg): _106.PercentageDecisionPolicy;
                toProto(message: _106.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _106.PercentageDecisionPolicy): _106.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _106.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.DecisionPolicyWindows;
                fromPartial(object: Partial<_106.DecisionPolicyWindows>): _106.DecisionPolicyWindows;
                fromAmino(object: _106.DecisionPolicyWindowsAmino): _106.DecisionPolicyWindows;
                toAmino(message: _106.DecisionPolicyWindows): _106.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _106.DecisionPolicyWindowsAminoMsg): _106.DecisionPolicyWindows;
                toAminoMsg(message: _106.DecisionPolicyWindows): _106.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _106.DecisionPolicyWindowsProtoMsg): _106.DecisionPolicyWindows;
                toProto(message: _106.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _106.DecisionPolicyWindows): _106.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _106.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GroupInfo;
                fromPartial(object: Partial<_106.GroupInfo>): _106.GroupInfo;
                fromAmino(object: _106.GroupInfoAmino): _106.GroupInfo;
                toAmino(message: _106.GroupInfo): _106.GroupInfoAmino;
                fromAminoMsg(object: _106.GroupInfoAminoMsg): _106.GroupInfo;
                toAminoMsg(message: _106.GroupInfo): _106.GroupInfoAminoMsg;
                fromProtoMsg(message: _106.GroupInfoProtoMsg): _106.GroupInfo;
                toProto(message: _106.GroupInfo): Uint8Array;
                toProtoMsg(message: _106.GroupInfo): _106.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _106.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GroupMember;
                fromPartial(object: Partial<_106.GroupMember>): _106.GroupMember;
                fromAmino(object: _106.GroupMemberAmino): _106.GroupMember;
                toAmino(message: _106.GroupMember): _106.GroupMemberAmino;
                fromAminoMsg(object: _106.GroupMemberAminoMsg): _106.GroupMember;
                toAminoMsg(message: _106.GroupMember): _106.GroupMemberAminoMsg;
                fromProtoMsg(message: _106.GroupMemberProtoMsg): _106.GroupMember;
                toProto(message: _106.GroupMember): Uint8Array;
                toProtoMsg(message: _106.GroupMember): _106.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _106.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.GroupPolicyInfo;
                fromPartial(object: Partial<_106.GroupPolicyInfo>): _106.GroupPolicyInfo;
                fromAmino(object: _106.GroupPolicyInfoAmino): _106.GroupPolicyInfo;
                toAmino(message: _106.GroupPolicyInfo): _106.GroupPolicyInfoAmino;
                fromAminoMsg(object: _106.GroupPolicyInfoAminoMsg): _106.GroupPolicyInfo;
                toAminoMsg(message: _106.GroupPolicyInfo): _106.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _106.GroupPolicyInfoProtoMsg): _106.GroupPolicyInfo;
                toProto(message: _106.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _106.GroupPolicyInfo): _106.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _106.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Proposal;
                fromPartial(object: Partial<_106.Proposal>): _106.Proposal;
                fromAmino(object: _106.ProposalAmino): _106.Proposal;
                toAmino(message: _106.Proposal): _106.ProposalAmino;
                fromAminoMsg(object: _106.ProposalAminoMsg): _106.Proposal;
                toAminoMsg(message: _106.Proposal): _106.ProposalAminoMsg;
                fromProtoMsg(message: _106.ProposalProtoMsg): _106.Proposal;
                toProto(message: _106.Proposal): Uint8Array;
                toProtoMsg(message: _106.Proposal): _106.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _106.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.TallyResult;
                fromPartial(object: Partial<_106.TallyResult>): _106.TallyResult;
                fromAmino(object: _106.TallyResultAmino): _106.TallyResult;
                toAmino(message: _106.TallyResult): _106.TallyResultAmino;
                fromAminoMsg(object: _106.TallyResultAminoMsg): _106.TallyResult;
                toAminoMsg(message: _106.TallyResult): _106.TallyResultAminoMsg;
                fromProtoMsg(message: _106.TallyResultProtoMsg): _106.TallyResult;
                toProto(message: _106.TallyResult): Uint8Array;
                toProtoMsg(message: _106.TallyResult): _106.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _106.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Vote;
                fromPartial(object: Partial<_106.Vote>): _106.Vote;
                fromAmino(object: _106.VoteAmino): _106.Vote;
                toAmino(message: _106.Vote): _106.VoteAmino;
                fromAminoMsg(object: _106.VoteAminoMsg): _106.Vote;
                toAminoMsg(message: _106.Vote): _106.VoteAminoMsg;
                fromProtoMsg(message: _106.VoteProtoMsg): _106.Vote;
                toProto(message: _106.Vote): Uint8Array;
                toProtoMsg(message: _106.Vote): _106.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _105.Exec;
            execToJSON(object: _105.Exec): string;
            Exec: typeof _105.Exec;
            ExecSDKType: typeof _105.Exec;
            ExecAmino: typeof _105.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _105.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgCreateGroup;
                fromPartial(object: Partial<_105.MsgCreateGroup>): _105.MsgCreateGroup;
                fromAmino(object: _105.MsgCreateGroupAmino): _105.MsgCreateGroup;
                toAmino(message: _105.MsgCreateGroup): _105.MsgCreateGroupAmino;
                fromAminoMsg(object: _105.MsgCreateGroupAminoMsg): _105.MsgCreateGroup;
                toAminoMsg(message: _105.MsgCreateGroup): _105.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _105.MsgCreateGroupProtoMsg): _105.MsgCreateGroup;
                toProto(message: _105.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _105.MsgCreateGroup): _105.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _105.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgCreateGroupResponse;
                fromPartial(object: Partial<_105.MsgCreateGroupResponse>): _105.MsgCreateGroupResponse;
                fromAmino(object: _105.MsgCreateGroupResponseAmino): _105.MsgCreateGroupResponse;
                toAmino(message: _105.MsgCreateGroupResponse): _105.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _105.MsgCreateGroupResponseAminoMsg): _105.MsgCreateGroupResponse;
                toAminoMsg(message: _105.MsgCreateGroupResponse): _105.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _105.MsgCreateGroupResponseProtoMsg): _105.MsgCreateGroupResponse;
                toProto(message: _105.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _105.MsgCreateGroupResponse): _105.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _105.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_105.MsgUpdateGroupMembers>): _105.MsgUpdateGroupMembers;
                fromAmino(object: _105.MsgUpdateGroupMembersAmino): _105.MsgUpdateGroupMembers;
                toAmino(message: _105.MsgUpdateGroupMembers): _105.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupMembersAminoMsg): _105.MsgUpdateGroupMembers;
                toAminoMsg(message: _105.MsgUpdateGroupMembers): _105.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupMembersProtoMsg): _105.MsgUpdateGroupMembers;
                toProto(message: _105.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupMembers): _105.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_105.MsgUpdateGroupMembersResponse>): _105.MsgUpdateGroupMembersResponse;
                fromAmino(_: _105.MsgUpdateGroupMembersResponseAmino): _105.MsgUpdateGroupMembersResponse;
                toAmino(_: _105.MsgUpdateGroupMembersResponse): _105.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupMembersResponseAminoMsg): _105.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _105.MsgUpdateGroupMembersResponse): _105.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupMembersResponseProtoMsg): _105.MsgUpdateGroupMembersResponse;
                toProto(message: _105.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupMembersResponse): _105.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _105.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_105.MsgUpdateGroupAdmin>): _105.MsgUpdateGroupAdmin;
                fromAmino(object: _105.MsgUpdateGroupAdminAmino): _105.MsgUpdateGroupAdmin;
                toAmino(message: _105.MsgUpdateGroupAdmin): _105.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupAdminAminoMsg): _105.MsgUpdateGroupAdmin;
                toAminoMsg(message: _105.MsgUpdateGroupAdmin): _105.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupAdminProtoMsg): _105.MsgUpdateGroupAdmin;
                toProto(message: _105.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupAdmin): _105.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_105.MsgUpdateGroupAdminResponse>): _105.MsgUpdateGroupAdminResponse;
                fromAmino(_: _105.MsgUpdateGroupAdminResponseAmino): _105.MsgUpdateGroupAdminResponse;
                toAmino(_: _105.MsgUpdateGroupAdminResponse): _105.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupAdminResponseAminoMsg): _105.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _105.MsgUpdateGroupAdminResponse): _105.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupAdminResponseProtoMsg): _105.MsgUpdateGroupAdminResponse;
                toProto(message: _105.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupAdminResponse): _105.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _105.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_105.MsgUpdateGroupMetadata>): _105.MsgUpdateGroupMetadata;
                fromAmino(object: _105.MsgUpdateGroupMetadataAmino): _105.MsgUpdateGroupMetadata;
                toAmino(message: _105.MsgUpdateGroupMetadata): _105.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupMetadataAminoMsg): _105.MsgUpdateGroupMetadata;
                toAminoMsg(message: _105.MsgUpdateGroupMetadata): _105.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupMetadataProtoMsg): _105.MsgUpdateGroupMetadata;
                toProto(message: _105.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupMetadata): _105.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_105.MsgUpdateGroupMetadataResponse>): _105.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _105.MsgUpdateGroupMetadataResponseAmino): _105.MsgUpdateGroupMetadataResponse;
                toAmino(_: _105.MsgUpdateGroupMetadataResponse): _105.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupMetadataResponseAminoMsg): _105.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _105.MsgUpdateGroupMetadataResponse): _105.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupMetadataResponseProtoMsg): _105.MsgUpdateGroupMetadataResponse;
                toProto(message: _105.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupMetadataResponse): _105.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _105.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_105.MsgCreateGroupPolicy>): _105.MsgCreateGroupPolicy;
                fromAmino(object: _105.MsgCreateGroupPolicyAmino): _105.MsgCreateGroupPolicy;
                toAmino(message: _105.MsgCreateGroupPolicy): _105.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _105.MsgCreateGroupPolicyAminoMsg): _105.MsgCreateGroupPolicy;
                toAminoMsg(message: _105.MsgCreateGroupPolicy): _105.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _105.MsgCreateGroupPolicyProtoMsg): _105.MsgCreateGroupPolicy;
                toProto(message: _105.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _105.MsgCreateGroupPolicy): _105.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _105.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_105.MsgCreateGroupPolicyResponse>): _105.MsgCreateGroupPolicyResponse;
                fromAmino(object: _105.MsgCreateGroupPolicyResponseAmino): _105.MsgCreateGroupPolicyResponse;
                toAmino(message: _105.MsgCreateGroupPolicyResponse): _105.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _105.MsgCreateGroupPolicyResponseAminoMsg): _105.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _105.MsgCreateGroupPolicyResponse): _105.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _105.MsgCreateGroupPolicyResponseProtoMsg): _105.MsgCreateGroupPolicyResponse;
                toProto(message: _105.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _105.MsgCreateGroupPolicyResponse): _105.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _105.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_105.MsgUpdateGroupPolicyAdmin>): _105.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _105.MsgUpdateGroupPolicyAdminAmino): _105.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _105.MsgUpdateGroupPolicyAdmin): _105.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupPolicyAdminAminoMsg): _105.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _105.MsgUpdateGroupPolicyAdmin): _105.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupPolicyAdminProtoMsg): _105.MsgUpdateGroupPolicyAdmin;
                toProto(message: _105.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupPolicyAdmin): _105.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _105.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_105.MsgCreateGroupWithPolicy>): _105.MsgCreateGroupWithPolicy;
                fromAmino(object: _105.MsgCreateGroupWithPolicyAmino): _105.MsgCreateGroupWithPolicy;
                toAmino(message: _105.MsgCreateGroupWithPolicy): _105.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _105.MsgCreateGroupWithPolicyAminoMsg): _105.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _105.MsgCreateGroupWithPolicy): _105.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _105.MsgCreateGroupWithPolicyProtoMsg): _105.MsgCreateGroupWithPolicy;
                toProto(message: _105.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _105.MsgCreateGroupWithPolicy): _105.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _105.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_105.MsgCreateGroupWithPolicyResponse>): _105.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _105.MsgCreateGroupWithPolicyResponseAmino): _105.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _105.MsgCreateGroupWithPolicyResponse): _105.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _105.MsgCreateGroupWithPolicyResponseAminoMsg): _105.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _105.MsgCreateGroupWithPolicyResponse): _105.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _105.MsgCreateGroupWithPolicyResponseProtoMsg): _105.MsgCreateGroupWithPolicyResponse;
                toProto(message: _105.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _105.MsgCreateGroupWithPolicyResponse): _105.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_105.MsgUpdateGroupPolicyAdminResponse>): _105.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _105.MsgUpdateGroupPolicyAdminResponseAmino): _105.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _105.MsgUpdateGroupPolicyAdminResponse): _105.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupPolicyAdminResponseAminoMsg): _105.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _105.MsgUpdateGroupPolicyAdminResponse): _105.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupPolicyAdminResponseProtoMsg): _105.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _105.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupPolicyAdminResponse): _105.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _105.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_105.MsgUpdateGroupPolicyDecisionPolicy>): _105.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _105.MsgUpdateGroupPolicyDecisionPolicyAmino): _105.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _105.MsgUpdateGroupPolicyDecisionPolicy): _105.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _105.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _105.MsgUpdateGroupPolicyDecisionPolicy): _105.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _105.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _105.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupPolicyDecisionPolicy): _105.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_105.MsgUpdateGroupPolicyDecisionPolicyResponse>): _105.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _105.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _105.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _105.MsgUpdateGroupPolicyDecisionPolicyResponse): _105.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _105.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _105.MsgUpdateGroupPolicyDecisionPolicyResponse): _105.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _105.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _105.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupPolicyDecisionPolicyResponse): _105.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _105.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_105.MsgUpdateGroupPolicyMetadata>): _105.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _105.MsgUpdateGroupPolicyMetadataAmino): _105.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _105.MsgUpdateGroupPolicyMetadata): _105.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupPolicyMetadataAminoMsg): _105.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _105.MsgUpdateGroupPolicyMetadata): _105.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupPolicyMetadataProtoMsg): _105.MsgUpdateGroupPolicyMetadata;
                toProto(message: _105.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupPolicyMetadata): _105.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_105.MsgUpdateGroupPolicyMetadataResponse>): _105.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _105.MsgUpdateGroupPolicyMetadataResponseAmino): _105.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _105.MsgUpdateGroupPolicyMetadataResponse): _105.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _105.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _105.MsgUpdateGroupPolicyMetadataResponse): _105.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _105.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _105.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateGroupPolicyMetadataResponse): _105.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _105.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgSubmitProposal;
                fromPartial(object: Partial<_105.MsgSubmitProposal>): _105.MsgSubmitProposal;
                fromAmino(object: _105.MsgSubmitProposalAmino): _105.MsgSubmitProposal;
                toAmino(message: _105.MsgSubmitProposal): _105.MsgSubmitProposalAmino;
                fromAminoMsg(object: _105.MsgSubmitProposalAminoMsg): _105.MsgSubmitProposal;
                toAminoMsg(message: _105.MsgSubmitProposal): _105.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _105.MsgSubmitProposalProtoMsg): _105.MsgSubmitProposal;
                toProto(message: _105.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _105.MsgSubmitProposal): _105.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _105.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_105.MsgSubmitProposalResponse>): _105.MsgSubmitProposalResponse;
                fromAmino(object: _105.MsgSubmitProposalResponseAmino): _105.MsgSubmitProposalResponse;
                toAmino(message: _105.MsgSubmitProposalResponse): _105.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _105.MsgSubmitProposalResponseAminoMsg): _105.MsgSubmitProposalResponse;
                toAminoMsg(message: _105.MsgSubmitProposalResponse): _105.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _105.MsgSubmitProposalResponseProtoMsg): _105.MsgSubmitProposalResponse;
                toProto(message: _105.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _105.MsgSubmitProposalResponse): _105.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _105.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgWithdrawProposal;
                fromPartial(object: Partial<_105.MsgWithdrawProposal>): _105.MsgWithdrawProposal;
                fromAmino(object: _105.MsgWithdrawProposalAmino): _105.MsgWithdrawProposal;
                toAmino(message: _105.MsgWithdrawProposal): _105.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _105.MsgWithdrawProposalAminoMsg): _105.MsgWithdrawProposal;
                toAminoMsg(message: _105.MsgWithdrawProposal): _105.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _105.MsgWithdrawProposalProtoMsg): _105.MsgWithdrawProposal;
                toProto(message: _105.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _105.MsgWithdrawProposal): _105.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _105.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_105.MsgWithdrawProposalResponse>): _105.MsgWithdrawProposalResponse;
                fromAmino(_: _105.MsgWithdrawProposalResponseAmino): _105.MsgWithdrawProposalResponse;
                toAmino(_: _105.MsgWithdrawProposalResponse): _105.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _105.MsgWithdrawProposalResponseAminoMsg): _105.MsgWithdrawProposalResponse;
                toAminoMsg(message: _105.MsgWithdrawProposalResponse): _105.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _105.MsgWithdrawProposalResponseProtoMsg): _105.MsgWithdrawProposalResponse;
                toProto(message: _105.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _105.MsgWithdrawProposalResponse): _105.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _105.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgVote;
                fromPartial(object: Partial<_105.MsgVote>): _105.MsgVote;
                fromAmino(object: _105.MsgVoteAmino): _105.MsgVote;
                toAmino(message: _105.MsgVote): _105.MsgVoteAmino;
                fromAminoMsg(object: _105.MsgVoteAminoMsg): _105.MsgVote;
                toAminoMsg(message: _105.MsgVote): _105.MsgVoteAminoMsg;
                fromProtoMsg(message: _105.MsgVoteProtoMsg): _105.MsgVote;
                toProto(message: _105.MsgVote): Uint8Array;
                toProtoMsg(message: _105.MsgVote): _105.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _105.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgVoteResponse;
                fromPartial(_: Partial<_105.MsgVoteResponse>): _105.MsgVoteResponse;
                fromAmino(_: _105.MsgVoteResponseAmino): _105.MsgVoteResponse;
                toAmino(_: _105.MsgVoteResponse): _105.MsgVoteResponseAmino;
                fromAminoMsg(object: _105.MsgVoteResponseAminoMsg): _105.MsgVoteResponse;
                toAminoMsg(message: _105.MsgVoteResponse): _105.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _105.MsgVoteResponseProtoMsg): _105.MsgVoteResponse;
                toProto(message: _105.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _105.MsgVoteResponse): _105.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _105.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgExec;
                fromPartial(object: Partial<_105.MsgExec>): _105.MsgExec;
                fromAmino(object: _105.MsgExecAmino): _105.MsgExec;
                toAmino(message: _105.MsgExec): _105.MsgExecAmino;
                fromAminoMsg(object: _105.MsgExecAminoMsg): _105.MsgExec;
                toAminoMsg(message: _105.MsgExec): _105.MsgExecAminoMsg;
                fromProtoMsg(message: _105.MsgExecProtoMsg): _105.MsgExec;
                toProto(message: _105.MsgExec): Uint8Array;
                toProtoMsg(message: _105.MsgExec): _105.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _105.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgExecResponse;
                fromPartial(object: Partial<_105.MsgExecResponse>): _105.MsgExecResponse;
                fromAmino(object: _105.MsgExecResponseAmino): _105.MsgExecResponse;
                toAmino(message: _105.MsgExecResponse): _105.MsgExecResponseAmino;
                fromAminoMsg(object: _105.MsgExecResponseAminoMsg): _105.MsgExecResponse;
                toAminoMsg(message: _105.MsgExecResponse): _105.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _105.MsgExecResponseProtoMsg): _105.MsgExecResponse;
                toProto(message: _105.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _105.MsgExecResponse): _105.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _105.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgLeaveGroup;
                fromPartial(object: Partial<_105.MsgLeaveGroup>): _105.MsgLeaveGroup;
                fromAmino(object: _105.MsgLeaveGroupAmino): _105.MsgLeaveGroup;
                toAmino(message: _105.MsgLeaveGroup): _105.MsgLeaveGroupAmino;
                fromAminoMsg(object: _105.MsgLeaveGroupAminoMsg): _105.MsgLeaveGroup;
                toAminoMsg(message: _105.MsgLeaveGroup): _105.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _105.MsgLeaveGroupProtoMsg): _105.MsgLeaveGroup;
                toProto(message: _105.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _105.MsgLeaveGroup): _105.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _105.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_105.MsgLeaveGroupResponse>): _105.MsgLeaveGroupResponse;
                fromAmino(_: _105.MsgLeaveGroupResponseAmino): _105.MsgLeaveGroupResponse;
                toAmino(_: _105.MsgLeaveGroupResponse): _105.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _105.MsgLeaveGroupResponseAminoMsg): _105.MsgLeaveGroupResponse;
                toAminoMsg(message: _105.MsgLeaveGroupResponse): _105.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _105.MsgLeaveGroupResponseProtoMsg): _105.MsgLeaveGroupResponse;
                toProto(message: _105.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _105.MsgLeaveGroupResponse): _105.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _104.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupInfoRequest;
                fromPartial(object: Partial<_104.QueryGroupInfoRequest>): _104.QueryGroupInfoRequest;
                fromAmino(object: _104.QueryGroupInfoRequestAmino): _104.QueryGroupInfoRequest;
                toAmino(message: _104.QueryGroupInfoRequest): _104.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _104.QueryGroupInfoRequestAminoMsg): _104.QueryGroupInfoRequest;
                toAminoMsg(message: _104.QueryGroupInfoRequest): _104.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGroupInfoRequestProtoMsg): _104.QueryGroupInfoRequest;
                toProto(message: _104.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGroupInfoRequest): _104.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _104.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupInfoResponse;
                fromPartial(object: Partial<_104.QueryGroupInfoResponse>): _104.QueryGroupInfoResponse;
                fromAmino(object: _104.QueryGroupInfoResponseAmino): _104.QueryGroupInfoResponse;
                toAmino(message: _104.QueryGroupInfoResponse): _104.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _104.QueryGroupInfoResponseAminoMsg): _104.QueryGroupInfoResponse;
                toAminoMsg(message: _104.QueryGroupInfoResponse): _104.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGroupInfoResponseProtoMsg): _104.QueryGroupInfoResponse;
                toProto(message: _104.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGroupInfoResponse): _104.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _104.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_104.QueryGroupPolicyInfoRequest>): _104.QueryGroupPolicyInfoRequest;
                fromAmino(object: _104.QueryGroupPolicyInfoRequestAmino): _104.QueryGroupPolicyInfoRequest;
                toAmino(message: _104.QueryGroupPolicyInfoRequest): _104.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _104.QueryGroupPolicyInfoRequestAminoMsg): _104.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _104.QueryGroupPolicyInfoRequest): _104.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGroupPolicyInfoRequestProtoMsg): _104.QueryGroupPolicyInfoRequest;
                toProto(message: _104.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGroupPolicyInfoRequest): _104.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _104.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_104.QueryGroupPolicyInfoResponse>): _104.QueryGroupPolicyInfoResponse;
                fromAmino(object: _104.QueryGroupPolicyInfoResponseAmino): _104.QueryGroupPolicyInfoResponse;
                toAmino(message: _104.QueryGroupPolicyInfoResponse): _104.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _104.QueryGroupPolicyInfoResponseAminoMsg): _104.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _104.QueryGroupPolicyInfoResponse): _104.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGroupPolicyInfoResponseProtoMsg): _104.QueryGroupPolicyInfoResponse;
                toProto(message: _104.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGroupPolicyInfoResponse): _104.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _104.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupMembersRequest;
                fromPartial(object: Partial<_104.QueryGroupMembersRequest>): _104.QueryGroupMembersRequest;
                fromAmino(object: _104.QueryGroupMembersRequestAmino): _104.QueryGroupMembersRequest;
                toAmino(message: _104.QueryGroupMembersRequest): _104.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _104.QueryGroupMembersRequestAminoMsg): _104.QueryGroupMembersRequest;
                toAminoMsg(message: _104.QueryGroupMembersRequest): _104.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGroupMembersRequestProtoMsg): _104.QueryGroupMembersRequest;
                toProto(message: _104.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGroupMembersRequest): _104.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _104.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupMembersResponse;
                fromPartial(object: Partial<_104.QueryGroupMembersResponse>): _104.QueryGroupMembersResponse;
                fromAmino(object: _104.QueryGroupMembersResponseAmino): _104.QueryGroupMembersResponse;
                toAmino(message: _104.QueryGroupMembersResponse): _104.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _104.QueryGroupMembersResponseAminoMsg): _104.QueryGroupMembersResponse;
                toAminoMsg(message: _104.QueryGroupMembersResponse): _104.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGroupMembersResponseProtoMsg): _104.QueryGroupMembersResponse;
                toProto(message: _104.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGroupMembersResponse): _104.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _104.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_104.QueryGroupsByAdminRequest>): _104.QueryGroupsByAdminRequest;
                fromAmino(object: _104.QueryGroupsByAdminRequestAmino): _104.QueryGroupsByAdminRequest;
                toAmino(message: _104.QueryGroupsByAdminRequest): _104.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _104.QueryGroupsByAdminRequestAminoMsg): _104.QueryGroupsByAdminRequest;
                toAminoMsg(message: _104.QueryGroupsByAdminRequest): _104.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGroupsByAdminRequestProtoMsg): _104.QueryGroupsByAdminRequest;
                toProto(message: _104.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGroupsByAdminRequest): _104.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _104.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_104.QueryGroupsByAdminResponse>): _104.QueryGroupsByAdminResponse;
                fromAmino(object: _104.QueryGroupsByAdminResponseAmino): _104.QueryGroupsByAdminResponse;
                toAmino(message: _104.QueryGroupsByAdminResponse): _104.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _104.QueryGroupsByAdminResponseAminoMsg): _104.QueryGroupsByAdminResponse;
                toAminoMsg(message: _104.QueryGroupsByAdminResponse): _104.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGroupsByAdminResponseProtoMsg): _104.QueryGroupsByAdminResponse;
                toProto(message: _104.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGroupsByAdminResponse): _104.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _104.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_104.QueryGroupPoliciesByGroupRequest>): _104.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _104.QueryGroupPoliciesByGroupRequestAmino): _104.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _104.QueryGroupPoliciesByGroupRequest): _104.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _104.QueryGroupPoliciesByGroupRequestAminoMsg): _104.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _104.QueryGroupPoliciesByGroupRequest): _104.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGroupPoliciesByGroupRequestProtoMsg): _104.QueryGroupPoliciesByGroupRequest;
                toProto(message: _104.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGroupPoliciesByGroupRequest): _104.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _104.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_104.QueryGroupPoliciesByGroupResponse>): _104.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _104.QueryGroupPoliciesByGroupResponseAmino): _104.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _104.QueryGroupPoliciesByGroupResponse): _104.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _104.QueryGroupPoliciesByGroupResponseAminoMsg): _104.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _104.QueryGroupPoliciesByGroupResponse): _104.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGroupPoliciesByGroupResponseProtoMsg): _104.QueryGroupPoliciesByGroupResponse;
                toProto(message: _104.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGroupPoliciesByGroupResponse): _104.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _104.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_104.QueryGroupPoliciesByAdminRequest>): _104.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _104.QueryGroupPoliciesByAdminRequestAmino): _104.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _104.QueryGroupPoliciesByAdminRequest): _104.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _104.QueryGroupPoliciesByAdminRequestAminoMsg): _104.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _104.QueryGroupPoliciesByAdminRequest): _104.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGroupPoliciesByAdminRequestProtoMsg): _104.QueryGroupPoliciesByAdminRequest;
                toProto(message: _104.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGroupPoliciesByAdminRequest): _104.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _104.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_104.QueryGroupPoliciesByAdminResponse>): _104.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _104.QueryGroupPoliciesByAdminResponseAmino): _104.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _104.QueryGroupPoliciesByAdminResponse): _104.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _104.QueryGroupPoliciesByAdminResponseAminoMsg): _104.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _104.QueryGroupPoliciesByAdminResponse): _104.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGroupPoliciesByAdminResponseProtoMsg): _104.QueryGroupPoliciesByAdminResponse;
                toProto(message: _104.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGroupPoliciesByAdminResponse): _104.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _104.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProposalRequest;
                fromPartial(object: Partial<_104.QueryProposalRequest>): _104.QueryProposalRequest;
                fromAmino(object: _104.QueryProposalRequestAmino): _104.QueryProposalRequest;
                toAmino(message: _104.QueryProposalRequest): _104.QueryProposalRequestAmino;
                fromAminoMsg(object: _104.QueryProposalRequestAminoMsg): _104.QueryProposalRequest;
                toAminoMsg(message: _104.QueryProposalRequest): _104.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _104.QueryProposalRequestProtoMsg): _104.QueryProposalRequest;
                toProto(message: _104.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _104.QueryProposalRequest): _104.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _104.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProposalResponse;
                fromPartial(object: Partial<_104.QueryProposalResponse>): _104.QueryProposalResponse;
                fromAmino(object: _104.QueryProposalResponseAmino): _104.QueryProposalResponse;
                toAmino(message: _104.QueryProposalResponse): _104.QueryProposalResponseAmino;
                fromAminoMsg(object: _104.QueryProposalResponseAminoMsg): _104.QueryProposalResponse;
                toAminoMsg(message: _104.QueryProposalResponse): _104.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _104.QueryProposalResponseProtoMsg): _104.QueryProposalResponse;
                toProto(message: _104.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _104.QueryProposalResponse): _104.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _104.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_104.QueryProposalsByGroupPolicyRequest>): _104.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _104.QueryProposalsByGroupPolicyRequestAmino): _104.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _104.QueryProposalsByGroupPolicyRequest): _104.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _104.QueryProposalsByGroupPolicyRequestAminoMsg): _104.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _104.QueryProposalsByGroupPolicyRequest): _104.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _104.QueryProposalsByGroupPolicyRequestProtoMsg): _104.QueryProposalsByGroupPolicyRequest;
                toProto(message: _104.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _104.QueryProposalsByGroupPolicyRequest): _104.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _104.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_104.QueryProposalsByGroupPolicyResponse>): _104.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _104.QueryProposalsByGroupPolicyResponseAmino): _104.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _104.QueryProposalsByGroupPolicyResponse): _104.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _104.QueryProposalsByGroupPolicyResponseAminoMsg): _104.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _104.QueryProposalsByGroupPolicyResponse): _104.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _104.QueryProposalsByGroupPolicyResponseProtoMsg): _104.QueryProposalsByGroupPolicyResponse;
                toProto(message: _104.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _104.QueryProposalsByGroupPolicyResponse): _104.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _104.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_104.QueryVoteByProposalVoterRequest>): _104.QueryVoteByProposalVoterRequest;
                fromAmino(object: _104.QueryVoteByProposalVoterRequestAmino): _104.QueryVoteByProposalVoterRequest;
                toAmino(message: _104.QueryVoteByProposalVoterRequest): _104.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _104.QueryVoteByProposalVoterRequestAminoMsg): _104.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _104.QueryVoteByProposalVoterRequest): _104.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _104.QueryVoteByProposalVoterRequestProtoMsg): _104.QueryVoteByProposalVoterRequest;
                toProto(message: _104.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _104.QueryVoteByProposalVoterRequest): _104.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _104.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_104.QueryVoteByProposalVoterResponse>): _104.QueryVoteByProposalVoterResponse;
                fromAmino(object: _104.QueryVoteByProposalVoterResponseAmino): _104.QueryVoteByProposalVoterResponse;
                toAmino(message: _104.QueryVoteByProposalVoterResponse): _104.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _104.QueryVoteByProposalVoterResponseAminoMsg): _104.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _104.QueryVoteByProposalVoterResponse): _104.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _104.QueryVoteByProposalVoterResponseProtoMsg): _104.QueryVoteByProposalVoterResponse;
                toProto(message: _104.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _104.QueryVoteByProposalVoterResponse): _104.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _104.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_104.QueryVotesByProposalRequest>): _104.QueryVotesByProposalRequest;
                fromAmino(object: _104.QueryVotesByProposalRequestAmino): _104.QueryVotesByProposalRequest;
                toAmino(message: _104.QueryVotesByProposalRequest): _104.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _104.QueryVotesByProposalRequestAminoMsg): _104.QueryVotesByProposalRequest;
                toAminoMsg(message: _104.QueryVotesByProposalRequest): _104.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _104.QueryVotesByProposalRequestProtoMsg): _104.QueryVotesByProposalRequest;
                toProto(message: _104.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _104.QueryVotesByProposalRequest): _104.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _104.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_104.QueryVotesByProposalResponse>): _104.QueryVotesByProposalResponse;
                fromAmino(object: _104.QueryVotesByProposalResponseAmino): _104.QueryVotesByProposalResponse;
                toAmino(message: _104.QueryVotesByProposalResponse): _104.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _104.QueryVotesByProposalResponseAminoMsg): _104.QueryVotesByProposalResponse;
                toAminoMsg(message: _104.QueryVotesByProposalResponse): _104.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _104.QueryVotesByProposalResponseProtoMsg): _104.QueryVotesByProposalResponse;
                toProto(message: _104.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _104.QueryVotesByProposalResponse): _104.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _104.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_104.QueryVotesByVoterRequest>): _104.QueryVotesByVoterRequest;
                fromAmino(object: _104.QueryVotesByVoterRequestAmino): _104.QueryVotesByVoterRequest;
                toAmino(message: _104.QueryVotesByVoterRequest): _104.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _104.QueryVotesByVoterRequestAminoMsg): _104.QueryVotesByVoterRequest;
                toAminoMsg(message: _104.QueryVotesByVoterRequest): _104.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _104.QueryVotesByVoterRequestProtoMsg): _104.QueryVotesByVoterRequest;
                toProto(message: _104.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _104.QueryVotesByVoterRequest): _104.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _104.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_104.QueryVotesByVoterResponse>): _104.QueryVotesByVoterResponse;
                fromAmino(object: _104.QueryVotesByVoterResponseAmino): _104.QueryVotesByVoterResponse;
                toAmino(message: _104.QueryVotesByVoterResponse): _104.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _104.QueryVotesByVoterResponseAminoMsg): _104.QueryVotesByVoterResponse;
                toAminoMsg(message: _104.QueryVotesByVoterResponse): _104.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _104.QueryVotesByVoterResponseProtoMsg): _104.QueryVotesByVoterResponse;
                toProto(message: _104.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _104.QueryVotesByVoterResponse): _104.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _104.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_104.QueryGroupsByMemberRequest>): _104.QueryGroupsByMemberRequest;
                fromAmino(object: _104.QueryGroupsByMemberRequestAmino): _104.QueryGroupsByMemberRequest;
                toAmino(message: _104.QueryGroupsByMemberRequest): _104.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _104.QueryGroupsByMemberRequestAminoMsg): _104.QueryGroupsByMemberRequest;
                toAminoMsg(message: _104.QueryGroupsByMemberRequest): _104.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGroupsByMemberRequestProtoMsg): _104.QueryGroupsByMemberRequest;
                toProto(message: _104.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGroupsByMemberRequest): _104.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _104.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_104.QueryGroupsByMemberResponse>): _104.QueryGroupsByMemberResponse;
                fromAmino(object: _104.QueryGroupsByMemberResponseAmino): _104.QueryGroupsByMemberResponse;
                toAmino(message: _104.QueryGroupsByMemberResponse): _104.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _104.QueryGroupsByMemberResponseAminoMsg): _104.QueryGroupsByMemberResponse;
                toAminoMsg(message: _104.QueryGroupsByMemberResponse): _104.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGroupsByMemberResponseProtoMsg): _104.QueryGroupsByMemberResponse;
                toProto(message: _104.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGroupsByMemberResponse): _104.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _104.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryTallyResultRequest;
                fromPartial(object: Partial<_104.QueryTallyResultRequest>): _104.QueryTallyResultRequest;
                fromAmino(object: _104.QueryTallyResultRequestAmino): _104.QueryTallyResultRequest;
                toAmino(message: _104.QueryTallyResultRequest): _104.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _104.QueryTallyResultRequestAminoMsg): _104.QueryTallyResultRequest;
                toAminoMsg(message: _104.QueryTallyResultRequest): _104.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _104.QueryTallyResultRequestProtoMsg): _104.QueryTallyResultRequest;
                toProto(message: _104.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _104.QueryTallyResultRequest): _104.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _104.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryTallyResultResponse;
                fromPartial(object: Partial<_104.QueryTallyResultResponse>): _104.QueryTallyResultResponse;
                fromAmino(object: _104.QueryTallyResultResponseAmino): _104.QueryTallyResultResponse;
                toAmino(message: _104.QueryTallyResultResponse): _104.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _104.QueryTallyResultResponseAminoMsg): _104.QueryTallyResultResponse;
                toAminoMsg(message: _104.QueryTallyResultResponse): _104.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _104.QueryTallyResultResponseProtoMsg): _104.QueryTallyResultResponse;
                toProto(message: _104.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _104.QueryTallyResultResponse): _104.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _104.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupsRequest;
                fromPartial(object: Partial<_104.QueryGroupsRequest>): _104.QueryGroupsRequest;
                fromAmino(object: _104.QueryGroupsRequestAmino): _104.QueryGroupsRequest;
                toAmino(message: _104.QueryGroupsRequest): _104.QueryGroupsRequestAmino;
                fromAminoMsg(object: _104.QueryGroupsRequestAminoMsg): _104.QueryGroupsRequest;
                toAminoMsg(message: _104.QueryGroupsRequest): _104.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryGroupsRequestProtoMsg): _104.QueryGroupsRequest;
                toProto(message: _104.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryGroupsRequest): _104.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _104.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryGroupsResponse;
                fromPartial(object: Partial<_104.QueryGroupsResponse>): _104.QueryGroupsResponse;
                fromAmino(object: _104.QueryGroupsResponseAmino): _104.QueryGroupsResponse;
                toAmino(message: _104.QueryGroupsResponse): _104.QueryGroupsResponseAmino;
                fromAminoMsg(object: _104.QueryGroupsResponseAminoMsg): _104.QueryGroupsResponse;
                toAminoMsg(message: _104.QueryGroupsResponse): _104.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryGroupsResponseProtoMsg): _104.QueryGroupsResponse;
                toProto(message: _104.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryGroupsResponse): _104.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _103.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.GenesisState;
                fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
                fromAmino(object: _103.GenesisStateAmino): _103.GenesisState;
                toAmino(message: _103.GenesisState): _103.GenesisStateAmino;
                fromAminoMsg(object: _103.GenesisStateAminoMsg): _103.GenesisState;
                toAminoMsg(message: _103.GenesisState): _103.GenesisStateAminoMsg;
                fromProtoMsg(message: _103.GenesisStateProtoMsg): _103.GenesisState;
                toProto(message: _103.GenesisState): Uint8Array;
                toProtoMsg(message: _103.GenesisState): _103.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _102.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventCreateGroup;
                fromPartial(object: Partial<_102.EventCreateGroup>): _102.EventCreateGroup;
                fromAmino(object: _102.EventCreateGroupAmino): _102.EventCreateGroup;
                toAmino(message: _102.EventCreateGroup): _102.EventCreateGroupAmino;
                fromAminoMsg(object: _102.EventCreateGroupAminoMsg): _102.EventCreateGroup;
                toAminoMsg(message: _102.EventCreateGroup): _102.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _102.EventCreateGroupProtoMsg): _102.EventCreateGroup;
                toProto(message: _102.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _102.EventCreateGroup): _102.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _102.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventUpdateGroup;
                fromPartial(object: Partial<_102.EventUpdateGroup>): _102.EventUpdateGroup;
                fromAmino(object: _102.EventUpdateGroupAmino): _102.EventUpdateGroup;
                toAmino(message: _102.EventUpdateGroup): _102.EventUpdateGroupAmino;
                fromAminoMsg(object: _102.EventUpdateGroupAminoMsg): _102.EventUpdateGroup;
                toAminoMsg(message: _102.EventUpdateGroup): _102.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _102.EventUpdateGroupProtoMsg): _102.EventUpdateGroup;
                toProto(message: _102.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _102.EventUpdateGroup): _102.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _102.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventCreateGroupPolicy;
                fromPartial(object: Partial<_102.EventCreateGroupPolicy>): _102.EventCreateGroupPolicy;
                fromAmino(object: _102.EventCreateGroupPolicyAmino): _102.EventCreateGroupPolicy;
                toAmino(message: _102.EventCreateGroupPolicy): _102.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _102.EventCreateGroupPolicyAminoMsg): _102.EventCreateGroupPolicy;
                toAminoMsg(message: _102.EventCreateGroupPolicy): _102.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _102.EventCreateGroupPolicyProtoMsg): _102.EventCreateGroupPolicy;
                toProto(message: _102.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _102.EventCreateGroupPolicy): _102.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _102.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_102.EventUpdateGroupPolicy>): _102.EventUpdateGroupPolicy;
                fromAmino(object: _102.EventUpdateGroupPolicyAmino): _102.EventUpdateGroupPolicy;
                toAmino(message: _102.EventUpdateGroupPolicy): _102.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _102.EventUpdateGroupPolicyAminoMsg): _102.EventUpdateGroupPolicy;
                toAminoMsg(message: _102.EventUpdateGroupPolicy): _102.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _102.EventUpdateGroupPolicyProtoMsg): _102.EventUpdateGroupPolicy;
                toProto(message: _102.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _102.EventUpdateGroupPolicy): _102.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _102.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventSubmitProposal;
                fromPartial(object: Partial<_102.EventSubmitProposal>): _102.EventSubmitProposal;
                fromAmino(object: _102.EventSubmitProposalAmino): _102.EventSubmitProposal;
                toAmino(message: _102.EventSubmitProposal): _102.EventSubmitProposalAmino;
                fromAminoMsg(object: _102.EventSubmitProposalAminoMsg): _102.EventSubmitProposal;
                toAminoMsg(message: _102.EventSubmitProposal): _102.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _102.EventSubmitProposalProtoMsg): _102.EventSubmitProposal;
                toProto(message: _102.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _102.EventSubmitProposal): _102.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _102.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventWithdrawProposal;
                fromPartial(object: Partial<_102.EventWithdrawProposal>): _102.EventWithdrawProposal;
                fromAmino(object: _102.EventWithdrawProposalAmino): _102.EventWithdrawProposal;
                toAmino(message: _102.EventWithdrawProposal): _102.EventWithdrawProposalAmino;
                fromAminoMsg(object: _102.EventWithdrawProposalAminoMsg): _102.EventWithdrawProposal;
                toAminoMsg(message: _102.EventWithdrawProposal): _102.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _102.EventWithdrawProposalProtoMsg): _102.EventWithdrawProposal;
                toProto(message: _102.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _102.EventWithdrawProposal): _102.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _102.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventVote;
                fromPartial(object: Partial<_102.EventVote>): _102.EventVote;
                fromAmino(object: _102.EventVoteAmino): _102.EventVote;
                toAmino(message: _102.EventVote): _102.EventVoteAmino;
                fromAminoMsg(object: _102.EventVoteAminoMsg): _102.EventVote;
                toAminoMsg(message: _102.EventVote): _102.EventVoteAminoMsg;
                fromProtoMsg(message: _102.EventVoteProtoMsg): _102.EventVote;
                toProto(message: _102.EventVote): Uint8Array;
                toProtoMsg(message: _102.EventVote): _102.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _102.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventExec;
                fromPartial(object: Partial<_102.EventExec>): _102.EventExec;
                fromAmino(object: _102.EventExecAmino): _102.EventExec;
                toAmino(message: _102.EventExec): _102.EventExecAmino;
                fromAminoMsg(object: _102.EventExecAminoMsg): _102.EventExec;
                toAminoMsg(message: _102.EventExec): _102.EventExecAminoMsg;
                fromProtoMsg(message: _102.EventExecProtoMsg): _102.EventExec;
                toProto(message: _102.EventExec): Uint8Array;
                toProtoMsg(message: _102.EventExec): _102.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _102.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventLeaveGroup;
                fromPartial(object: Partial<_102.EventLeaveGroup>): _102.EventLeaveGroup;
                fromAmino(object: _102.EventLeaveGroupAmino): _102.EventLeaveGroup;
                toAmino(message: _102.EventLeaveGroup): _102.EventLeaveGroupAmino;
                fromAminoMsg(object: _102.EventLeaveGroupAminoMsg): _102.EventLeaveGroup;
                toAminoMsg(message: _102.EventLeaveGroup): _102.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _102.EventLeaveGroupProtoMsg): _102.EventLeaveGroup;
                toProto(message: _102.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _102.EventLeaveGroup): _102.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _102.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.EventProposalPruned;
                fromPartial(object: Partial<_102.EventProposalPruned>): _102.EventProposalPruned;
                fromAmino(object: _102.EventProposalPrunedAmino): _102.EventProposalPruned;
                toAmino(message: _102.EventProposalPruned): _102.EventProposalPrunedAmino;
                fromAminoMsg(object: _102.EventProposalPrunedAminoMsg): _102.EventProposalPruned;
                toAminoMsg(message: _102.EventProposalPruned): _102.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _102.EventProposalPrunedProtoMsg): _102.EventProposalPruned;
                toProto(message: _102.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _102.EventProposalPruned): _102.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _109.QueryParamsRequest): Promise<_109.QueryParamsResponse>;
                inflation(request?: _109.QueryInflationRequest): Promise<_109.QueryInflationResponse>;
                annualProvisions(request?: _109.QueryAnnualProvisionsRequest): Promise<_109.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _109.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.QueryParamsRequest;
                fromPartial(_: Partial<_109.QueryParamsRequest>): _109.QueryParamsRequest;
                fromAmino(_: _109.QueryParamsRequestAmino): _109.QueryParamsRequest;
                toAmino(_: _109.QueryParamsRequest): _109.QueryParamsRequestAmino;
                fromAminoMsg(object: _109.QueryParamsRequestAminoMsg): _109.QueryParamsRequest;
                toAminoMsg(message: _109.QueryParamsRequest): _109.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _109.QueryParamsRequestProtoMsg): _109.QueryParamsRequest;
                toProto(message: _109.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _109.QueryParamsRequest): _109.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _109.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryParamsResponse;
                fromPartial(object: Partial<_109.QueryParamsResponse>): _109.QueryParamsResponse;
                fromAmino(object: _109.QueryParamsResponseAmino): _109.QueryParamsResponse;
                toAmino(message: _109.QueryParamsResponse): _109.QueryParamsResponseAmino;
                fromAminoMsg(object: _109.QueryParamsResponseAminoMsg): _109.QueryParamsResponse;
                toAminoMsg(message: _109.QueryParamsResponse): _109.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _109.QueryParamsResponseProtoMsg): _109.QueryParamsResponse;
                toProto(message: _109.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _109.QueryParamsResponse): _109.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _109.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.QueryInflationRequest;
                fromPartial(_: Partial<_109.QueryInflationRequest>): _109.QueryInflationRequest;
                fromAmino(_: _109.QueryInflationRequestAmino): _109.QueryInflationRequest;
                toAmino(_: _109.QueryInflationRequest): _109.QueryInflationRequestAmino;
                fromAminoMsg(object: _109.QueryInflationRequestAminoMsg): _109.QueryInflationRequest;
                toAminoMsg(message: _109.QueryInflationRequest): _109.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _109.QueryInflationRequestProtoMsg): _109.QueryInflationRequest;
                toProto(message: _109.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _109.QueryInflationRequest): _109.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _109.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryInflationResponse;
                fromPartial(object: Partial<_109.QueryInflationResponse>): _109.QueryInflationResponse;
                fromAmino(object: _109.QueryInflationResponseAmino): _109.QueryInflationResponse;
                toAmino(message: _109.QueryInflationResponse): _109.QueryInflationResponseAmino;
                fromAminoMsg(object: _109.QueryInflationResponseAminoMsg): _109.QueryInflationResponse;
                toAminoMsg(message: _109.QueryInflationResponse): _109.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _109.QueryInflationResponseProtoMsg): _109.QueryInflationResponse;
                toProto(message: _109.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _109.QueryInflationResponse): _109.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _109.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_109.QueryAnnualProvisionsRequest>): _109.QueryAnnualProvisionsRequest;
                fromAmino(_: _109.QueryAnnualProvisionsRequestAmino): _109.QueryAnnualProvisionsRequest;
                toAmino(_: _109.QueryAnnualProvisionsRequest): _109.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _109.QueryAnnualProvisionsRequestAminoMsg): _109.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _109.QueryAnnualProvisionsRequest): _109.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _109.QueryAnnualProvisionsRequestProtoMsg): _109.QueryAnnualProvisionsRequest;
                toProto(message: _109.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _109.QueryAnnualProvisionsRequest): _109.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _109.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_109.QueryAnnualProvisionsResponse>): _109.QueryAnnualProvisionsResponse;
                fromAmino(object: _109.QueryAnnualProvisionsResponseAmino): _109.QueryAnnualProvisionsResponse;
                toAmino(message: _109.QueryAnnualProvisionsResponse): _109.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _109.QueryAnnualProvisionsResponseAminoMsg): _109.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _109.QueryAnnualProvisionsResponse): _109.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _109.QueryAnnualProvisionsResponseProtoMsg): _109.QueryAnnualProvisionsResponse;
                toProto(message: _109.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _109.QueryAnnualProvisionsResponse): _109.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _108.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Minter;
                fromPartial(object: Partial<_108.Minter>): _108.Minter;
                fromAmino(object: _108.MinterAmino): _108.Minter;
                toAmino(message: _108.Minter): _108.MinterAmino;
                fromAminoMsg(object: _108.MinterAminoMsg): _108.Minter;
                toAminoMsg(message: _108.Minter): _108.MinterAminoMsg;
                fromProtoMsg(message: _108.MinterProtoMsg): _108.Minter;
                toProto(message: _108.Minter): Uint8Array;
                toProtoMsg(message: _108.Minter): _108.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _108.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Params;
                fromPartial(object: Partial<_108.Params>): _108.Params;
                fromAmino(object: _108.ParamsAmino): _108.Params;
                toAmino(message: _108.Params): _108.ParamsAmino;
                fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
                toAminoMsg(message: _108.Params): _108.ParamsAminoMsg;
                fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
                toProto(message: _108.Params): Uint8Array;
                toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _107.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.GenesisState;
                fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                fromAmino(object: _107.GenesisStateAmino): _107.GenesisState;
                toAmino(message: _107.GenesisState): _107.GenesisStateAmino;
                fromAminoMsg(object: _107.GenesisStateAminoMsg): _107.GenesisState;
                toAminoMsg(message: _107.GenesisState): _107.GenesisStateAminoMsg;
                fromProtoMsg(message: _107.GenesisStateProtoMsg): _107.GenesisState;
                toProto(message: _107.GenesisState): Uint8Array;
                toProtoMsg(message: _107.GenesisState): _107.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _283.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _114.QueryBalanceRequest): Promise<_114.QueryBalanceResponse>;
                owner(request: _114.QueryOwnerRequest): Promise<_114.QueryOwnerResponse>;
                supply(request: _114.QuerySupplyRequest): Promise<_114.QuerySupplyResponse>;
                nFTs(request: _114.QueryNFTsRequest): Promise<_114.QueryNFTsResponse>;
                nFT(request: _114.QueryNFTRequest): Promise<_114.QueryNFTResponse>;
                class(request: _114.QueryClassRequest): Promise<_114.QueryClassResponse>;
                classes(request?: _114.QueryClassesRequest): Promise<_114.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _264.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _115.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _115.MsgSend): {
                        typeUrl: string;
                        value: _115.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _115.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _115.MsgSend): {
                        typeUrl: string;
                        value: _115.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _115.MsgSend) => _115.MsgSendAmino;
                    fromAmino: (object: _115.MsgSendAmino) => _115.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _115.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MsgSend;
                fromPartial(object: Partial<_115.MsgSend>): _115.MsgSend;
                fromAmino(object: _115.MsgSendAmino): _115.MsgSend;
                toAmino(message: _115.MsgSend): _115.MsgSendAmino;
                fromAminoMsg(object: _115.MsgSendAminoMsg): _115.MsgSend;
                toAminoMsg(message: _115.MsgSend): _115.MsgSendAminoMsg;
                fromProtoMsg(message: _115.MsgSendProtoMsg): _115.MsgSend;
                toProto(message: _115.MsgSend): Uint8Array;
                toProtoMsg(message: _115.MsgSend): _115.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _115.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.MsgSendResponse;
                fromPartial(_: Partial<_115.MsgSendResponse>): _115.MsgSendResponse;
                fromAmino(_: _115.MsgSendResponseAmino): _115.MsgSendResponse;
                toAmino(_: _115.MsgSendResponse): _115.MsgSendResponseAmino;
                fromAminoMsg(object: _115.MsgSendResponseAminoMsg): _115.MsgSendResponse;
                toAminoMsg(message: _115.MsgSendResponse): _115.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _115.MsgSendResponseProtoMsg): _115.MsgSendResponse;
                toProto(message: _115.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _115.MsgSendResponse): _115.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _114.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryBalanceRequest;
                fromPartial(object: Partial<_114.QueryBalanceRequest>): _114.QueryBalanceRequest;
                fromAmino(object: _114.QueryBalanceRequestAmino): _114.QueryBalanceRequest;
                toAmino(message: _114.QueryBalanceRequest): _114.QueryBalanceRequestAmino;
                fromAminoMsg(object: _114.QueryBalanceRequestAminoMsg): _114.QueryBalanceRequest;
                toAminoMsg(message: _114.QueryBalanceRequest): _114.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _114.QueryBalanceRequestProtoMsg): _114.QueryBalanceRequest;
                toProto(message: _114.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _114.QueryBalanceRequest): _114.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _114.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryBalanceResponse;
                fromPartial(object: Partial<_114.QueryBalanceResponse>): _114.QueryBalanceResponse;
                fromAmino(object: _114.QueryBalanceResponseAmino): _114.QueryBalanceResponse;
                toAmino(message: _114.QueryBalanceResponse): _114.QueryBalanceResponseAmino;
                fromAminoMsg(object: _114.QueryBalanceResponseAminoMsg): _114.QueryBalanceResponse;
                toAminoMsg(message: _114.QueryBalanceResponse): _114.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _114.QueryBalanceResponseProtoMsg): _114.QueryBalanceResponse;
                toProto(message: _114.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _114.QueryBalanceResponse): _114.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _114.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryOwnerRequest;
                fromPartial(object: Partial<_114.QueryOwnerRequest>): _114.QueryOwnerRequest;
                fromAmino(object: _114.QueryOwnerRequestAmino): _114.QueryOwnerRequest;
                toAmino(message: _114.QueryOwnerRequest): _114.QueryOwnerRequestAmino;
                fromAminoMsg(object: _114.QueryOwnerRequestAminoMsg): _114.QueryOwnerRequest;
                toAminoMsg(message: _114.QueryOwnerRequest): _114.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _114.QueryOwnerRequestProtoMsg): _114.QueryOwnerRequest;
                toProto(message: _114.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _114.QueryOwnerRequest): _114.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _114.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryOwnerResponse;
                fromPartial(object: Partial<_114.QueryOwnerResponse>): _114.QueryOwnerResponse;
                fromAmino(object: _114.QueryOwnerResponseAmino): _114.QueryOwnerResponse;
                toAmino(message: _114.QueryOwnerResponse): _114.QueryOwnerResponseAmino;
                fromAminoMsg(object: _114.QueryOwnerResponseAminoMsg): _114.QueryOwnerResponse;
                toAminoMsg(message: _114.QueryOwnerResponse): _114.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _114.QueryOwnerResponseProtoMsg): _114.QueryOwnerResponse;
                toProto(message: _114.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _114.QueryOwnerResponse): _114.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _114.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QuerySupplyRequest;
                fromPartial(object: Partial<_114.QuerySupplyRequest>): _114.QuerySupplyRequest;
                fromAmino(object: _114.QuerySupplyRequestAmino): _114.QuerySupplyRequest;
                toAmino(message: _114.QuerySupplyRequest): _114.QuerySupplyRequestAmino;
                fromAminoMsg(object: _114.QuerySupplyRequestAminoMsg): _114.QuerySupplyRequest;
                toAminoMsg(message: _114.QuerySupplyRequest): _114.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _114.QuerySupplyRequestProtoMsg): _114.QuerySupplyRequest;
                toProto(message: _114.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _114.QuerySupplyRequest): _114.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _114.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QuerySupplyResponse;
                fromPartial(object: Partial<_114.QuerySupplyResponse>): _114.QuerySupplyResponse;
                fromAmino(object: _114.QuerySupplyResponseAmino): _114.QuerySupplyResponse;
                toAmino(message: _114.QuerySupplyResponse): _114.QuerySupplyResponseAmino;
                fromAminoMsg(object: _114.QuerySupplyResponseAminoMsg): _114.QuerySupplyResponse;
                toAminoMsg(message: _114.QuerySupplyResponse): _114.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _114.QuerySupplyResponseProtoMsg): _114.QuerySupplyResponse;
                toProto(message: _114.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _114.QuerySupplyResponse): _114.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _114.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryNFTsRequest;
                fromPartial(object: Partial<_114.QueryNFTsRequest>): _114.QueryNFTsRequest;
                fromAmino(object: _114.QueryNFTsRequestAmino): _114.QueryNFTsRequest;
                toAmino(message: _114.QueryNFTsRequest): _114.QueryNFTsRequestAmino;
                fromAminoMsg(object: _114.QueryNFTsRequestAminoMsg): _114.QueryNFTsRequest;
                toAminoMsg(message: _114.QueryNFTsRequest): _114.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryNFTsRequestProtoMsg): _114.QueryNFTsRequest;
                toProto(message: _114.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryNFTsRequest): _114.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _114.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryNFTsResponse;
                fromPartial(object: Partial<_114.QueryNFTsResponse>): _114.QueryNFTsResponse;
                fromAmino(object: _114.QueryNFTsResponseAmino): _114.QueryNFTsResponse;
                toAmino(message: _114.QueryNFTsResponse): _114.QueryNFTsResponseAmino;
                fromAminoMsg(object: _114.QueryNFTsResponseAminoMsg): _114.QueryNFTsResponse;
                toAminoMsg(message: _114.QueryNFTsResponse): _114.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryNFTsResponseProtoMsg): _114.QueryNFTsResponse;
                toProto(message: _114.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryNFTsResponse): _114.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _114.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryNFTRequest;
                fromPartial(object: Partial<_114.QueryNFTRequest>): _114.QueryNFTRequest;
                fromAmino(object: _114.QueryNFTRequestAmino): _114.QueryNFTRequest;
                toAmino(message: _114.QueryNFTRequest): _114.QueryNFTRequestAmino;
                fromAminoMsg(object: _114.QueryNFTRequestAminoMsg): _114.QueryNFTRequest;
                toAminoMsg(message: _114.QueryNFTRequest): _114.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _114.QueryNFTRequestProtoMsg): _114.QueryNFTRequest;
                toProto(message: _114.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _114.QueryNFTRequest): _114.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _114.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryNFTResponse;
                fromPartial(object: Partial<_114.QueryNFTResponse>): _114.QueryNFTResponse;
                fromAmino(object: _114.QueryNFTResponseAmino): _114.QueryNFTResponse;
                toAmino(message: _114.QueryNFTResponse): _114.QueryNFTResponseAmino;
                fromAminoMsg(object: _114.QueryNFTResponseAminoMsg): _114.QueryNFTResponse;
                toAminoMsg(message: _114.QueryNFTResponse): _114.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _114.QueryNFTResponseProtoMsg): _114.QueryNFTResponse;
                toProto(message: _114.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _114.QueryNFTResponse): _114.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _114.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryClassRequest;
                fromPartial(object: Partial<_114.QueryClassRequest>): _114.QueryClassRequest;
                fromAmino(object: _114.QueryClassRequestAmino): _114.QueryClassRequest;
                toAmino(message: _114.QueryClassRequest): _114.QueryClassRequestAmino;
                fromAminoMsg(object: _114.QueryClassRequestAminoMsg): _114.QueryClassRequest;
                toAminoMsg(message: _114.QueryClassRequest): _114.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _114.QueryClassRequestProtoMsg): _114.QueryClassRequest;
                toProto(message: _114.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _114.QueryClassRequest): _114.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _114.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryClassResponse;
                fromPartial(object: Partial<_114.QueryClassResponse>): _114.QueryClassResponse;
                fromAmino(object: _114.QueryClassResponseAmino): _114.QueryClassResponse;
                toAmino(message: _114.QueryClassResponse): _114.QueryClassResponseAmino;
                fromAminoMsg(object: _114.QueryClassResponseAminoMsg): _114.QueryClassResponse;
                toAminoMsg(message: _114.QueryClassResponse): _114.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _114.QueryClassResponseProtoMsg): _114.QueryClassResponse;
                toProto(message: _114.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _114.QueryClassResponse): _114.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _114.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryClassesRequest;
                fromPartial(object: Partial<_114.QueryClassesRequest>): _114.QueryClassesRequest;
                fromAmino(object: _114.QueryClassesRequestAmino): _114.QueryClassesRequest;
                toAmino(message: _114.QueryClassesRequest): _114.QueryClassesRequestAmino;
                fromAminoMsg(object: _114.QueryClassesRequestAminoMsg): _114.QueryClassesRequest;
                toAminoMsg(message: _114.QueryClassesRequest): _114.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _114.QueryClassesRequestProtoMsg): _114.QueryClassesRequest;
                toProto(message: _114.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _114.QueryClassesRequest): _114.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _114.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.QueryClassesResponse;
                fromPartial(object: Partial<_114.QueryClassesResponse>): _114.QueryClassesResponse;
                fromAmino(object: _114.QueryClassesResponseAmino): _114.QueryClassesResponse;
                toAmino(message: _114.QueryClassesResponse): _114.QueryClassesResponseAmino;
                fromAminoMsg(object: _114.QueryClassesResponseAminoMsg): _114.QueryClassesResponse;
                toAminoMsg(message: _114.QueryClassesResponse): _114.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _114.QueryClassesResponseProtoMsg): _114.QueryClassesResponse;
                toProto(message: _114.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _114.QueryClassesResponse): _114.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _113.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Class;
                fromPartial(object: Partial<_113.Class>): _113.Class;
                fromAmino(object: _113.ClassAmino): _113.Class;
                toAmino(message: _113.Class): _113.ClassAmino;
                fromAminoMsg(object: _113.ClassAminoMsg): _113.Class;
                toAminoMsg(message: _113.Class): _113.ClassAminoMsg;
                fromProtoMsg(message: _113.ClassProtoMsg): _113.Class;
                toProto(message: _113.Class): Uint8Array;
                toProtoMsg(message: _113.Class): _113.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _113.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.NFT;
                fromPartial(object: Partial<_113.NFT>): _113.NFT;
                fromAmino(object: _113.NFTAmino): _113.NFT;
                toAmino(message: _113.NFT): _113.NFTAmino;
                fromAminoMsg(object: _113.NFTAminoMsg): _113.NFT;
                toAminoMsg(message: _113.NFT): _113.NFTAminoMsg;
                fromProtoMsg(message: _113.NFTProtoMsg): _113.NFT;
                toProto(message: _113.NFT): Uint8Array;
                toProtoMsg(message: _113.NFT): _113.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _112.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.GenesisState;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                fromAmino(object: _112.GenesisStateAmino): _112.GenesisState;
                toAmino(message: _112.GenesisState): _112.GenesisStateAmino;
                fromAminoMsg(object: _112.GenesisStateAminoMsg): _112.GenesisState;
                toAminoMsg(message: _112.GenesisState): _112.GenesisStateAminoMsg;
                fromProtoMsg(message: _112.GenesisStateProtoMsg): _112.GenesisState;
                toProto(message: _112.GenesisState): Uint8Array;
                toProtoMsg(message: _112.GenesisState): _112.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _112.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.Entry;
                fromPartial(object: Partial<_112.Entry>): _112.Entry;
                fromAmino(object: _112.EntryAmino): _112.Entry;
                toAmino(message: _112.Entry): _112.EntryAmino;
                fromAminoMsg(object: _112.EntryAminoMsg): _112.Entry;
                toAminoMsg(message: _112.Entry): _112.EntryAminoMsg;
                fromProtoMsg(message: _112.EntryProtoMsg): _112.Entry;
                toProto(message: _112.Entry): Uint8Array;
                toProtoMsg(message: _112.Entry): _112.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _111.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.EventSend;
                fromPartial(object: Partial<_111.EventSend>): _111.EventSend;
                fromAmino(object: _111.EventSendAmino): _111.EventSend;
                toAmino(message: _111.EventSend): _111.EventSendAmino;
                fromAminoMsg(object: _111.EventSendAminoMsg): _111.EventSend;
                toAminoMsg(message: _111.EventSend): _111.EventSendAminoMsg;
                fromProtoMsg(message: _111.EventSendProtoMsg): _111.EventSend;
                toProto(message: _111.EventSend): Uint8Array;
                toProtoMsg(message: _111.EventSend): _111.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _111.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.EventMint;
                fromPartial(object: Partial<_111.EventMint>): _111.EventMint;
                fromAmino(object: _111.EventMintAmino): _111.EventMint;
                toAmino(message: _111.EventMint): _111.EventMintAmino;
                fromAminoMsg(object: _111.EventMintAminoMsg): _111.EventMint;
                toAminoMsg(message: _111.EventMint): _111.EventMintAminoMsg;
                fromProtoMsg(message: _111.EventMintProtoMsg): _111.EventMint;
                toProto(message: _111.EventMint): Uint8Array;
                toProtoMsg(message: _111.EventMint): _111.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _111.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.EventBurn;
                fromPartial(object: Partial<_111.EventBurn>): _111.EventBurn;
                fromAmino(object: _111.EventBurnAmino): _111.EventBurn;
                toAmino(message: _111.EventBurn): _111.EventBurnAmino;
                fromAminoMsg(object: _111.EventBurnAminoMsg): _111.EventBurn;
                toAminoMsg(message: _111.EventBurn): _111.EventBurnAminoMsg;
                fromProtoMsg(message: _111.EventBurnProtoMsg): _111.EventBurn;
                toProto(message: _111.EventBurn): Uint8Array;
                toProtoMsg(message: _111.EventBurn): _111.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _116.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _116.Module;
                    fromPartial(_: Partial<_116.Module>): _116.Module;
                    fromAmino(_: _116.ModuleAmino): _116.Module;
                    toAmino(_: _116.Module): _116.ModuleAmino;
                    fromAminoMsg(object: _116.ModuleAminoMsg): _116.Module;
                    toAminoMsg(message: _116.Module): _116.ModuleAminoMsg;
                    fromProtoMsg(message: _116.ModuleProtoMsg): _116.Module;
                    toProto(message: _116.Module): Uint8Array;
                    toProtoMsg(message: _116.Module): _116.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _117.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TableDescriptor;
                fromPartial(object: Partial<_117.TableDescriptor>): _117.TableDescriptor;
                fromAmino(object: _117.TableDescriptorAmino): _117.TableDescriptor;
                toAmino(message: _117.TableDescriptor): _117.TableDescriptorAmino;
                fromAminoMsg(object: _117.TableDescriptorAminoMsg): _117.TableDescriptor;
                toAminoMsg(message: _117.TableDescriptor): _117.TableDescriptorAminoMsg;
                fromProtoMsg(message: _117.TableDescriptorProtoMsg): _117.TableDescriptor;
                toProto(message: _117.TableDescriptor): Uint8Array;
                toProtoMsg(message: _117.TableDescriptor): _117.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _117.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_117.PrimaryKeyDescriptor>): _117.PrimaryKeyDescriptor;
                fromAmino(object: _117.PrimaryKeyDescriptorAmino): _117.PrimaryKeyDescriptor;
                toAmino(message: _117.PrimaryKeyDescriptor): _117.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _117.PrimaryKeyDescriptorAminoMsg): _117.PrimaryKeyDescriptor;
                toAminoMsg(message: _117.PrimaryKeyDescriptor): _117.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _117.PrimaryKeyDescriptorProtoMsg): _117.PrimaryKeyDescriptor;
                toProto(message: _117.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _117.PrimaryKeyDescriptor): _117.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _117.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_117.SecondaryIndexDescriptor>): _117.SecondaryIndexDescriptor;
                fromAmino(object: _117.SecondaryIndexDescriptorAmino): _117.SecondaryIndexDescriptor;
                toAmino(message: _117.SecondaryIndexDescriptor): _117.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _117.SecondaryIndexDescriptorAminoMsg): _117.SecondaryIndexDescriptor;
                toAminoMsg(message: _117.SecondaryIndexDescriptor): _117.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _117.SecondaryIndexDescriptorProtoMsg): _117.SecondaryIndexDescriptor;
                toProto(message: _117.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _117.SecondaryIndexDescriptor): _117.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _117.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SingletonDescriptor;
                fromPartial(object: Partial<_117.SingletonDescriptor>): _117.SingletonDescriptor;
                fromAmino(object: _117.SingletonDescriptorAmino): _117.SingletonDescriptor;
                toAmino(message: _117.SingletonDescriptor): _117.SingletonDescriptorAmino;
                fromAminoMsg(object: _117.SingletonDescriptorAminoMsg): _117.SingletonDescriptor;
                toAminoMsg(message: _117.SingletonDescriptor): _117.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _117.SingletonDescriptorProtoMsg): _117.SingletonDescriptor;
                toProto(message: _117.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _117.SingletonDescriptor): _117.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _118.StorageType;
            storageTypeToJSON(object: _118.StorageType): string;
            StorageType: typeof _118.StorageType;
            StorageTypeSDKType: typeof _118.StorageType;
            StorageTypeAmino: typeof _118.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _118.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_118.ModuleSchemaDescriptor>): _118.ModuleSchemaDescriptor;
                fromAmino(object: _118.ModuleSchemaDescriptorAmino): _118.ModuleSchemaDescriptor;
                toAmino(message: _118.ModuleSchemaDescriptor): _118.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _118.ModuleSchemaDescriptorAminoMsg): _118.ModuleSchemaDescriptor;
                toAminoMsg(message: _118.ModuleSchemaDescriptor): _118.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _118.ModuleSchemaDescriptorProtoMsg): _118.ModuleSchemaDescriptor;
                toProto(message: _118.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _118.ModuleSchemaDescriptor): _118.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _118.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_118.ModuleSchemaDescriptor_FileEntry>): _118.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _118.ModuleSchemaDescriptor_FileEntryAmino): _118.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _118.ModuleSchemaDescriptor_FileEntry): _118.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _118.ModuleSchemaDescriptor_FileEntryAminoMsg): _118.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _118.ModuleSchemaDescriptor_FileEntry): _118.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _118.ModuleSchemaDescriptor_FileEntryProtoMsg): _118.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _118.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _118.ModuleSchemaDescriptor_FileEntry): _118.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                subspaces(request?: _120.QuerySubspacesRequest): Promise<_120.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _265.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _120.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryParamsRequest;
                fromPartial(object: Partial<_120.QueryParamsRequest>): _120.QueryParamsRequest;
                fromAmino(object: _120.QueryParamsRequestAmino): _120.QueryParamsRequest;
                toAmino(message: _120.QueryParamsRequest): _120.QueryParamsRequestAmino;
                fromAminoMsg(object: _120.QueryParamsRequestAminoMsg): _120.QueryParamsRequest;
                toAminoMsg(message: _120.QueryParamsRequest): _120.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _120.QueryParamsRequestProtoMsg): _120.QueryParamsRequest;
                toProto(message: _120.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _120.QueryParamsRequest): _120.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _120.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryParamsResponse;
                fromPartial(object: Partial<_120.QueryParamsResponse>): _120.QueryParamsResponse;
                fromAmino(object: _120.QueryParamsResponseAmino): _120.QueryParamsResponse;
                toAmino(message: _120.QueryParamsResponse): _120.QueryParamsResponseAmino;
                fromAminoMsg(object: _120.QueryParamsResponseAminoMsg): _120.QueryParamsResponse;
                toAminoMsg(message: _120.QueryParamsResponse): _120.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _120.QueryParamsResponseProtoMsg): _120.QueryParamsResponse;
                toProto(message: _120.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _120.QueryParamsResponse): _120.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _120.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.QuerySubspacesRequest;
                fromPartial(_: Partial<_120.QuerySubspacesRequest>): _120.QuerySubspacesRequest;
                fromAmino(_: _120.QuerySubspacesRequestAmino): _120.QuerySubspacesRequest;
                toAmino(_: _120.QuerySubspacesRequest): _120.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _120.QuerySubspacesRequestAminoMsg): _120.QuerySubspacesRequest;
                toAminoMsg(message: _120.QuerySubspacesRequest): _120.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _120.QuerySubspacesRequestProtoMsg): _120.QuerySubspacesRequest;
                toProto(message: _120.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _120.QuerySubspacesRequest): _120.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _120.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QuerySubspacesResponse;
                fromPartial(object: Partial<_120.QuerySubspacesResponse>): _120.QuerySubspacesResponse;
                fromAmino(object: _120.QuerySubspacesResponseAmino): _120.QuerySubspacesResponse;
                toAmino(message: _120.QuerySubspacesResponse): _120.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _120.QuerySubspacesResponseAminoMsg): _120.QuerySubspacesResponse;
                toAminoMsg(message: _120.QuerySubspacesResponse): _120.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _120.QuerySubspacesResponseProtoMsg): _120.QuerySubspacesResponse;
                toProto(message: _120.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _120.QuerySubspacesResponse): _120.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _120.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.Subspace;
                fromPartial(object: Partial<_120.Subspace>): _120.Subspace;
                fromAmino(object: _120.SubspaceAmino): _120.Subspace;
                toAmino(message: _120.Subspace): _120.SubspaceAmino;
                fromAminoMsg(object: _120.SubspaceAminoMsg): _120.Subspace;
                toAminoMsg(message: _120.Subspace): _120.SubspaceAminoMsg;
                fromProtoMsg(message: _120.SubspaceProtoMsg): _120.Subspace;
                toProto(message: _120.Subspace): Uint8Array;
                toProtoMsg(message: _120.Subspace): _120.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _119.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ParameterChangeProposal;
                fromPartial(object: Partial<_119.ParameterChangeProposal>): _119.ParameterChangeProposal;
                fromAmino(object: _119.ParameterChangeProposalAmino): _119.ParameterChangeProposal;
                toAmino(message: _119.ParameterChangeProposal): _119.ParameterChangeProposalAmino;
                fromAminoMsg(object: _119.ParameterChangeProposalAminoMsg): _119.ParameterChangeProposal;
                toAminoMsg(message: _119.ParameterChangeProposal): _119.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _119.ParameterChangeProposalProtoMsg): _119.ParameterChangeProposal;
                toProto(message: _119.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _119.ParameterChangeProposal): _119.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _119.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.ParamChange;
                fromPartial(object: Partial<_119.ParamChange>): _119.ParamChange;
                fromAmino(object: _119.ParamChangeAmino): _119.ParamChange;
                toAmino(message: _119.ParamChange): _119.ParamChangeAmino;
                fromAminoMsg(object: _119.ParamChangeAminoMsg): _119.ParamChange;
                toAminoMsg(message: _119.ParamChange): _119.ParamChangeAminoMsg;
                fromProtoMsg(message: _119.ParamChangeProtoMsg): _119.ParamChange;
                toProto(message: _119.ParamChange): Uint8Array;
                toProtoMsg(message: _119.ParamChange): _119.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                signingInfo(request: _122.QuerySigningInfoRequest): Promise<_122.QuerySigningInfoResponse>;
                signingInfos(request?: _122.QuerySigningInfosRequest): Promise<_122.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _266.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _124.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _124.MsgUnjail): {
                        typeUrl: string;
                        value: _124.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _124.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _124.MsgUnjail): {
                        typeUrl: string;
                        value: _124.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _124.MsgUnjail) => _124.MsgUnjailAmino;
                    fromAmino: (object: _124.MsgUnjailAmino) => _124.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _124.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgUnjail;
                fromPartial(object: Partial<_124.MsgUnjail>): _124.MsgUnjail;
                fromAmino(object: _124.MsgUnjailAmino): _124.MsgUnjail;
                toAmino(message: _124.MsgUnjail): _124.MsgUnjailAmino;
                fromAminoMsg(object: _124.MsgUnjailAminoMsg): _124.MsgUnjail;
                toAminoMsg(message: _124.MsgUnjail): _124.MsgUnjailAminoMsg;
                fromProtoMsg(message: _124.MsgUnjailProtoMsg): _124.MsgUnjail;
                toProto(message: _124.MsgUnjail): Uint8Array;
                toProtoMsg(message: _124.MsgUnjail): _124.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _124.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgUnjailResponse;
                fromPartial(_: Partial<_124.MsgUnjailResponse>): _124.MsgUnjailResponse;
                fromAmino(_: _124.MsgUnjailResponseAmino): _124.MsgUnjailResponse;
                toAmino(_: _124.MsgUnjailResponse): _124.MsgUnjailResponseAmino;
                fromAminoMsg(object: _124.MsgUnjailResponseAminoMsg): _124.MsgUnjailResponse;
                toAminoMsg(message: _124.MsgUnjailResponse): _124.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _124.MsgUnjailResponseProtoMsg): _124.MsgUnjailResponse;
                toProto(message: _124.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _124.MsgUnjailResponse): _124.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _123.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.ValidatorSigningInfo;
                fromPartial(object: Partial<_123.ValidatorSigningInfo>): _123.ValidatorSigningInfo;
                fromAmino(object: _123.ValidatorSigningInfoAmino): _123.ValidatorSigningInfo;
                toAmino(message: _123.ValidatorSigningInfo): _123.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _123.ValidatorSigningInfoAminoMsg): _123.ValidatorSigningInfo;
                toAminoMsg(message: _123.ValidatorSigningInfo): _123.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _123.ValidatorSigningInfoProtoMsg): _123.ValidatorSigningInfo;
                toProto(message: _123.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _123.ValidatorSigningInfo): _123.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _123.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Params;
                fromPartial(object: Partial<_123.Params>): _123.Params;
                fromAmino(object: _123.ParamsAmino): _123.Params;
                toAmino(message: _123.Params): _123.ParamsAmino;
                fromAminoMsg(object: _123.ParamsAminoMsg): _123.Params;
                toAminoMsg(message: _123.Params): _123.ParamsAminoMsg;
                fromProtoMsg(message: _123.ParamsProtoMsg): _123.Params;
                toProto(message: _123.Params): Uint8Array;
                toProtoMsg(message: _123.Params): _123.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _122.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.QueryParamsRequest;
                fromPartial(_: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
                fromAmino(_: _122.QueryParamsRequestAmino): _122.QueryParamsRequest;
                toAmino(_: _122.QueryParamsRequest): _122.QueryParamsRequestAmino;
                fromAminoMsg(object: _122.QueryParamsRequestAminoMsg): _122.QueryParamsRequest;
                toAminoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _122.QueryParamsRequestProtoMsg): _122.QueryParamsRequest;
                toProto(message: _122.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _122.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QueryParamsResponse;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
                fromAmino(object: _122.QueryParamsResponseAmino): _122.QueryParamsResponse;
                toAmino(message: _122.QueryParamsResponse): _122.QueryParamsResponseAmino;
                fromAminoMsg(object: _122.QueryParamsResponseAminoMsg): _122.QueryParamsResponse;
                toAminoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _122.QueryParamsResponseProtoMsg): _122.QueryParamsResponse;
                toProto(message: _122.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _122.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QuerySigningInfoRequest;
                fromPartial(object: Partial<_122.QuerySigningInfoRequest>): _122.QuerySigningInfoRequest;
                fromAmino(object: _122.QuerySigningInfoRequestAmino): _122.QuerySigningInfoRequest;
                toAmino(message: _122.QuerySigningInfoRequest): _122.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _122.QuerySigningInfoRequestAminoMsg): _122.QuerySigningInfoRequest;
                toAminoMsg(message: _122.QuerySigningInfoRequest): _122.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _122.QuerySigningInfoRequestProtoMsg): _122.QuerySigningInfoRequest;
                toProto(message: _122.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _122.QuerySigningInfoRequest): _122.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _122.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QuerySigningInfoResponse;
                fromPartial(object: Partial<_122.QuerySigningInfoResponse>): _122.QuerySigningInfoResponse;
                fromAmino(object: _122.QuerySigningInfoResponseAmino): _122.QuerySigningInfoResponse;
                toAmino(message: _122.QuerySigningInfoResponse): _122.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _122.QuerySigningInfoResponseAminoMsg): _122.QuerySigningInfoResponse;
                toAminoMsg(message: _122.QuerySigningInfoResponse): _122.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _122.QuerySigningInfoResponseProtoMsg): _122.QuerySigningInfoResponse;
                toProto(message: _122.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _122.QuerySigningInfoResponse): _122.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _122.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QuerySigningInfosRequest;
                fromPartial(object: Partial<_122.QuerySigningInfosRequest>): _122.QuerySigningInfosRequest;
                fromAmino(object: _122.QuerySigningInfosRequestAmino): _122.QuerySigningInfosRequest;
                toAmino(message: _122.QuerySigningInfosRequest): _122.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _122.QuerySigningInfosRequestAminoMsg): _122.QuerySigningInfosRequest;
                toAminoMsg(message: _122.QuerySigningInfosRequest): _122.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _122.QuerySigningInfosRequestProtoMsg): _122.QuerySigningInfosRequest;
                toProto(message: _122.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _122.QuerySigningInfosRequest): _122.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _122.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.QuerySigningInfosResponse;
                fromPartial(object: Partial<_122.QuerySigningInfosResponse>): _122.QuerySigningInfosResponse;
                fromAmino(object: _122.QuerySigningInfosResponseAmino): _122.QuerySigningInfosResponse;
                toAmino(message: _122.QuerySigningInfosResponse): _122.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _122.QuerySigningInfosResponseAminoMsg): _122.QuerySigningInfosResponse;
                toAminoMsg(message: _122.QuerySigningInfosResponse): _122.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _122.QuerySigningInfosResponseProtoMsg): _122.QuerySigningInfosResponse;
                toProto(message: _122.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _122.QuerySigningInfosResponse): _122.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _121.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.GenesisState;
                fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
                fromAmino(object: _121.GenesisStateAmino): _121.GenesisState;
                toAmino(message: _121.GenesisState): _121.GenesisStateAmino;
                fromAminoMsg(object: _121.GenesisStateAminoMsg): _121.GenesisState;
                toAminoMsg(message: _121.GenesisState): _121.GenesisStateAminoMsg;
                fromProtoMsg(message: _121.GenesisStateProtoMsg): _121.GenesisState;
                toProto(message: _121.GenesisState): Uint8Array;
                toProtoMsg(message: _121.GenesisState): _121.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _121.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.SigningInfo;
                fromPartial(object: Partial<_121.SigningInfo>): _121.SigningInfo;
                fromAmino(object: _121.SigningInfoAmino): _121.SigningInfo;
                toAmino(message: _121.SigningInfo): _121.SigningInfoAmino;
                fromAminoMsg(object: _121.SigningInfoAminoMsg): _121.SigningInfo;
                toAminoMsg(message: _121.SigningInfo): _121.SigningInfoAminoMsg;
                fromProtoMsg(message: _121.SigningInfoProtoMsg): _121.SigningInfo;
                toProto(message: _121.SigningInfo): Uint8Array;
                toProtoMsg(message: _121.SigningInfo): _121.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _121.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ValidatorMissedBlocks;
                fromPartial(object: Partial<_121.ValidatorMissedBlocks>): _121.ValidatorMissedBlocks;
                fromAmino(object: _121.ValidatorMissedBlocksAmino): _121.ValidatorMissedBlocks;
                toAmino(message: _121.ValidatorMissedBlocks): _121.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _121.ValidatorMissedBlocksAminoMsg): _121.ValidatorMissedBlocks;
                toAminoMsg(message: _121.ValidatorMissedBlocks): _121.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _121.ValidatorMissedBlocksProtoMsg): _121.ValidatorMissedBlocks;
                toProto(message: _121.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _121.ValidatorMissedBlocks): _121.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _121.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MissedBlock;
                fromPartial(object: Partial<_121.MissedBlock>): _121.MissedBlock;
                fromAmino(object: _121.MissedBlockAmino): _121.MissedBlock;
                toAmino(message: _121.MissedBlock): _121.MissedBlockAmino;
                fromAminoMsg(object: _121.MissedBlockAminoMsg): _121.MissedBlock;
                toAminoMsg(message: _121.MissedBlock): _121.MissedBlockAminoMsg;
                fromProtoMsg(message: _121.MissedBlockProtoMsg): _121.MissedBlock;
                toProto(message: _121.MissedBlock): Uint8Array;
                toProtoMsg(message: _121.MissedBlock): _121.MissedBlockProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _125.SignMode;
                signModeToJSON(object: _125.SignMode): string;
                SignMode: typeof _125.SignMode;
                SignModeSDKType: typeof _125.SignMode;
                SignModeAmino: typeof _125.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptors;
                    fromPartial(object: Partial<_125.SignatureDescriptors>): _125.SignatureDescriptors;
                    fromAmino(object: _125.SignatureDescriptorsAmino): _125.SignatureDescriptors;
                    toAmino(message: _125.SignatureDescriptors): _125.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _125.SignatureDescriptorsAminoMsg): _125.SignatureDescriptors;
                    toAminoMsg(message: _125.SignatureDescriptors): _125.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptorsProtoMsg): _125.SignatureDescriptors;
                    toProto(message: _125.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptors): _125.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptor;
                    fromPartial(object: Partial<_125.SignatureDescriptor>): _125.SignatureDescriptor;
                    fromAmino(object: _125.SignatureDescriptorAmino): _125.SignatureDescriptor;
                    toAmino(message: _125.SignatureDescriptor): _125.SignatureDescriptorAmino;
                    fromAminoMsg(object: _125.SignatureDescriptorAminoMsg): _125.SignatureDescriptor;
                    toAminoMsg(message: _125.SignatureDescriptor): _125.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptorProtoMsg): _125.SignatureDescriptor;
                    toProto(message: _125.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptor): _125.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_125.SignatureDescriptor_Data>): _125.SignatureDescriptor_Data;
                    fromAmino(object: _125.SignatureDescriptor_DataAmino): _125.SignatureDescriptor_Data;
                    toAmino(message: _125.SignatureDescriptor_Data): _125.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _125.SignatureDescriptor_DataAminoMsg): _125.SignatureDescriptor_Data;
                    toAminoMsg(message: _125.SignatureDescriptor_Data): _125.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptor_DataProtoMsg): _125.SignatureDescriptor_Data;
                    toProto(message: _125.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptor_Data): _125.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_125.SignatureDescriptor_Data_Single>): _125.SignatureDescriptor_Data_Single;
                    fromAmino(object: _125.SignatureDescriptor_Data_SingleAmino): _125.SignatureDescriptor_Data_Single;
                    toAmino(message: _125.SignatureDescriptor_Data_Single): _125.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _125.SignatureDescriptor_Data_SingleAminoMsg): _125.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _125.SignatureDescriptor_Data_Single): _125.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptor_Data_SingleProtoMsg): _125.SignatureDescriptor_Data_Single;
                    toProto(message: _125.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptor_Data_Single): _125.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _125.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_125.SignatureDescriptor_Data_Multi>): _125.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _125.SignatureDescriptor_Data_MultiAmino): _125.SignatureDescriptor_Data_Multi;
                    toAmino(message: _125.SignatureDescriptor_Data_Multi): _125.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _125.SignatureDescriptor_Data_MultiAminoMsg): _125.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _125.SignatureDescriptor_Data_Multi): _125.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _125.SignatureDescriptor_Data_MultiProtoMsg): _125.SignatureDescriptor_Data_Multi;
                    toProto(message: _125.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _125.SignatureDescriptor_Data_Multi): _125.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _287.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _126.SimulateRequest): Promise<_126.SimulateResponse>;
                getTx(request: _126.GetTxRequest): Promise<_126.GetTxResponse>;
                broadcastTx(request: _126.BroadcastTxRequest): Promise<_126.BroadcastTxResponse>;
                getTxsEvent(request: _126.GetTxsEventRequest): Promise<_126.GetTxsEventResponse>;
                getBlockWithTxs(request: _126.GetBlockWithTxsRequest): Promise<_126.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _268.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _127.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Tx;
                fromPartial(object: Partial<_127.Tx>): _127.Tx;
                fromAmino(object: _127.TxAmino): _127.Tx;
                toAmino(message: _127.Tx): _127.TxAmino;
                fromAminoMsg(object: _127.TxAminoMsg): _127.Tx;
                toAminoMsg(message: _127.Tx): _127.TxAminoMsg;
                fromProtoMsg(message: _127.TxProtoMsg): _127.Tx;
                toProto(message: _127.Tx): Uint8Array;
                toProtoMsg(message: _127.Tx): _127.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _127.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.TxRaw;
                fromPartial(object: Partial<_127.TxRaw>): _127.TxRaw;
                fromAmino(object: _127.TxRawAmino): _127.TxRaw;
                toAmino(message: _127.TxRaw): _127.TxRawAmino;
                fromAminoMsg(object: _127.TxRawAminoMsg): _127.TxRaw;
                toAminoMsg(message: _127.TxRaw): _127.TxRawAminoMsg;
                fromProtoMsg(message: _127.TxRawProtoMsg): _127.TxRaw;
                toProto(message: _127.TxRaw): Uint8Array;
                toProtoMsg(message: _127.TxRaw): _127.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _127.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.SignDoc;
                fromPartial(object: Partial<_127.SignDoc>): _127.SignDoc;
                fromAmino(object: _127.SignDocAmino): _127.SignDoc;
                toAmino(message: _127.SignDoc): _127.SignDocAmino;
                fromAminoMsg(object: _127.SignDocAminoMsg): _127.SignDoc;
                toAminoMsg(message: _127.SignDoc): _127.SignDocAminoMsg;
                fromProtoMsg(message: _127.SignDocProtoMsg): _127.SignDoc;
                toProto(message: _127.SignDoc): Uint8Array;
                toProtoMsg(message: _127.SignDoc): _127.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _127.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.SignDocDirectAux;
                fromPartial(object: Partial<_127.SignDocDirectAux>): _127.SignDocDirectAux;
                fromAmino(object: _127.SignDocDirectAuxAmino): _127.SignDocDirectAux;
                toAmino(message: _127.SignDocDirectAux): _127.SignDocDirectAuxAmino;
                fromAminoMsg(object: _127.SignDocDirectAuxAminoMsg): _127.SignDocDirectAux;
                toAminoMsg(message: _127.SignDocDirectAux): _127.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _127.SignDocDirectAuxProtoMsg): _127.SignDocDirectAux;
                toProto(message: _127.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _127.SignDocDirectAux): _127.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _127.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.TxBody;
                fromPartial(object: Partial<_127.TxBody>): _127.TxBody;
                fromAmino(object: _127.TxBodyAmino): _127.TxBody;
                toAmino(message: _127.TxBody): _127.TxBodyAmino;
                fromAminoMsg(object: _127.TxBodyAminoMsg): _127.TxBody;
                toAminoMsg(message: _127.TxBody): _127.TxBodyAminoMsg;
                fromProtoMsg(message: _127.TxBodyProtoMsg): _127.TxBody;
                toProto(message: _127.TxBody): Uint8Array;
                toProtoMsg(message: _127.TxBody): _127.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _127.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.AuthInfo;
                fromPartial(object: Partial<_127.AuthInfo>): _127.AuthInfo;
                fromAmino(object: _127.AuthInfoAmino): _127.AuthInfo;
                toAmino(message: _127.AuthInfo): _127.AuthInfoAmino;
                fromAminoMsg(object: _127.AuthInfoAminoMsg): _127.AuthInfo;
                toAminoMsg(message: _127.AuthInfo): _127.AuthInfoAminoMsg;
                fromProtoMsg(message: _127.AuthInfoProtoMsg): _127.AuthInfo;
                toProto(message: _127.AuthInfo): Uint8Array;
                toProtoMsg(message: _127.AuthInfo): _127.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _127.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.SignerInfo;
                fromPartial(object: Partial<_127.SignerInfo>): _127.SignerInfo;
                fromAmino(object: _127.SignerInfoAmino): _127.SignerInfo;
                toAmino(message: _127.SignerInfo): _127.SignerInfoAmino;
                fromAminoMsg(object: _127.SignerInfoAminoMsg): _127.SignerInfo;
                toAminoMsg(message: _127.SignerInfo): _127.SignerInfoAminoMsg;
                fromProtoMsg(message: _127.SignerInfoProtoMsg): _127.SignerInfo;
                toProto(message: _127.SignerInfo): Uint8Array;
                toProtoMsg(message: _127.SignerInfo): _127.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _127.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ModeInfo;
                fromPartial(object: Partial<_127.ModeInfo>): _127.ModeInfo;
                fromAmino(object: _127.ModeInfoAmino): _127.ModeInfo;
                toAmino(message: _127.ModeInfo): _127.ModeInfoAmino;
                fromAminoMsg(object: _127.ModeInfoAminoMsg): _127.ModeInfo;
                toAminoMsg(message: _127.ModeInfo): _127.ModeInfoAminoMsg;
                fromProtoMsg(message: _127.ModeInfoProtoMsg): _127.ModeInfo;
                toProto(message: _127.ModeInfo): Uint8Array;
                toProtoMsg(message: _127.ModeInfo): _127.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _127.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ModeInfo_Single;
                fromPartial(object: Partial<_127.ModeInfo_Single>): _127.ModeInfo_Single;
                fromAmino(object: _127.ModeInfo_SingleAmino): _127.ModeInfo_Single;
                toAmino(message: _127.ModeInfo_Single): _127.ModeInfo_SingleAmino;
                fromAminoMsg(object: _127.ModeInfo_SingleAminoMsg): _127.ModeInfo_Single;
                toAminoMsg(message: _127.ModeInfo_Single): _127.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _127.ModeInfo_SingleProtoMsg): _127.ModeInfo_Single;
                toProto(message: _127.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _127.ModeInfo_Single): _127.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _127.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ModeInfo_Multi;
                fromPartial(object: Partial<_127.ModeInfo_Multi>): _127.ModeInfo_Multi;
                fromAmino(object: _127.ModeInfo_MultiAmino): _127.ModeInfo_Multi;
                toAmino(message: _127.ModeInfo_Multi): _127.ModeInfo_MultiAmino;
                fromAminoMsg(object: _127.ModeInfo_MultiAminoMsg): _127.ModeInfo_Multi;
                toAminoMsg(message: _127.ModeInfo_Multi): _127.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _127.ModeInfo_MultiProtoMsg): _127.ModeInfo_Multi;
                toProto(message: _127.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _127.ModeInfo_Multi): _127.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _127.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Fee;
                fromPartial(object: Partial<_127.Fee>): _127.Fee;
                fromAmino(object: _127.FeeAmino): _127.Fee;
                toAmino(message: _127.Fee): _127.FeeAmino;
                fromAminoMsg(object: _127.FeeAminoMsg): _127.Fee;
                toAminoMsg(message: _127.Fee): _127.FeeAminoMsg;
                fromProtoMsg(message: _127.FeeProtoMsg): _127.Fee;
                toProto(message: _127.Fee): Uint8Array;
                toProtoMsg(message: _127.Fee): _127.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _127.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.Tip;
                fromPartial(object: Partial<_127.Tip>): _127.Tip;
                fromAmino(object: _127.TipAmino): _127.Tip;
                toAmino(message: _127.Tip): _127.TipAmino;
                fromAminoMsg(object: _127.TipAminoMsg): _127.Tip;
                toAminoMsg(message: _127.Tip): _127.TipAminoMsg;
                fromProtoMsg(message: _127.TipProtoMsg): _127.Tip;
                toProto(message: _127.Tip): Uint8Array;
                toProtoMsg(message: _127.Tip): _127.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _127.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.AuxSignerData;
                fromPartial(object: Partial<_127.AuxSignerData>): _127.AuxSignerData;
                fromAmino(object: _127.AuxSignerDataAmino): _127.AuxSignerData;
                toAmino(message: _127.AuxSignerData): _127.AuxSignerDataAmino;
                fromAminoMsg(object: _127.AuxSignerDataAminoMsg): _127.AuxSignerData;
                toAminoMsg(message: _127.AuxSignerData): _127.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _127.AuxSignerDataProtoMsg): _127.AuxSignerData;
                toProto(message: _127.AuxSignerData): Uint8Array;
                toProtoMsg(message: _127.AuxSignerData): _127.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _126.OrderBy;
            orderByToJSON(object: _126.OrderBy): string;
            broadcastModeFromJSON(object: any): _126.BroadcastMode;
            broadcastModeToJSON(object: _126.BroadcastMode): string;
            OrderBy: typeof _126.OrderBy;
            OrderBySDKType: typeof _126.OrderBy;
            OrderByAmino: typeof _126.OrderBy;
            BroadcastMode: typeof _126.BroadcastMode;
            BroadcastModeSDKType: typeof _126.BroadcastMode;
            BroadcastModeAmino: typeof _126.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _126.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetTxsEventRequest;
                fromPartial(object: Partial<_126.GetTxsEventRequest>): _126.GetTxsEventRequest;
                fromAmino(object: _126.GetTxsEventRequestAmino): _126.GetTxsEventRequest;
                toAmino(message: _126.GetTxsEventRequest): _126.GetTxsEventRequestAmino;
                fromAminoMsg(object: _126.GetTxsEventRequestAminoMsg): _126.GetTxsEventRequest;
                toAminoMsg(message: _126.GetTxsEventRequest): _126.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _126.GetTxsEventRequestProtoMsg): _126.GetTxsEventRequest;
                toProto(message: _126.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _126.GetTxsEventRequest): _126.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _126.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetTxsEventResponse;
                fromPartial(object: Partial<_126.GetTxsEventResponse>): _126.GetTxsEventResponse;
                fromAmino(object: _126.GetTxsEventResponseAmino): _126.GetTxsEventResponse;
                toAmino(message: _126.GetTxsEventResponse): _126.GetTxsEventResponseAmino;
                fromAminoMsg(object: _126.GetTxsEventResponseAminoMsg): _126.GetTxsEventResponse;
                toAminoMsg(message: _126.GetTxsEventResponse): _126.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _126.GetTxsEventResponseProtoMsg): _126.GetTxsEventResponse;
                toProto(message: _126.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _126.GetTxsEventResponse): _126.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _126.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.BroadcastTxRequest;
                fromPartial(object: Partial<_126.BroadcastTxRequest>): _126.BroadcastTxRequest;
                fromAmino(object: _126.BroadcastTxRequestAmino): _126.BroadcastTxRequest;
                toAmino(message: _126.BroadcastTxRequest): _126.BroadcastTxRequestAmino;
                fromAminoMsg(object: _126.BroadcastTxRequestAminoMsg): _126.BroadcastTxRequest;
                toAminoMsg(message: _126.BroadcastTxRequest): _126.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _126.BroadcastTxRequestProtoMsg): _126.BroadcastTxRequest;
                toProto(message: _126.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _126.BroadcastTxRequest): _126.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _126.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.BroadcastTxResponse;
                fromPartial(object: Partial<_126.BroadcastTxResponse>): _126.BroadcastTxResponse;
                fromAmino(object: _126.BroadcastTxResponseAmino): _126.BroadcastTxResponse;
                toAmino(message: _126.BroadcastTxResponse): _126.BroadcastTxResponseAmino;
                fromAminoMsg(object: _126.BroadcastTxResponseAminoMsg): _126.BroadcastTxResponse;
                toAminoMsg(message: _126.BroadcastTxResponse): _126.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _126.BroadcastTxResponseProtoMsg): _126.BroadcastTxResponse;
                toProto(message: _126.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _126.BroadcastTxResponse): _126.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _126.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SimulateRequest;
                fromPartial(object: Partial<_126.SimulateRequest>): _126.SimulateRequest;
                fromAmino(object: _126.SimulateRequestAmino): _126.SimulateRequest;
                toAmino(message: _126.SimulateRequest): _126.SimulateRequestAmino;
                fromAminoMsg(object: _126.SimulateRequestAminoMsg): _126.SimulateRequest;
                toAminoMsg(message: _126.SimulateRequest): _126.SimulateRequestAminoMsg;
                fromProtoMsg(message: _126.SimulateRequestProtoMsg): _126.SimulateRequest;
                toProto(message: _126.SimulateRequest): Uint8Array;
                toProtoMsg(message: _126.SimulateRequest): _126.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _126.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.SimulateResponse;
                fromPartial(object: Partial<_126.SimulateResponse>): _126.SimulateResponse;
                fromAmino(object: _126.SimulateResponseAmino): _126.SimulateResponse;
                toAmino(message: _126.SimulateResponse): _126.SimulateResponseAmino;
                fromAminoMsg(object: _126.SimulateResponseAminoMsg): _126.SimulateResponse;
                toAminoMsg(message: _126.SimulateResponse): _126.SimulateResponseAminoMsg;
                fromProtoMsg(message: _126.SimulateResponseProtoMsg): _126.SimulateResponse;
                toProto(message: _126.SimulateResponse): Uint8Array;
                toProtoMsg(message: _126.SimulateResponse): _126.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _126.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetTxRequest;
                fromPartial(object: Partial<_126.GetTxRequest>): _126.GetTxRequest;
                fromAmino(object: _126.GetTxRequestAmino): _126.GetTxRequest;
                toAmino(message: _126.GetTxRequest): _126.GetTxRequestAmino;
                fromAminoMsg(object: _126.GetTxRequestAminoMsg): _126.GetTxRequest;
                toAminoMsg(message: _126.GetTxRequest): _126.GetTxRequestAminoMsg;
                fromProtoMsg(message: _126.GetTxRequestProtoMsg): _126.GetTxRequest;
                toProto(message: _126.GetTxRequest): Uint8Array;
                toProtoMsg(message: _126.GetTxRequest): _126.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _126.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetTxResponse;
                fromPartial(object: Partial<_126.GetTxResponse>): _126.GetTxResponse;
                fromAmino(object: _126.GetTxResponseAmino): _126.GetTxResponse;
                toAmino(message: _126.GetTxResponse): _126.GetTxResponseAmino;
                fromAminoMsg(object: _126.GetTxResponseAminoMsg): _126.GetTxResponse;
                toAminoMsg(message: _126.GetTxResponse): _126.GetTxResponseAminoMsg;
                fromProtoMsg(message: _126.GetTxResponseProtoMsg): _126.GetTxResponse;
                toProto(message: _126.GetTxResponse): Uint8Array;
                toProtoMsg(message: _126.GetTxResponse): _126.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _126.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_126.GetBlockWithTxsRequest>): _126.GetBlockWithTxsRequest;
                fromAmino(object: _126.GetBlockWithTxsRequestAmino): _126.GetBlockWithTxsRequest;
                toAmino(message: _126.GetBlockWithTxsRequest): _126.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _126.GetBlockWithTxsRequestAminoMsg): _126.GetBlockWithTxsRequest;
                toAminoMsg(message: _126.GetBlockWithTxsRequest): _126.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _126.GetBlockWithTxsRequestProtoMsg): _126.GetBlockWithTxsRequest;
                toProto(message: _126.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _126.GetBlockWithTxsRequest): _126.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _126.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_126.GetBlockWithTxsResponse>): _126.GetBlockWithTxsResponse;
                fromAmino(object: _126.GetBlockWithTxsResponseAmino): _126.GetBlockWithTxsResponse;
                toAmino(message: _126.GetBlockWithTxsResponse): _126.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _126.GetBlockWithTxsResponseAminoMsg): _126.GetBlockWithTxsResponse;
                toAminoMsg(message: _126.GetBlockWithTxsResponse): _126.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _126.GetBlockWithTxsResponseProtoMsg): _126.GetBlockWithTxsResponse;
                toProto(message: _126.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _126.GetBlockWithTxsResponse): _126.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            QueryClientImpl: typeof _288.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _128.QueryCurrentPlanRequest): Promise<_128.QueryCurrentPlanResponse>;
                appliedPlan(request: _128.QueryAppliedPlanRequest): Promise<_128.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _128.QueryUpgradedConsensusStateRequest): Promise<_128.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _128.QueryModuleVersionsRequest): Promise<_128.QueryModuleVersionsResponse>;
                authority(request?: _128.QueryAuthorityRequest): Promise<_128.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _269.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _129.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _129.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _129.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _129.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _129.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _129.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _129.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _129.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _129.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _129.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _129.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _129.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _129.MsgSoftwareUpgrade) => _129.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _129.MsgSoftwareUpgradeAmino) => _129.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _129.MsgCancelUpgrade) => _129.MsgCancelUpgradeAmino;
                    fromAmino: (object: _129.MsgCancelUpgradeAmino) => _129.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _130.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.Plan;
                fromPartial(object: Partial<_130.Plan>): _130.Plan;
                fromAmino(object: _130.PlanAmino): _130.Plan;
                toAmino(message: _130.Plan): _130.PlanAmino;
                fromAminoMsg(object: _130.PlanAminoMsg): _130.Plan;
                toAminoMsg(message: _130.Plan): _130.PlanAminoMsg;
                fromProtoMsg(message: _130.PlanProtoMsg): _130.Plan;
                toProto(message: _130.Plan): Uint8Array;
                toProtoMsg(message: _130.Plan): _130.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _130.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_130.SoftwareUpgradeProposal>): _130.SoftwareUpgradeProposal;
                fromAmino(object: _130.SoftwareUpgradeProposalAmino): _130.SoftwareUpgradeProposal;
                toAmino(message: _130.SoftwareUpgradeProposal): _130.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _130.SoftwareUpgradeProposalAminoMsg): _130.SoftwareUpgradeProposal;
                toAminoMsg(message: _130.SoftwareUpgradeProposal): _130.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _130.SoftwareUpgradeProposalProtoMsg): _130.SoftwareUpgradeProposal;
                toProto(message: _130.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _130.SoftwareUpgradeProposal): _130.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _130.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_130.CancelSoftwareUpgradeProposal>): _130.CancelSoftwareUpgradeProposal;
                fromAmino(object: _130.CancelSoftwareUpgradeProposalAmino): _130.CancelSoftwareUpgradeProposal;
                toAmino(message: _130.CancelSoftwareUpgradeProposal): _130.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _130.CancelSoftwareUpgradeProposalAminoMsg): _130.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _130.CancelSoftwareUpgradeProposal): _130.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _130.CancelSoftwareUpgradeProposalProtoMsg): _130.CancelSoftwareUpgradeProposal;
                toProto(message: _130.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _130.CancelSoftwareUpgradeProposal): _130.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _130.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.ModuleVersion;
                fromPartial(object: Partial<_130.ModuleVersion>): _130.ModuleVersion;
                fromAmino(object: _130.ModuleVersionAmino): _130.ModuleVersion;
                toAmino(message: _130.ModuleVersion): _130.ModuleVersionAmino;
                fromAminoMsg(object: _130.ModuleVersionAminoMsg): _130.ModuleVersion;
                toAminoMsg(message: _130.ModuleVersion): _130.ModuleVersionAminoMsg;
                fromProtoMsg(message: _130.ModuleVersionProtoMsg): _130.ModuleVersion;
                toProto(message: _130.ModuleVersion): Uint8Array;
                toProtoMsg(message: _130.ModuleVersion): _130.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _129.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_129.MsgSoftwareUpgrade>): _129.MsgSoftwareUpgrade;
                fromAmino(object: _129.MsgSoftwareUpgradeAmino): _129.MsgSoftwareUpgrade;
                toAmino(message: _129.MsgSoftwareUpgrade): _129.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _129.MsgSoftwareUpgradeAminoMsg): _129.MsgSoftwareUpgrade;
                toAminoMsg(message: _129.MsgSoftwareUpgrade): _129.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _129.MsgSoftwareUpgradeProtoMsg): _129.MsgSoftwareUpgrade;
                toProto(message: _129.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _129.MsgSoftwareUpgrade): _129.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _129.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_129.MsgSoftwareUpgradeResponse>): _129.MsgSoftwareUpgradeResponse;
                fromAmino(_: _129.MsgSoftwareUpgradeResponseAmino): _129.MsgSoftwareUpgradeResponse;
                toAmino(_: _129.MsgSoftwareUpgradeResponse): _129.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _129.MsgSoftwareUpgradeResponseAminoMsg): _129.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _129.MsgSoftwareUpgradeResponse): _129.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _129.MsgSoftwareUpgradeResponseProtoMsg): _129.MsgSoftwareUpgradeResponse;
                toProto(message: _129.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _129.MsgSoftwareUpgradeResponse): _129.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _129.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgCancelUpgrade;
                fromPartial(object: Partial<_129.MsgCancelUpgrade>): _129.MsgCancelUpgrade;
                fromAmino(object: _129.MsgCancelUpgradeAmino): _129.MsgCancelUpgrade;
                toAmino(message: _129.MsgCancelUpgrade): _129.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _129.MsgCancelUpgradeAminoMsg): _129.MsgCancelUpgrade;
                toAminoMsg(message: _129.MsgCancelUpgrade): _129.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _129.MsgCancelUpgradeProtoMsg): _129.MsgCancelUpgrade;
                toProto(message: _129.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _129.MsgCancelUpgrade): _129.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _129.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_129.MsgCancelUpgradeResponse>): _129.MsgCancelUpgradeResponse;
                fromAmino(_: _129.MsgCancelUpgradeResponseAmino): _129.MsgCancelUpgradeResponse;
                toAmino(_: _129.MsgCancelUpgradeResponse): _129.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _129.MsgCancelUpgradeResponseAminoMsg): _129.MsgCancelUpgradeResponse;
                toAminoMsg(message: _129.MsgCancelUpgradeResponse): _129.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _129.MsgCancelUpgradeResponseProtoMsg): _129.MsgCancelUpgradeResponse;
                toProto(message: _129.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _129.MsgCancelUpgradeResponse): _129.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _128.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_128.QueryCurrentPlanRequest>): _128.QueryCurrentPlanRequest;
                fromAmino(_: _128.QueryCurrentPlanRequestAmino): _128.QueryCurrentPlanRequest;
                toAmino(_: _128.QueryCurrentPlanRequest): _128.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _128.QueryCurrentPlanRequestAminoMsg): _128.QueryCurrentPlanRequest;
                toAminoMsg(message: _128.QueryCurrentPlanRequest): _128.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _128.QueryCurrentPlanRequestProtoMsg): _128.QueryCurrentPlanRequest;
                toProto(message: _128.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _128.QueryCurrentPlanRequest): _128.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _128.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_128.QueryCurrentPlanResponse>): _128.QueryCurrentPlanResponse;
                fromAmino(object: _128.QueryCurrentPlanResponseAmino): _128.QueryCurrentPlanResponse;
                toAmino(message: _128.QueryCurrentPlanResponse): _128.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _128.QueryCurrentPlanResponseAminoMsg): _128.QueryCurrentPlanResponse;
                toAminoMsg(message: _128.QueryCurrentPlanResponse): _128.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _128.QueryCurrentPlanResponseProtoMsg): _128.QueryCurrentPlanResponse;
                toProto(message: _128.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _128.QueryCurrentPlanResponse): _128.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _128.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_128.QueryAppliedPlanRequest>): _128.QueryAppliedPlanRequest;
                fromAmino(object: _128.QueryAppliedPlanRequestAmino): _128.QueryAppliedPlanRequest;
                toAmino(message: _128.QueryAppliedPlanRequest): _128.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _128.QueryAppliedPlanRequestAminoMsg): _128.QueryAppliedPlanRequest;
                toAminoMsg(message: _128.QueryAppliedPlanRequest): _128.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _128.QueryAppliedPlanRequestProtoMsg): _128.QueryAppliedPlanRequest;
                toProto(message: _128.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _128.QueryAppliedPlanRequest): _128.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _128.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_128.QueryAppliedPlanResponse>): _128.QueryAppliedPlanResponse;
                fromAmino(object: _128.QueryAppliedPlanResponseAmino): _128.QueryAppliedPlanResponse;
                toAmino(message: _128.QueryAppliedPlanResponse): _128.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _128.QueryAppliedPlanResponseAminoMsg): _128.QueryAppliedPlanResponse;
                toAminoMsg(message: _128.QueryAppliedPlanResponse): _128.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _128.QueryAppliedPlanResponseProtoMsg): _128.QueryAppliedPlanResponse;
                toProto(message: _128.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _128.QueryAppliedPlanResponse): _128.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _128.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_128.QueryUpgradedConsensusStateRequest>): _128.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _128.QueryUpgradedConsensusStateRequestAmino): _128.QueryUpgradedConsensusStateRequest;
                toAmino(message: _128.QueryUpgradedConsensusStateRequest): _128.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _128.QueryUpgradedConsensusStateRequestAminoMsg): _128.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _128.QueryUpgradedConsensusStateRequest): _128.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _128.QueryUpgradedConsensusStateRequestProtoMsg): _128.QueryUpgradedConsensusStateRequest;
                toProto(message: _128.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _128.QueryUpgradedConsensusStateRequest): _128.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _128.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_128.QueryUpgradedConsensusStateResponse>): _128.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _128.QueryUpgradedConsensusStateResponseAmino): _128.QueryUpgradedConsensusStateResponse;
                toAmino(message: _128.QueryUpgradedConsensusStateResponse): _128.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _128.QueryUpgradedConsensusStateResponseAminoMsg): _128.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _128.QueryUpgradedConsensusStateResponse): _128.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _128.QueryUpgradedConsensusStateResponseProtoMsg): _128.QueryUpgradedConsensusStateResponse;
                toProto(message: _128.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _128.QueryUpgradedConsensusStateResponse): _128.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _128.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_128.QueryModuleVersionsRequest>): _128.QueryModuleVersionsRequest;
                fromAmino(object: _128.QueryModuleVersionsRequestAmino): _128.QueryModuleVersionsRequest;
                toAmino(message: _128.QueryModuleVersionsRequest): _128.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _128.QueryModuleVersionsRequestAminoMsg): _128.QueryModuleVersionsRequest;
                toAminoMsg(message: _128.QueryModuleVersionsRequest): _128.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _128.QueryModuleVersionsRequestProtoMsg): _128.QueryModuleVersionsRequest;
                toProto(message: _128.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _128.QueryModuleVersionsRequest): _128.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _128.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_128.QueryModuleVersionsResponse>): _128.QueryModuleVersionsResponse;
                fromAmino(object: _128.QueryModuleVersionsResponseAmino): _128.QueryModuleVersionsResponse;
                toAmino(message: _128.QueryModuleVersionsResponse): _128.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _128.QueryModuleVersionsResponseAminoMsg): _128.QueryModuleVersionsResponse;
                toAminoMsg(message: _128.QueryModuleVersionsResponse): _128.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _128.QueryModuleVersionsResponseProtoMsg): _128.QueryModuleVersionsResponse;
                toProto(message: _128.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _128.QueryModuleVersionsResponse): _128.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _128.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _128.QueryAuthorityRequest;
                fromPartial(_: Partial<_128.QueryAuthorityRequest>): _128.QueryAuthorityRequest;
                fromAmino(_: _128.QueryAuthorityRequestAmino): _128.QueryAuthorityRequest;
                toAmino(_: _128.QueryAuthorityRequest): _128.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _128.QueryAuthorityRequestAminoMsg): _128.QueryAuthorityRequest;
                toAminoMsg(message: _128.QueryAuthorityRequest): _128.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _128.QueryAuthorityRequestProtoMsg): _128.QueryAuthorityRequest;
                toProto(message: _128.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _128.QueryAuthorityRequest): _128.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _128.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.QueryAuthorityResponse;
                fromPartial(object: Partial<_128.QueryAuthorityResponse>): _128.QueryAuthorityResponse;
                fromAmino(object: _128.QueryAuthorityResponseAmino): _128.QueryAuthorityResponse;
                toAmino(message: _128.QueryAuthorityResponse): _128.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _128.QueryAuthorityResponseAminoMsg): _128.QueryAuthorityResponse;
                toAminoMsg(message: _128.QueryAuthorityResponse): _128.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _128.QueryAuthorityResponseProtoMsg): _128.QueryAuthorityResponse;
                toProto(message: _128.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _128.QueryAuthorityResponse): _128.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _302.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _131.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _131.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _131.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _131.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _131.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _131.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _131.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _131.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _131.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _131.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _131.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _131.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _131.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _131.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _131.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _131.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _131.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _131.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreateVestingAccount) => _131.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _131.MsgCreateVestingAccountAmino) => _131.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreatePermanentLockedAccount) => _131.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _131.MsgCreatePermanentLockedAccountAmino) => _131.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreatePeriodicVestingAccount) => _131.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _131.MsgCreatePeriodicVestingAccountAmino) => _131.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _132.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.BaseVestingAccount;
                fromPartial(object: Partial<_132.BaseVestingAccount>): _132.BaseVestingAccount;
                fromAmino(object: _132.BaseVestingAccountAmino): _132.BaseVestingAccount;
                toAmino(message: _132.BaseVestingAccount): _132.BaseVestingAccountAmino;
                fromAminoMsg(object: _132.BaseVestingAccountAminoMsg): _132.BaseVestingAccount;
                toAminoMsg(message: _132.BaseVestingAccount): _132.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _132.BaseVestingAccountProtoMsg): _132.BaseVestingAccount;
                toProto(message: _132.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _132.BaseVestingAccount): _132.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _132.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.ContinuousVestingAccount;
                fromPartial(object: Partial<_132.ContinuousVestingAccount>): _132.ContinuousVestingAccount;
                fromAmino(object: _132.ContinuousVestingAccountAmino): _132.ContinuousVestingAccount;
                toAmino(message: _132.ContinuousVestingAccount): _132.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _132.ContinuousVestingAccountAminoMsg): _132.ContinuousVestingAccount;
                toAminoMsg(message: _132.ContinuousVestingAccount): _132.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _132.ContinuousVestingAccountProtoMsg): _132.ContinuousVestingAccount;
                toProto(message: _132.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _132.ContinuousVestingAccount): _132.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _132.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.DelayedVestingAccount;
                fromPartial(object: Partial<_132.DelayedVestingAccount>): _132.DelayedVestingAccount;
                fromAmino(object: _132.DelayedVestingAccountAmino): _132.DelayedVestingAccount;
                toAmino(message: _132.DelayedVestingAccount): _132.DelayedVestingAccountAmino;
                fromAminoMsg(object: _132.DelayedVestingAccountAminoMsg): _132.DelayedVestingAccount;
                toAminoMsg(message: _132.DelayedVestingAccount): _132.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _132.DelayedVestingAccountProtoMsg): _132.DelayedVestingAccount;
                toProto(message: _132.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _132.DelayedVestingAccount): _132.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _132.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.Period;
                fromPartial(object: Partial<_132.Period>): _132.Period;
                fromAmino(object: _132.PeriodAmino): _132.Period;
                toAmino(message: _132.Period): _132.PeriodAmino;
                fromAminoMsg(object: _132.PeriodAminoMsg): _132.Period;
                toAminoMsg(message: _132.Period): _132.PeriodAminoMsg;
                fromProtoMsg(message: _132.PeriodProtoMsg): _132.Period;
                toProto(message: _132.Period): Uint8Array;
                toProtoMsg(message: _132.Period): _132.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _132.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.PeriodicVestingAccount;
                fromPartial(object: Partial<_132.PeriodicVestingAccount>): _132.PeriodicVestingAccount;
                fromAmino(object: _132.PeriodicVestingAccountAmino): _132.PeriodicVestingAccount;
                toAmino(message: _132.PeriodicVestingAccount): _132.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _132.PeriodicVestingAccountAminoMsg): _132.PeriodicVestingAccount;
                toAminoMsg(message: _132.PeriodicVestingAccount): _132.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _132.PeriodicVestingAccountProtoMsg): _132.PeriodicVestingAccount;
                toProto(message: _132.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _132.PeriodicVestingAccount): _132.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _132.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.PermanentLockedAccount;
                fromPartial(object: Partial<_132.PermanentLockedAccount>): _132.PermanentLockedAccount;
                fromAmino(object: _132.PermanentLockedAccountAmino): _132.PermanentLockedAccount;
                toAmino(message: _132.PermanentLockedAccount): _132.PermanentLockedAccountAmino;
                fromAminoMsg(object: _132.PermanentLockedAccountAminoMsg): _132.PermanentLockedAccount;
                toAminoMsg(message: _132.PermanentLockedAccount): _132.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _132.PermanentLockedAccountProtoMsg): _132.PermanentLockedAccount;
                toProto(message: _132.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _132.PermanentLockedAccount): _132.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _131.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgCreateVestingAccount;
                fromPartial(object: Partial<_131.MsgCreateVestingAccount>): _131.MsgCreateVestingAccount;
                fromAmino(object: _131.MsgCreateVestingAccountAmino): _131.MsgCreateVestingAccount;
                toAmino(message: _131.MsgCreateVestingAccount): _131.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _131.MsgCreateVestingAccountAminoMsg): _131.MsgCreateVestingAccount;
                toAminoMsg(message: _131.MsgCreateVestingAccount): _131.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _131.MsgCreateVestingAccountProtoMsg): _131.MsgCreateVestingAccount;
                toProto(message: _131.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _131.MsgCreateVestingAccount): _131.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _131.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_131.MsgCreateVestingAccountResponse>): _131.MsgCreateVestingAccountResponse;
                fromAmino(_: _131.MsgCreateVestingAccountResponseAmino): _131.MsgCreateVestingAccountResponse;
                toAmino(_: _131.MsgCreateVestingAccountResponse): _131.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _131.MsgCreateVestingAccountResponseAminoMsg): _131.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _131.MsgCreateVestingAccountResponse): _131.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _131.MsgCreateVestingAccountResponseProtoMsg): _131.MsgCreateVestingAccountResponse;
                toProto(message: _131.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreateVestingAccountResponse): _131.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _131.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_131.MsgCreatePermanentLockedAccount>): _131.MsgCreatePermanentLockedAccount;
                fromAmino(object: _131.MsgCreatePermanentLockedAccountAmino): _131.MsgCreatePermanentLockedAccount;
                toAmino(message: _131.MsgCreatePermanentLockedAccount): _131.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _131.MsgCreatePermanentLockedAccountAminoMsg): _131.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _131.MsgCreatePermanentLockedAccount): _131.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _131.MsgCreatePermanentLockedAccountProtoMsg): _131.MsgCreatePermanentLockedAccount;
                toProto(message: _131.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _131.MsgCreatePermanentLockedAccount): _131.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _131.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_131.MsgCreatePermanentLockedAccountResponse>): _131.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _131.MsgCreatePermanentLockedAccountResponseAmino): _131.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _131.MsgCreatePermanentLockedAccountResponse): _131.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _131.MsgCreatePermanentLockedAccountResponseAminoMsg): _131.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _131.MsgCreatePermanentLockedAccountResponse): _131.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _131.MsgCreatePermanentLockedAccountResponseProtoMsg): _131.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _131.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreatePermanentLockedAccountResponse): _131.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _131.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_131.MsgCreatePeriodicVestingAccount>): _131.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _131.MsgCreatePeriodicVestingAccountAmino): _131.MsgCreatePeriodicVestingAccount;
                toAmino(message: _131.MsgCreatePeriodicVestingAccount): _131.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _131.MsgCreatePeriodicVestingAccountAminoMsg): _131.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _131.MsgCreatePeriodicVestingAccount): _131.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _131.MsgCreatePeriodicVestingAccountProtoMsg): _131.MsgCreatePeriodicVestingAccount;
                toProto(message: _131.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _131.MsgCreatePeriodicVestingAccount): _131.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _131.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_131.MsgCreatePeriodicVestingAccountResponse>): _131.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _131.MsgCreatePeriodicVestingAccountResponseAmino): _131.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _131.MsgCreatePeriodicVestingAccountResponse): _131.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _131.MsgCreatePeriodicVestingAccountResponseAminoMsg): _131.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _131.MsgCreatePeriodicVestingAccountResponse): _131.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _131.MsgCreatePeriodicVestingAccountResponseProtoMsg): _131.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _131.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreatePeriodicVestingAccountResponse): _131.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _289.MsgClientImpl;
                };
                bank: {
                    v1beta1: _290.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _291.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _292.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _293.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _294.MsgClientImpl;
                };
                gov: {
                    v1: _295.MsgClientImpl;
                    v1beta1: _296.MsgClientImpl;
                };
                group: {
                    v1: _297.MsgClientImpl;
                };
                nft: {
                    v1beta1: _298.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _299.MsgClientImpl;
                };
                staking: {
                    v1beta1: _300.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _301.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _302.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _45.QueryConfigRequest): Promise<_45.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _48.QueryAccountsRequest): Promise<_48.QueryAccountsResponse>;
                        account(request: _48.QueryAccountRequest): Promise<_48.QueryAccountResponse>;
                        accountAddressByID(request: _48.QueryAccountAddressByIDRequest): Promise<_48.QueryAccountAddressByIDResponse>;
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        moduleAccounts(request?: _48.QueryModuleAccountsRequest): Promise<_48.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _48.QueryModuleAccountByNameRequest): Promise<_48.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _48.Bech32PrefixRequest): Promise<_48.Bech32PrefixResponse>;
                        addressBytesToString(request: _48.AddressBytesToStringRequest): Promise<_48.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _48.AddressStringToBytesRequest): Promise<_48.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _52.QueryGrantsRequest): Promise<_52.QueryGrantsResponse>;
                        granterGrants(request: _52.QueryGranterGrantsRequest): Promise<_52.QueryGranterGrantsResponse>;
                        granteeGrants(request: _52.QueryGranteeGrantsRequest): Promise<_52.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _57.QueryBalanceRequest): Promise<_57.QueryBalanceResponse>;
                        allBalances(request: _57.QueryAllBalancesRequest): Promise<_57.QueryAllBalancesResponse>;
                        spendableBalances(request: _57.QuerySpendableBalancesRequest): Promise<_57.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _57.QueryTotalSupplyRequest): Promise<_57.QueryTotalSupplyResponse>;
                        supplyOf(request: _57.QuerySupplyOfRequest): Promise<_57.QuerySupplyOfResponse>;
                        params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        denomMetadata(request: _57.QueryDenomMetadataRequest): Promise<_57.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _57.QueryDenomsMetadataRequest): Promise<_57.QueryDenomsMetadataResponse>;
                        denomOwners(request: _57.QueryDenomOwnersRequest): Promise<_57.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _61.ConfigRequest): Promise<_61.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _68.GetNodeInfoRequest): Promise<_68.GetNodeInfoResponse>;
                            getSyncing(request?: _68.GetSyncingRequest): Promise<_68.GetSyncingResponse>;
                            getLatestBlock(request?: _68.GetLatestBlockRequest): Promise<_68.GetLatestBlockResponse>;
                            getBlockByHeight(request: _68.GetBlockByHeightRequest): Promise<_68.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _68.GetLatestValidatorSetRequest): Promise<_68.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _68.GetValidatorSetByHeightRequest): Promise<_68.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _68.ABCIQueryRequest): Promise<_68.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _83.QueryValidatorOutstandingRewardsRequest): Promise<_83.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _83.QueryValidatorCommissionRequest): Promise<_83.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _83.QueryValidatorSlashesRequest): Promise<_83.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _83.QueryDelegationRewardsRequest): Promise<_83.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _83.QueryDelegationTotalRewardsRequest): Promise<_83.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _83.QueryDelegatorValidatorsRequest): Promise<_83.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _83.QueryDelegatorWithdrawAddressRequest): Promise<_83.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _83.QueryCommunityPoolRequest): Promise<_83.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _87.QueryEvidenceRequest): Promise<_87.QueryEvidenceResponse>;
                        allEvidence(request?: _87.QueryAllEvidenceRequest): Promise<_87.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _91.QueryAllowanceRequest): Promise<_91.QueryAllowanceResponse>;
                        allowances(request: _91.QueryAllowancesRequest): Promise<_91.QueryAllowancesResponse>;
                        allowancesByGranter(request: _91.QueryAllowancesByGranterRequest): Promise<_91.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _96.QueryProposalRequest): Promise<_96.QueryProposalResponse>;
                        proposals(request: _96.QueryProposalsRequest): Promise<_96.QueryProposalsResponse>;
                        vote(request: _96.QueryVoteRequest): Promise<_96.QueryVoteResponse>;
                        votes(request: _96.QueryVotesRequest): Promise<_96.QueryVotesResponse>;
                        params(request: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
                        deposit(request: _96.QueryDepositRequest): Promise<_96.QueryDepositResponse>;
                        deposits(request: _96.QueryDepositsRequest): Promise<_96.QueryDepositsResponse>;
                        tallyResult(request: _96.QueryTallyResultRequest): Promise<_96.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _100.QueryProposalRequest): Promise<_100.QueryProposalResponse>;
                        proposals(request: _100.QueryProposalsRequest): Promise<_100.QueryProposalsResponse>;
                        vote(request: _100.QueryVoteRequest): Promise<_100.QueryVoteResponse>;
                        votes(request: _100.QueryVotesRequest): Promise<_100.QueryVotesResponse>;
                        params(request: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                        deposit(request: _100.QueryDepositRequest): Promise<_100.QueryDepositResponse>;
                        deposits(request: _100.QueryDepositsRequest): Promise<_100.QueryDepositsResponse>;
                        tallyResult(request: _100.QueryTallyResultRequest): Promise<_100.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _104.QueryGroupInfoRequest): Promise<_104.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _104.QueryGroupPolicyInfoRequest): Promise<_104.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _104.QueryGroupMembersRequest): Promise<_104.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _104.QueryGroupsByAdminRequest): Promise<_104.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _104.QueryGroupPoliciesByGroupRequest): Promise<_104.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _104.QueryGroupPoliciesByAdminRequest): Promise<_104.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _104.QueryProposalRequest): Promise<_104.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _104.QueryProposalsByGroupPolicyRequest): Promise<_104.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _104.QueryVoteByProposalVoterRequest): Promise<_104.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _104.QueryVotesByProposalRequest): Promise<_104.QueryVotesByProposalResponse>;
                        votesByVoter(request: _104.QueryVotesByVoterRequest): Promise<_104.QueryVotesByVoterResponse>;
                        groupsByMember(request: _104.QueryGroupsByMemberRequest): Promise<_104.QueryGroupsByMemberResponse>;
                        tallyResult(request: _104.QueryTallyResultRequest): Promise<_104.QueryTallyResultResponse>;
                        groups(request?: _104.QueryGroupsRequest): Promise<_104.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _109.QueryParamsRequest): Promise<_109.QueryParamsResponse>;
                        inflation(request?: _109.QueryInflationRequest): Promise<_109.QueryInflationResponse>;
                        annualProvisions(request?: _109.QueryAnnualProvisionsRequest): Promise<_109.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _114.QueryBalanceRequest): Promise<_114.QueryBalanceResponse>;
                        owner(request: _114.QueryOwnerRequest): Promise<_114.QueryOwnerResponse>;
                        supply(request: _114.QuerySupplyRequest): Promise<_114.QuerySupplyResponse>;
                        nFTs(request: _114.QueryNFTsRequest): Promise<_114.QueryNFTsResponse>;
                        nFT(request: _114.QueryNFTRequest): Promise<_114.QueryNFTResponse>;
                        class(request: _114.QueryClassRequest): Promise<_114.QueryClassResponse>;
                        classes(request?: _114.QueryClassesRequest): Promise<_114.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _120.QueryParamsRequest): Promise<_120.QueryParamsResponse>;
                        subspaces(request?: _120.QuerySubspacesRequest): Promise<_120.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                        signingInfo(request: _122.QuerySigningInfoRequest): Promise<_122.QuerySigningInfoResponse>;
                        signingInfos(request?: _122.QuerySigningInfosRequest): Promise<_122.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _38.QueryValidatorsRequest): Promise<_38.QueryValidatorsResponse>;
                        validator(request: _38.QueryValidatorRequest): Promise<_38.QueryValidatorResponse>;
                        validatorDelegations(request: _38.QueryValidatorDelegationsRequest): Promise<_38.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _38.QueryValidatorUnbondingDelegationsRequest): Promise<_38.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _38.QueryDelegationRequest): Promise<_38.QueryDelegationResponse>;
                        unbondingDelegation(request: _38.QueryUnbondingDelegationRequest): Promise<_38.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _38.QueryDelegatorDelegationsRequest): Promise<_38.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _38.QueryDelegatorUnbondingDelegationsRequest): Promise<_38.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _38.QueryRedelegationsRequest): Promise<_38.QueryRedelegationsResponse>;
                        delegatorValidators(request: _38.QueryDelegatorValidatorsRequest): Promise<_38.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _38.QueryDelegatorValidatorRequest): Promise<_38.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _38.QueryHistoricalInfoRequest): Promise<_38.QueryHistoricalInfoResponse>;
                        pool(request?: _38.QueryPoolRequest): Promise<_38.QueryPoolResponse>;
                        params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _126.SimulateRequest): Promise<_126.SimulateResponse>;
                        getTx(request: _126.GetTxRequest): Promise<_126.GetTxResponse>;
                        broadcastTx(request: _126.BroadcastTxRequest): Promise<_126.BroadcastTxResponse>;
                        getTxsEvent(request: _126.GetTxsEventRequest): Promise<_126.GetTxsEventResponse>;
                        getBlockWithTxs(request: _126.GetBlockWithTxsRequest): Promise<_126.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _128.QueryCurrentPlanRequest): Promise<_128.QueryCurrentPlanResponse>;
                        appliedPlan(request: _128.QueryAppliedPlanRequest): Promise<_128.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _128.QueryUpgradedConsensusStateRequest): Promise<_128.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _128.QueryModuleVersionsRequest): Promise<_128.QueryModuleVersionsResponse>;
                        authority(request?: _128.QueryAuthorityRequest): Promise<_128.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _252.LCDQueryClient;
                };
                authz: {
                    v1beta1: _253.LCDQueryClient;
                };
                bank: {
                    v1beta1: _254.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _255.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _256.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _257.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _258.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _259.LCDQueryClient;
                };
                gov: {
                    v1: _260.LCDQueryClient;
                    v1beta1: _261.LCDQueryClient;
                };
                group: {
                    v1: _262.LCDQueryClient;
                };
                mint: {
                    v1beta1: _263.LCDQueryClient;
                };
                nft: {
                    v1beta1: _264.LCDQueryClient;
                };
                params: {
                    v1beta1: _265.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _266.LCDQueryClient;
                };
                staking: {
                    v1beta1: _267.LCDQueryClient;
                };
                tx: {
                    v1beta1: _268.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _269.LCDQueryClient;
                };
            };
        }>;
    };
}
