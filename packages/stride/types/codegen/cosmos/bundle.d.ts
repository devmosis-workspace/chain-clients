import * as _0 from "./staking/v1beta1/lsm_tx";
import * as _1 from "./staking/v1beta1/authz";
import * as _2 from "./staking/v1beta1/genesis";
import * as _3 from "./staking/v1beta1/query";
import * as _4 from "./staking/v1beta1/staking";
import * as _5 from "./staking/v1beta1/tx";
import * as _6 from "./staking/module/v1/module";
import * as _7 from "./app/runtime/v1alpha1/module";
import * as _8 from "./app/v1alpha1/config";
import * as _9 from "./app/v1alpha1/module";
import * as _10 from "./app/v1alpha1/query";
import * as _11 from "./auth/module/v1/module";
import * as _12 from "./auth/v1beta1/auth";
import * as _13 from "./auth/v1beta1/genesis";
import * as _14 from "./auth/v1beta1/query";
import * as _15 from "./auth/v1beta1/tx";
import * as _16 from "./authz/module/v1/module";
import * as _17 from "./authz/v1beta1/authz";
import * as _18 from "./authz/v1beta1/event";
import * as _19 from "./authz/v1beta1/genesis";
import * as _20 from "./authz/v1beta1/query";
import * as _21 from "./authz/v1beta1/tx";
import * as _22 from "./autocli/v1/options";
import * as _23 from "./autocli/v1/query";
import * as _24 from "./bank/module/v1/module";
import * as _25 from "./bank/v1beta1/authz";
import * as _26 from "./bank/v1beta1/bank";
import * as _27 from "./bank/v1beta1/genesis";
import * as _28 from "./bank/v1beta1/query";
import * as _29 from "./bank/v1beta1/tx";
import * as _30 from "./base/abci/v1beta1/abci";
import * as _31 from "./base/kv/v1beta1/kv";
import * as _32 from "./base/node/v1beta1/query";
import * as _33 from "./base/query/v1beta1/pagination";
import * as _34 from "./base/reflection/v1beta1/reflection";
import * as _35 from "./base/reflection/v2alpha1/reflection";
import * as _36 from "./base/snapshots/v1beta1/snapshot";
import * as _37 from "./base/store/v1beta1/commit_info";
import * as _38 from "./base/store/v1beta1/listening";
import * as _39 from "./base/tendermint/v1beta1/query";
import * as _40 from "./base/tendermint/v1beta1/types";
import * as _41 from "./base/v1beta1/coin";
import * as _42 from "./capability/module/v1/module";
import * as _43 from "./capability/v1beta1/capability";
import * as _44 from "./capability/v1beta1/genesis";
import * as _45 from "./consensus/module/v1/module";
import * as _46 from "./consensus/v1/query";
import * as _47 from "./consensus/v1/tx";
import * as _48 from "./crisis/module/v1/module";
import * as _49 from "./crisis/v1beta1/genesis";
import * as _50 from "./crisis/v1beta1/tx";
import * as _51 from "./crypto/ed25519/keys";
import * as _52 from "./crypto/hd/v1/hd";
import * as _53 from "./crypto/keyring/v1/record";
import * as _54 from "./crypto/multisig/keys";
import * as _55 from "./crypto/secp256k1/keys";
import * as _56 from "./crypto/secp256r1/keys";
import * as _57 from "./distribution/module/v1/module";
import * as _58 from "./distribution/v1beta1/distribution";
import * as _59 from "./distribution/v1beta1/genesis";
import * as _60 from "./distribution/v1beta1/query";
import * as _61 from "./distribution/v1beta1/tx";
import * as _62 from "./evidence/module/v1/module";
import * as _63 from "./evidence/v1beta1/evidence";
import * as _64 from "./evidence/v1beta1/genesis";
import * as _65 from "./evidence/v1beta1/query";
import * as _66 from "./evidence/v1beta1/tx";
import * as _67 from "./feegrant/module/v1/module";
import * as _68 from "./feegrant/v1beta1/feegrant";
import * as _69 from "./feegrant/v1beta1/genesis";
import * as _70 from "./feegrant/v1beta1/query";
import * as _71 from "./feegrant/v1beta1/tx";
import * as _72 from "./genutil/module/v1/module";
import * as _73 from "./genutil/v1beta1/genesis";
import * as _74 from "./gov/module/v1/module";
import * as _75 from "./gov/v1/genesis";
import * as _76 from "./gov/v1/gov";
import * as _77 from "./gov/v1/query";
import * as _78 from "./gov/v1/tx";
import * as _79 from "./gov/v1beta1/genesis";
import * as _80 from "./gov/v1beta1/gov";
import * as _81 from "./gov/v1beta1/query";
import * as _82 from "./gov/v1beta1/tx";
import * as _83 from "./group/module/v1/module";
import * as _84 from "./group/v1/events";
import * as _85 from "./group/v1/genesis";
import * as _86 from "./group/v1/query";
import * as _87 from "./group/v1/tx";
import * as _88 from "./group/v1/types";
import * as _89 from "./mint/module/v1/module";
import * as _90 from "./mint/v1beta1/genesis";
import * as _91 from "./mint/v1beta1/mint";
import * as _92 from "./mint/v1beta1/query";
import * as _93 from "./mint/v1beta1/tx";
import * as _95 from "./nft/module/v1/module";
import * as _96 from "./nft/v1beta1/event";
import * as _97 from "./nft/v1beta1/genesis";
import * as _98 from "./nft/v1beta1/nft";
import * as _99 from "./nft/v1beta1/query";
import * as _100 from "./nft/v1beta1/tx";
import * as _101 from "./orm/module/v1alpha1/module";
import * as _102 from "./orm/query/v1alpha1/query";
import * as _103 from "./orm/v1/orm";
import * as _104 from "./orm/v1alpha1/schema";
import * as _105 from "./params/module/v1/module";
import * as _106 from "./params/v1beta1/params";
import * as _107 from "./params/v1beta1/query";
import * as _109 from "./reflection/v1/reflection";
import * as _110 from "./slashing/module/v1/module";
import * as _111 from "./slashing/v1beta1/genesis";
import * as _112 from "./slashing/v1beta1/query";
import * as _113 from "./slashing/v1beta1/slashing";
import * as _114 from "./slashing/v1beta1/tx";
import * as _115 from "./tx/config/v1/config";
import * as _116 from "./tx/signing/v1beta1/signing";
import * as _117 from "./tx/v1beta1/service";
import * as _118 from "./tx/v1beta1/tx";
import * as _119 from "./upgrade/module/v1/module";
import * as _120 from "./upgrade/v1beta1/query";
import * as _121 from "./upgrade/v1beta1/tx";
import * as _122 from "./upgrade/v1beta1/upgrade";
import * as _123 from "./vesting/module/v1/module";
import * as _124 from "./vesting/v1beta1/tx";
import * as _125 from "./vesting/v1beta1/vesting";
import * as _244 from "./auth/v1beta1/query.lcd";
import * as _245 from "./authz/v1beta1/query.lcd";
import * as _246 from "./bank/v1beta1/query.lcd";
import * as _247 from "./base/node/v1beta1/query.lcd";
import * as _248 from "./base/tendermint/v1beta1/query.lcd";
import * as _249 from "./consensus/v1/query.lcd";
import * as _250 from "./distribution/v1beta1/query.lcd";
import * as _251 from "./evidence/v1beta1/query.lcd";
import * as _252 from "./feegrant/v1beta1/query.lcd";
import * as _253 from "./gov/v1/query.lcd";
import * as _254 from "./gov/v1beta1/query.lcd";
import * as _255 from "./group/v1/query.lcd";
import * as _256 from "./mint/v1beta1/query.lcd";
import * as _257 from "./nft/v1beta1/query.lcd";
import * as _258 from "./params/v1beta1/query.lcd";
import * as _259 from "./slashing/v1beta1/query.lcd";
import * as _260 from "./staking/v1beta1/query.lcd";
import * as _261 from "./tx/v1beta1/service.lcd";
import * as _262 from "./upgrade/v1beta1/query.lcd";
import * as _263 from "./app/v1alpha1/query.rpc.Query";
import * as _264 from "./auth/v1beta1/query.rpc.Query";
import * as _265 from "./authz/v1beta1/query.rpc.Query";
import * as _266 from "./autocli/v1/query.rpc.Query";
import * as _267 from "./bank/v1beta1/query.rpc.Query";
import * as _268 from "./base/node/v1beta1/query.rpc.Service";
import * as _269 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _270 from "./consensus/v1/query.rpc.Query";
import * as _271 from "./distribution/v1beta1/query.rpc.Query";
import * as _272 from "./evidence/v1beta1/query.rpc.Query";
import * as _273 from "./feegrant/v1beta1/query.rpc.Query";
import * as _274 from "./gov/v1/query.rpc.Query";
import * as _275 from "./gov/v1beta1/query.rpc.Query";
import * as _276 from "./group/v1/query.rpc.Query";
import * as _277 from "./mint/v1beta1/query.rpc.Query";
import * as _278 from "./nft/v1beta1/query.rpc.Query";
import * as _279 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _280 from "./params/v1beta1/query.rpc.Query";
import * as _281 from "./slashing/v1beta1/query.rpc.Query";
import * as _282 from "./staking/v1beta1/query.rpc.Query";
import * as _283 from "./tx/v1beta1/service.rpc.Service";
import * as _284 from "./upgrade/v1beta1/query.rpc.Query";
import * as _285 from "./auth/v1beta1/tx.rpc.msg";
import * as _286 from "./authz/v1beta1/tx.rpc.msg";
import * as _287 from "./bank/v1beta1/tx.rpc.msg";
import * as _288 from "./consensus/v1/tx.rpc.msg";
import * as _289 from "./crisis/v1beta1/tx.rpc.msg";
import * as _290 from "./distribution/v1beta1/tx.rpc.msg";
import * as _291 from "./evidence/v1beta1/tx.rpc.msg";
import * as _292 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _293 from "./gov/v1/tx.rpc.msg";
import * as _294 from "./gov/v1beta1/tx.rpc.msg";
import * as _295 from "./group/v1/tx.rpc.msg";
import * as _296 from "./mint/v1beta1/tx.rpc.msg";
import * as _297 from "./nft/v1beta1/tx.rpc.msg";
import * as _298 from "./slashing/v1beta1/tx.rpc.msg";
import * as _299 from "./staking/v1beta1/tx.rpc.msg";
import * as _300 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _301 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _3.QueryValidatorsRequest): Promise<_3.QueryValidatorsResponse>;
                validator(request: _3.QueryValidatorRequest): Promise<_3.QueryValidatorResponse>;
                validatorDelegations(request: _3.QueryValidatorDelegationsRequest): Promise<_3.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _3.QueryValidatorUnbondingDelegationsRequest): Promise<_3.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _3.QueryDelegationRequest): Promise<_3.QueryDelegationResponse>;
                unbondingDelegation(request: _3.QueryUnbondingDelegationRequest): Promise<_3.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _3.QueryDelegatorDelegationsRequest): Promise<_3.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _3.QueryDelegatorUnbondingDelegationsRequest): Promise<_3.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _3.QueryRedelegationsRequest): Promise<_3.QueryRedelegationsResponse>;
                delegatorValidators(request: _3.QueryDelegatorValidatorsRequest): Promise<_3.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _3.QueryDelegatorValidatorRequest): Promise<_3.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _3.QueryHistoricalInfoRequest): Promise<_3.QueryHistoricalInfoResponse>;
                pool(request?: _3.QueryPoolRequest): Promise<_3.QueryPoolResponse>;
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _5.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _5.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _5.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _5.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _5.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _5.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _5.MsgCreateValidator): {
                        typeUrl: string;
                        value: _5.MsgCreateValidator;
                    };
                    editValidator(value: _5.MsgEditValidator): {
                        typeUrl: string;
                        value: _5.MsgEditValidator;
                    };
                    delegate(value: _5.MsgDelegate): {
                        typeUrl: string;
                        value: _5.MsgDelegate;
                    };
                    beginRedelegate(value: _5.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _5.MsgBeginRedelegate;
                    };
                    undelegate(value: _5.MsgUndelegate): {
                        typeUrl: string;
                        value: _5.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _5.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _5.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _5.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _5.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _5.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _5.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _5.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _5.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _5.MsgCreateValidator): {
                        typeUrl: string;
                        value: _5.MsgCreateValidator;
                    };
                    editValidator(value: _5.MsgEditValidator): {
                        typeUrl: string;
                        value: _5.MsgEditValidator;
                    };
                    delegate(value: _5.MsgDelegate): {
                        typeUrl: string;
                        value: _5.MsgDelegate;
                    };
                    beginRedelegate(value: _5.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _5.MsgBeginRedelegate;
                    };
                    undelegate(value: _5.MsgUndelegate): {
                        typeUrl: string;
                        value: _5.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _5.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _5.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _5.MsgCreateValidator) => _5.MsgCreateValidatorAmino;
                    fromAmino: (object: _5.MsgCreateValidatorAmino) => _5.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _5.MsgEditValidator) => _5.MsgEditValidatorAmino;
                    fromAmino: (object: _5.MsgEditValidatorAmino) => _5.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _5.MsgDelegate) => _5.MsgDelegateAmino;
                    fromAmino: (object: _5.MsgDelegateAmino) => _5.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _5.MsgBeginRedelegate) => _5.MsgBeginRedelegateAmino;
                    fromAmino: (object: _5.MsgBeginRedelegateAmino) => _5.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _5.MsgUndelegate) => _5.MsgUndelegateAmino;
                    fromAmino: (object: _5.MsgUndelegateAmino) => _5.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _5.MsgCancelUnbondingDelegation) => _5.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _5.MsgCancelUnbondingDelegationAmino) => _5.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _5.MsgUpdateParams) => _5.MsgUpdateParamsAmino;
                    fromAmino: (object: _5.MsgUpdateParamsAmino) => _5.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _5.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgCreateValidator;
                fromPartial(object: Partial<_5.MsgCreateValidator>): _5.MsgCreateValidator;
                fromAmino(object: _5.MsgCreateValidatorAmino): _5.MsgCreateValidator;
                toAmino(message: _5.MsgCreateValidator): _5.MsgCreateValidatorAmino;
                fromAminoMsg(object: _5.MsgCreateValidatorAminoMsg): _5.MsgCreateValidator;
                toAminoMsg(message: _5.MsgCreateValidator): _5.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _5.MsgCreateValidatorProtoMsg): _5.MsgCreateValidator;
                toProto(message: _5.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _5.MsgCreateValidator): _5.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _5.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_5.MsgCreateValidatorResponse>): _5.MsgCreateValidatorResponse;
                fromAmino(_: _5.MsgCreateValidatorResponseAmino): _5.MsgCreateValidatorResponse;
                toAmino(_: _5.MsgCreateValidatorResponse): _5.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _5.MsgCreateValidatorResponseAminoMsg): _5.MsgCreateValidatorResponse;
                toAminoMsg(message: _5.MsgCreateValidatorResponse): _5.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _5.MsgCreateValidatorResponseProtoMsg): _5.MsgCreateValidatorResponse;
                toProto(message: _5.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _5.MsgCreateValidatorResponse): _5.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _5.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgEditValidator;
                fromPartial(object: Partial<_5.MsgEditValidator>): _5.MsgEditValidator;
                fromAmino(object: _5.MsgEditValidatorAmino): _5.MsgEditValidator;
                toAmino(message: _5.MsgEditValidator): _5.MsgEditValidatorAmino;
                fromAminoMsg(object: _5.MsgEditValidatorAminoMsg): _5.MsgEditValidator;
                toAminoMsg(message: _5.MsgEditValidator): _5.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _5.MsgEditValidatorProtoMsg): _5.MsgEditValidator;
                toProto(message: _5.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _5.MsgEditValidator): _5.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _5.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgEditValidatorResponse;
                fromPartial(_: Partial<_5.MsgEditValidatorResponse>): _5.MsgEditValidatorResponse;
                fromAmino(_: _5.MsgEditValidatorResponseAmino): _5.MsgEditValidatorResponse;
                toAmino(_: _5.MsgEditValidatorResponse): _5.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _5.MsgEditValidatorResponseAminoMsg): _5.MsgEditValidatorResponse;
                toAminoMsg(message: _5.MsgEditValidatorResponse): _5.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _5.MsgEditValidatorResponseProtoMsg): _5.MsgEditValidatorResponse;
                toProto(message: _5.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _5.MsgEditValidatorResponse): _5.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _5.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgDelegate;
                fromPartial(object: Partial<_5.MsgDelegate>): _5.MsgDelegate;
                fromAmino(object: _5.MsgDelegateAmino): _5.MsgDelegate;
                toAmino(message: _5.MsgDelegate): _5.MsgDelegateAmino;
                fromAminoMsg(object: _5.MsgDelegateAminoMsg): _5.MsgDelegate;
                toAminoMsg(message: _5.MsgDelegate): _5.MsgDelegateAminoMsg;
                fromProtoMsg(message: _5.MsgDelegateProtoMsg): _5.MsgDelegate;
                toProto(message: _5.MsgDelegate): Uint8Array;
                toProtoMsg(message: _5.MsgDelegate): _5.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _5.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgDelegateResponse;
                fromPartial(_: Partial<_5.MsgDelegateResponse>): _5.MsgDelegateResponse;
                fromAmino(_: _5.MsgDelegateResponseAmino): _5.MsgDelegateResponse;
                toAmino(_: _5.MsgDelegateResponse): _5.MsgDelegateResponseAmino;
                fromAminoMsg(object: _5.MsgDelegateResponseAminoMsg): _5.MsgDelegateResponse;
                toAminoMsg(message: _5.MsgDelegateResponse): _5.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _5.MsgDelegateResponseProtoMsg): _5.MsgDelegateResponse;
                toProto(message: _5.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _5.MsgDelegateResponse): _5.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _5.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgBeginRedelegate;
                fromPartial(object: Partial<_5.MsgBeginRedelegate>): _5.MsgBeginRedelegate;
                fromAmino(object: _5.MsgBeginRedelegateAmino): _5.MsgBeginRedelegate;
                toAmino(message: _5.MsgBeginRedelegate): _5.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _5.MsgBeginRedelegateAminoMsg): _5.MsgBeginRedelegate;
                toAminoMsg(message: _5.MsgBeginRedelegate): _5.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _5.MsgBeginRedelegateProtoMsg): _5.MsgBeginRedelegate;
                toProto(message: _5.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _5.MsgBeginRedelegate): _5.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _5.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_5.MsgBeginRedelegateResponse>): _5.MsgBeginRedelegateResponse;
                fromAmino(object: _5.MsgBeginRedelegateResponseAmino): _5.MsgBeginRedelegateResponse;
                toAmino(message: _5.MsgBeginRedelegateResponse): _5.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _5.MsgBeginRedelegateResponseAminoMsg): _5.MsgBeginRedelegateResponse;
                toAminoMsg(message: _5.MsgBeginRedelegateResponse): _5.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _5.MsgBeginRedelegateResponseProtoMsg): _5.MsgBeginRedelegateResponse;
                toProto(message: _5.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _5.MsgBeginRedelegateResponse): _5.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _5.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgUndelegate;
                fromPartial(object: Partial<_5.MsgUndelegate>): _5.MsgUndelegate;
                fromAmino(object: _5.MsgUndelegateAmino): _5.MsgUndelegate;
                toAmino(message: _5.MsgUndelegate): _5.MsgUndelegateAmino;
                fromAminoMsg(object: _5.MsgUndelegateAminoMsg): _5.MsgUndelegate;
                toAminoMsg(message: _5.MsgUndelegate): _5.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _5.MsgUndelegateProtoMsg): _5.MsgUndelegate;
                toProto(message: _5.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _5.MsgUndelegate): _5.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _5.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgUndelegateResponse;
                fromPartial(object: Partial<_5.MsgUndelegateResponse>): _5.MsgUndelegateResponse;
                fromAmino(object: _5.MsgUndelegateResponseAmino): _5.MsgUndelegateResponse;
                toAmino(message: _5.MsgUndelegateResponse): _5.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _5.MsgUndelegateResponseAminoMsg): _5.MsgUndelegateResponse;
                toAminoMsg(message: _5.MsgUndelegateResponse): _5.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _5.MsgUndelegateResponseProtoMsg): _5.MsgUndelegateResponse;
                toProto(message: _5.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _5.MsgUndelegateResponse): _5.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _5.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_5.MsgCancelUnbondingDelegation>): _5.MsgCancelUnbondingDelegation;
                fromAmino(object: _5.MsgCancelUnbondingDelegationAmino): _5.MsgCancelUnbondingDelegation;
                toAmino(message: _5.MsgCancelUnbondingDelegation): _5.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _5.MsgCancelUnbondingDelegationAminoMsg): _5.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _5.MsgCancelUnbondingDelegation): _5.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _5.MsgCancelUnbondingDelegationProtoMsg): _5.MsgCancelUnbondingDelegation;
                toProto(message: _5.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _5.MsgCancelUnbondingDelegation): _5.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _5.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_5.MsgCancelUnbondingDelegationResponse>): _5.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _5.MsgCancelUnbondingDelegationResponseAmino): _5.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _5.MsgCancelUnbondingDelegationResponse): _5.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _5.MsgCancelUnbondingDelegationResponseAminoMsg): _5.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _5.MsgCancelUnbondingDelegationResponse): _5.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _5.MsgCancelUnbondingDelegationResponseProtoMsg): _5.MsgCancelUnbondingDelegationResponse;
                toProto(message: _5.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _5.MsgCancelUnbondingDelegationResponse): _5.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _5.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.MsgUpdateParams;
                fromPartial(object: Partial<_5.MsgUpdateParams>): _5.MsgUpdateParams;
                fromAmino(object: _5.MsgUpdateParamsAmino): _5.MsgUpdateParams;
                toAmino(message: _5.MsgUpdateParams): _5.MsgUpdateParamsAmino;
                fromAminoMsg(object: _5.MsgUpdateParamsAminoMsg): _5.MsgUpdateParams;
                toAminoMsg(message: _5.MsgUpdateParams): _5.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _5.MsgUpdateParamsProtoMsg): _5.MsgUpdateParams;
                toProto(message: _5.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateParams): _5.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _5.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_5.MsgUpdateParamsResponse>): _5.MsgUpdateParamsResponse;
                fromAmino(_: _5.MsgUpdateParamsResponseAmino): _5.MsgUpdateParamsResponse;
                toAmino(_: _5.MsgUpdateParamsResponse): _5.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _5.MsgUpdateParamsResponseAminoMsg): _5.MsgUpdateParamsResponse;
                toAminoMsg(message: _5.MsgUpdateParamsResponse): _5.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _5.MsgUpdateParamsResponseProtoMsg): _5.MsgUpdateParamsResponse;
                toProto(message: _5.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateParamsResponse): _5.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _4.BondStatus;
            bondStatusToJSON(object: _4.BondStatus): string;
            infractionFromJSON(object: any): _4.Infraction;
            infractionToJSON(object: _4.Infraction): string;
            BondStatus: typeof _4.BondStatus;
            BondStatusSDKType: typeof _4.BondStatus;
            BondStatusAmino: typeof _4.BondStatus;
            Infraction: typeof _4.Infraction;
            InfractionSDKType: typeof _4.Infraction;
            InfractionAmino: typeof _4.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _4.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.HistoricalInfo;
                fromPartial(object: Partial<_4.HistoricalInfo>): _4.HistoricalInfo;
                fromAmino(object: _4.HistoricalInfoAmino): _4.HistoricalInfo;
                toAmino(message: _4.HistoricalInfo): _4.HistoricalInfoAmino;
                fromAminoMsg(object: _4.HistoricalInfoAminoMsg): _4.HistoricalInfo;
                toAminoMsg(message: _4.HistoricalInfo): _4.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _4.HistoricalInfoProtoMsg): _4.HistoricalInfo;
                toProto(message: _4.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _4.HistoricalInfo): _4.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _4.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.CommissionRates;
                fromPartial(object: Partial<_4.CommissionRates>): _4.CommissionRates;
                fromAmino(object: _4.CommissionRatesAmino): _4.CommissionRates;
                toAmino(message: _4.CommissionRates): _4.CommissionRatesAmino;
                fromAminoMsg(object: _4.CommissionRatesAminoMsg): _4.CommissionRates;
                toAminoMsg(message: _4.CommissionRates): _4.CommissionRatesAminoMsg;
                fromProtoMsg(message: _4.CommissionRatesProtoMsg): _4.CommissionRates;
                toProto(message: _4.CommissionRates): Uint8Array;
                toProtoMsg(message: _4.CommissionRates): _4.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _4.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Commission;
                fromPartial(object: Partial<_4.Commission>): _4.Commission;
                fromAmino(object: _4.CommissionAmino): _4.Commission;
                toAmino(message: _4.Commission): _4.CommissionAmino;
                fromAminoMsg(object: _4.CommissionAminoMsg): _4.Commission;
                toAminoMsg(message: _4.Commission): _4.CommissionAminoMsg;
                fromProtoMsg(message: _4.CommissionProtoMsg): _4.Commission;
                toProto(message: _4.Commission): Uint8Array;
                toProtoMsg(message: _4.Commission): _4.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _4.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Description;
                fromPartial(object: Partial<_4.Description>): _4.Description;
                fromAmino(object: _4.DescriptionAmino): _4.Description;
                toAmino(message: _4.Description): _4.DescriptionAmino;
                fromAminoMsg(object: _4.DescriptionAminoMsg): _4.Description;
                toAminoMsg(message: _4.Description): _4.DescriptionAminoMsg;
                fromProtoMsg(message: _4.DescriptionProtoMsg): _4.Description;
                toProto(message: _4.Description): Uint8Array;
                toProtoMsg(message: _4.Description): _4.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _4.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Validator;
                fromPartial(object: Partial<_4.Validator>): _4.Validator;
                fromAmino(object: _4.ValidatorAmino): _4.Validator;
                toAmino(message: _4.Validator): _4.ValidatorAmino;
                fromAminoMsg(object: _4.ValidatorAminoMsg): _4.Validator;
                toAminoMsg(message: _4.Validator): _4.ValidatorAminoMsg;
                fromProtoMsg(message: _4.ValidatorProtoMsg): _4.Validator;
                toProto(message: _4.Validator): Uint8Array;
                toProtoMsg(message: _4.Validator): _4.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _4.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ValAddresses;
                fromPartial(object: Partial<_4.ValAddresses>): _4.ValAddresses;
                fromAmino(object: _4.ValAddressesAmino): _4.ValAddresses;
                toAmino(message: _4.ValAddresses): _4.ValAddressesAmino;
                fromAminoMsg(object: _4.ValAddressesAminoMsg): _4.ValAddresses;
                toAminoMsg(message: _4.ValAddresses): _4.ValAddressesAminoMsg;
                fromProtoMsg(message: _4.ValAddressesProtoMsg): _4.ValAddresses;
                toProto(message: _4.ValAddresses): Uint8Array;
                toProtoMsg(message: _4.ValAddresses): _4.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _4.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.DVPair;
                fromPartial(object: Partial<_4.DVPair>): _4.DVPair;
                fromAmino(object: _4.DVPairAmino): _4.DVPair;
                toAmino(message: _4.DVPair): _4.DVPairAmino;
                fromAminoMsg(object: _4.DVPairAminoMsg): _4.DVPair;
                toAminoMsg(message: _4.DVPair): _4.DVPairAminoMsg;
                fromProtoMsg(message: _4.DVPairProtoMsg): _4.DVPair;
                toProto(message: _4.DVPair): Uint8Array;
                toProtoMsg(message: _4.DVPair): _4.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _4.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.DVPairs;
                fromPartial(object: Partial<_4.DVPairs>): _4.DVPairs;
                fromAmino(object: _4.DVPairsAmino): _4.DVPairs;
                toAmino(message: _4.DVPairs): _4.DVPairsAmino;
                fromAminoMsg(object: _4.DVPairsAminoMsg): _4.DVPairs;
                toAminoMsg(message: _4.DVPairs): _4.DVPairsAminoMsg;
                fromProtoMsg(message: _4.DVPairsProtoMsg): _4.DVPairs;
                toProto(message: _4.DVPairs): Uint8Array;
                toProtoMsg(message: _4.DVPairs): _4.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _4.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.DVVTriplet;
                fromPartial(object: Partial<_4.DVVTriplet>): _4.DVVTriplet;
                fromAmino(object: _4.DVVTripletAmino): _4.DVVTriplet;
                toAmino(message: _4.DVVTriplet): _4.DVVTripletAmino;
                fromAminoMsg(object: _4.DVVTripletAminoMsg): _4.DVVTriplet;
                toAminoMsg(message: _4.DVVTriplet): _4.DVVTripletAminoMsg;
                fromProtoMsg(message: _4.DVVTripletProtoMsg): _4.DVVTriplet;
                toProto(message: _4.DVVTriplet): Uint8Array;
                toProtoMsg(message: _4.DVVTriplet): _4.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _4.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.DVVTriplets;
                fromPartial(object: Partial<_4.DVVTriplets>): _4.DVVTriplets;
                fromAmino(object: _4.DVVTripletsAmino): _4.DVVTriplets;
                toAmino(message: _4.DVVTriplets): _4.DVVTripletsAmino;
                fromAminoMsg(object: _4.DVVTripletsAminoMsg): _4.DVVTriplets;
                toAminoMsg(message: _4.DVVTriplets): _4.DVVTripletsAminoMsg;
                fromProtoMsg(message: _4.DVVTripletsProtoMsg): _4.DVVTriplets;
                toProto(message: _4.DVVTriplets): Uint8Array;
                toProtoMsg(message: _4.DVVTriplets): _4.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _4.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Delegation;
                fromPartial(object: Partial<_4.Delegation>): _4.Delegation;
                fromAmino(object: _4.DelegationAmino): _4.Delegation;
                toAmino(message: _4.Delegation): _4.DelegationAmino;
                fromAminoMsg(object: _4.DelegationAminoMsg): _4.Delegation;
                toAminoMsg(message: _4.Delegation): _4.DelegationAminoMsg;
                fromProtoMsg(message: _4.DelegationProtoMsg): _4.Delegation;
                toProto(message: _4.Delegation): Uint8Array;
                toProtoMsg(message: _4.Delegation): _4.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _4.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.UnbondingDelegation;
                fromPartial(object: Partial<_4.UnbondingDelegation>): _4.UnbondingDelegation;
                fromAmino(object: _4.UnbondingDelegationAmino): _4.UnbondingDelegation;
                toAmino(message: _4.UnbondingDelegation): _4.UnbondingDelegationAmino;
                fromAminoMsg(object: _4.UnbondingDelegationAminoMsg): _4.UnbondingDelegation;
                toAminoMsg(message: _4.UnbondingDelegation): _4.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _4.UnbondingDelegationProtoMsg): _4.UnbondingDelegation;
                toProto(message: _4.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _4.UnbondingDelegation): _4.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _4.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.UnbondingDelegationEntry;
                fromPartial(object: Partial<_4.UnbondingDelegationEntry>): _4.UnbondingDelegationEntry;
                fromAmino(object: _4.UnbondingDelegationEntryAmino): _4.UnbondingDelegationEntry;
                toAmino(message: _4.UnbondingDelegationEntry): _4.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _4.UnbondingDelegationEntryAminoMsg): _4.UnbondingDelegationEntry;
                toAminoMsg(message: _4.UnbondingDelegationEntry): _4.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _4.UnbondingDelegationEntryProtoMsg): _4.UnbondingDelegationEntry;
                toProto(message: _4.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _4.UnbondingDelegationEntry): _4.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _4.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.RedelegationEntry;
                fromPartial(object: Partial<_4.RedelegationEntry>): _4.RedelegationEntry;
                fromAmino(object: _4.RedelegationEntryAmino): _4.RedelegationEntry;
                toAmino(message: _4.RedelegationEntry): _4.RedelegationEntryAmino;
                fromAminoMsg(object: _4.RedelegationEntryAminoMsg): _4.RedelegationEntry;
                toAminoMsg(message: _4.RedelegationEntry): _4.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _4.RedelegationEntryProtoMsg): _4.RedelegationEntry;
                toProto(message: _4.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _4.RedelegationEntry): _4.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _4.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Redelegation;
                fromPartial(object: Partial<_4.Redelegation>): _4.Redelegation;
                fromAmino(object: _4.RedelegationAmino): _4.Redelegation;
                toAmino(message: _4.Redelegation): _4.RedelegationAmino;
                fromAminoMsg(object: _4.RedelegationAminoMsg): _4.Redelegation;
                toAminoMsg(message: _4.Redelegation): _4.RedelegationAminoMsg;
                fromProtoMsg(message: _4.RedelegationProtoMsg): _4.Redelegation;
                toProto(message: _4.Redelegation): Uint8Array;
                toProtoMsg(message: _4.Redelegation): _4.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _4.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Params;
                fromPartial(object: Partial<_4.Params>): _4.Params;
                fromAmino(object: _4.ParamsAmino): _4.Params;
                toAmino(message: _4.Params): _4.ParamsAmino;
                fromAminoMsg(object: _4.ParamsAminoMsg): _4.Params;
                toAminoMsg(message: _4.Params): _4.ParamsAminoMsg;
                fromProtoMsg(message: _4.ParamsProtoMsg): _4.Params;
                toProto(message: _4.Params): Uint8Array;
                toProtoMsg(message: _4.Params): _4.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _4.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.DelegationResponse;
                fromPartial(object: Partial<_4.DelegationResponse>): _4.DelegationResponse;
                fromAmino(object: _4.DelegationResponseAmino): _4.DelegationResponse;
                toAmino(message: _4.DelegationResponse): _4.DelegationResponseAmino;
                fromAminoMsg(object: _4.DelegationResponseAminoMsg): _4.DelegationResponse;
                toAminoMsg(message: _4.DelegationResponse): _4.DelegationResponseAminoMsg;
                fromProtoMsg(message: _4.DelegationResponseProtoMsg): _4.DelegationResponse;
                toProto(message: _4.DelegationResponse): Uint8Array;
                toProtoMsg(message: _4.DelegationResponse): _4.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _4.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.RedelegationEntryResponse;
                fromPartial(object: Partial<_4.RedelegationEntryResponse>): _4.RedelegationEntryResponse;
                fromAmino(object: _4.RedelegationEntryResponseAmino): _4.RedelegationEntryResponse;
                toAmino(message: _4.RedelegationEntryResponse): _4.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _4.RedelegationEntryResponseAminoMsg): _4.RedelegationEntryResponse;
                toAminoMsg(message: _4.RedelegationEntryResponse): _4.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _4.RedelegationEntryResponseProtoMsg): _4.RedelegationEntryResponse;
                toProto(message: _4.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _4.RedelegationEntryResponse): _4.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _4.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.RedelegationResponse;
                fromPartial(object: Partial<_4.RedelegationResponse>): _4.RedelegationResponse;
                fromAmino(object: _4.RedelegationResponseAmino): _4.RedelegationResponse;
                toAmino(message: _4.RedelegationResponse): _4.RedelegationResponseAmino;
                fromAminoMsg(object: _4.RedelegationResponseAminoMsg): _4.RedelegationResponse;
                toAminoMsg(message: _4.RedelegationResponse): _4.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _4.RedelegationResponseProtoMsg): _4.RedelegationResponse;
                toProto(message: _4.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _4.RedelegationResponse): _4.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _4.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Pool;
                fromPartial(object: Partial<_4.Pool>): _4.Pool;
                fromAmino(object: _4.PoolAmino): _4.Pool;
                toAmino(message: _4.Pool): _4.PoolAmino;
                fromAminoMsg(object: _4.PoolAminoMsg): _4.Pool;
                toAminoMsg(message: _4.Pool): _4.PoolAminoMsg;
                fromProtoMsg(message: _4.PoolProtoMsg): _4.Pool;
                toProto(message: _4.Pool): Uint8Array;
                toProtoMsg(message: _4.Pool): _4.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _4.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ValidatorUpdates;
                fromPartial(object: Partial<_4.ValidatorUpdates>): _4.ValidatorUpdates;
                fromAmino(object: _4.ValidatorUpdatesAmino): _4.ValidatorUpdates;
                toAmino(message: _4.ValidatorUpdates): _4.ValidatorUpdatesAmino;
                fromAminoMsg(object: _4.ValidatorUpdatesAminoMsg): _4.ValidatorUpdates;
                toAminoMsg(message: _4.ValidatorUpdates): _4.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _4.ValidatorUpdatesProtoMsg): _4.ValidatorUpdates;
                toProto(message: _4.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _4.ValidatorUpdates): _4.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _3.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryValidatorsRequest;
                fromPartial(object: Partial<_3.QueryValidatorsRequest>): _3.QueryValidatorsRequest;
                fromAmino(object: _3.QueryValidatorsRequestAmino): _3.QueryValidatorsRequest;
                toAmino(message: _3.QueryValidatorsRequest): _3.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _3.QueryValidatorsRequestAminoMsg): _3.QueryValidatorsRequest;
                toAminoMsg(message: _3.QueryValidatorsRequest): _3.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryValidatorsRequestProtoMsg): _3.QueryValidatorsRequest;
                toProto(message: _3.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryValidatorsRequest): _3.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _3.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryValidatorsResponse;
                fromPartial(object: Partial<_3.QueryValidatorsResponse>): _3.QueryValidatorsResponse;
                fromAmino(object: _3.QueryValidatorsResponseAmino): _3.QueryValidatorsResponse;
                toAmino(message: _3.QueryValidatorsResponse): _3.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _3.QueryValidatorsResponseAminoMsg): _3.QueryValidatorsResponse;
                toAminoMsg(message: _3.QueryValidatorsResponse): _3.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryValidatorsResponseProtoMsg): _3.QueryValidatorsResponse;
                toProto(message: _3.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryValidatorsResponse): _3.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _3.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryValidatorRequest;
                fromPartial(object: Partial<_3.QueryValidatorRequest>): _3.QueryValidatorRequest;
                fromAmino(object: _3.QueryValidatorRequestAmino): _3.QueryValidatorRequest;
                toAmino(message: _3.QueryValidatorRequest): _3.QueryValidatorRequestAmino;
                fromAminoMsg(object: _3.QueryValidatorRequestAminoMsg): _3.QueryValidatorRequest;
                toAminoMsg(message: _3.QueryValidatorRequest): _3.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _3.QueryValidatorRequestProtoMsg): _3.QueryValidatorRequest;
                toProto(message: _3.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _3.QueryValidatorRequest): _3.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _3.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryValidatorResponse;
                fromPartial(object: Partial<_3.QueryValidatorResponse>): _3.QueryValidatorResponse;
                fromAmino(object: _3.QueryValidatorResponseAmino): _3.QueryValidatorResponse;
                toAmino(message: _3.QueryValidatorResponse): _3.QueryValidatorResponseAmino;
                fromAminoMsg(object: _3.QueryValidatorResponseAminoMsg): _3.QueryValidatorResponse;
                toAminoMsg(message: _3.QueryValidatorResponse): _3.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _3.QueryValidatorResponseProtoMsg): _3.QueryValidatorResponse;
                toProto(message: _3.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _3.QueryValidatorResponse): _3.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _3.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_3.QueryValidatorDelegationsRequest>): _3.QueryValidatorDelegationsRequest;
                fromAmino(object: _3.QueryValidatorDelegationsRequestAmino): _3.QueryValidatorDelegationsRequest;
                toAmino(message: _3.QueryValidatorDelegationsRequest): _3.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _3.QueryValidatorDelegationsRequestAminoMsg): _3.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _3.QueryValidatorDelegationsRequest): _3.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryValidatorDelegationsRequestProtoMsg): _3.QueryValidatorDelegationsRequest;
                toProto(message: _3.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryValidatorDelegationsRequest): _3.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _3.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_3.QueryValidatorDelegationsResponse>): _3.QueryValidatorDelegationsResponse;
                fromAmino(object: _3.QueryValidatorDelegationsResponseAmino): _3.QueryValidatorDelegationsResponse;
                toAmino(message: _3.QueryValidatorDelegationsResponse): _3.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _3.QueryValidatorDelegationsResponseAminoMsg): _3.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _3.QueryValidatorDelegationsResponse): _3.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryValidatorDelegationsResponseProtoMsg): _3.QueryValidatorDelegationsResponse;
                toProto(message: _3.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryValidatorDelegationsResponse): _3.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _3.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_3.QueryValidatorUnbondingDelegationsRequest>): _3.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _3.QueryValidatorUnbondingDelegationsRequestAmino): _3.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _3.QueryValidatorUnbondingDelegationsRequest): _3.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _3.QueryValidatorUnbondingDelegationsRequestAminoMsg): _3.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _3.QueryValidatorUnbondingDelegationsRequest): _3.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryValidatorUnbondingDelegationsRequestProtoMsg): _3.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _3.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryValidatorUnbondingDelegationsRequest): _3.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _3.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_3.QueryValidatorUnbondingDelegationsResponse>): _3.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _3.QueryValidatorUnbondingDelegationsResponseAmino): _3.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _3.QueryValidatorUnbondingDelegationsResponse): _3.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _3.QueryValidatorUnbondingDelegationsResponseAminoMsg): _3.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _3.QueryValidatorUnbondingDelegationsResponse): _3.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryValidatorUnbondingDelegationsResponseProtoMsg): _3.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _3.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryValidatorUnbondingDelegationsResponse): _3.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _3.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegationRequest;
                fromPartial(object: Partial<_3.QueryDelegationRequest>): _3.QueryDelegationRequest;
                fromAmino(object: _3.QueryDelegationRequestAmino): _3.QueryDelegationRequest;
                toAmino(message: _3.QueryDelegationRequest): _3.QueryDelegationRequestAmino;
                fromAminoMsg(object: _3.QueryDelegationRequestAminoMsg): _3.QueryDelegationRequest;
                toAminoMsg(message: _3.QueryDelegationRequest): _3.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _3.QueryDelegationRequestProtoMsg): _3.QueryDelegationRequest;
                toProto(message: _3.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _3.QueryDelegationRequest): _3.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _3.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegationResponse;
                fromPartial(object: Partial<_3.QueryDelegationResponse>): _3.QueryDelegationResponse;
                fromAmino(object: _3.QueryDelegationResponseAmino): _3.QueryDelegationResponse;
                toAmino(message: _3.QueryDelegationResponse): _3.QueryDelegationResponseAmino;
                fromAminoMsg(object: _3.QueryDelegationResponseAminoMsg): _3.QueryDelegationResponse;
                toAminoMsg(message: _3.QueryDelegationResponse): _3.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _3.QueryDelegationResponseProtoMsg): _3.QueryDelegationResponse;
                toProto(message: _3.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _3.QueryDelegationResponse): _3.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _3.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_3.QueryUnbondingDelegationRequest>): _3.QueryUnbondingDelegationRequest;
                fromAmino(object: _3.QueryUnbondingDelegationRequestAmino): _3.QueryUnbondingDelegationRequest;
                toAmino(message: _3.QueryUnbondingDelegationRequest): _3.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _3.QueryUnbondingDelegationRequestAminoMsg): _3.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _3.QueryUnbondingDelegationRequest): _3.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _3.QueryUnbondingDelegationRequestProtoMsg): _3.QueryUnbondingDelegationRequest;
                toProto(message: _3.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _3.QueryUnbondingDelegationRequest): _3.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _3.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_3.QueryUnbondingDelegationResponse>): _3.QueryUnbondingDelegationResponse;
                fromAmino(object: _3.QueryUnbondingDelegationResponseAmino): _3.QueryUnbondingDelegationResponse;
                toAmino(message: _3.QueryUnbondingDelegationResponse): _3.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _3.QueryUnbondingDelegationResponseAminoMsg): _3.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _3.QueryUnbondingDelegationResponse): _3.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _3.QueryUnbondingDelegationResponseProtoMsg): _3.QueryUnbondingDelegationResponse;
                toProto(message: _3.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _3.QueryUnbondingDelegationResponse): _3.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _3.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_3.QueryDelegatorDelegationsRequest>): _3.QueryDelegatorDelegationsRequest;
                fromAmino(object: _3.QueryDelegatorDelegationsRequestAmino): _3.QueryDelegatorDelegationsRequest;
                toAmino(message: _3.QueryDelegatorDelegationsRequest): _3.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _3.QueryDelegatorDelegationsRequestAminoMsg): _3.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _3.QueryDelegatorDelegationsRequest): _3.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryDelegatorDelegationsRequestProtoMsg): _3.QueryDelegatorDelegationsRequest;
                toProto(message: _3.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryDelegatorDelegationsRequest): _3.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _3.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_3.QueryDelegatorDelegationsResponse>): _3.QueryDelegatorDelegationsResponse;
                fromAmino(object: _3.QueryDelegatorDelegationsResponseAmino): _3.QueryDelegatorDelegationsResponse;
                toAmino(message: _3.QueryDelegatorDelegationsResponse): _3.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _3.QueryDelegatorDelegationsResponseAminoMsg): _3.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _3.QueryDelegatorDelegationsResponse): _3.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryDelegatorDelegationsResponseProtoMsg): _3.QueryDelegatorDelegationsResponse;
                toProto(message: _3.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryDelegatorDelegationsResponse): _3.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _3.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_3.QueryDelegatorUnbondingDelegationsRequest>): _3.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _3.QueryDelegatorUnbondingDelegationsRequestAmino): _3.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _3.QueryDelegatorUnbondingDelegationsRequest): _3.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _3.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _3.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _3.QueryDelegatorUnbondingDelegationsRequest): _3.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _3.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _3.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryDelegatorUnbondingDelegationsRequest): _3.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _3.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_3.QueryDelegatorUnbondingDelegationsResponse>): _3.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _3.QueryDelegatorUnbondingDelegationsResponseAmino): _3.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _3.QueryDelegatorUnbondingDelegationsResponse): _3.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _3.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _3.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _3.QueryDelegatorUnbondingDelegationsResponse): _3.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _3.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _3.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryDelegatorUnbondingDelegationsResponse): _3.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _3.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryRedelegationsRequest;
                fromPartial(object: Partial<_3.QueryRedelegationsRequest>): _3.QueryRedelegationsRequest;
                fromAmino(object: _3.QueryRedelegationsRequestAmino): _3.QueryRedelegationsRequest;
                toAmino(message: _3.QueryRedelegationsRequest): _3.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _3.QueryRedelegationsRequestAminoMsg): _3.QueryRedelegationsRequest;
                toAminoMsg(message: _3.QueryRedelegationsRequest): _3.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryRedelegationsRequestProtoMsg): _3.QueryRedelegationsRequest;
                toProto(message: _3.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryRedelegationsRequest): _3.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _3.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryRedelegationsResponse;
                fromPartial(object: Partial<_3.QueryRedelegationsResponse>): _3.QueryRedelegationsResponse;
                fromAmino(object: _3.QueryRedelegationsResponseAmino): _3.QueryRedelegationsResponse;
                toAmino(message: _3.QueryRedelegationsResponse): _3.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _3.QueryRedelegationsResponseAminoMsg): _3.QueryRedelegationsResponse;
                toAminoMsg(message: _3.QueryRedelegationsResponse): _3.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryRedelegationsResponseProtoMsg): _3.QueryRedelegationsResponse;
                toProto(message: _3.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryRedelegationsResponse): _3.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _3.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_3.QueryDelegatorValidatorsRequest>): _3.QueryDelegatorValidatorsRequest;
                fromAmino(object: _3.QueryDelegatorValidatorsRequestAmino): _3.QueryDelegatorValidatorsRequest;
                toAmino(message: _3.QueryDelegatorValidatorsRequest): _3.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _3.QueryDelegatorValidatorsRequestAminoMsg): _3.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _3.QueryDelegatorValidatorsRequest): _3.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryDelegatorValidatorsRequestProtoMsg): _3.QueryDelegatorValidatorsRequest;
                toProto(message: _3.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryDelegatorValidatorsRequest): _3.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _3.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_3.QueryDelegatorValidatorsResponse>): _3.QueryDelegatorValidatorsResponse;
                fromAmino(object: _3.QueryDelegatorValidatorsResponseAmino): _3.QueryDelegatorValidatorsResponse;
                toAmino(message: _3.QueryDelegatorValidatorsResponse): _3.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _3.QueryDelegatorValidatorsResponseAminoMsg): _3.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _3.QueryDelegatorValidatorsResponse): _3.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryDelegatorValidatorsResponseProtoMsg): _3.QueryDelegatorValidatorsResponse;
                toProto(message: _3.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryDelegatorValidatorsResponse): _3.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _3.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_3.QueryDelegatorValidatorRequest>): _3.QueryDelegatorValidatorRequest;
                fromAmino(object: _3.QueryDelegatorValidatorRequestAmino): _3.QueryDelegatorValidatorRequest;
                toAmino(message: _3.QueryDelegatorValidatorRequest): _3.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _3.QueryDelegatorValidatorRequestAminoMsg): _3.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _3.QueryDelegatorValidatorRequest): _3.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _3.QueryDelegatorValidatorRequestProtoMsg): _3.QueryDelegatorValidatorRequest;
                toProto(message: _3.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _3.QueryDelegatorValidatorRequest): _3.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _3.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_3.QueryDelegatorValidatorResponse>): _3.QueryDelegatorValidatorResponse;
                fromAmino(object: _3.QueryDelegatorValidatorResponseAmino): _3.QueryDelegatorValidatorResponse;
                toAmino(message: _3.QueryDelegatorValidatorResponse): _3.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _3.QueryDelegatorValidatorResponseAminoMsg): _3.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _3.QueryDelegatorValidatorResponse): _3.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _3.QueryDelegatorValidatorResponseProtoMsg): _3.QueryDelegatorValidatorResponse;
                toProto(message: _3.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _3.QueryDelegatorValidatorResponse): _3.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _3.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_3.QueryHistoricalInfoRequest>): _3.QueryHistoricalInfoRequest;
                fromAmino(object: _3.QueryHistoricalInfoRequestAmino): _3.QueryHistoricalInfoRequest;
                toAmino(message: _3.QueryHistoricalInfoRequest): _3.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _3.QueryHistoricalInfoRequestAminoMsg): _3.QueryHistoricalInfoRequest;
                toAminoMsg(message: _3.QueryHistoricalInfoRequest): _3.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _3.QueryHistoricalInfoRequestProtoMsg): _3.QueryHistoricalInfoRequest;
                toProto(message: _3.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _3.QueryHistoricalInfoRequest): _3.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _3.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_3.QueryHistoricalInfoResponse>): _3.QueryHistoricalInfoResponse;
                fromAmino(object: _3.QueryHistoricalInfoResponseAmino): _3.QueryHistoricalInfoResponse;
                toAmino(message: _3.QueryHistoricalInfoResponse): _3.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _3.QueryHistoricalInfoResponseAminoMsg): _3.QueryHistoricalInfoResponse;
                toAminoMsg(message: _3.QueryHistoricalInfoResponse): _3.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _3.QueryHistoricalInfoResponseProtoMsg): _3.QueryHistoricalInfoResponse;
                toProto(message: _3.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _3.QueryHistoricalInfoResponse): _3.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _3.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.QueryPoolRequest;
                fromPartial(_: Partial<_3.QueryPoolRequest>): _3.QueryPoolRequest;
                fromAmino(_: _3.QueryPoolRequestAmino): _3.QueryPoolRequest;
                toAmino(_: _3.QueryPoolRequest): _3.QueryPoolRequestAmino;
                fromAminoMsg(object: _3.QueryPoolRequestAminoMsg): _3.QueryPoolRequest;
                toAminoMsg(message: _3.QueryPoolRequest): _3.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _3.QueryPoolRequestProtoMsg): _3.QueryPoolRequest;
                toProto(message: _3.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _3.QueryPoolRequest): _3.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _3.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryPoolResponse;
                fromPartial(object: Partial<_3.QueryPoolResponse>): _3.QueryPoolResponse;
                fromAmino(object: _3.QueryPoolResponseAmino): _3.QueryPoolResponse;
                toAmino(message: _3.QueryPoolResponse): _3.QueryPoolResponseAmino;
                fromAminoMsg(object: _3.QueryPoolResponseAminoMsg): _3.QueryPoolResponse;
                toAminoMsg(message: _3.QueryPoolResponse): _3.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _3.QueryPoolResponseProtoMsg): _3.QueryPoolResponse;
                toProto(message: _3.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _3.QueryPoolResponse): _3.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _3.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.QueryParamsRequest;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
                fromAmino(_: _3.QueryParamsRequestAmino): _3.QueryParamsRequest;
                toAmino(_: _3.QueryParamsRequest): _3.QueryParamsRequestAmino;
                fromAminoMsg(object: _3.QueryParamsRequestAminoMsg): _3.QueryParamsRequest;
                toAminoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryParamsRequestProtoMsg): _3.QueryParamsRequest;
                toProto(message: _3.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _3.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryParamsResponse;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
                fromAmino(object: _3.QueryParamsResponseAmino): _3.QueryParamsResponse;
                toAmino(message: _3.QueryParamsResponse): _3.QueryParamsResponseAmino;
                fromAminoMsg(object: _3.QueryParamsResponseAminoMsg): _3.QueryParamsResponse;
                toAminoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryParamsResponseProtoMsg): _3.QueryParamsResponse;
                toProto(message: _3.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
                fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
                toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
                fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
                toAminoMsg(message: _2.GenesisState): _2.GenesisStateAminoMsg;
                fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
                toProto(message: _2.GenesisState): Uint8Array;
                toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _2.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.LastValidatorPower;
                fromPartial(object: Partial<_2.LastValidatorPower>): _2.LastValidatorPower;
                fromAmino(object: _2.LastValidatorPowerAmino): _2.LastValidatorPower;
                toAmino(message: _2.LastValidatorPower): _2.LastValidatorPowerAmino;
                fromAminoMsg(object: _2.LastValidatorPowerAminoMsg): _2.LastValidatorPower;
                toAminoMsg(message: _2.LastValidatorPower): _2.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _2.LastValidatorPowerProtoMsg): _2.LastValidatorPower;
                toProto(message: _2.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _2.LastValidatorPower): _2.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _1.AuthorizationType;
            authorizationTypeToJSON(object: _1.AuthorizationType): string;
            AuthorizationType: typeof _1.AuthorizationType;
            AuthorizationTypeSDKType: typeof _1.AuthorizationType;
            AuthorizationTypeAmino: typeof _1.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _1.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.StakeAuthorization;
                fromPartial(object: Partial<_1.StakeAuthorization>): _1.StakeAuthorization;
                fromAmino(object: _1.StakeAuthorizationAmino): _1.StakeAuthorization;
                toAmino(message: _1.StakeAuthorization): _1.StakeAuthorizationAmino;
                fromAminoMsg(object: _1.StakeAuthorizationAminoMsg): _1.StakeAuthorization;
                toAminoMsg(message: _1.StakeAuthorization): _1.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _1.StakeAuthorizationProtoMsg): _1.StakeAuthorization;
                toProto(message: _1.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _1.StakeAuthorization): _1.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _1.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.StakeAuthorization_Validators;
                fromPartial(object: Partial<_1.StakeAuthorization_Validators>): _1.StakeAuthorization_Validators;
                fromAmino(object: _1.StakeAuthorization_ValidatorsAmino): _1.StakeAuthorization_Validators;
                toAmino(message: _1.StakeAuthorization_Validators): _1.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _1.StakeAuthorization_ValidatorsAminoMsg): _1.StakeAuthorization_Validators;
                toAminoMsg(message: _1.StakeAuthorization_Validators): _1.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _1.StakeAuthorization_ValidatorsProtoMsg): _1.StakeAuthorization_Validators;
                toProto(message: _1.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _1.StakeAuthorization_Validators): _1.StakeAuthorization_ValidatorsProtoMsg;
            };
            MsgRedeemTokensForShares: {
                typeUrl: string;
                encode(message: _0.MsgRedeemTokensForShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.MsgRedeemTokensForShares;
                fromPartial(object: Partial<_0.MsgRedeemTokensForShares>): _0.MsgRedeemTokensForShares;
                fromAmino(object: _0.MsgRedeemTokensForSharesAmino): _0.MsgRedeemTokensForShares;
                toAmino(message: _0.MsgRedeemTokensForShares): _0.MsgRedeemTokensForSharesAmino;
                fromAminoMsg(object: _0.MsgRedeemTokensForSharesAminoMsg): _0.MsgRedeemTokensForShares;
                toAminoMsg(message: _0.MsgRedeemTokensForShares): _0.MsgRedeemTokensForSharesAminoMsg;
                fromProtoMsg(message: _0.MsgRedeemTokensForSharesProtoMsg): _0.MsgRedeemTokensForShares;
                toProto(message: _0.MsgRedeemTokensForShares): Uint8Array;
                toProtoMsg(message: _0.MsgRedeemTokensForShares): _0.MsgRedeemTokensForSharesProtoMsg;
            };
            MsgRedeemTokensForSharesResponse: {
                typeUrl: string;
                encode(message: _0.MsgRedeemTokensForSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.MsgRedeemTokensForSharesResponse;
                fromPartial(object: Partial<_0.MsgRedeemTokensForSharesResponse>): _0.MsgRedeemTokensForSharesResponse;
                fromAmino(object: _0.MsgRedeemTokensForSharesResponseAmino): _0.MsgRedeemTokensForSharesResponse;
                toAmino(message: _0.MsgRedeemTokensForSharesResponse): _0.MsgRedeemTokensForSharesResponseAmino;
                fromAminoMsg(object: _0.MsgRedeemTokensForSharesResponseAminoMsg): _0.MsgRedeemTokensForSharesResponse;
                toAminoMsg(message: _0.MsgRedeemTokensForSharesResponse): _0.MsgRedeemTokensForSharesResponseAminoMsg;
                fromProtoMsg(message: _0.MsgRedeemTokensForSharesResponseProtoMsg): _0.MsgRedeemTokensForSharesResponse;
                toProto(message: _0.MsgRedeemTokensForSharesResponse): Uint8Array;
                toProtoMsg(message: _0.MsgRedeemTokensForSharesResponse): _0.MsgRedeemTokensForSharesResponseProtoMsg;
            };
            MsgDisableTokenizeShares: {
                typeUrl: string;
                encode(message: _0.MsgDisableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.MsgDisableTokenizeShares;
                fromPartial(object: Partial<_0.MsgDisableTokenizeShares>): _0.MsgDisableTokenizeShares;
                fromAmino(object: _0.MsgDisableTokenizeSharesAmino): _0.MsgDisableTokenizeShares;
                toAmino(message: _0.MsgDisableTokenizeShares): _0.MsgDisableTokenizeSharesAmino;
                fromAminoMsg(object: _0.MsgDisableTokenizeSharesAminoMsg): _0.MsgDisableTokenizeShares;
                toAminoMsg(message: _0.MsgDisableTokenizeShares): _0.MsgDisableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _0.MsgDisableTokenizeSharesProtoMsg): _0.MsgDisableTokenizeShares;
                toProto(message: _0.MsgDisableTokenizeShares): Uint8Array;
                toProtoMsg(message: _0.MsgDisableTokenizeShares): _0.MsgDisableTokenizeSharesProtoMsg;
            };
        };
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _6.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.Module;
                    fromPartial(object: Partial<_6.Module>): _6.Module;
                    fromAmino(object: _6.ModuleAmino): _6.Module;
                    toAmino(message: _6.Module): _6.ModuleAmino;
                    fromAminoMsg(object: _6.ModuleAminoMsg): _6.Module;
                    toAminoMsg(message: _6.Module): _6.ModuleAminoMsg;
                    fromProtoMsg(message: _6.ModuleProtoMsg): _6.Module;
                    toProto(message: _6.Module): Uint8Array;
                    toProtoMsg(message: _6.Module): _6.ModuleProtoMsg;
                };
            };
        }
    }
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _7.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.Module;
                    fromPartial(object: Partial<_7.Module>): _7.Module;
                    fromAmino(object: _7.ModuleAmino): _7.Module;
                    toAmino(message: _7.Module): _7.ModuleAmino;
                    fromAminoMsg(object: _7.ModuleAminoMsg): _7.Module;
                    toAminoMsg(message: _7.Module): _7.ModuleAminoMsg;
                    fromProtoMsg(message: _7.ModuleProtoMsg): _7.Module;
                    toProto(message: _7.Module): Uint8Array;
                    toProtoMsg(message: _7.Module): _7.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _7.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.StoreKeyConfig;
                    fromPartial(object: Partial<_7.StoreKeyConfig>): _7.StoreKeyConfig;
                    fromAmino(object: _7.StoreKeyConfigAmino): _7.StoreKeyConfig;
                    toAmino(message: _7.StoreKeyConfig): _7.StoreKeyConfigAmino;
                    fromAminoMsg(object: _7.StoreKeyConfigAminoMsg): _7.StoreKeyConfig;
                    toAminoMsg(message: _7.StoreKeyConfig): _7.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _7.StoreKeyConfigProtoMsg): _7.StoreKeyConfig;
                    toProto(message: _7.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _7.StoreKeyConfig): _7.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _10.QueryConfigRequest): Promise<_10.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _10.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryConfigRequest;
                fromPartial(_: Partial<_10.QueryConfigRequest>): _10.QueryConfigRequest;
                fromAmino(_: _10.QueryConfigRequestAmino): _10.QueryConfigRequest;
                toAmino(_: _10.QueryConfigRequest): _10.QueryConfigRequestAmino;
                fromAminoMsg(object: _10.QueryConfigRequestAminoMsg): _10.QueryConfigRequest;
                toAminoMsg(message: _10.QueryConfigRequest): _10.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _10.QueryConfigRequestProtoMsg): _10.QueryConfigRequest;
                toProto(message: _10.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _10.QueryConfigRequest): _10.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _10.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryConfigResponse;
                fromPartial(object: Partial<_10.QueryConfigResponse>): _10.QueryConfigResponse;
                fromAmino(object: _10.QueryConfigResponseAmino): _10.QueryConfigResponse;
                toAmino(message: _10.QueryConfigResponse): _10.QueryConfigResponseAmino;
                fromAminoMsg(object: _10.QueryConfigResponseAminoMsg): _10.QueryConfigResponse;
                toAminoMsg(message: _10.QueryConfigResponse): _10.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _10.QueryConfigResponseProtoMsg): _10.QueryConfigResponse;
                toProto(message: _10.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _10.QueryConfigResponse): _10.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _9.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.ModuleDescriptor;
                fromPartial(object: Partial<_9.ModuleDescriptor>): _9.ModuleDescriptor;
                fromAmino(object: _9.ModuleDescriptorAmino): _9.ModuleDescriptor;
                toAmino(message: _9.ModuleDescriptor): _9.ModuleDescriptorAmino;
                fromAminoMsg(object: _9.ModuleDescriptorAminoMsg): _9.ModuleDescriptor;
                toAminoMsg(message: _9.ModuleDescriptor): _9.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _9.ModuleDescriptorProtoMsg): _9.ModuleDescriptor;
                toProto(message: _9.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _9.ModuleDescriptor): _9.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _9.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.PackageReference;
                fromPartial(object: Partial<_9.PackageReference>): _9.PackageReference;
                fromAmino(object: _9.PackageReferenceAmino): _9.PackageReference;
                toAmino(message: _9.PackageReference): _9.PackageReferenceAmino;
                fromAminoMsg(object: _9.PackageReferenceAminoMsg): _9.PackageReference;
                toAminoMsg(message: _9.PackageReference): _9.PackageReferenceAminoMsg;
                fromProtoMsg(message: _9.PackageReferenceProtoMsg): _9.PackageReference;
                toProto(message: _9.PackageReference): Uint8Array;
                toProtoMsg(message: _9.PackageReference): _9.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _9.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MigrateFromInfo;
                fromPartial(object: Partial<_9.MigrateFromInfo>): _9.MigrateFromInfo;
                fromAmino(object: _9.MigrateFromInfoAmino): _9.MigrateFromInfo;
                toAmino(message: _9.MigrateFromInfo): _9.MigrateFromInfoAmino;
                fromAminoMsg(object: _9.MigrateFromInfoAminoMsg): _9.MigrateFromInfo;
                toAminoMsg(message: _9.MigrateFromInfo): _9.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _9.MigrateFromInfoProtoMsg): _9.MigrateFromInfo;
                toProto(message: _9.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _9.MigrateFromInfo): _9.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _8.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Config;
                fromPartial(object: Partial<_8.Config>): _8.Config;
                fromAmino(object: _8.ConfigAmino): _8.Config;
                toAmino(message: _8.Config): _8.ConfigAmino;
                fromAminoMsg(object: _8.ConfigAminoMsg): _8.Config;
                toAminoMsg(message: _8.Config): _8.ConfigAminoMsg;
                fromProtoMsg(message: _8.ConfigProtoMsg): _8.Config;
                toProto(message: _8.Config): Uint8Array;
                toProtoMsg(message: _8.Config): _8.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _8.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ModuleConfig;
                fromPartial(object: Partial<_8.ModuleConfig>): _8.ModuleConfig;
                fromAmino(object: _8.ModuleConfigAmino): _8.ModuleConfig;
                toAmino(message: _8.ModuleConfig): _8.ModuleConfigAmino;
                fromAminoMsg(object: _8.ModuleConfigAminoMsg): _8.ModuleConfig;
                toAminoMsg(message: _8.ModuleConfig): _8.ModuleConfigAminoMsg;
                fromProtoMsg(message: _8.ModuleConfigProtoMsg): _8.ModuleConfig;
                toProto(message: _8.ModuleConfig): Uint8Array;
                toProtoMsg(message: _8.ModuleConfig): _8.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _8.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GolangBinding;
                fromPartial(object: Partial<_8.GolangBinding>): _8.GolangBinding;
                fromAmino(object: _8.GolangBindingAmino): _8.GolangBinding;
                toAmino(message: _8.GolangBinding): _8.GolangBindingAmino;
                fromAminoMsg(object: _8.GolangBindingAminoMsg): _8.GolangBinding;
                toAminoMsg(message: _8.GolangBinding): _8.GolangBindingAminoMsg;
                fromProtoMsg(message: _8.GolangBindingProtoMsg): _8.GolangBinding;
                toProto(message: _8.GolangBinding): Uint8Array;
                toProtoMsg(message: _8.GolangBinding): _8.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _11.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.Module;
                    fromPartial(object: Partial<_11.Module>): _11.Module;
                    fromAmino(object: _11.ModuleAmino): _11.Module;
                    toAmino(message: _11.Module): _11.ModuleAmino;
                    fromAminoMsg(object: _11.ModuleAminoMsg): _11.Module;
                    toAminoMsg(message: _11.Module): _11.ModuleAminoMsg;
                    fromProtoMsg(message: _11.ModuleProtoMsg): _11.Module;
                    toProto(message: _11.Module): Uint8Array;
                    toProtoMsg(message: _11.Module): _11.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _11.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.ModuleAccountPermission;
                    fromPartial(object: Partial<_11.ModuleAccountPermission>): _11.ModuleAccountPermission;
                    fromAmino(object: _11.ModuleAccountPermissionAmino): _11.ModuleAccountPermission;
                    toAmino(message: _11.ModuleAccountPermission): _11.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _11.ModuleAccountPermissionAminoMsg): _11.ModuleAccountPermission;
                    toAminoMsg(message: _11.ModuleAccountPermission): _11.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _11.ModuleAccountPermissionProtoMsg): _11.ModuleAccountPermission;
                    toProto(message: _11.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _11.ModuleAccountPermission): _11.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _14.QueryAccountsRequest): Promise<_14.QueryAccountsResponse>;
                account(request: _14.QueryAccountRequest): Promise<_14.QueryAccountResponse>;
                accountAddressByID(request: _14.QueryAccountAddressByIDRequest): Promise<_14.QueryAccountAddressByIDResponse>;
                params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                moduleAccounts(request?: _14.QueryModuleAccountsRequest): Promise<_14.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _14.QueryModuleAccountByNameRequest): Promise<_14.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _14.Bech32PrefixRequest): Promise<_14.Bech32PrefixResponse>;
                addressBytesToString(request: _14.AddressBytesToStringRequest): Promise<_14.AddressBytesToStringResponse>;
                addressStringToBytes(request: _14.AddressStringToBytesRequest): Promise<_14.AddressStringToBytesResponse>;
                accountInfo(request: _14.QueryAccountInfoRequest): Promise<_14.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _244.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _15.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _15.MsgUpdateParams): {
                        typeUrl: string;
                        value: _15.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _15.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _15.MsgUpdateParams): {
                        typeUrl: string;
                        value: _15.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _15.MsgUpdateParams) => _15.MsgUpdateParamsAmino;
                    fromAmino: (object: _15.MsgUpdateParamsAmino) => _15.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _15.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MsgUpdateParams;
                fromPartial(object: Partial<_15.MsgUpdateParams>): _15.MsgUpdateParams;
                fromAmino(object: _15.MsgUpdateParamsAmino): _15.MsgUpdateParams;
                toAmino(message: _15.MsgUpdateParams): _15.MsgUpdateParamsAmino;
                fromAminoMsg(object: _15.MsgUpdateParamsAminoMsg): _15.MsgUpdateParams;
                toAminoMsg(message: _15.MsgUpdateParams): _15.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _15.MsgUpdateParamsProtoMsg): _15.MsgUpdateParams;
                toProto(message: _15.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _15.MsgUpdateParams): _15.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _15.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_15.MsgUpdateParamsResponse>): _15.MsgUpdateParamsResponse;
                fromAmino(_: _15.MsgUpdateParamsResponseAmino): _15.MsgUpdateParamsResponse;
                toAmino(_: _15.MsgUpdateParamsResponse): _15.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _15.MsgUpdateParamsResponseAminoMsg): _15.MsgUpdateParamsResponse;
                toAminoMsg(message: _15.MsgUpdateParamsResponse): _15.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _15.MsgUpdateParamsResponseProtoMsg): _15.MsgUpdateParamsResponse;
                toProto(message: _15.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _15.MsgUpdateParamsResponse): _15.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _14.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAccountsRequest;
                fromPartial(object: Partial<_14.QueryAccountsRequest>): _14.QueryAccountsRequest;
                fromAmino(object: _14.QueryAccountsRequestAmino): _14.QueryAccountsRequest;
                toAmino(message: _14.QueryAccountsRequest): _14.QueryAccountsRequestAmino;
                fromAminoMsg(object: _14.QueryAccountsRequestAminoMsg): _14.QueryAccountsRequest;
                toAminoMsg(message: _14.QueryAccountsRequest): _14.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAccountsRequestProtoMsg): _14.QueryAccountsRequest;
                toProto(message: _14.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAccountsRequest): _14.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _14.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAccountsResponse;
                fromPartial(object: Partial<_14.QueryAccountsResponse>): _14.QueryAccountsResponse;
                fromAmino(object: _14.QueryAccountsResponseAmino): _14.QueryAccountsResponse;
                toAmino(message: _14.QueryAccountsResponse): _14.QueryAccountsResponseAmino;
                fromAminoMsg(object: _14.QueryAccountsResponseAminoMsg): _14.QueryAccountsResponse;
                toAminoMsg(message: _14.QueryAccountsResponse): _14.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAccountsResponseProtoMsg): _14.QueryAccountsResponse;
                toProto(message: _14.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAccountsResponse): _14.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _14.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAccountRequest;
                fromPartial(object: Partial<_14.QueryAccountRequest>): _14.QueryAccountRequest;
                fromAmino(object: _14.QueryAccountRequestAmino): _14.QueryAccountRequest;
                toAmino(message: _14.QueryAccountRequest): _14.QueryAccountRequestAmino;
                fromAminoMsg(object: _14.QueryAccountRequestAminoMsg): _14.QueryAccountRequest;
                toAminoMsg(message: _14.QueryAccountRequest): _14.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAccountRequestProtoMsg): _14.QueryAccountRequest;
                toProto(message: _14.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAccountRequest): _14.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _14.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAccountResponse;
                fromPartial(object: Partial<_14.QueryAccountResponse>): _14.QueryAccountResponse;
                fromAmino(object: _14.QueryAccountResponseAmino): _14.QueryAccountResponse;
                toAmino(message: _14.QueryAccountResponse): _14.QueryAccountResponseAmino;
                fromAminoMsg(object: _14.QueryAccountResponseAminoMsg): _14.QueryAccountResponse;
                toAminoMsg(message: _14.QueryAccountResponse): _14.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAccountResponseProtoMsg): _14.QueryAccountResponse;
                toProto(message: _14.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAccountResponse): _14.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _14.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.QueryParamsRequest;
                fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
                fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
                toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
                fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
                toAminoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
                toProto(message: _14.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _14.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryParamsResponse;
                fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
                fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
                toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
                fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
                toAminoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
                toProto(message: _14.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _14.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_14.QueryModuleAccountsRequest>): _14.QueryModuleAccountsRequest;
                fromAmino(_: _14.QueryModuleAccountsRequestAmino): _14.QueryModuleAccountsRequest;
                toAmino(_: _14.QueryModuleAccountsRequest): _14.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _14.QueryModuleAccountsRequestAminoMsg): _14.QueryModuleAccountsRequest;
                toAminoMsg(message: _14.QueryModuleAccountsRequest): _14.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryModuleAccountsRequestProtoMsg): _14.QueryModuleAccountsRequest;
                toProto(message: _14.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryModuleAccountsRequest): _14.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _14.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_14.QueryModuleAccountsResponse>): _14.QueryModuleAccountsResponse;
                fromAmino(object: _14.QueryModuleAccountsResponseAmino): _14.QueryModuleAccountsResponse;
                toAmino(message: _14.QueryModuleAccountsResponse): _14.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _14.QueryModuleAccountsResponseAminoMsg): _14.QueryModuleAccountsResponse;
                toAminoMsg(message: _14.QueryModuleAccountsResponse): _14.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryModuleAccountsResponseProtoMsg): _14.QueryModuleAccountsResponse;
                toProto(message: _14.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryModuleAccountsResponse): _14.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _14.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_14.QueryModuleAccountByNameRequest>): _14.QueryModuleAccountByNameRequest;
                fromAmino(object: _14.QueryModuleAccountByNameRequestAmino): _14.QueryModuleAccountByNameRequest;
                toAmino(message: _14.QueryModuleAccountByNameRequest): _14.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _14.QueryModuleAccountByNameRequestAminoMsg): _14.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _14.QueryModuleAccountByNameRequest): _14.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _14.QueryModuleAccountByNameRequestProtoMsg): _14.QueryModuleAccountByNameRequest;
                toProto(message: _14.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _14.QueryModuleAccountByNameRequest): _14.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _14.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_14.QueryModuleAccountByNameResponse>): _14.QueryModuleAccountByNameResponse;
                fromAmino(object: _14.QueryModuleAccountByNameResponseAmino): _14.QueryModuleAccountByNameResponse;
                toAmino(message: _14.QueryModuleAccountByNameResponse): _14.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _14.QueryModuleAccountByNameResponseAminoMsg): _14.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _14.QueryModuleAccountByNameResponse): _14.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _14.QueryModuleAccountByNameResponseProtoMsg): _14.QueryModuleAccountByNameResponse;
                toProto(message: _14.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _14.QueryModuleAccountByNameResponse): _14.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _14.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.Bech32PrefixRequest;
                fromPartial(_: Partial<_14.Bech32PrefixRequest>): _14.Bech32PrefixRequest;
                fromAmino(_: _14.Bech32PrefixRequestAmino): _14.Bech32PrefixRequest;
                toAmino(_: _14.Bech32PrefixRequest): _14.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _14.Bech32PrefixRequestAminoMsg): _14.Bech32PrefixRequest;
                toAminoMsg(message: _14.Bech32PrefixRequest): _14.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _14.Bech32PrefixRequestProtoMsg): _14.Bech32PrefixRequest;
                toProto(message: _14.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _14.Bech32PrefixRequest): _14.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _14.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Bech32PrefixResponse;
                fromPartial(object: Partial<_14.Bech32PrefixResponse>): _14.Bech32PrefixResponse;
                fromAmino(object: _14.Bech32PrefixResponseAmino): _14.Bech32PrefixResponse;
                toAmino(message: _14.Bech32PrefixResponse): _14.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _14.Bech32PrefixResponseAminoMsg): _14.Bech32PrefixResponse;
                toAminoMsg(message: _14.Bech32PrefixResponse): _14.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _14.Bech32PrefixResponseProtoMsg): _14.Bech32PrefixResponse;
                toProto(message: _14.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _14.Bech32PrefixResponse): _14.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _14.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.AddressBytesToStringRequest;
                fromPartial(object: Partial<_14.AddressBytesToStringRequest>): _14.AddressBytesToStringRequest;
                fromAmino(object: _14.AddressBytesToStringRequestAmino): _14.AddressBytesToStringRequest;
                toAmino(message: _14.AddressBytesToStringRequest): _14.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _14.AddressBytesToStringRequestAminoMsg): _14.AddressBytesToStringRequest;
                toAminoMsg(message: _14.AddressBytesToStringRequest): _14.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _14.AddressBytesToStringRequestProtoMsg): _14.AddressBytesToStringRequest;
                toProto(message: _14.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _14.AddressBytesToStringRequest): _14.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _14.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.AddressBytesToStringResponse;
                fromPartial(object: Partial<_14.AddressBytesToStringResponse>): _14.AddressBytesToStringResponse;
                fromAmino(object: _14.AddressBytesToStringResponseAmino): _14.AddressBytesToStringResponse;
                toAmino(message: _14.AddressBytesToStringResponse): _14.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _14.AddressBytesToStringResponseAminoMsg): _14.AddressBytesToStringResponse;
                toAminoMsg(message: _14.AddressBytesToStringResponse): _14.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _14.AddressBytesToStringResponseProtoMsg): _14.AddressBytesToStringResponse;
                toProto(message: _14.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _14.AddressBytesToStringResponse): _14.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _14.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.AddressStringToBytesRequest;
                fromPartial(object: Partial<_14.AddressStringToBytesRequest>): _14.AddressStringToBytesRequest;
                fromAmino(object: _14.AddressStringToBytesRequestAmino): _14.AddressStringToBytesRequest;
                toAmino(message: _14.AddressStringToBytesRequest): _14.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _14.AddressStringToBytesRequestAminoMsg): _14.AddressStringToBytesRequest;
                toAminoMsg(message: _14.AddressStringToBytesRequest): _14.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _14.AddressStringToBytesRequestProtoMsg): _14.AddressStringToBytesRequest;
                toProto(message: _14.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _14.AddressStringToBytesRequest): _14.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _14.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.AddressStringToBytesResponse;
                fromPartial(object: Partial<_14.AddressStringToBytesResponse>): _14.AddressStringToBytesResponse;
                fromAmino(object: _14.AddressStringToBytesResponseAmino): _14.AddressStringToBytesResponse;
                toAmino(message: _14.AddressStringToBytesResponse): _14.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _14.AddressStringToBytesResponseAminoMsg): _14.AddressStringToBytesResponse;
                toAminoMsg(message: _14.AddressStringToBytesResponse): _14.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _14.AddressStringToBytesResponseProtoMsg): _14.AddressStringToBytesResponse;
                toProto(message: _14.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _14.AddressStringToBytesResponse): _14.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _14.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_14.QueryAccountAddressByIDRequest>): _14.QueryAccountAddressByIDRequest;
                fromAmino(object: _14.QueryAccountAddressByIDRequestAmino): _14.QueryAccountAddressByIDRequest;
                toAmino(message: _14.QueryAccountAddressByIDRequest): _14.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _14.QueryAccountAddressByIDRequestAminoMsg): _14.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _14.QueryAccountAddressByIDRequest): _14.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAccountAddressByIDRequestProtoMsg): _14.QueryAccountAddressByIDRequest;
                toProto(message: _14.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAccountAddressByIDRequest): _14.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _14.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_14.QueryAccountAddressByIDResponse>): _14.QueryAccountAddressByIDResponse;
                fromAmino(object: _14.QueryAccountAddressByIDResponseAmino): _14.QueryAccountAddressByIDResponse;
                toAmino(message: _14.QueryAccountAddressByIDResponse): _14.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _14.QueryAccountAddressByIDResponseAminoMsg): _14.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _14.QueryAccountAddressByIDResponse): _14.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAccountAddressByIDResponseProtoMsg): _14.QueryAccountAddressByIDResponse;
                toProto(message: _14.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAccountAddressByIDResponse): _14.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _14.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAccountInfoRequest;
                fromPartial(object: Partial<_14.QueryAccountInfoRequest>): _14.QueryAccountInfoRequest;
                fromAmino(object: _14.QueryAccountInfoRequestAmino): _14.QueryAccountInfoRequest;
                toAmino(message: _14.QueryAccountInfoRequest): _14.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _14.QueryAccountInfoRequestAminoMsg): _14.QueryAccountInfoRequest;
                toAminoMsg(message: _14.QueryAccountInfoRequest): _14.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAccountInfoRequestProtoMsg): _14.QueryAccountInfoRequest;
                toProto(message: _14.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAccountInfoRequest): _14.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _14.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.QueryAccountInfoResponse;
                fromPartial(object: Partial<_14.QueryAccountInfoResponse>): _14.QueryAccountInfoResponse;
                fromAmino(object: _14.QueryAccountInfoResponseAmino): _14.QueryAccountInfoResponse;
                toAmino(message: _14.QueryAccountInfoResponse): _14.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _14.QueryAccountInfoResponseAminoMsg): _14.QueryAccountInfoResponse;
                toAminoMsg(message: _14.QueryAccountInfoResponse): _14.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAccountInfoResponseProtoMsg): _14.QueryAccountInfoResponse;
                toProto(message: _14.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAccountInfoResponse): _14.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _12.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _12.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                toAminoMsg(message: _13.GenesisState): _13.GenesisStateAminoMsg;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _12.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.BaseAccount;
                fromPartial(object: Partial<_12.BaseAccount>): _12.BaseAccount;
                fromAmino(object: _12.BaseAccountAmino): _12.BaseAccount;
                toAmino(message: _12.BaseAccount): _12.BaseAccountAmino;
                fromAminoMsg(object: _12.BaseAccountAminoMsg): _12.BaseAccount;
                toAminoMsg(message: _12.BaseAccount): _12.BaseAccountAminoMsg;
                fromProtoMsg(message: _12.BaseAccountProtoMsg): _12.BaseAccount;
                toProto(message: _12.BaseAccount): Uint8Array;
                toProtoMsg(message: _12.BaseAccount): _12.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _12.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ModuleAccount;
                fromPartial(object: Partial<_12.ModuleAccount>): _12.ModuleAccount;
                fromAmino(object: _12.ModuleAccountAmino): _12.ModuleAccount;
                toAmino(message: _12.ModuleAccount): _12.ModuleAccountAmino;
                fromAminoMsg(object: _12.ModuleAccountAminoMsg): _12.ModuleAccount;
                toAminoMsg(message: _12.ModuleAccount): _12.ModuleAccountAminoMsg;
                fromProtoMsg(message: _12.ModuleAccountProtoMsg): _12.ModuleAccount;
                toProto(message: _12.ModuleAccount): Uint8Array;
                toProtoMsg(message: _12.ModuleAccount): _12.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _12.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ModuleCredential;
                fromPartial(object: Partial<_12.ModuleCredential>): _12.ModuleCredential;
                fromAmino(object: _12.ModuleCredentialAmino): _12.ModuleCredential;
                toAmino(message: _12.ModuleCredential): _12.ModuleCredentialAmino;
                fromAminoMsg(object: _12.ModuleCredentialAminoMsg): _12.ModuleCredential;
                toAminoMsg(message: _12.ModuleCredential): _12.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _12.ModuleCredentialProtoMsg): _12.ModuleCredential;
                toProto(message: _12.ModuleCredential): Uint8Array;
                toProtoMsg(message: _12.ModuleCredential): _12.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _12.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Params;
                fromPartial(object: Partial<_12.Params>): _12.Params;
                fromAmino(object: _12.ParamsAmino): _12.Params;
                toAmino(message: _12.Params): _12.ParamsAmino;
                fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
                toAminoMsg(message: _12.Params): _12.ParamsAminoMsg;
                fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
                toProto(message: _12.Params): Uint8Array;
                toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _16.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _16.Module;
                    fromPartial(_: Partial<_16.Module>): _16.Module;
                    fromAmino(_: _16.ModuleAmino): _16.Module;
                    toAmino(_: _16.Module): _16.ModuleAmino;
                    fromAminoMsg(object: _16.ModuleAminoMsg): _16.Module;
                    toAminoMsg(message: _16.Module): _16.ModuleAminoMsg;
                    fromProtoMsg(message: _16.ModuleProtoMsg): _16.Module;
                    toProto(message: _16.Module): Uint8Array;
                    toProtoMsg(message: _16.Module): _16.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _20.QueryGrantsRequest): Promise<_20.QueryGrantsResponse>;
                granterGrants(request: _20.QueryGranterGrantsRequest): Promise<_20.QueryGranterGrantsResponse>;
                granteeGrants(request: _20.QueryGranteeGrantsRequest): Promise<_20.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _21.MsgGrant) => _21.MsgGrantAmino;
                    fromAmino: (object: _21.MsgGrantAmino) => _21.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _21.MsgExec) => _21.MsgExecAmino;
                    fromAmino: (object: _21.MsgExecAmino) => _21.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _21.MsgRevoke) => _21.MsgRevokeAmino;
                    fromAmino: (object: _21.MsgRevokeAmino) => _21.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _21.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgGrant;
                fromPartial(object: Partial<_21.MsgGrant>): _21.MsgGrant;
                fromAmino(object: _21.MsgGrantAmino): _21.MsgGrant;
                toAmino(message: _21.MsgGrant): _21.MsgGrantAmino;
                fromAminoMsg(object: _21.MsgGrantAminoMsg): _21.MsgGrant;
                toAminoMsg(message: _21.MsgGrant): _21.MsgGrantAminoMsg;
                fromProtoMsg(message: _21.MsgGrantProtoMsg): _21.MsgGrant;
                toProto(message: _21.MsgGrant): Uint8Array;
                toProtoMsg(message: _21.MsgGrant): _21.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _21.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgExecResponse;
                fromPartial(object: Partial<_21.MsgExecResponse>): _21.MsgExecResponse;
                fromAmino(object: _21.MsgExecResponseAmino): _21.MsgExecResponse;
                toAmino(message: _21.MsgExecResponse): _21.MsgExecResponseAmino;
                fromAminoMsg(object: _21.MsgExecResponseAminoMsg): _21.MsgExecResponse;
                toAminoMsg(message: _21.MsgExecResponse): _21.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _21.MsgExecResponseProtoMsg): _21.MsgExecResponse;
                toProto(message: _21.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _21.MsgExecResponse): _21.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _21.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgExec;
                fromPartial(object: Partial<_21.MsgExec>): _21.MsgExec;
                fromAmino(object: _21.MsgExecAmino): _21.MsgExec;
                toAmino(message: _21.MsgExec): _21.MsgExecAmino;
                fromAminoMsg(object: _21.MsgExecAminoMsg): _21.MsgExec;
                toAminoMsg(message: _21.MsgExec): _21.MsgExecAminoMsg;
                fromProtoMsg(message: _21.MsgExecProtoMsg): _21.MsgExec;
                toProto(message: _21.MsgExec): Uint8Array;
                toProtoMsg(message: _21.MsgExec): _21.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _21.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgGrantResponse;
                fromPartial(_: Partial<_21.MsgGrantResponse>): _21.MsgGrantResponse;
                fromAmino(_: _21.MsgGrantResponseAmino): _21.MsgGrantResponse;
                toAmino(_: _21.MsgGrantResponse): _21.MsgGrantResponseAmino;
                fromAminoMsg(object: _21.MsgGrantResponseAminoMsg): _21.MsgGrantResponse;
                toAminoMsg(message: _21.MsgGrantResponse): _21.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _21.MsgGrantResponseProtoMsg): _21.MsgGrantResponse;
                toProto(message: _21.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _21.MsgGrantResponse): _21.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _21.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MsgRevoke;
                fromPartial(object: Partial<_21.MsgRevoke>): _21.MsgRevoke;
                fromAmino(object: _21.MsgRevokeAmino): _21.MsgRevoke;
                toAmino(message: _21.MsgRevoke): _21.MsgRevokeAmino;
                fromAminoMsg(object: _21.MsgRevokeAminoMsg): _21.MsgRevoke;
                toAminoMsg(message: _21.MsgRevoke): _21.MsgRevokeAminoMsg;
                fromProtoMsg(message: _21.MsgRevokeProtoMsg): _21.MsgRevoke;
                toProto(message: _21.MsgRevoke): Uint8Array;
                toProtoMsg(message: _21.MsgRevoke): _21.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _21.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.MsgRevokeResponse;
                fromPartial(_: Partial<_21.MsgRevokeResponse>): _21.MsgRevokeResponse;
                fromAmino(_: _21.MsgRevokeResponseAmino): _21.MsgRevokeResponse;
                toAmino(_: _21.MsgRevokeResponse): _21.MsgRevokeResponseAmino;
                fromAminoMsg(object: _21.MsgRevokeResponseAminoMsg): _21.MsgRevokeResponse;
                toAminoMsg(message: _21.MsgRevokeResponse): _21.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _21.MsgRevokeResponseProtoMsg): _21.MsgRevokeResponse;
                toProto(message: _21.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _21.MsgRevokeResponse): _21.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _20.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGrantsRequest;
                fromPartial(object: Partial<_20.QueryGrantsRequest>): _20.QueryGrantsRequest;
                fromAmino(object: _20.QueryGrantsRequestAmino): _20.QueryGrantsRequest;
                toAmino(message: _20.QueryGrantsRequest): _20.QueryGrantsRequestAmino;
                fromAminoMsg(object: _20.QueryGrantsRequestAminoMsg): _20.QueryGrantsRequest;
                toAminoMsg(message: _20.QueryGrantsRequest): _20.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryGrantsRequestProtoMsg): _20.QueryGrantsRequest;
                toProto(message: _20.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryGrantsRequest): _20.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _20.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGrantsResponse;
                fromPartial(object: Partial<_20.QueryGrantsResponse>): _20.QueryGrantsResponse;
                fromAmino(object: _20.QueryGrantsResponseAmino): _20.QueryGrantsResponse;
                toAmino(message: _20.QueryGrantsResponse): _20.QueryGrantsResponseAmino;
                fromAminoMsg(object: _20.QueryGrantsResponseAminoMsg): _20.QueryGrantsResponse;
                toAminoMsg(message: _20.QueryGrantsResponse): _20.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryGrantsResponseProtoMsg): _20.QueryGrantsResponse;
                toProto(message: _20.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryGrantsResponse): _20.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _20.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_20.QueryGranterGrantsRequest>): _20.QueryGranterGrantsRequest;
                fromAmino(object: _20.QueryGranterGrantsRequestAmino): _20.QueryGranterGrantsRequest;
                toAmino(message: _20.QueryGranterGrantsRequest): _20.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _20.QueryGranterGrantsRequestAminoMsg): _20.QueryGranterGrantsRequest;
                toAminoMsg(message: _20.QueryGranterGrantsRequest): _20.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryGranterGrantsRequestProtoMsg): _20.QueryGranterGrantsRequest;
                toProto(message: _20.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryGranterGrantsRequest): _20.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _20.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_20.QueryGranterGrantsResponse>): _20.QueryGranterGrantsResponse;
                fromAmino(object: _20.QueryGranterGrantsResponseAmino): _20.QueryGranterGrantsResponse;
                toAmino(message: _20.QueryGranterGrantsResponse): _20.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _20.QueryGranterGrantsResponseAminoMsg): _20.QueryGranterGrantsResponse;
                toAminoMsg(message: _20.QueryGranterGrantsResponse): _20.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryGranterGrantsResponseProtoMsg): _20.QueryGranterGrantsResponse;
                toProto(message: _20.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryGranterGrantsResponse): _20.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _20.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_20.QueryGranteeGrantsRequest>): _20.QueryGranteeGrantsRequest;
                fromAmino(object: _20.QueryGranteeGrantsRequestAmino): _20.QueryGranteeGrantsRequest;
                toAmino(message: _20.QueryGranteeGrantsRequest): _20.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _20.QueryGranteeGrantsRequestAminoMsg): _20.QueryGranteeGrantsRequest;
                toAminoMsg(message: _20.QueryGranteeGrantsRequest): _20.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _20.QueryGranteeGrantsRequestProtoMsg): _20.QueryGranteeGrantsRequest;
                toProto(message: _20.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _20.QueryGranteeGrantsRequest): _20.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _20.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_20.QueryGranteeGrantsResponse>): _20.QueryGranteeGrantsResponse;
                fromAmino(object: _20.QueryGranteeGrantsResponseAmino): _20.QueryGranteeGrantsResponse;
                toAmino(message: _20.QueryGranteeGrantsResponse): _20.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _20.QueryGranteeGrantsResponseAminoMsg): _20.QueryGranteeGrantsResponse;
                toAminoMsg(message: _20.QueryGranteeGrantsResponse): _20.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _20.QueryGranteeGrantsResponseProtoMsg): _20.QueryGranteeGrantsResponse;
                toProto(message: _20.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryGranteeGrantsResponse): _20.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
                fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
                toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
                fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
                toAminoMsg(message: _19.GenesisState): _19.GenesisStateAminoMsg;
                fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
                toProto(message: _19.GenesisState): Uint8Array;
                toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _18.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.EventGrant;
                fromPartial(object: Partial<_18.EventGrant>): _18.EventGrant;
                fromAmino(object: _18.EventGrantAmino): _18.EventGrant;
                toAmino(message: _18.EventGrant): _18.EventGrantAmino;
                fromAminoMsg(object: _18.EventGrantAminoMsg): _18.EventGrant;
                toAminoMsg(message: _18.EventGrant): _18.EventGrantAminoMsg;
                fromProtoMsg(message: _18.EventGrantProtoMsg): _18.EventGrant;
                toProto(message: _18.EventGrant): Uint8Array;
                toProtoMsg(message: _18.EventGrant): _18.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _18.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.EventRevoke;
                fromPartial(object: Partial<_18.EventRevoke>): _18.EventRevoke;
                fromAmino(object: _18.EventRevokeAmino): _18.EventRevoke;
                toAmino(message: _18.EventRevoke): _18.EventRevokeAmino;
                fromAminoMsg(object: _18.EventRevokeAminoMsg): _18.EventRevoke;
                toAminoMsg(message: _18.EventRevoke): _18.EventRevokeAminoMsg;
                fromProtoMsg(message: _18.EventRevokeProtoMsg): _18.EventRevoke;
                toProto(message: _18.EventRevoke): Uint8Array;
                toProtoMsg(message: _18.EventRevoke): _18.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _17.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.GenericAuthorization;
                fromPartial(object: Partial<_17.GenericAuthorization>): _17.GenericAuthorization;
                fromAmino(object: _17.GenericAuthorizationAmino): _17.GenericAuthorization;
                toAmino(message: _17.GenericAuthorization): _17.GenericAuthorizationAmino;
                fromAminoMsg(object: _17.GenericAuthorizationAminoMsg): _17.GenericAuthorization;
                toAminoMsg(message: _17.GenericAuthorization): _17.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _17.GenericAuthorizationProtoMsg): _17.GenericAuthorization;
                toProto(message: _17.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _17.GenericAuthorization): _17.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _17.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Grant;
                fromPartial(object: Partial<_17.Grant>): _17.Grant;
                fromAmino(object: _17.GrantAmino): _17.Grant;
                toAmino(message: _17.Grant): _17.GrantAmino;
                fromAminoMsg(object: _17.GrantAminoMsg): _17.Grant;
                toAminoMsg(message: _17.Grant): _17.GrantAminoMsg;
                fromProtoMsg(message: _17.GrantProtoMsg): _17.Grant;
                toProto(message: _17.Grant): Uint8Array;
                toProtoMsg(message: _17.Grant): _17.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _17.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.GrantAuthorization;
                fromPartial(object: Partial<_17.GrantAuthorization>): _17.GrantAuthorization;
                fromAmino(object: _17.GrantAuthorizationAmino): _17.GrantAuthorization;
                toAmino(message: _17.GrantAuthorization): _17.GrantAuthorizationAmino;
                fromAminoMsg(object: _17.GrantAuthorizationAminoMsg): _17.GrantAuthorization;
                toAminoMsg(message: _17.GrantAuthorization): _17.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _17.GrantAuthorizationProtoMsg): _17.GrantAuthorization;
                toProto(message: _17.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _17.GrantAuthorization): _17.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _17.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.GrantQueueItem;
                fromPartial(object: Partial<_17.GrantQueueItem>): _17.GrantQueueItem;
                fromAmino(object: _17.GrantQueueItemAmino): _17.GrantQueueItem;
                toAmino(message: _17.GrantQueueItem): _17.GrantQueueItemAmino;
                fromAminoMsg(object: _17.GrantQueueItemAminoMsg): _17.GrantQueueItem;
                toAminoMsg(message: _17.GrantQueueItem): _17.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _17.GrantQueueItemProtoMsg): _17.GrantQueueItem;
                toProto(message: _17.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _17.GrantQueueItem): _17.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => _1.StakeAuthorization | import("../google/protobuf/any").Any | _25.SendAuthorization | import("../cosmwasm/wasm/v1/authz").StoreCodeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | _17.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _23.AppOptionsRequest): Promise<_23.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _23.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.AppOptionsRequest;
                fromPartial(_: Partial<_23.AppOptionsRequest>): _23.AppOptionsRequest;
                fromAmino(_: _23.AppOptionsRequestAmino): _23.AppOptionsRequest;
                toAmino(_: _23.AppOptionsRequest): _23.AppOptionsRequestAmino;
                fromAminoMsg(object: _23.AppOptionsRequestAminoMsg): _23.AppOptionsRequest;
                toAminoMsg(message: _23.AppOptionsRequest): _23.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _23.AppOptionsRequestProtoMsg): _23.AppOptionsRequest;
                toProto(message: _23.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _23.AppOptionsRequest): _23.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _23.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_23.AppOptionsResponse_ModuleOptionsEntry>): _23.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _23.AppOptionsResponse_ModuleOptionsEntryAmino): _23.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _23.AppOptionsResponse_ModuleOptionsEntry): _23.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _23.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _23.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _23.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _23.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _23.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _23.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.AppOptionsResponse;
                fromPartial(object: Partial<_23.AppOptionsResponse>): _23.AppOptionsResponse;
                fromAmino(object: _23.AppOptionsResponseAmino): _23.AppOptionsResponse;
                toAmino(message: _23.AppOptionsResponse): _23.AppOptionsResponseAmino;
                fromAminoMsg(object: _23.AppOptionsResponseAminoMsg): _23.AppOptionsResponse;
                toAminoMsg(message: _23.AppOptionsResponse): _23.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _23.AppOptionsResponseProtoMsg): _23.AppOptionsResponse;
                toProto(message: _23.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _23.AppOptionsResponse): _23.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _22.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ModuleOptions;
                fromPartial(object: Partial<_22.ModuleOptions>): _22.ModuleOptions;
                fromAmino(object: _22.ModuleOptionsAmino): _22.ModuleOptions;
                toAmino(message: _22.ModuleOptions): _22.ModuleOptionsAmino;
                fromAminoMsg(object: _22.ModuleOptionsAminoMsg): _22.ModuleOptions;
                toAminoMsg(message: _22.ModuleOptions): _22.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _22.ModuleOptionsProtoMsg): _22.ModuleOptions;
                toProto(message: _22.ModuleOptions): Uint8Array;
                toProtoMsg(message: _22.ModuleOptions): _22.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _22.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_22.ServiceCommandDescriptor_SubCommandsEntry>): _22.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _22.ServiceCommandDescriptor_SubCommandsEntryAmino): _22.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _22.ServiceCommandDescriptor_SubCommandsEntry): _22.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _22.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _22.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _22.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _22.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _22.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _22.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ServiceCommandDescriptor;
                fromPartial(object: Partial<_22.ServiceCommandDescriptor>): _22.ServiceCommandDescriptor;
                fromAmino(object: _22.ServiceCommandDescriptorAmino): _22.ServiceCommandDescriptor;
                toAmino(message: _22.ServiceCommandDescriptor): _22.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _22.ServiceCommandDescriptorAminoMsg): _22.ServiceCommandDescriptor;
                toAminoMsg(message: _22.ServiceCommandDescriptor): _22.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _22.ServiceCommandDescriptorProtoMsg): _22.ServiceCommandDescriptor;
                toProto(message: _22.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _22.ServiceCommandDescriptor): _22.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _22.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_22.RpcCommandOptions_FlagOptionsEntry>): _22.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _22.RpcCommandOptions_FlagOptionsEntryAmino): _22.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _22.RpcCommandOptions_FlagOptionsEntry): _22.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _22.RpcCommandOptions_FlagOptionsEntryAminoMsg): _22.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _22.RpcCommandOptions_FlagOptionsEntryProtoMsg): _22.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _22.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _22.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.RpcCommandOptions;
                fromPartial(object: Partial<_22.RpcCommandOptions>): _22.RpcCommandOptions;
                fromAmino(object: _22.RpcCommandOptionsAmino): _22.RpcCommandOptions;
                toAmino(message: _22.RpcCommandOptions): _22.RpcCommandOptionsAmino;
                fromAminoMsg(object: _22.RpcCommandOptionsAminoMsg): _22.RpcCommandOptions;
                toAminoMsg(message: _22.RpcCommandOptions): _22.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _22.RpcCommandOptionsProtoMsg): _22.RpcCommandOptions;
                toProto(message: _22.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _22.RpcCommandOptions): _22.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _22.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.FlagOptions;
                fromPartial(object: Partial<_22.FlagOptions>): _22.FlagOptions;
                fromAmino(object: _22.FlagOptionsAmino): _22.FlagOptions;
                toAmino(message: _22.FlagOptions): _22.FlagOptionsAmino;
                fromAminoMsg(object: _22.FlagOptionsAminoMsg): _22.FlagOptions;
                toAminoMsg(message: _22.FlagOptions): _22.FlagOptionsAminoMsg;
                fromProtoMsg(message: _22.FlagOptionsProtoMsg): _22.FlagOptions;
                toProto(message: _22.FlagOptions): Uint8Array;
                toProtoMsg(message: _22.FlagOptions): _22.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _22.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.PositionalArgDescriptor;
                fromPartial(object: Partial<_22.PositionalArgDescriptor>): _22.PositionalArgDescriptor;
                fromAmino(object: _22.PositionalArgDescriptorAmino): _22.PositionalArgDescriptor;
                toAmino(message: _22.PositionalArgDescriptor): _22.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _22.PositionalArgDescriptorAminoMsg): _22.PositionalArgDescriptor;
                toAminoMsg(message: _22.PositionalArgDescriptor): _22.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _22.PositionalArgDescriptorProtoMsg): _22.PositionalArgDescriptor;
                toProto(message: _22.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _22.PositionalArgDescriptor): _22.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _24.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _24.Module;
                    fromPartial(object: Partial<_24.Module>): _24.Module;
                    fromAmino(object: _24.ModuleAmino): _24.Module;
                    toAmino(message: _24.Module): _24.ModuleAmino;
                    fromAminoMsg(object: _24.ModuleAminoMsg): _24.Module;
                    toAminoMsg(message: _24.Module): _24.ModuleAminoMsg;
                    fromProtoMsg(message: _24.ModuleProtoMsg): _24.Module;
                    toProto(message: _24.Module): Uint8Array;
                    toProtoMsg(message: _24.Module): _24.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _28.QueryBalanceRequest): Promise<_28.QueryBalanceResponse>;
                allBalances(request: _28.QueryAllBalancesRequest): Promise<_28.QueryAllBalancesResponse>;
                spendableBalances(request: _28.QuerySpendableBalancesRequest): Promise<_28.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _28.QuerySpendableBalanceByDenomRequest): Promise<_28.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _28.QueryTotalSupplyRequest): Promise<_28.QueryTotalSupplyResponse>;
                supplyOf(request: _28.QuerySupplyOfRequest): Promise<_28.QuerySupplyOfResponse>;
                params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                denomMetadata(request: _28.QueryDenomMetadataRequest): Promise<_28.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _28.QueryDenomsMetadataRequest): Promise<_28.QueryDenomsMetadataResponse>;
                denomOwners(request: _28.QueryDenomOwnersRequest): Promise<_28.QueryDenomOwnersResponse>;
                sendEnabled(request: _28.QuerySendEnabledRequest): Promise<_28.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _29.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _29.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _29.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _29.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _29.MsgSend): {
                        typeUrl: string;
                        value: _29.MsgSend;
                    };
                    multiSend(value: _29.MsgMultiSend): {
                        typeUrl: string;
                        value: _29.MsgMultiSend;
                    };
                    updateParams(value: _29.MsgUpdateParams): {
                        typeUrl: string;
                        value: _29.MsgUpdateParams;
                    };
                    setSendEnabled(value: _29.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _29.MsgSetSendEnabled;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _29.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _29.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _29.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _29.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _29.MsgSend): {
                        typeUrl: string;
                        value: _29.MsgSend;
                    };
                    multiSend(value: _29.MsgMultiSend): {
                        typeUrl: string;
                        value: _29.MsgMultiSend;
                    };
                    updateParams(value: _29.MsgUpdateParams): {
                        typeUrl: string;
                        value: _29.MsgUpdateParams;
                    };
                    setSendEnabled(value: _29.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _29.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _29.MsgSend) => _29.MsgSendAmino;
                    fromAmino: (object: _29.MsgSendAmino) => _29.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _29.MsgMultiSend) => _29.MsgMultiSendAmino;
                    fromAmino: (object: _29.MsgMultiSendAmino) => _29.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _29.MsgUpdateParams) => _29.MsgUpdateParamsAmino;
                    fromAmino: (object: _29.MsgUpdateParamsAmino) => _29.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _29.MsgSetSendEnabled) => _29.MsgSetSendEnabledAmino;
                    fromAmino: (object: _29.MsgSetSendEnabledAmino) => _29.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _29.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgSend;
                fromPartial(object: Partial<_29.MsgSend>): _29.MsgSend;
                fromAmino(object: _29.MsgSendAmino): _29.MsgSend;
                toAmino(message: _29.MsgSend): _29.MsgSendAmino;
                fromAminoMsg(object: _29.MsgSendAminoMsg): _29.MsgSend;
                toAminoMsg(message: _29.MsgSend): _29.MsgSendAminoMsg;
                fromProtoMsg(message: _29.MsgSendProtoMsg): _29.MsgSend;
                toProto(message: _29.MsgSend): Uint8Array;
                toProtoMsg(message: _29.MsgSend): _29.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _29.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgSendResponse;
                fromPartial(_: Partial<_29.MsgSendResponse>): _29.MsgSendResponse;
                fromAmino(_: _29.MsgSendResponseAmino): _29.MsgSendResponse;
                toAmino(_: _29.MsgSendResponse): _29.MsgSendResponseAmino;
                fromAminoMsg(object: _29.MsgSendResponseAminoMsg): _29.MsgSendResponse;
                toAminoMsg(message: _29.MsgSendResponse): _29.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _29.MsgSendResponseProtoMsg): _29.MsgSendResponse;
                toProto(message: _29.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _29.MsgSendResponse): _29.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _29.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgMultiSend;
                fromPartial(object: Partial<_29.MsgMultiSend>): _29.MsgMultiSend;
                fromAmino(object: _29.MsgMultiSendAmino): _29.MsgMultiSend;
                toAmino(message: _29.MsgMultiSend): _29.MsgMultiSendAmino;
                fromAminoMsg(object: _29.MsgMultiSendAminoMsg): _29.MsgMultiSend;
                toAminoMsg(message: _29.MsgMultiSend): _29.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _29.MsgMultiSendProtoMsg): _29.MsgMultiSend;
                toProto(message: _29.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _29.MsgMultiSend): _29.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _29.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgMultiSendResponse;
                fromPartial(_: Partial<_29.MsgMultiSendResponse>): _29.MsgMultiSendResponse;
                fromAmino(_: _29.MsgMultiSendResponseAmino): _29.MsgMultiSendResponse;
                toAmino(_: _29.MsgMultiSendResponse): _29.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _29.MsgMultiSendResponseAminoMsg): _29.MsgMultiSendResponse;
                toAminoMsg(message: _29.MsgMultiSendResponse): _29.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _29.MsgMultiSendResponseProtoMsg): _29.MsgMultiSendResponse;
                toProto(message: _29.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _29.MsgMultiSendResponse): _29.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _29.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgUpdateParams;
                fromPartial(object: Partial<_29.MsgUpdateParams>): _29.MsgUpdateParams;
                fromAmino(object: _29.MsgUpdateParamsAmino): _29.MsgUpdateParams;
                toAmino(message: _29.MsgUpdateParams): _29.MsgUpdateParamsAmino;
                fromAminoMsg(object: _29.MsgUpdateParamsAminoMsg): _29.MsgUpdateParams;
                toAminoMsg(message: _29.MsgUpdateParams): _29.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _29.MsgUpdateParamsProtoMsg): _29.MsgUpdateParams;
                toProto(message: _29.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateParams): _29.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _29.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_29.MsgUpdateParamsResponse>): _29.MsgUpdateParamsResponse;
                fromAmino(_: _29.MsgUpdateParamsResponseAmino): _29.MsgUpdateParamsResponse;
                toAmino(_: _29.MsgUpdateParamsResponse): _29.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _29.MsgUpdateParamsResponseAminoMsg): _29.MsgUpdateParamsResponse;
                toAminoMsg(message: _29.MsgUpdateParamsResponse): _29.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _29.MsgUpdateParamsResponseProtoMsg): _29.MsgUpdateParamsResponse;
                toProto(message: _29.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateParamsResponse): _29.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _29.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgSetSendEnabled;
                fromPartial(object: Partial<_29.MsgSetSendEnabled>): _29.MsgSetSendEnabled;
                fromAmino(object: _29.MsgSetSendEnabledAmino): _29.MsgSetSendEnabled;
                toAmino(message: _29.MsgSetSendEnabled): _29.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _29.MsgSetSendEnabledAminoMsg): _29.MsgSetSendEnabled;
                toAminoMsg(message: _29.MsgSetSendEnabled): _29.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _29.MsgSetSendEnabledProtoMsg): _29.MsgSetSendEnabled;
                toProto(message: _29.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _29.MsgSetSendEnabled): _29.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _29.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_29.MsgSetSendEnabledResponse>): _29.MsgSetSendEnabledResponse;
                fromAmino(_: _29.MsgSetSendEnabledResponseAmino): _29.MsgSetSendEnabledResponse;
                toAmino(_: _29.MsgSetSendEnabledResponse): _29.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _29.MsgSetSendEnabledResponseAminoMsg): _29.MsgSetSendEnabledResponse;
                toAminoMsg(message: _29.MsgSetSendEnabledResponse): _29.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _29.MsgSetSendEnabledResponseProtoMsg): _29.MsgSetSendEnabledResponse;
                toProto(message: _29.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _29.MsgSetSendEnabledResponse): _29.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _28.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryBalanceRequest;
                fromPartial(object: Partial<_28.QueryBalanceRequest>): _28.QueryBalanceRequest;
                fromAmino(object: _28.QueryBalanceRequestAmino): _28.QueryBalanceRequest;
                toAmino(message: _28.QueryBalanceRequest): _28.QueryBalanceRequestAmino;
                fromAminoMsg(object: _28.QueryBalanceRequestAminoMsg): _28.QueryBalanceRequest;
                toAminoMsg(message: _28.QueryBalanceRequest): _28.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _28.QueryBalanceRequestProtoMsg): _28.QueryBalanceRequest;
                toProto(message: _28.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _28.QueryBalanceRequest): _28.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _28.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryBalanceResponse;
                fromPartial(object: Partial<_28.QueryBalanceResponse>): _28.QueryBalanceResponse;
                fromAmino(object: _28.QueryBalanceResponseAmino): _28.QueryBalanceResponse;
                toAmino(message: _28.QueryBalanceResponse): _28.QueryBalanceResponseAmino;
                fromAminoMsg(object: _28.QueryBalanceResponseAminoMsg): _28.QueryBalanceResponse;
                toAminoMsg(message: _28.QueryBalanceResponse): _28.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _28.QueryBalanceResponseProtoMsg): _28.QueryBalanceResponse;
                toProto(message: _28.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _28.QueryBalanceResponse): _28.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _28.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryAllBalancesRequest;
                fromPartial(object: Partial<_28.QueryAllBalancesRequest>): _28.QueryAllBalancesRequest;
                fromAmino(object: _28.QueryAllBalancesRequestAmino): _28.QueryAllBalancesRequest;
                toAmino(message: _28.QueryAllBalancesRequest): _28.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _28.QueryAllBalancesRequestAminoMsg): _28.QueryAllBalancesRequest;
                toAminoMsg(message: _28.QueryAllBalancesRequest): _28.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _28.QueryAllBalancesRequestProtoMsg): _28.QueryAllBalancesRequest;
                toProto(message: _28.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _28.QueryAllBalancesRequest): _28.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _28.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryAllBalancesResponse;
                fromPartial(object: Partial<_28.QueryAllBalancesResponse>): _28.QueryAllBalancesResponse;
                fromAmino(object: _28.QueryAllBalancesResponseAmino): _28.QueryAllBalancesResponse;
                toAmino(message: _28.QueryAllBalancesResponse): _28.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _28.QueryAllBalancesResponseAminoMsg): _28.QueryAllBalancesResponse;
                toAminoMsg(message: _28.QueryAllBalancesResponse): _28.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _28.QueryAllBalancesResponseProtoMsg): _28.QueryAllBalancesResponse;
                toProto(message: _28.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _28.QueryAllBalancesResponse): _28.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _28.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_28.QuerySpendableBalancesRequest>): _28.QuerySpendableBalancesRequest;
                fromAmino(object: _28.QuerySpendableBalancesRequestAmino): _28.QuerySpendableBalancesRequest;
                toAmino(message: _28.QuerySpendableBalancesRequest): _28.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _28.QuerySpendableBalancesRequestAminoMsg): _28.QuerySpendableBalancesRequest;
                toAminoMsg(message: _28.QuerySpendableBalancesRequest): _28.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _28.QuerySpendableBalancesRequestProtoMsg): _28.QuerySpendableBalancesRequest;
                toProto(message: _28.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _28.QuerySpendableBalancesRequest): _28.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _28.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_28.QuerySpendableBalancesResponse>): _28.QuerySpendableBalancesResponse;
                fromAmino(object: _28.QuerySpendableBalancesResponseAmino): _28.QuerySpendableBalancesResponse;
                toAmino(message: _28.QuerySpendableBalancesResponse): _28.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _28.QuerySpendableBalancesResponseAminoMsg): _28.QuerySpendableBalancesResponse;
                toAminoMsg(message: _28.QuerySpendableBalancesResponse): _28.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _28.QuerySpendableBalancesResponseProtoMsg): _28.QuerySpendableBalancesResponse;
                toProto(message: _28.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _28.QuerySpendableBalancesResponse): _28.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _28.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_28.QuerySpendableBalanceByDenomRequest>): _28.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _28.QuerySpendableBalanceByDenomRequestAmino): _28.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _28.QuerySpendableBalanceByDenomRequest): _28.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _28.QuerySpendableBalanceByDenomRequestAminoMsg): _28.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _28.QuerySpendableBalanceByDenomRequest): _28.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _28.QuerySpendableBalanceByDenomRequestProtoMsg): _28.QuerySpendableBalanceByDenomRequest;
                toProto(message: _28.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _28.QuerySpendableBalanceByDenomRequest): _28.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _28.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_28.QuerySpendableBalanceByDenomResponse>): _28.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _28.QuerySpendableBalanceByDenomResponseAmino): _28.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _28.QuerySpendableBalanceByDenomResponse): _28.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _28.QuerySpendableBalanceByDenomResponseAminoMsg): _28.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _28.QuerySpendableBalanceByDenomResponse): _28.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _28.QuerySpendableBalanceByDenomResponseProtoMsg): _28.QuerySpendableBalanceByDenomResponse;
                toProto(message: _28.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _28.QuerySpendableBalanceByDenomResponse): _28.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _28.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_28.QueryTotalSupplyRequest>): _28.QueryTotalSupplyRequest;
                fromAmino(object: _28.QueryTotalSupplyRequestAmino): _28.QueryTotalSupplyRequest;
                toAmino(message: _28.QueryTotalSupplyRequest): _28.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _28.QueryTotalSupplyRequestAminoMsg): _28.QueryTotalSupplyRequest;
                toAminoMsg(message: _28.QueryTotalSupplyRequest): _28.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _28.QueryTotalSupplyRequestProtoMsg): _28.QueryTotalSupplyRequest;
                toProto(message: _28.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _28.QueryTotalSupplyRequest): _28.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _28.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_28.QueryTotalSupplyResponse>): _28.QueryTotalSupplyResponse;
                fromAmino(object: _28.QueryTotalSupplyResponseAmino): _28.QueryTotalSupplyResponse;
                toAmino(message: _28.QueryTotalSupplyResponse): _28.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _28.QueryTotalSupplyResponseAminoMsg): _28.QueryTotalSupplyResponse;
                toAminoMsg(message: _28.QueryTotalSupplyResponse): _28.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _28.QueryTotalSupplyResponseProtoMsg): _28.QueryTotalSupplyResponse;
                toProto(message: _28.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _28.QueryTotalSupplyResponse): _28.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _28.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySupplyOfRequest;
                fromPartial(object: Partial<_28.QuerySupplyOfRequest>): _28.QuerySupplyOfRequest;
                fromAmino(object: _28.QuerySupplyOfRequestAmino): _28.QuerySupplyOfRequest;
                toAmino(message: _28.QuerySupplyOfRequest): _28.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _28.QuerySupplyOfRequestAminoMsg): _28.QuerySupplyOfRequest;
                toAminoMsg(message: _28.QuerySupplyOfRequest): _28.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _28.QuerySupplyOfRequestProtoMsg): _28.QuerySupplyOfRequest;
                toProto(message: _28.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _28.QuerySupplyOfRequest): _28.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _28.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySupplyOfResponse;
                fromPartial(object: Partial<_28.QuerySupplyOfResponse>): _28.QuerySupplyOfResponse;
                fromAmino(object: _28.QuerySupplyOfResponseAmino): _28.QuerySupplyOfResponse;
                toAmino(message: _28.QuerySupplyOfResponse): _28.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _28.QuerySupplyOfResponseAminoMsg): _28.QuerySupplyOfResponse;
                toAminoMsg(message: _28.QuerySupplyOfResponse): _28.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _28.QuerySupplyOfResponseProtoMsg): _28.QuerySupplyOfResponse;
                toProto(message: _28.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _28.QuerySupplyOfResponse): _28.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _28.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.QueryParamsRequest;
                fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
                fromAmino(_: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
                toAmino(_: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
                fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
                toAminoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
                toProto(message: _28.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _28.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryParamsResponse;
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
                fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
                toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
                fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
                toAminoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
                toProto(message: _28.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _28.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_28.QueryDenomsMetadataRequest>): _28.QueryDenomsMetadataRequest;
                fromAmino(object: _28.QueryDenomsMetadataRequestAmino): _28.QueryDenomsMetadataRequest;
                toAmino(message: _28.QueryDenomsMetadataRequest): _28.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _28.QueryDenomsMetadataRequestAminoMsg): _28.QueryDenomsMetadataRequest;
                toAminoMsg(message: _28.QueryDenomsMetadataRequest): _28.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDenomsMetadataRequestProtoMsg): _28.QueryDenomsMetadataRequest;
                toProto(message: _28.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDenomsMetadataRequest): _28.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _28.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_28.QueryDenomsMetadataResponse>): _28.QueryDenomsMetadataResponse;
                fromAmino(object: _28.QueryDenomsMetadataResponseAmino): _28.QueryDenomsMetadataResponse;
                toAmino(message: _28.QueryDenomsMetadataResponse): _28.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _28.QueryDenomsMetadataResponseAminoMsg): _28.QueryDenomsMetadataResponse;
                toAminoMsg(message: _28.QueryDenomsMetadataResponse): _28.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDenomsMetadataResponseProtoMsg): _28.QueryDenomsMetadataResponse;
                toProto(message: _28.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDenomsMetadataResponse): _28.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _28.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_28.QueryDenomMetadataRequest>): _28.QueryDenomMetadataRequest;
                fromAmino(object: _28.QueryDenomMetadataRequestAmino): _28.QueryDenomMetadataRequest;
                toAmino(message: _28.QueryDenomMetadataRequest): _28.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _28.QueryDenomMetadataRequestAminoMsg): _28.QueryDenomMetadataRequest;
                toAminoMsg(message: _28.QueryDenomMetadataRequest): _28.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDenomMetadataRequestProtoMsg): _28.QueryDenomMetadataRequest;
                toProto(message: _28.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDenomMetadataRequest): _28.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _28.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_28.QueryDenomMetadataResponse>): _28.QueryDenomMetadataResponse;
                fromAmino(object: _28.QueryDenomMetadataResponseAmino): _28.QueryDenomMetadataResponse;
                toAmino(message: _28.QueryDenomMetadataResponse): _28.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _28.QueryDenomMetadataResponseAminoMsg): _28.QueryDenomMetadataResponse;
                toAminoMsg(message: _28.QueryDenomMetadataResponse): _28.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDenomMetadataResponseProtoMsg): _28.QueryDenomMetadataResponse;
                toProto(message: _28.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDenomMetadataResponse): _28.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _28.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_28.QueryDenomOwnersRequest>): _28.QueryDenomOwnersRequest;
                fromAmino(object: _28.QueryDenomOwnersRequestAmino): _28.QueryDenomOwnersRequest;
                toAmino(message: _28.QueryDenomOwnersRequest): _28.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _28.QueryDenomOwnersRequestAminoMsg): _28.QueryDenomOwnersRequest;
                toAminoMsg(message: _28.QueryDenomOwnersRequest): _28.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDenomOwnersRequestProtoMsg): _28.QueryDenomOwnersRequest;
                toProto(message: _28.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDenomOwnersRequest): _28.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _28.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.DenomOwner;
                fromPartial(object: Partial<_28.DenomOwner>): _28.DenomOwner;
                fromAmino(object: _28.DenomOwnerAmino): _28.DenomOwner;
                toAmino(message: _28.DenomOwner): _28.DenomOwnerAmino;
                fromAminoMsg(object: _28.DenomOwnerAminoMsg): _28.DenomOwner;
                toAminoMsg(message: _28.DenomOwner): _28.DenomOwnerAminoMsg;
                fromProtoMsg(message: _28.DenomOwnerProtoMsg): _28.DenomOwner;
                toProto(message: _28.DenomOwner): Uint8Array;
                toProtoMsg(message: _28.DenomOwner): _28.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _28.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_28.QueryDenomOwnersResponse>): _28.QueryDenomOwnersResponse;
                fromAmino(object: _28.QueryDenomOwnersResponseAmino): _28.QueryDenomOwnersResponse;
                toAmino(message: _28.QueryDenomOwnersResponse): _28.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _28.QueryDenomOwnersResponseAminoMsg): _28.QueryDenomOwnersResponse;
                toAminoMsg(message: _28.QueryDenomOwnersResponse): _28.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDenomOwnersResponseProtoMsg): _28.QueryDenomOwnersResponse;
                toProto(message: _28.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDenomOwnersResponse): _28.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _28.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySendEnabledRequest;
                fromPartial(object: Partial<_28.QuerySendEnabledRequest>): _28.QuerySendEnabledRequest;
                fromAmino(object: _28.QuerySendEnabledRequestAmino): _28.QuerySendEnabledRequest;
                toAmino(message: _28.QuerySendEnabledRequest): _28.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _28.QuerySendEnabledRequestAminoMsg): _28.QuerySendEnabledRequest;
                toAminoMsg(message: _28.QuerySendEnabledRequest): _28.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _28.QuerySendEnabledRequestProtoMsg): _28.QuerySendEnabledRequest;
                toProto(message: _28.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _28.QuerySendEnabledRequest): _28.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _28.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QuerySendEnabledResponse;
                fromPartial(object: Partial<_28.QuerySendEnabledResponse>): _28.QuerySendEnabledResponse;
                fromAmino(object: _28.QuerySendEnabledResponseAmino): _28.QuerySendEnabledResponse;
                toAmino(message: _28.QuerySendEnabledResponse): _28.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _28.QuerySendEnabledResponseAminoMsg): _28.QuerySendEnabledResponse;
                toAminoMsg(message: _28.QuerySendEnabledResponse): _28.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _28.QuerySendEnabledResponseProtoMsg): _28.QuerySendEnabledResponse;
                toProto(message: _28.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _28.QuerySendEnabledResponse): _28.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _27.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
                fromAmino(object: _27.GenesisStateAmino): _27.GenesisState;
                toAmino(message: _27.GenesisState): _27.GenesisStateAmino;
                fromAminoMsg(object: _27.GenesisStateAminoMsg): _27.GenesisState;
                toAminoMsg(message: _27.GenesisState): _27.GenesisStateAminoMsg;
                fromProtoMsg(message: _27.GenesisStateProtoMsg): _27.GenesisState;
                toProto(message: _27.GenesisState): Uint8Array;
                toProtoMsg(message: _27.GenesisState): _27.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _27.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Balance;
                fromPartial(object: Partial<_27.Balance>): _27.Balance;
                fromAmino(object: _27.BalanceAmino): _27.Balance;
                toAmino(message: _27.Balance): _27.BalanceAmino;
                fromAminoMsg(object: _27.BalanceAminoMsg): _27.Balance;
                toAminoMsg(message: _27.Balance): _27.BalanceAminoMsg;
                fromProtoMsg(message: _27.BalanceProtoMsg): _27.Balance;
                toProto(message: _27.Balance): Uint8Array;
                toProtoMsg(message: _27.Balance): _27.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _26.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Params;
                fromPartial(object: Partial<_26.Params>): _26.Params;
                fromAmino(object: _26.ParamsAmino): _26.Params;
                toAmino(message: _26.Params): _26.ParamsAmino;
                fromAminoMsg(object: _26.ParamsAminoMsg): _26.Params;
                toAminoMsg(message: _26.Params): _26.ParamsAminoMsg;
                fromProtoMsg(message: _26.ParamsProtoMsg): _26.Params;
                toProto(message: _26.Params): Uint8Array;
                toProtoMsg(message: _26.Params): _26.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _26.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.SendEnabled;
                fromPartial(object: Partial<_26.SendEnabled>): _26.SendEnabled;
                fromAmino(object: _26.SendEnabledAmino): _26.SendEnabled;
                toAmino(message: _26.SendEnabled): _26.SendEnabledAmino;
                fromAminoMsg(object: _26.SendEnabledAminoMsg): _26.SendEnabled;
                toAminoMsg(message: _26.SendEnabled): _26.SendEnabledAminoMsg;
                fromProtoMsg(message: _26.SendEnabledProtoMsg): _26.SendEnabled;
                toProto(message: _26.SendEnabled): Uint8Array;
                toProtoMsg(message: _26.SendEnabled): _26.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _26.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Input;
                fromPartial(object: Partial<_26.Input>): _26.Input;
                fromAmino(object: _26.InputAmino): _26.Input;
                toAmino(message: _26.Input): _26.InputAmino;
                fromAminoMsg(object: _26.InputAminoMsg): _26.Input;
                toAminoMsg(message: _26.Input): _26.InputAminoMsg;
                fromProtoMsg(message: _26.InputProtoMsg): _26.Input;
                toProto(message: _26.Input): Uint8Array;
                toProtoMsg(message: _26.Input): _26.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _26.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Output;
                fromPartial(object: Partial<_26.Output>): _26.Output;
                fromAmino(object: _26.OutputAmino): _26.Output;
                toAmino(message: _26.Output): _26.OutputAmino;
                fromAminoMsg(object: _26.OutputAminoMsg): _26.Output;
                toAminoMsg(message: _26.Output): _26.OutputAminoMsg;
                fromProtoMsg(message: _26.OutputProtoMsg): _26.Output;
                toProto(message: _26.Output): Uint8Array;
                toProtoMsg(message: _26.Output): _26.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _26.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Supply;
                fromPartial(object: Partial<_26.Supply>): _26.Supply;
                fromAmino(object: _26.SupplyAmino): _26.Supply;
                toAmino(message: _26.Supply): _26.SupplyAmino;
                fromAminoMsg(object: _26.SupplyAminoMsg): _26.Supply;
                toAminoMsg(message: _26.Supply): _26.SupplyAminoMsg;
                fromProtoMsg(message: _26.SupplyProtoMsg): _26.Supply;
                toProto(message: _26.Supply): Uint8Array;
                toProtoMsg(message: _26.Supply): _26.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _26.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.DenomUnit;
                fromPartial(object: Partial<_26.DenomUnit>): _26.DenomUnit;
                fromAmino(object: _26.DenomUnitAmino): _26.DenomUnit;
                toAmino(message: _26.DenomUnit): _26.DenomUnitAmino;
                fromAminoMsg(object: _26.DenomUnitAminoMsg): _26.DenomUnit;
                toAminoMsg(message: _26.DenomUnit): _26.DenomUnitAminoMsg;
                fromProtoMsg(message: _26.DenomUnitProtoMsg): _26.DenomUnit;
                toProto(message: _26.DenomUnit): Uint8Array;
                toProtoMsg(message: _26.DenomUnit): _26.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _26.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Metadata;
                fromPartial(object: Partial<_26.Metadata>): _26.Metadata;
                fromAmino(object: _26.MetadataAmino): _26.Metadata;
                toAmino(message: _26.Metadata): _26.MetadataAmino;
                fromAminoMsg(object: _26.MetadataAminoMsg): _26.Metadata;
                toAminoMsg(message: _26.Metadata): _26.MetadataAminoMsg;
                fromProtoMsg(message: _26.MetadataProtoMsg): _26.Metadata;
                toProto(message: _26.Metadata): Uint8Array;
                toProtoMsg(message: _26.Metadata): _26.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _25.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.SendAuthorization;
                fromPartial(object: Partial<_25.SendAuthorization>): _25.SendAuthorization;
                fromAmino(object: _25.SendAuthorizationAmino): _25.SendAuthorization;
                toAmino(message: _25.SendAuthorization): _25.SendAuthorizationAmino;
                fromAminoMsg(object: _25.SendAuthorizationAminoMsg): _25.SendAuthorization;
                toAminoMsg(message: _25.SendAuthorization): _25.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _25.SendAuthorizationProtoMsg): _25.SendAuthorization;
                toProto(message: _25.SendAuthorization): Uint8Array;
                toProtoMsg(message: _25.SendAuthorization): _25.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _30.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.TxResponse;
                    fromPartial(object: Partial<_30.TxResponse>): _30.TxResponse;
                    fromAmino(object: _30.TxResponseAmino): _30.TxResponse;
                    toAmino(message: _30.TxResponse): _30.TxResponseAmino;
                    fromAminoMsg(object: _30.TxResponseAminoMsg): _30.TxResponse;
                    toAminoMsg(message: _30.TxResponse): _30.TxResponseAminoMsg;
                    fromProtoMsg(message: _30.TxResponseProtoMsg): _30.TxResponse;
                    toProto(message: _30.TxResponse): Uint8Array;
                    toProtoMsg(message: _30.TxResponse): _30.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _30.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.ABCIMessageLog;
                    fromPartial(object: Partial<_30.ABCIMessageLog>): _30.ABCIMessageLog;
                    fromAmino(object: _30.ABCIMessageLogAmino): _30.ABCIMessageLog;
                    toAmino(message: _30.ABCIMessageLog): _30.ABCIMessageLogAmino;
                    fromAminoMsg(object: _30.ABCIMessageLogAminoMsg): _30.ABCIMessageLog;
                    toAminoMsg(message: _30.ABCIMessageLog): _30.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _30.ABCIMessageLogProtoMsg): _30.ABCIMessageLog;
                    toProto(message: _30.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _30.ABCIMessageLog): _30.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _30.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.StringEvent;
                    fromPartial(object: Partial<_30.StringEvent>): _30.StringEvent;
                    fromAmino(object: _30.StringEventAmino): _30.StringEvent;
                    toAmino(message: _30.StringEvent): _30.StringEventAmino;
                    fromAminoMsg(object: _30.StringEventAminoMsg): _30.StringEvent;
                    toAminoMsg(message: _30.StringEvent): _30.StringEventAminoMsg;
                    fromProtoMsg(message: _30.StringEventProtoMsg): _30.StringEvent;
                    toProto(message: _30.StringEvent): Uint8Array;
                    toProtoMsg(message: _30.StringEvent): _30.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _30.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Attribute;
                    fromPartial(object: Partial<_30.Attribute>): _30.Attribute;
                    fromAmino(object: _30.AttributeAmino): _30.Attribute;
                    toAmino(message: _30.Attribute): _30.AttributeAmino;
                    fromAminoMsg(object: _30.AttributeAminoMsg): _30.Attribute;
                    toAminoMsg(message: _30.Attribute): _30.AttributeAminoMsg;
                    fromProtoMsg(message: _30.AttributeProtoMsg): _30.Attribute;
                    toProto(message: _30.Attribute): Uint8Array;
                    toProtoMsg(message: _30.Attribute): _30.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _30.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.GasInfo;
                    fromPartial(object: Partial<_30.GasInfo>): _30.GasInfo;
                    fromAmino(object: _30.GasInfoAmino): _30.GasInfo;
                    toAmino(message: _30.GasInfo): _30.GasInfoAmino;
                    fromAminoMsg(object: _30.GasInfoAminoMsg): _30.GasInfo;
                    toAminoMsg(message: _30.GasInfo): _30.GasInfoAminoMsg;
                    fromProtoMsg(message: _30.GasInfoProtoMsg): _30.GasInfo;
                    toProto(message: _30.GasInfo): Uint8Array;
                    toProtoMsg(message: _30.GasInfo): _30.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _30.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.Result;
                    fromPartial(object: Partial<_30.Result>): _30.Result;
                    fromAmino(object: _30.ResultAmino): _30.Result;
                    toAmino(message: _30.Result): _30.ResultAmino;
                    fromAminoMsg(object: _30.ResultAminoMsg): _30.Result;
                    toAminoMsg(message: _30.Result): _30.ResultAminoMsg;
                    fromProtoMsg(message: _30.ResultProtoMsg): _30.Result;
                    toProto(message: _30.Result): Uint8Array;
                    toProtoMsg(message: _30.Result): _30.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _30.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SimulationResponse;
                    fromPartial(object: Partial<_30.SimulationResponse>): _30.SimulationResponse;
                    fromAmino(object: _30.SimulationResponseAmino): _30.SimulationResponse;
                    toAmino(message: _30.SimulationResponse): _30.SimulationResponseAmino;
                    fromAminoMsg(object: _30.SimulationResponseAminoMsg): _30.SimulationResponse;
                    toAminoMsg(message: _30.SimulationResponse): _30.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _30.SimulationResponseProtoMsg): _30.SimulationResponse;
                    toProto(message: _30.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _30.SimulationResponse): _30.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _30.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.MsgData;
                    fromPartial(object: Partial<_30.MsgData>): _30.MsgData;
                    fromAmino(object: _30.MsgDataAmino): _30.MsgData;
                    toAmino(message: _30.MsgData): _30.MsgDataAmino;
                    fromAminoMsg(object: _30.MsgDataAminoMsg): _30.MsgData;
                    toAminoMsg(message: _30.MsgData): _30.MsgDataAminoMsg;
                    fromProtoMsg(message: _30.MsgDataProtoMsg): _30.MsgData;
                    toProto(message: _30.MsgData): Uint8Array;
                    toProtoMsg(message: _30.MsgData): _30.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _30.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.TxMsgData;
                    fromPartial(object: Partial<_30.TxMsgData>): _30.TxMsgData;
                    fromAmino(object: _30.TxMsgDataAmino): _30.TxMsgData;
                    toAmino(message: _30.TxMsgData): _30.TxMsgDataAmino;
                    fromAminoMsg(object: _30.TxMsgDataAminoMsg): _30.TxMsgData;
                    toAminoMsg(message: _30.TxMsgData): _30.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _30.TxMsgDataProtoMsg): _30.TxMsgData;
                    toProto(message: _30.TxMsgData): Uint8Array;
                    toProtoMsg(message: _30.TxMsgData): _30.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _30.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _30.SearchTxsResult;
                    fromPartial(object: Partial<_30.SearchTxsResult>): _30.SearchTxsResult;
                    fromAmino(object: _30.SearchTxsResultAmino): _30.SearchTxsResult;
                    toAmino(message: _30.SearchTxsResult): _30.SearchTxsResultAmino;
                    fromAminoMsg(object: _30.SearchTxsResultAminoMsg): _30.SearchTxsResult;
                    toAminoMsg(message: _30.SearchTxsResult): _30.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _30.SearchTxsResultProtoMsg): _30.SearchTxsResult;
                    toProto(message: _30.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _30.SearchTxsResult): _30.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _31.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.Pairs;
                    fromPartial(object: Partial<_31.Pairs>): _31.Pairs;
                    fromAmino(object: _31.PairsAmino): _31.Pairs;
                    toAmino(message: _31.Pairs): _31.PairsAmino;
                    fromAminoMsg(object: _31.PairsAminoMsg): _31.Pairs;
                    toAminoMsg(message: _31.Pairs): _31.PairsAminoMsg;
                    fromProtoMsg(message: _31.PairsProtoMsg): _31.Pairs;
                    toProto(message: _31.Pairs): Uint8Array;
                    toProtoMsg(message: _31.Pairs): _31.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _31.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _31.Pair;
                    fromPartial(object: Partial<_31.Pair>): _31.Pair;
                    fromAmino(object: _31.PairAmino): _31.Pair;
                    toAmino(message: _31.Pair): _31.PairAmino;
                    fromAminoMsg(object: _31.PairAminoMsg): _31.Pair;
                    toAminoMsg(message: _31.Pair): _31.PairAminoMsg;
                    fromProtoMsg(message: _31.PairProtoMsg): _31.Pair;
                    toProto(message: _31.Pair): Uint8Array;
                    toProtoMsg(message: _31.Pair): _31.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _268.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _32.ConfigRequest): Promise<_32.ConfigResponse>;
                };
                LCDQueryClient: typeof _247.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _32.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _32.ConfigRequest;
                    fromPartial(_: Partial<_32.ConfigRequest>): _32.ConfigRequest;
                    fromAmino(_: _32.ConfigRequestAmino): _32.ConfigRequest;
                    toAmino(_: _32.ConfigRequest): _32.ConfigRequestAmino;
                    fromAminoMsg(object: _32.ConfigRequestAminoMsg): _32.ConfigRequest;
                    toAminoMsg(message: _32.ConfigRequest): _32.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _32.ConfigRequestProtoMsg): _32.ConfigRequest;
                    toProto(message: _32.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _32.ConfigRequest): _32.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _32.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.ConfigResponse;
                    fromPartial(object: Partial<_32.ConfigResponse>): _32.ConfigResponse;
                    fromAmino(object: _32.ConfigResponseAmino): _32.ConfigResponse;
                    toAmino(message: _32.ConfigResponse): _32.ConfigResponseAmino;
                    fromAminoMsg(object: _32.ConfigResponseAminoMsg): _32.ConfigResponse;
                    toAminoMsg(message: _32.ConfigResponse): _32.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _32.ConfigResponseProtoMsg): _32.ConfigResponse;
                    toProto(message: _32.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _32.ConfigResponse): _32.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _33.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.PageRequest;
                    fromPartial(object: Partial<_33.PageRequest>): _33.PageRequest;
                    fromAmino(object: _33.PageRequestAmino): _33.PageRequest;
                    toAmino(message: _33.PageRequest): _33.PageRequestAmino;
                    fromAminoMsg(object: _33.PageRequestAminoMsg): _33.PageRequest;
                    toAminoMsg(message: _33.PageRequest): _33.PageRequestAminoMsg;
                    fromProtoMsg(message: _33.PageRequestProtoMsg): _33.PageRequest;
                    toProto(message: _33.PageRequest): Uint8Array;
                    toProtoMsg(message: _33.PageRequest): _33.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _33.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _33.PageResponse;
                    fromPartial(object: Partial<_33.PageResponse>): _33.PageResponse;
                    fromAmino(object: _33.PageResponseAmino): _33.PageResponse;
                    toAmino(message: _33.PageResponse): _33.PageResponseAmino;
                    fromAminoMsg(object: _33.PageResponseAminoMsg): _33.PageResponse;
                    toAminoMsg(message: _33.PageResponse): _33.PageResponseAminoMsg;
                    fromProtoMsg(message: _33.PageResponseProtoMsg): _33.PageResponse;
                    toProto(message: _33.PageResponse): Uint8Array;
                    toProtoMsg(message: _33.PageResponse): _33.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _34.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _34.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_34.ListAllInterfacesRequest>): _34.ListAllInterfacesRequest;
                    fromAmino(_: _34.ListAllInterfacesRequestAmino): _34.ListAllInterfacesRequest;
                    toAmino(_: _34.ListAllInterfacesRequest): _34.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _34.ListAllInterfacesRequestAminoMsg): _34.ListAllInterfacesRequest;
                    toAminoMsg(message: _34.ListAllInterfacesRequest): _34.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _34.ListAllInterfacesRequestProtoMsg): _34.ListAllInterfacesRequest;
                    toProto(message: _34.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _34.ListAllInterfacesRequest): _34.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _34.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_34.ListAllInterfacesResponse>): _34.ListAllInterfacesResponse;
                    fromAmino(object: _34.ListAllInterfacesResponseAmino): _34.ListAllInterfacesResponse;
                    toAmino(message: _34.ListAllInterfacesResponse): _34.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _34.ListAllInterfacesResponseAminoMsg): _34.ListAllInterfacesResponse;
                    toAminoMsg(message: _34.ListAllInterfacesResponse): _34.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _34.ListAllInterfacesResponseProtoMsg): _34.ListAllInterfacesResponse;
                    toProto(message: _34.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _34.ListAllInterfacesResponse): _34.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _34.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.ListImplementationsRequest;
                    fromPartial(object: Partial<_34.ListImplementationsRequest>): _34.ListImplementationsRequest;
                    fromAmino(object: _34.ListImplementationsRequestAmino): _34.ListImplementationsRequest;
                    toAmino(message: _34.ListImplementationsRequest): _34.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _34.ListImplementationsRequestAminoMsg): _34.ListImplementationsRequest;
                    toAminoMsg(message: _34.ListImplementationsRequest): _34.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _34.ListImplementationsRequestProtoMsg): _34.ListImplementationsRequest;
                    toProto(message: _34.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _34.ListImplementationsRequest): _34.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _34.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.ListImplementationsResponse;
                    fromPartial(object: Partial<_34.ListImplementationsResponse>): _34.ListImplementationsResponse;
                    fromAmino(object: _34.ListImplementationsResponseAmino): _34.ListImplementationsResponse;
                    toAmino(message: _34.ListImplementationsResponse): _34.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _34.ListImplementationsResponseAminoMsg): _34.ListImplementationsResponse;
                    toAminoMsg(message: _34.ListImplementationsResponse): _34.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _34.ListImplementationsResponseProtoMsg): _34.ListImplementationsResponse;
                    toProto(message: _34.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _34.ListImplementationsResponse): _34.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _35.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.AppDescriptor;
                    fromPartial(object: Partial<_35.AppDescriptor>): _35.AppDescriptor;
                    fromAmino(object: _35.AppDescriptorAmino): _35.AppDescriptor;
                    toAmino(message: _35.AppDescriptor): _35.AppDescriptorAmino;
                    fromAminoMsg(object: _35.AppDescriptorAminoMsg): _35.AppDescriptor;
                    toAminoMsg(message: _35.AppDescriptor): _35.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _35.AppDescriptorProtoMsg): _35.AppDescriptor;
                    toProto(message: _35.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _35.AppDescriptor): _35.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _35.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.TxDescriptor;
                    fromPartial(object: Partial<_35.TxDescriptor>): _35.TxDescriptor;
                    fromAmino(object: _35.TxDescriptorAmino): _35.TxDescriptor;
                    toAmino(message: _35.TxDescriptor): _35.TxDescriptorAmino;
                    fromAminoMsg(object: _35.TxDescriptorAminoMsg): _35.TxDescriptor;
                    toAminoMsg(message: _35.TxDescriptor): _35.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _35.TxDescriptorProtoMsg): _35.TxDescriptor;
                    toProto(message: _35.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _35.TxDescriptor): _35.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _35.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.AuthnDescriptor;
                    fromPartial(object: Partial<_35.AuthnDescriptor>): _35.AuthnDescriptor;
                    fromAmino(object: _35.AuthnDescriptorAmino): _35.AuthnDescriptor;
                    toAmino(message: _35.AuthnDescriptor): _35.AuthnDescriptorAmino;
                    fromAminoMsg(object: _35.AuthnDescriptorAminoMsg): _35.AuthnDescriptor;
                    toAminoMsg(message: _35.AuthnDescriptor): _35.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _35.AuthnDescriptorProtoMsg): _35.AuthnDescriptor;
                    toProto(message: _35.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _35.AuthnDescriptor): _35.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _35.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.SigningModeDescriptor;
                    fromPartial(object: Partial<_35.SigningModeDescriptor>): _35.SigningModeDescriptor;
                    fromAmino(object: _35.SigningModeDescriptorAmino): _35.SigningModeDescriptor;
                    toAmino(message: _35.SigningModeDescriptor): _35.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _35.SigningModeDescriptorAminoMsg): _35.SigningModeDescriptor;
                    toAminoMsg(message: _35.SigningModeDescriptor): _35.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _35.SigningModeDescriptorProtoMsg): _35.SigningModeDescriptor;
                    toProto(message: _35.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _35.SigningModeDescriptor): _35.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _35.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.ChainDescriptor;
                    fromPartial(object: Partial<_35.ChainDescriptor>): _35.ChainDescriptor;
                    fromAmino(object: _35.ChainDescriptorAmino): _35.ChainDescriptor;
                    toAmino(message: _35.ChainDescriptor): _35.ChainDescriptorAmino;
                    fromAminoMsg(object: _35.ChainDescriptorAminoMsg): _35.ChainDescriptor;
                    toAminoMsg(message: _35.ChainDescriptor): _35.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _35.ChainDescriptorProtoMsg): _35.ChainDescriptor;
                    toProto(message: _35.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _35.ChainDescriptor): _35.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _35.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.CodecDescriptor;
                    fromPartial(object: Partial<_35.CodecDescriptor>): _35.CodecDescriptor;
                    fromAmino(object: _35.CodecDescriptorAmino): _35.CodecDescriptor;
                    toAmino(message: _35.CodecDescriptor): _35.CodecDescriptorAmino;
                    fromAminoMsg(object: _35.CodecDescriptorAminoMsg): _35.CodecDescriptor;
                    toAminoMsg(message: _35.CodecDescriptor): _35.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _35.CodecDescriptorProtoMsg): _35.CodecDescriptor;
                    toProto(message: _35.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _35.CodecDescriptor): _35.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _35.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.InterfaceDescriptor;
                    fromPartial(object: Partial<_35.InterfaceDescriptor>): _35.InterfaceDescriptor;
                    fromAmino(object: _35.InterfaceDescriptorAmino): _35.InterfaceDescriptor;
                    toAmino(message: _35.InterfaceDescriptor): _35.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _35.InterfaceDescriptorAminoMsg): _35.InterfaceDescriptor;
                    toAminoMsg(message: _35.InterfaceDescriptor): _35.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _35.InterfaceDescriptorProtoMsg): _35.InterfaceDescriptor;
                    toProto(message: _35.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _35.InterfaceDescriptor): _35.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _35.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_35.InterfaceImplementerDescriptor>): _35.InterfaceImplementerDescriptor;
                    fromAmino(object: _35.InterfaceImplementerDescriptorAmino): _35.InterfaceImplementerDescriptor;
                    toAmino(message: _35.InterfaceImplementerDescriptor): _35.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _35.InterfaceImplementerDescriptorAminoMsg): _35.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _35.InterfaceImplementerDescriptor): _35.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _35.InterfaceImplementerDescriptorProtoMsg): _35.InterfaceImplementerDescriptor;
                    toProto(message: _35.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _35.InterfaceImplementerDescriptor): _35.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _35.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_35.InterfaceAcceptingMessageDescriptor>): _35.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _35.InterfaceAcceptingMessageDescriptorAmino): _35.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _35.InterfaceAcceptingMessageDescriptor): _35.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _35.InterfaceAcceptingMessageDescriptorAminoMsg): _35.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _35.InterfaceAcceptingMessageDescriptor): _35.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _35.InterfaceAcceptingMessageDescriptorProtoMsg): _35.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _35.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _35.InterfaceAcceptingMessageDescriptor): _35.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _35.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.ConfigurationDescriptor;
                    fromPartial(object: Partial<_35.ConfigurationDescriptor>): _35.ConfigurationDescriptor;
                    fromAmino(object: _35.ConfigurationDescriptorAmino): _35.ConfigurationDescriptor;
                    toAmino(message: _35.ConfigurationDescriptor): _35.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _35.ConfigurationDescriptorAminoMsg): _35.ConfigurationDescriptor;
                    toAminoMsg(message: _35.ConfigurationDescriptor): _35.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _35.ConfigurationDescriptorProtoMsg): _35.ConfigurationDescriptor;
                    toProto(message: _35.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _35.ConfigurationDescriptor): _35.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _35.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.MsgDescriptor;
                    fromPartial(object: Partial<_35.MsgDescriptor>): _35.MsgDescriptor;
                    fromAmino(object: _35.MsgDescriptorAmino): _35.MsgDescriptor;
                    toAmino(message: _35.MsgDescriptor): _35.MsgDescriptorAmino;
                    fromAminoMsg(object: _35.MsgDescriptorAminoMsg): _35.MsgDescriptor;
                    toAminoMsg(message: _35.MsgDescriptor): _35.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _35.MsgDescriptorProtoMsg): _35.MsgDescriptor;
                    toProto(message: _35.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _35.MsgDescriptor): _35.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _35.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_35.GetAuthnDescriptorRequest>): _35.GetAuthnDescriptorRequest;
                    fromAmino(_: _35.GetAuthnDescriptorRequestAmino): _35.GetAuthnDescriptorRequest;
                    toAmino(_: _35.GetAuthnDescriptorRequest): _35.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _35.GetAuthnDescriptorRequestAminoMsg): _35.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _35.GetAuthnDescriptorRequest): _35.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _35.GetAuthnDescriptorRequestProtoMsg): _35.GetAuthnDescriptorRequest;
                    toProto(message: _35.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _35.GetAuthnDescriptorRequest): _35.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _35.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_35.GetAuthnDescriptorResponse>): _35.GetAuthnDescriptorResponse;
                    fromAmino(object: _35.GetAuthnDescriptorResponseAmino): _35.GetAuthnDescriptorResponse;
                    toAmino(message: _35.GetAuthnDescriptorResponse): _35.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _35.GetAuthnDescriptorResponseAminoMsg): _35.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _35.GetAuthnDescriptorResponse): _35.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _35.GetAuthnDescriptorResponseProtoMsg): _35.GetAuthnDescriptorResponse;
                    toProto(message: _35.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _35.GetAuthnDescriptorResponse): _35.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _35.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_35.GetChainDescriptorRequest>): _35.GetChainDescriptorRequest;
                    fromAmino(_: _35.GetChainDescriptorRequestAmino): _35.GetChainDescriptorRequest;
                    toAmino(_: _35.GetChainDescriptorRequest): _35.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _35.GetChainDescriptorRequestAminoMsg): _35.GetChainDescriptorRequest;
                    toAminoMsg(message: _35.GetChainDescriptorRequest): _35.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _35.GetChainDescriptorRequestProtoMsg): _35.GetChainDescriptorRequest;
                    toProto(message: _35.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _35.GetChainDescriptorRequest): _35.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _35.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_35.GetChainDescriptorResponse>): _35.GetChainDescriptorResponse;
                    fromAmino(object: _35.GetChainDescriptorResponseAmino): _35.GetChainDescriptorResponse;
                    toAmino(message: _35.GetChainDescriptorResponse): _35.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _35.GetChainDescriptorResponseAminoMsg): _35.GetChainDescriptorResponse;
                    toAminoMsg(message: _35.GetChainDescriptorResponse): _35.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _35.GetChainDescriptorResponseProtoMsg): _35.GetChainDescriptorResponse;
                    toProto(message: _35.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _35.GetChainDescriptorResponse): _35.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _35.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_35.GetCodecDescriptorRequest>): _35.GetCodecDescriptorRequest;
                    fromAmino(_: _35.GetCodecDescriptorRequestAmino): _35.GetCodecDescriptorRequest;
                    toAmino(_: _35.GetCodecDescriptorRequest): _35.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _35.GetCodecDescriptorRequestAminoMsg): _35.GetCodecDescriptorRequest;
                    toAminoMsg(message: _35.GetCodecDescriptorRequest): _35.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _35.GetCodecDescriptorRequestProtoMsg): _35.GetCodecDescriptorRequest;
                    toProto(message: _35.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _35.GetCodecDescriptorRequest): _35.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _35.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_35.GetCodecDescriptorResponse>): _35.GetCodecDescriptorResponse;
                    fromAmino(object: _35.GetCodecDescriptorResponseAmino): _35.GetCodecDescriptorResponse;
                    toAmino(message: _35.GetCodecDescriptorResponse): _35.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _35.GetCodecDescriptorResponseAminoMsg): _35.GetCodecDescriptorResponse;
                    toAminoMsg(message: _35.GetCodecDescriptorResponse): _35.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _35.GetCodecDescriptorResponseProtoMsg): _35.GetCodecDescriptorResponse;
                    toProto(message: _35.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _35.GetCodecDescriptorResponse): _35.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _35.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_35.GetConfigurationDescriptorRequest>): _35.GetConfigurationDescriptorRequest;
                    fromAmino(_: _35.GetConfigurationDescriptorRequestAmino): _35.GetConfigurationDescriptorRequest;
                    toAmino(_: _35.GetConfigurationDescriptorRequest): _35.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _35.GetConfigurationDescriptorRequestAminoMsg): _35.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _35.GetConfigurationDescriptorRequest): _35.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _35.GetConfigurationDescriptorRequestProtoMsg): _35.GetConfigurationDescriptorRequest;
                    toProto(message: _35.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _35.GetConfigurationDescriptorRequest): _35.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _35.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_35.GetConfigurationDescriptorResponse>): _35.GetConfigurationDescriptorResponse;
                    fromAmino(object: _35.GetConfigurationDescriptorResponseAmino): _35.GetConfigurationDescriptorResponse;
                    toAmino(message: _35.GetConfigurationDescriptorResponse): _35.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _35.GetConfigurationDescriptorResponseAminoMsg): _35.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _35.GetConfigurationDescriptorResponse): _35.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _35.GetConfigurationDescriptorResponseProtoMsg): _35.GetConfigurationDescriptorResponse;
                    toProto(message: _35.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _35.GetConfigurationDescriptorResponse): _35.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _35.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_35.GetQueryServicesDescriptorRequest>): _35.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _35.GetQueryServicesDescriptorRequestAmino): _35.GetQueryServicesDescriptorRequest;
                    toAmino(_: _35.GetQueryServicesDescriptorRequest): _35.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _35.GetQueryServicesDescriptorRequestAminoMsg): _35.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _35.GetQueryServicesDescriptorRequest): _35.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _35.GetQueryServicesDescriptorRequestProtoMsg): _35.GetQueryServicesDescriptorRequest;
                    toProto(message: _35.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _35.GetQueryServicesDescriptorRequest): _35.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _35.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_35.GetQueryServicesDescriptorResponse>): _35.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _35.GetQueryServicesDescriptorResponseAmino): _35.GetQueryServicesDescriptorResponse;
                    toAmino(message: _35.GetQueryServicesDescriptorResponse): _35.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _35.GetQueryServicesDescriptorResponseAminoMsg): _35.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _35.GetQueryServicesDescriptorResponse): _35.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _35.GetQueryServicesDescriptorResponseProtoMsg): _35.GetQueryServicesDescriptorResponse;
                    toProto(message: _35.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _35.GetQueryServicesDescriptorResponse): _35.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _35.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _35.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_35.GetTxDescriptorRequest>): _35.GetTxDescriptorRequest;
                    fromAmino(_: _35.GetTxDescriptorRequestAmino): _35.GetTxDescriptorRequest;
                    toAmino(_: _35.GetTxDescriptorRequest): _35.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _35.GetTxDescriptorRequestAminoMsg): _35.GetTxDescriptorRequest;
                    toAminoMsg(message: _35.GetTxDescriptorRequest): _35.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _35.GetTxDescriptorRequestProtoMsg): _35.GetTxDescriptorRequest;
                    toProto(message: _35.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _35.GetTxDescriptorRequest): _35.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _35.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_35.GetTxDescriptorResponse>): _35.GetTxDescriptorResponse;
                    fromAmino(object: _35.GetTxDescriptorResponseAmino): _35.GetTxDescriptorResponse;
                    toAmino(message: _35.GetTxDescriptorResponse): _35.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _35.GetTxDescriptorResponseAminoMsg): _35.GetTxDescriptorResponse;
                    toAminoMsg(message: _35.GetTxDescriptorResponse): _35.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _35.GetTxDescriptorResponseProtoMsg): _35.GetTxDescriptorResponse;
                    toProto(message: _35.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _35.GetTxDescriptorResponse): _35.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _35.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.QueryServicesDescriptor;
                    fromPartial(object: Partial<_35.QueryServicesDescriptor>): _35.QueryServicesDescriptor;
                    fromAmino(object: _35.QueryServicesDescriptorAmino): _35.QueryServicesDescriptor;
                    toAmino(message: _35.QueryServicesDescriptor): _35.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _35.QueryServicesDescriptorAminoMsg): _35.QueryServicesDescriptor;
                    toAminoMsg(message: _35.QueryServicesDescriptor): _35.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _35.QueryServicesDescriptorProtoMsg): _35.QueryServicesDescriptor;
                    toProto(message: _35.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _35.QueryServicesDescriptor): _35.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _35.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.QueryServiceDescriptor;
                    fromPartial(object: Partial<_35.QueryServiceDescriptor>): _35.QueryServiceDescriptor;
                    fromAmino(object: _35.QueryServiceDescriptorAmino): _35.QueryServiceDescriptor;
                    toAmino(message: _35.QueryServiceDescriptor): _35.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _35.QueryServiceDescriptorAminoMsg): _35.QueryServiceDescriptor;
                    toAminoMsg(message: _35.QueryServiceDescriptor): _35.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _35.QueryServiceDescriptorProtoMsg): _35.QueryServiceDescriptor;
                    toProto(message: _35.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _35.QueryServiceDescriptor): _35.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _35.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.QueryMethodDescriptor;
                    fromPartial(object: Partial<_35.QueryMethodDescriptor>): _35.QueryMethodDescriptor;
                    fromAmino(object: _35.QueryMethodDescriptorAmino): _35.QueryMethodDescriptor;
                    toAmino(message: _35.QueryMethodDescriptor): _35.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _35.QueryMethodDescriptorAminoMsg): _35.QueryMethodDescriptor;
                    toAminoMsg(message: _35.QueryMethodDescriptor): _35.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _35.QueryMethodDescriptorProtoMsg): _35.QueryMethodDescriptor;
                    toProto(message: _35.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _35.QueryMethodDescriptor): _35.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _36.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.Snapshot;
                    fromPartial(object: Partial<_36.Snapshot>): _36.Snapshot;
                    fromAmino(object: _36.SnapshotAmino): _36.Snapshot;
                    toAmino(message: _36.Snapshot): _36.SnapshotAmino;
                    fromAminoMsg(object: _36.SnapshotAminoMsg): _36.Snapshot;
                    toAminoMsg(message: _36.Snapshot): _36.SnapshotAminoMsg;
                    fromProtoMsg(message: _36.SnapshotProtoMsg): _36.Snapshot;
                    toProto(message: _36.Snapshot): Uint8Array;
                    toProtoMsg(message: _36.Snapshot): _36.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _36.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.Metadata;
                    fromPartial(object: Partial<_36.Metadata>): _36.Metadata;
                    fromAmino(object: _36.MetadataAmino): _36.Metadata;
                    toAmino(message: _36.Metadata): _36.MetadataAmino;
                    fromAminoMsg(object: _36.MetadataAminoMsg): _36.Metadata;
                    toAminoMsg(message: _36.Metadata): _36.MetadataAminoMsg;
                    fromProtoMsg(message: _36.MetadataProtoMsg): _36.Metadata;
                    toProto(message: _36.Metadata): Uint8Array;
                    toProtoMsg(message: _36.Metadata): _36.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _36.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotItem;
                    fromPartial(object: Partial<_36.SnapshotItem>): _36.SnapshotItem;
                    fromAmino(object: _36.SnapshotItemAmino): _36.SnapshotItem;
                    toAmino(message: _36.SnapshotItem): _36.SnapshotItemAmino;
                    fromAminoMsg(object: _36.SnapshotItemAminoMsg): _36.SnapshotItem;
                    toAminoMsg(message: _36.SnapshotItem): _36.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _36.SnapshotItemProtoMsg): _36.SnapshotItem;
                    toProto(message: _36.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _36.SnapshotItem): _36.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _36.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotStoreItem;
                    fromPartial(object: Partial<_36.SnapshotStoreItem>): _36.SnapshotStoreItem;
                    fromAmino(object: _36.SnapshotStoreItemAmino): _36.SnapshotStoreItem;
                    toAmino(message: _36.SnapshotStoreItem): _36.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _36.SnapshotStoreItemAminoMsg): _36.SnapshotStoreItem;
                    toAminoMsg(message: _36.SnapshotStoreItem): _36.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _36.SnapshotStoreItemProtoMsg): _36.SnapshotStoreItem;
                    toProto(message: _36.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _36.SnapshotStoreItem): _36.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _36.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotIAVLItem;
                    fromPartial(object: Partial<_36.SnapshotIAVLItem>): _36.SnapshotIAVLItem;
                    fromAmino(object: _36.SnapshotIAVLItemAmino): _36.SnapshotIAVLItem;
                    toAmino(message: _36.SnapshotIAVLItem): _36.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _36.SnapshotIAVLItemAminoMsg): _36.SnapshotIAVLItem;
                    toAminoMsg(message: _36.SnapshotIAVLItem): _36.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _36.SnapshotIAVLItemProtoMsg): _36.SnapshotIAVLItem;
                    toProto(message: _36.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _36.SnapshotIAVLItem): _36.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _36.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_36.SnapshotExtensionMeta>): _36.SnapshotExtensionMeta;
                    fromAmino(object: _36.SnapshotExtensionMetaAmino): _36.SnapshotExtensionMeta;
                    toAmino(message: _36.SnapshotExtensionMeta): _36.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _36.SnapshotExtensionMetaAminoMsg): _36.SnapshotExtensionMeta;
                    toAminoMsg(message: _36.SnapshotExtensionMeta): _36.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _36.SnapshotExtensionMetaProtoMsg): _36.SnapshotExtensionMeta;
                    toProto(message: _36.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _36.SnapshotExtensionMeta): _36.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _36.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_36.SnapshotExtensionPayload>): _36.SnapshotExtensionPayload;
                    fromAmino(object: _36.SnapshotExtensionPayloadAmino): _36.SnapshotExtensionPayload;
                    toAmino(message: _36.SnapshotExtensionPayload): _36.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _36.SnapshotExtensionPayloadAminoMsg): _36.SnapshotExtensionPayload;
                    toAminoMsg(message: _36.SnapshotExtensionPayload): _36.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _36.SnapshotExtensionPayloadProtoMsg): _36.SnapshotExtensionPayload;
                    toProto(message: _36.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _36.SnapshotExtensionPayload): _36.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _36.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotKVItem;
                    fromPartial(object: Partial<_36.SnapshotKVItem>): _36.SnapshotKVItem;
                    fromAmino(object: _36.SnapshotKVItemAmino): _36.SnapshotKVItem;
                    toAmino(message: _36.SnapshotKVItem): _36.SnapshotKVItemAmino;
                    fromAminoMsg(object: _36.SnapshotKVItemAminoMsg): _36.SnapshotKVItem;
                    toAminoMsg(message: _36.SnapshotKVItem): _36.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _36.SnapshotKVItemProtoMsg): _36.SnapshotKVItem;
                    toProto(message: _36.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _36.SnapshotKVItem): _36.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _36.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.SnapshotSchema;
                    fromPartial(object: Partial<_36.SnapshotSchema>): _36.SnapshotSchema;
                    fromAmino(object: _36.SnapshotSchemaAmino): _36.SnapshotSchema;
                    toAmino(message: _36.SnapshotSchema): _36.SnapshotSchemaAmino;
                    fromAminoMsg(object: _36.SnapshotSchemaAminoMsg): _36.SnapshotSchema;
                    toAminoMsg(message: _36.SnapshotSchema): _36.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _36.SnapshotSchemaProtoMsg): _36.SnapshotSchema;
                    toProto(message: _36.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _36.SnapshotSchema): _36.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _38.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.StoreKVPair;
                    fromPartial(object: Partial<_38.StoreKVPair>): _38.StoreKVPair;
                    fromAmino(object: _38.StoreKVPairAmino): _38.StoreKVPair;
                    toAmino(message: _38.StoreKVPair): _38.StoreKVPairAmino;
                    fromAminoMsg(object: _38.StoreKVPairAminoMsg): _38.StoreKVPair;
                    toAminoMsg(message: _38.StoreKVPair): _38.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _38.StoreKVPairProtoMsg): _38.StoreKVPair;
                    toProto(message: _38.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _38.StoreKVPair): _38.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _38.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.BlockMetadata;
                    fromPartial(object: Partial<_38.BlockMetadata>): _38.BlockMetadata;
                    fromAmino(object: _38.BlockMetadataAmino): _38.BlockMetadata;
                    toAmino(message: _38.BlockMetadata): _38.BlockMetadataAmino;
                    fromAminoMsg(object: _38.BlockMetadataAminoMsg): _38.BlockMetadata;
                    toAminoMsg(message: _38.BlockMetadata): _38.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _38.BlockMetadataProtoMsg): _38.BlockMetadata;
                    toProto(message: _38.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _38.BlockMetadata): _38.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _38.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_38.BlockMetadata_DeliverTx>): _38.BlockMetadata_DeliverTx;
                    fromAmino(object: _38.BlockMetadata_DeliverTxAmino): _38.BlockMetadata_DeliverTx;
                    toAmino(message: _38.BlockMetadata_DeliverTx): _38.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _38.BlockMetadata_DeliverTxAminoMsg): _38.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _38.BlockMetadata_DeliverTx): _38.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _38.BlockMetadata_DeliverTxProtoMsg): _38.BlockMetadata_DeliverTx;
                    toProto(message: _38.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _38.BlockMetadata_DeliverTx): _38.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _37.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.CommitInfo;
                    fromPartial(object: Partial<_37.CommitInfo>): _37.CommitInfo;
                    fromAmino(object: _37.CommitInfoAmino): _37.CommitInfo;
                    toAmino(message: _37.CommitInfo): _37.CommitInfoAmino;
                    fromAminoMsg(object: _37.CommitInfoAminoMsg): _37.CommitInfo;
                    toAminoMsg(message: _37.CommitInfo): _37.CommitInfoAminoMsg;
                    fromProtoMsg(message: _37.CommitInfoProtoMsg): _37.CommitInfo;
                    toProto(message: _37.CommitInfo): Uint8Array;
                    toProtoMsg(message: _37.CommitInfo): _37.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _37.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.StoreInfo;
                    fromPartial(object: Partial<_37.StoreInfo>): _37.StoreInfo;
                    fromAmino(object: _37.StoreInfoAmino): _37.StoreInfo;
                    toAmino(message: _37.StoreInfo): _37.StoreInfoAmino;
                    fromAminoMsg(object: _37.StoreInfoAminoMsg): _37.StoreInfo;
                    toAminoMsg(message: _37.StoreInfo): _37.StoreInfoAminoMsg;
                    fromProtoMsg(message: _37.StoreInfoProtoMsg): _37.StoreInfo;
                    toProto(message: _37.StoreInfo): Uint8Array;
                    toProtoMsg(message: _37.StoreInfo): _37.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _37.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.CommitID;
                    fromPartial(object: Partial<_37.CommitID>): _37.CommitID;
                    fromAmino(object: _37.CommitIDAmino): _37.CommitID;
                    toAmino(message: _37.CommitID): _37.CommitIDAmino;
                    fromAminoMsg(object: _37.CommitIDAminoMsg): _37.CommitID;
                    toAminoMsg(message: _37.CommitID): _37.CommitIDAminoMsg;
                    fromProtoMsg(message: _37.CommitIDProtoMsg): _37.CommitID;
                    toProto(message: _37.CommitID): Uint8Array;
                    toProtoMsg(message: _37.CommitID): _37.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _269.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _39.GetNodeInfoRequest): Promise<_39.GetNodeInfoResponse>;
                    getSyncing(request?: _39.GetSyncingRequest): Promise<_39.GetSyncingResponse>;
                    getLatestBlock(request?: _39.GetLatestBlockRequest): Promise<_39.GetLatestBlockResponse>;
                    getBlockByHeight(request: _39.GetBlockByHeightRequest): Promise<_39.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _39.GetLatestValidatorSetRequest): Promise<_39.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _39.GetValidatorSetByHeightRequest): Promise<_39.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _39.ABCIQueryRequest): Promise<_39.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _248.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _40.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.Block;
                    fromPartial(object: Partial<_40.Block>): _40.Block;
                    fromAmino(object: _40.BlockAmino): _40.Block;
                    toAmino(message: _40.Block): _40.BlockAmino;
                    fromAminoMsg(object: _40.BlockAminoMsg): _40.Block;
                    toAminoMsg(message: _40.Block): _40.BlockAminoMsg;
                    fromProtoMsg(message: _40.BlockProtoMsg): _40.Block;
                    toProto(message: _40.Block): Uint8Array;
                    toProtoMsg(message: _40.Block): _40.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _40.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.Header;
                    fromPartial(object: Partial<_40.Header>): _40.Header;
                    fromAmino(object: _40.HeaderAmino): _40.Header;
                    toAmino(message: _40.Header): _40.HeaderAmino;
                    fromAminoMsg(object: _40.HeaderAminoMsg): _40.Header;
                    toAminoMsg(message: _40.Header): _40.HeaderAminoMsg;
                    fromProtoMsg(message: _40.HeaderProtoMsg): _40.Header;
                    toProto(message: _40.Header): Uint8Array;
                    toProtoMsg(message: _40.Header): _40.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _39.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_39.GetValidatorSetByHeightRequest>): _39.GetValidatorSetByHeightRequest;
                    fromAmino(object: _39.GetValidatorSetByHeightRequestAmino): _39.GetValidatorSetByHeightRequest;
                    toAmino(message: _39.GetValidatorSetByHeightRequest): _39.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _39.GetValidatorSetByHeightRequestAminoMsg): _39.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _39.GetValidatorSetByHeightRequest): _39.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _39.GetValidatorSetByHeightRequestProtoMsg): _39.GetValidatorSetByHeightRequest;
                    toProto(message: _39.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _39.GetValidatorSetByHeightRequest): _39.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _39.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_39.GetValidatorSetByHeightResponse>): _39.GetValidatorSetByHeightResponse;
                    fromAmino(object: _39.GetValidatorSetByHeightResponseAmino): _39.GetValidatorSetByHeightResponse;
                    toAmino(message: _39.GetValidatorSetByHeightResponse): _39.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _39.GetValidatorSetByHeightResponseAminoMsg): _39.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _39.GetValidatorSetByHeightResponse): _39.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _39.GetValidatorSetByHeightResponseProtoMsg): _39.GetValidatorSetByHeightResponse;
                    toProto(message: _39.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _39.GetValidatorSetByHeightResponse): _39.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _39.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_39.GetLatestValidatorSetRequest>): _39.GetLatestValidatorSetRequest;
                    fromAmino(object: _39.GetLatestValidatorSetRequestAmino): _39.GetLatestValidatorSetRequest;
                    toAmino(message: _39.GetLatestValidatorSetRequest): _39.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _39.GetLatestValidatorSetRequestAminoMsg): _39.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _39.GetLatestValidatorSetRequest): _39.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _39.GetLatestValidatorSetRequestProtoMsg): _39.GetLatestValidatorSetRequest;
                    toProto(message: _39.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _39.GetLatestValidatorSetRequest): _39.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _39.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_39.GetLatestValidatorSetResponse>): _39.GetLatestValidatorSetResponse;
                    fromAmino(object: _39.GetLatestValidatorSetResponseAmino): _39.GetLatestValidatorSetResponse;
                    toAmino(message: _39.GetLatestValidatorSetResponse): _39.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _39.GetLatestValidatorSetResponseAminoMsg): _39.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _39.GetLatestValidatorSetResponse): _39.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _39.GetLatestValidatorSetResponseProtoMsg): _39.GetLatestValidatorSetResponse;
                    toProto(message: _39.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _39.GetLatestValidatorSetResponse): _39.GetLatestValidatorSetResponseProtoMsg;
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
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _39.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_39.GetBlockByHeightRequest>): _39.GetBlockByHeightRequest;
                    fromAmino(object: _39.GetBlockByHeightRequestAmino): _39.GetBlockByHeightRequest;
                    toAmino(message: _39.GetBlockByHeightRequest): _39.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _39.GetBlockByHeightRequestAminoMsg): _39.GetBlockByHeightRequest;
                    toAminoMsg(message: _39.GetBlockByHeightRequest): _39.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _39.GetBlockByHeightRequestProtoMsg): _39.GetBlockByHeightRequest;
                    toProto(message: _39.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _39.GetBlockByHeightRequest): _39.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _39.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_39.GetBlockByHeightResponse>): _39.GetBlockByHeightResponse;
                    fromAmino(object: _39.GetBlockByHeightResponseAmino): _39.GetBlockByHeightResponse;
                    toAmino(message: _39.GetBlockByHeightResponse): _39.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _39.GetBlockByHeightResponseAminoMsg): _39.GetBlockByHeightResponse;
                    toAminoMsg(message: _39.GetBlockByHeightResponse): _39.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _39.GetBlockByHeightResponseProtoMsg): _39.GetBlockByHeightResponse;
                    toProto(message: _39.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _39.GetBlockByHeightResponse): _39.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _39.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.GetLatestBlockRequest;
                    fromPartial(_: Partial<_39.GetLatestBlockRequest>): _39.GetLatestBlockRequest;
                    fromAmino(_: _39.GetLatestBlockRequestAmino): _39.GetLatestBlockRequest;
                    toAmino(_: _39.GetLatestBlockRequest): _39.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _39.GetLatestBlockRequestAminoMsg): _39.GetLatestBlockRequest;
                    toAminoMsg(message: _39.GetLatestBlockRequest): _39.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _39.GetLatestBlockRequestProtoMsg): _39.GetLatestBlockRequest;
                    toProto(message: _39.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _39.GetLatestBlockRequest): _39.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _39.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetLatestBlockResponse;
                    fromPartial(object: Partial<_39.GetLatestBlockResponse>): _39.GetLatestBlockResponse;
                    fromAmino(object: _39.GetLatestBlockResponseAmino): _39.GetLatestBlockResponse;
                    toAmino(message: _39.GetLatestBlockResponse): _39.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _39.GetLatestBlockResponseAminoMsg): _39.GetLatestBlockResponse;
                    toAminoMsg(message: _39.GetLatestBlockResponse): _39.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _39.GetLatestBlockResponseProtoMsg): _39.GetLatestBlockResponse;
                    toProto(message: _39.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _39.GetLatestBlockResponse): _39.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _39.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.GetSyncingRequest;
                    fromPartial(_: Partial<_39.GetSyncingRequest>): _39.GetSyncingRequest;
                    fromAmino(_: _39.GetSyncingRequestAmino): _39.GetSyncingRequest;
                    toAmino(_: _39.GetSyncingRequest): _39.GetSyncingRequestAmino;
                    fromAminoMsg(object: _39.GetSyncingRequestAminoMsg): _39.GetSyncingRequest;
                    toAminoMsg(message: _39.GetSyncingRequest): _39.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _39.GetSyncingRequestProtoMsg): _39.GetSyncingRequest;
                    toProto(message: _39.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _39.GetSyncingRequest): _39.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _39.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetSyncingResponse;
                    fromPartial(object: Partial<_39.GetSyncingResponse>): _39.GetSyncingResponse;
                    fromAmino(object: _39.GetSyncingResponseAmino): _39.GetSyncingResponse;
                    toAmino(message: _39.GetSyncingResponse): _39.GetSyncingResponseAmino;
                    fromAminoMsg(object: _39.GetSyncingResponseAminoMsg): _39.GetSyncingResponse;
                    toAminoMsg(message: _39.GetSyncingResponse): _39.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _39.GetSyncingResponseProtoMsg): _39.GetSyncingResponse;
                    toProto(message: _39.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _39.GetSyncingResponse): _39.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _39.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _39.GetNodeInfoRequest;
                    fromPartial(_: Partial<_39.GetNodeInfoRequest>): _39.GetNodeInfoRequest;
                    fromAmino(_: _39.GetNodeInfoRequestAmino): _39.GetNodeInfoRequest;
                    toAmino(_: _39.GetNodeInfoRequest): _39.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _39.GetNodeInfoRequestAminoMsg): _39.GetNodeInfoRequest;
                    toAminoMsg(message: _39.GetNodeInfoRequest): _39.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _39.GetNodeInfoRequestProtoMsg): _39.GetNodeInfoRequest;
                    toProto(message: _39.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _39.GetNodeInfoRequest): _39.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _39.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.GetNodeInfoResponse;
                    fromPartial(object: Partial<_39.GetNodeInfoResponse>): _39.GetNodeInfoResponse;
                    fromAmino(object: _39.GetNodeInfoResponseAmino): _39.GetNodeInfoResponse;
                    toAmino(message: _39.GetNodeInfoResponse): _39.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _39.GetNodeInfoResponseAminoMsg): _39.GetNodeInfoResponse;
                    toAminoMsg(message: _39.GetNodeInfoResponse): _39.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _39.GetNodeInfoResponseProtoMsg): _39.GetNodeInfoResponse;
                    toProto(message: _39.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _39.GetNodeInfoResponse): _39.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _39.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.VersionInfo;
                    fromPartial(object: Partial<_39.VersionInfo>): _39.VersionInfo;
                    fromAmino(object: _39.VersionInfoAmino): _39.VersionInfo;
                    toAmino(message: _39.VersionInfo): _39.VersionInfoAmino;
                    fromAminoMsg(object: _39.VersionInfoAminoMsg): _39.VersionInfo;
                    toAminoMsg(message: _39.VersionInfo): _39.VersionInfoAminoMsg;
                    fromProtoMsg(message: _39.VersionInfoProtoMsg): _39.VersionInfo;
                    toProto(message: _39.VersionInfo): Uint8Array;
                    toProtoMsg(message: _39.VersionInfo): _39.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _39.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Module;
                    fromPartial(object: Partial<_39.Module>): _39.Module;
                    fromAmino(object: _39.ModuleAmino): _39.Module;
                    toAmino(message: _39.Module): _39.ModuleAmino;
                    fromAminoMsg(object: _39.ModuleAminoMsg): _39.Module;
                    toAminoMsg(message: _39.Module): _39.ModuleAminoMsg;
                    fromProtoMsg(message: _39.ModuleProtoMsg): _39.Module;
                    toProto(message: _39.Module): Uint8Array;
                    toProtoMsg(message: _39.Module): _39.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _39.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ABCIQueryRequest;
                    fromPartial(object: Partial<_39.ABCIQueryRequest>): _39.ABCIQueryRequest;
                    fromAmino(object: _39.ABCIQueryRequestAmino): _39.ABCIQueryRequest;
                    toAmino(message: _39.ABCIQueryRequest): _39.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _39.ABCIQueryRequestAminoMsg): _39.ABCIQueryRequest;
                    toAminoMsg(message: _39.ABCIQueryRequest): _39.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _39.ABCIQueryRequestProtoMsg): _39.ABCIQueryRequest;
                    toProto(message: _39.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _39.ABCIQueryRequest): _39.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _39.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ABCIQueryResponse;
                    fromPartial(object: Partial<_39.ABCIQueryResponse>): _39.ABCIQueryResponse;
                    fromAmino(object: _39.ABCIQueryResponseAmino): _39.ABCIQueryResponse;
                    toAmino(message: _39.ABCIQueryResponse): _39.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _39.ABCIQueryResponseAminoMsg): _39.ABCIQueryResponse;
                    toAminoMsg(message: _39.ABCIQueryResponse): _39.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _39.ABCIQueryResponseProtoMsg): _39.ABCIQueryResponse;
                    toProto(message: _39.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _39.ABCIQueryResponse): _39.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _39.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ProofOp;
                    fromPartial(object: Partial<_39.ProofOp>): _39.ProofOp;
                    fromAmino(object: _39.ProofOpAmino): _39.ProofOp;
                    toAmino(message: _39.ProofOp): _39.ProofOpAmino;
                    fromAminoMsg(object: _39.ProofOpAminoMsg): _39.ProofOp;
                    toAminoMsg(message: _39.ProofOp): _39.ProofOpAminoMsg;
                    fromProtoMsg(message: _39.ProofOpProtoMsg): _39.ProofOp;
                    toProto(message: _39.ProofOp): Uint8Array;
                    toProtoMsg(message: _39.ProofOp): _39.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _39.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.ProofOps;
                    fromPartial(object: Partial<_39.ProofOps>): _39.ProofOps;
                    fromAmino(object: _39.ProofOpsAmino): _39.ProofOps;
                    toAmino(message: _39.ProofOps): _39.ProofOpsAmino;
                    fromAminoMsg(object: _39.ProofOpsAminoMsg): _39.ProofOps;
                    toAminoMsg(message: _39.ProofOps): _39.ProofOpsAminoMsg;
                    fromProtoMsg(message: _39.ProofOpsProtoMsg): _39.ProofOps;
                    toProto(message: _39.ProofOps): Uint8Array;
                    toProtoMsg(message: _39.ProofOps): _39.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _41.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Coin;
                fromPartial(object: Partial<_41.Coin>): _41.Coin;
                fromAmino(object: _41.CoinAmino): _41.Coin;
                toAmino(message: _41.Coin): _41.CoinAmino;
                fromAminoMsg(object: _41.CoinAminoMsg): _41.Coin;
                toAminoMsg(message: _41.Coin): _41.CoinAminoMsg;
                fromProtoMsg(message: _41.CoinProtoMsg): _41.Coin;
                toProto(message: _41.Coin): Uint8Array;
                toProtoMsg(message: _41.Coin): _41.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _41.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.DecCoin;
                fromPartial(object: Partial<_41.DecCoin>): _41.DecCoin;
                fromAmino(object: _41.DecCoinAmino): _41.DecCoin;
                toAmino(message: _41.DecCoin): _41.DecCoinAmino;
                fromAminoMsg(object: _41.DecCoinAminoMsg): _41.DecCoin;
                toAminoMsg(message: _41.DecCoin): _41.DecCoinAminoMsg;
                fromProtoMsg(message: _41.DecCoinProtoMsg): _41.DecCoin;
                toProto(message: _41.DecCoin): Uint8Array;
                toProtoMsg(message: _41.DecCoin): _41.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _41.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.IntProto;
                fromPartial(object: Partial<_41.IntProto>): _41.IntProto;
                fromAmino(object: _41.IntProtoAmino): _41.IntProto;
                toAmino(message: _41.IntProto): _41.IntProtoAmino;
                fromAminoMsg(object: _41.IntProtoAminoMsg): _41.IntProto;
                toAminoMsg(message: _41.IntProto): _41.IntProtoAminoMsg;
                fromProtoMsg(message: _41.IntProtoProtoMsg): _41.IntProto;
                toProto(message: _41.IntProto): Uint8Array;
                toProtoMsg(message: _41.IntProto): _41.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _41.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.DecProto;
                fromPartial(object: Partial<_41.DecProto>): _41.DecProto;
                fromAmino(object: _41.DecProtoAmino): _41.DecProto;
                toAmino(message: _41.DecProto): _41.DecProtoAmino;
                fromAminoMsg(object: _41.DecProtoAminoMsg): _41.DecProto;
                toAminoMsg(message: _41.DecProto): _41.DecProtoAminoMsg;
                fromProtoMsg(message: _41.DecProtoProtoMsg): _41.DecProto;
                toProto(message: _41.DecProto): Uint8Array;
                toProtoMsg(message: _41.DecProto): _41.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _42.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Module;
                    fromPartial(object: Partial<_42.Module>): _42.Module;
                    fromAmino(object: _42.ModuleAmino): _42.Module;
                    toAmino(message: _42.Module): _42.ModuleAmino;
                    fromAminoMsg(object: _42.ModuleAminoMsg): _42.Module;
                    toAminoMsg(message: _42.Module): _42.ModuleAminoMsg;
                    fromProtoMsg(message: _42.ModuleProtoMsg): _42.Module;
                    toProto(message: _42.Module): Uint8Array;
                    toProtoMsg(message: _42.Module): _42.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _44.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.GenesisOwners;
                fromPartial(object: Partial<_44.GenesisOwners>): _44.GenesisOwners;
                fromAmino(object: _44.GenesisOwnersAmino): _44.GenesisOwners;
                toAmino(message: _44.GenesisOwners): _44.GenesisOwnersAmino;
                fromAminoMsg(object: _44.GenesisOwnersAminoMsg): _44.GenesisOwners;
                toAminoMsg(message: _44.GenesisOwners): _44.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _44.GenesisOwnersProtoMsg): _44.GenesisOwners;
                toProto(message: _44.GenesisOwners): Uint8Array;
                toProtoMsg(message: _44.GenesisOwners): _44.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _44.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                toAminoMsg(message: _44.GenesisState): _44.GenesisStateAminoMsg;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _43.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Capability;
                fromPartial(object: Partial<_43.Capability>): _43.Capability;
                fromAmino(object: _43.CapabilityAmino): _43.Capability;
                toAmino(message: _43.Capability): _43.CapabilityAmino;
                fromAminoMsg(object: _43.CapabilityAminoMsg): _43.Capability;
                toAminoMsg(message: _43.Capability): _43.CapabilityAminoMsg;
                fromProtoMsg(message: _43.CapabilityProtoMsg): _43.Capability;
                toProto(message: _43.Capability): Uint8Array;
                toProtoMsg(message: _43.Capability): _43.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _43.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Owner;
                fromPartial(object: Partial<_43.Owner>): _43.Owner;
                fromAmino(object: _43.OwnerAmino): _43.Owner;
                toAmino(message: _43.Owner): _43.OwnerAmino;
                fromAminoMsg(object: _43.OwnerAminoMsg): _43.Owner;
                toAminoMsg(message: _43.Owner): _43.OwnerAminoMsg;
                fromProtoMsg(message: _43.OwnerProtoMsg): _43.Owner;
                toProto(message: _43.Owner): Uint8Array;
                toProtoMsg(message: _43.Owner): _43.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _43.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.CapabilityOwners;
                fromPartial(object: Partial<_43.CapabilityOwners>): _43.CapabilityOwners;
                fromAmino(object: _43.CapabilityOwnersAmino): _43.CapabilityOwners;
                toAmino(message: _43.CapabilityOwners): _43.CapabilityOwnersAmino;
                fromAminoMsg(object: _43.CapabilityOwnersAminoMsg): _43.CapabilityOwners;
                toAminoMsg(message: _43.CapabilityOwners): _43.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _43.CapabilityOwnersProtoMsg): _43.CapabilityOwners;
                toProto(message: _43.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _43.CapabilityOwners): _43.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _45.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _45.Module;
                    fromPartial(object: Partial<_45.Module>): _45.Module;
                    fromAmino(object: _45.ModuleAmino): _45.Module;
                    toAmino(message: _45.Module): _45.ModuleAmino;
                    fromAminoMsg(object: _45.ModuleAminoMsg): _45.Module;
                    toAminoMsg(message: _45.Module): _45.ModuleAminoMsg;
                    fromProtoMsg(message: _45.ModuleProtoMsg): _45.Module;
                    toProto(message: _45.Module): Uint8Array;
                    toProtoMsg(message: _45.Module): _45.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _46.QueryParamsRequest): Promise<_46.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _47.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _47.MsgUpdateParams): {
                        typeUrl: string;
                        value: _47.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _47.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _47.MsgUpdateParams): {
                        typeUrl: string;
                        value: _47.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _47.MsgUpdateParams) => _47.MsgUpdateParamsAmino;
                    fromAmino: (object: _47.MsgUpdateParamsAmino) => _47.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _47.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgUpdateParams;
                fromPartial(object: Partial<_47.MsgUpdateParams>): _47.MsgUpdateParams;
                fromAmino(object: _47.MsgUpdateParamsAmino): _47.MsgUpdateParams;
                toAmino(message: _47.MsgUpdateParams): _47.MsgUpdateParamsAmino;
                fromAminoMsg(object: _47.MsgUpdateParamsAminoMsg): _47.MsgUpdateParams;
                toAminoMsg(message: _47.MsgUpdateParams): _47.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _47.MsgUpdateParamsProtoMsg): _47.MsgUpdateParams;
                toProto(message: _47.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _47.MsgUpdateParams): _47.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _47.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_47.MsgUpdateParamsResponse>): _47.MsgUpdateParamsResponse;
                fromAmino(_: _47.MsgUpdateParamsResponseAmino): _47.MsgUpdateParamsResponse;
                toAmino(_: _47.MsgUpdateParamsResponse): _47.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _47.MsgUpdateParamsResponseAminoMsg): _47.MsgUpdateParamsResponse;
                toAminoMsg(message: _47.MsgUpdateParamsResponse): _47.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _47.MsgUpdateParamsResponseProtoMsg): _47.MsgUpdateParamsResponse;
                toProto(message: _47.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _47.MsgUpdateParamsResponse): _47.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _46.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _46.QueryParamsRequest;
                fromPartial(_: Partial<_46.QueryParamsRequest>): _46.QueryParamsRequest;
                fromAmino(_: _46.QueryParamsRequestAmino): _46.QueryParamsRequest;
                toAmino(_: _46.QueryParamsRequest): _46.QueryParamsRequestAmino;
                fromAminoMsg(object: _46.QueryParamsRequestAminoMsg): _46.QueryParamsRequest;
                toAminoMsg(message: _46.QueryParamsRequest): _46.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _46.QueryParamsRequestProtoMsg): _46.QueryParamsRequest;
                toProto(message: _46.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _46.QueryParamsRequest): _46.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _46.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.QueryParamsResponse;
                fromPartial(object: Partial<_46.QueryParamsResponse>): _46.QueryParamsResponse;
                fromAmino(object: _46.QueryParamsResponseAmino): _46.QueryParamsResponse;
                toAmino(message: _46.QueryParamsResponse): _46.QueryParamsResponseAmino;
                fromAminoMsg(object: _46.QueryParamsResponseAminoMsg): _46.QueryParamsResponse;
                toAminoMsg(message: _46.QueryParamsResponse): _46.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _46.QueryParamsResponseProtoMsg): _46.QueryParamsResponse;
                toProto(message: _46.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _46.QueryParamsResponse): _46.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _48.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.Module;
                    fromPartial(object: Partial<_48.Module>): _48.Module;
                    fromAmino(object: _48.ModuleAmino): _48.Module;
                    toAmino(message: _48.Module): _48.ModuleAmino;
                    fromAminoMsg(object: _48.ModuleAminoMsg): _48.Module;
                    toAminoMsg(message: _48.Module): _48.ModuleAminoMsg;
                    fromProtoMsg(message: _48.ModuleProtoMsg): _48.Module;
                    toProto(message: _48.Module): Uint8Array;
                    toProtoMsg(message: _48.Module): _48.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _50.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _50.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _50.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _50.MsgVerifyInvariant;
                    };
                    updateParams(value: _50.MsgUpdateParams): {
                        typeUrl: string;
                        value: _50.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _50.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _50.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _50.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _50.MsgVerifyInvariant;
                    };
                    updateParams(value: _50.MsgUpdateParams): {
                        typeUrl: string;
                        value: _50.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _50.MsgVerifyInvariant) => _50.MsgVerifyInvariantAmino;
                    fromAmino: (object: _50.MsgVerifyInvariantAmino) => _50.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _50.MsgUpdateParams) => _50.MsgUpdateParamsAmino;
                    fromAmino: (object: _50.MsgUpdateParamsAmino) => _50.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _50.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgVerifyInvariant;
                fromPartial(object: Partial<_50.MsgVerifyInvariant>): _50.MsgVerifyInvariant;
                fromAmino(object: _50.MsgVerifyInvariantAmino): _50.MsgVerifyInvariant;
                toAmino(message: _50.MsgVerifyInvariant): _50.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _50.MsgVerifyInvariantAminoMsg): _50.MsgVerifyInvariant;
                toAminoMsg(message: _50.MsgVerifyInvariant): _50.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _50.MsgVerifyInvariantProtoMsg): _50.MsgVerifyInvariant;
                toProto(message: _50.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _50.MsgVerifyInvariant): _50.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _50.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_50.MsgVerifyInvariantResponse>): _50.MsgVerifyInvariantResponse;
                fromAmino(_: _50.MsgVerifyInvariantResponseAmino): _50.MsgVerifyInvariantResponse;
                toAmino(_: _50.MsgVerifyInvariantResponse): _50.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _50.MsgVerifyInvariantResponseAminoMsg): _50.MsgVerifyInvariantResponse;
                toAminoMsg(message: _50.MsgVerifyInvariantResponse): _50.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _50.MsgVerifyInvariantResponseProtoMsg): _50.MsgVerifyInvariantResponse;
                toProto(message: _50.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _50.MsgVerifyInvariantResponse): _50.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _50.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgUpdateParams;
                fromPartial(object: Partial<_50.MsgUpdateParams>): _50.MsgUpdateParams;
                fromAmino(object: _50.MsgUpdateParamsAmino): _50.MsgUpdateParams;
                toAmino(message: _50.MsgUpdateParams): _50.MsgUpdateParamsAmino;
                fromAminoMsg(object: _50.MsgUpdateParamsAminoMsg): _50.MsgUpdateParams;
                toAminoMsg(message: _50.MsgUpdateParams): _50.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _50.MsgUpdateParamsProtoMsg): _50.MsgUpdateParams;
                toProto(message: _50.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _50.MsgUpdateParams): _50.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _50.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_50.MsgUpdateParamsResponse>): _50.MsgUpdateParamsResponse;
                fromAmino(_: _50.MsgUpdateParamsResponseAmino): _50.MsgUpdateParamsResponse;
                toAmino(_: _50.MsgUpdateParamsResponse): _50.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _50.MsgUpdateParamsResponseAminoMsg): _50.MsgUpdateParamsResponse;
                toAminoMsg(message: _50.MsgUpdateParamsResponse): _50.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _50.MsgUpdateParamsResponseProtoMsg): _50.MsgUpdateParamsResponse;
                toProto(message: _50.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _50.MsgUpdateParamsResponse): _50.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _49.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.GenesisState;
                fromPartial(object: Partial<_49.GenesisState>): _49.GenesisState;
                fromAmino(object: _49.GenesisStateAmino): _49.GenesisState;
                toAmino(message: _49.GenesisState): _49.GenesisStateAmino;
                fromAminoMsg(object: _49.GenesisStateAminoMsg): _49.GenesisState;
                toAminoMsg(message: _49.GenesisState): _49.GenesisStateAminoMsg;
                fromProtoMsg(message: _49.GenesisStateProtoMsg): _49.GenesisState;
                toProto(message: _49.GenesisState): Uint8Array;
                toProtoMsg(message: _49.GenesisState): _49.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _51.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PubKey;
                fromPartial(object: Partial<_51.PubKey>): _51.PubKey;
                fromAmino(object: _51.PubKeyAmino): _51.PubKey;
                toAmino(message: _51.PubKey): _51.PubKeyAmino;
                fromAminoMsg(object: _51.PubKeyAminoMsg): _51.PubKey;
                toAminoMsg(message: _51.PubKey): _51.PubKeyAminoMsg;
                fromProtoMsg(message: _51.PubKeyProtoMsg): _51.PubKey;
                toProto(message: _51.PubKey): Uint8Array;
                toProtoMsg(message: _51.PubKey): _51.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _51.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PrivKey;
                fromPartial(object: Partial<_51.PrivKey>): _51.PrivKey;
                fromAmino(object: _51.PrivKeyAmino): _51.PrivKey;
                toAmino(message: _51.PrivKey): _51.PrivKeyAmino;
                fromAminoMsg(object: _51.PrivKeyAminoMsg): _51.PrivKey;
                toAminoMsg(message: _51.PrivKey): _51.PrivKeyAminoMsg;
                fromProtoMsg(message: _51.PrivKeyProtoMsg): _51.PrivKey;
                toProto(message: _51.PrivKey): Uint8Array;
                toProtoMsg(message: _51.PrivKey): _51.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _52.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _52.BIP44Params;
                    fromPartial(object: Partial<_52.BIP44Params>): _52.BIP44Params;
                    fromAmino(object: _52.BIP44ParamsAmino): _52.BIP44Params;
                    toAmino(message: _52.BIP44Params): _52.BIP44ParamsAmino;
                    fromAminoMsg(object: _52.BIP44ParamsAminoMsg): _52.BIP44Params;
                    toAminoMsg(message: _52.BIP44Params): _52.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _52.BIP44ParamsProtoMsg): _52.BIP44Params;
                    toProto(message: _52.BIP44Params): Uint8Array;
                    toProtoMsg(message: _52.BIP44Params): _52.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _53.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.Record;
                    fromPartial(object: Partial<_53.Record>): _53.Record;
                    fromAmino(object: _53.RecordAmino): _53.Record;
                    toAmino(message: _53.Record): _53.RecordAmino;
                    fromAminoMsg(object: _53.RecordAminoMsg): _53.Record;
                    toAminoMsg(message: _53.Record): _53.RecordAminoMsg;
                    fromProtoMsg(message: _53.RecordProtoMsg): _53.Record;
                    toProto(message: _53.Record): Uint8Array;
                    toProtoMsg(message: _53.Record): _53.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _53.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.Record_Local;
                    fromPartial(object: Partial<_53.Record_Local>): _53.Record_Local;
                    fromAmino(object: _53.Record_LocalAmino): _53.Record_Local;
                    toAmino(message: _53.Record_Local): _53.Record_LocalAmino;
                    fromAminoMsg(object: _53.Record_LocalAminoMsg): _53.Record_Local;
                    toAminoMsg(message: _53.Record_Local): _53.Record_LocalAminoMsg;
                    fromProtoMsg(message: _53.Record_LocalProtoMsg): _53.Record_Local;
                    toProto(message: _53.Record_Local): Uint8Array;
                    toProtoMsg(message: _53.Record_Local): _53.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _53.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _53.Record_Ledger;
                    fromPartial(object: Partial<_53.Record_Ledger>): _53.Record_Ledger;
                    fromAmino(object: _53.Record_LedgerAmino): _53.Record_Ledger;
                    toAmino(message: _53.Record_Ledger): _53.Record_LedgerAmino;
                    fromAminoMsg(object: _53.Record_LedgerAminoMsg): _53.Record_Ledger;
                    toAminoMsg(message: _53.Record_Ledger): _53.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _53.Record_LedgerProtoMsg): _53.Record_Ledger;
                    toProto(message: _53.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _53.Record_Ledger): _53.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _53.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _53.Record_Multi;
                    fromPartial(_: Partial<_53.Record_Multi>): _53.Record_Multi;
                    fromAmino(_: _53.Record_MultiAmino): _53.Record_Multi;
                    toAmino(_: _53.Record_Multi): _53.Record_MultiAmino;
                    fromAminoMsg(object: _53.Record_MultiAminoMsg): _53.Record_Multi;
                    toAminoMsg(message: _53.Record_Multi): _53.Record_MultiAminoMsg;
                    fromProtoMsg(message: _53.Record_MultiProtoMsg): _53.Record_Multi;
                    toProto(message: _53.Record_Multi): Uint8Array;
                    toProtoMsg(message: _53.Record_Multi): _53.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _53.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _53.Record_Offline;
                    fromPartial(_: Partial<_53.Record_Offline>): _53.Record_Offline;
                    fromAmino(_: _53.Record_OfflineAmino): _53.Record_Offline;
                    toAmino(_: _53.Record_Offline): _53.Record_OfflineAmino;
                    fromAminoMsg(object: _53.Record_OfflineAminoMsg): _53.Record_Offline;
                    toAminoMsg(message: _53.Record_Offline): _53.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _53.Record_OfflineProtoMsg): _53.Record_Offline;
                    toProto(message: _53.Record_Offline): Uint8Array;
                    toProtoMsg(message: _53.Record_Offline): _53.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _54.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.LegacyAminoPubKey;
                fromPartial(object: Partial<_54.LegacyAminoPubKey>): _54.LegacyAminoPubKey;
                fromAmino(object: _54.LegacyAminoPubKeyAmino): _54.LegacyAminoPubKey;
                toAmino(message: _54.LegacyAminoPubKey): _54.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _54.LegacyAminoPubKeyAminoMsg): _54.LegacyAminoPubKey;
                toAminoMsg(message: _54.LegacyAminoPubKey): _54.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _54.LegacyAminoPubKeyProtoMsg): _54.LegacyAminoPubKey;
                toProto(message: _54.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _54.LegacyAminoPubKey): _54.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _55.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.PubKey;
                fromPartial(object: Partial<_55.PubKey>): _55.PubKey;
                fromAmino(object: _55.PubKeyAmino): _55.PubKey;
                toAmino(message: _55.PubKey): _55.PubKeyAmino;
                fromAminoMsg(object: _55.PubKeyAminoMsg): _55.PubKey;
                toAminoMsg(message: _55.PubKey): _55.PubKeyAminoMsg;
                fromProtoMsg(message: _55.PubKeyProtoMsg): _55.PubKey;
                toProto(message: _55.PubKey): Uint8Array;
                toProtoMsg(message: _55.PubKey): _55.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _55.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.PrivKey;
                fromPartial(object: Partial<_55.PrivKey>): _55.PrivKey;
                fromAmino(object: _55.PrivKeyAmino): _55.PrivKey;
                toAmino(message: _55.PrivKey): _55.PrivKeyAmino;
                fromAminoMsg(object: _55.PrivKeyAminoMsg): _55.PrivKey;
                toAminoMsg(message: _55.PrivKey): _55.PrivKeyAminoMsg;
                fromProtoMsg(message: _55.PrivKeyProtoMsg): _55.PrivKey;
                toProto(message: _55.PrivKey): Uint8Array;
                toProtoMsg(message: _55.PrivKey): _55.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _56.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.PubKey;
                fromPartial(object: Partial<_56.PubKey>): _56.PubKey;
                fromAmino(object: _56.PubKeyAmino): _56.PubKey;
                toAmino(message: _56.PubKey): _56.PubKeyAmino;
                fromAminoMsg(object: _56.PubKeyAminoMsg): _56.PubKey;
                toAminoMsg(message: _56.PubKey): _56.PubKeyAminoMsg;
                fromProtoMsg(message: _56.PubKeyProtoMsg): _56.PubKey;
                toProto(message: _56.PubKey): Uint8Array;
                toProtoMsg(message: _56.PubKey): _56.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _56.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.PrivKey;
                fromPartial(object: Partial<_56.PrivKey>): _56.PrivKey;
                fromAmino(object: _56.PrivKeyAmino): _56.PrivKey;
                toAmino(message: _56.PrivKey): _56.PrivKeyAmino;
                fromAminoMsg(object: _56.PrivKeyAminoMsg): _56.PrivKey;
                toAminoMsg(message: _56.PrivKey): _56.PrivKeyAminoMsg;
                fromProtoMsg(message: _56.PrivKeyProtoMsg): _56.PrivKey;
                toProto(message: _56.PrivKey): Uint8Array;
                toProtoMsg(message: _56.PrivKey): _56.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _57.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _57.Module;
                    fromPartial(object: Partial<_57.Module>): _57.Module;
                    fromAmino(object: _57.ModuleAmino): _57.Module;
                    toAmino(message: _57.Module): _57.ModuleAmino;
                    fromAminoMsg(object: _57.ModuleAminoMsg): _57.Module;
                    toAminoMsg(message: _57.Module): _57.ModuleAminoMsg;
                    fromProtoMsg(message: _57.ModuleProtoMsg): _57.Module;
                    toProto(message: _57.Module): Uint8Array;
                    toProtoMsg(message: _57.Module): _57.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                validatorDistributionInfo(request: _60.QueryValidatorDistributionInfoRequest): Promise<_60.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _60.QueryValidatorOutstandingRewardsRequest): Promise<_60.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _60.QueryValidatorCommissionRequest): Promise<_60.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _60.QueryValidatorSlashesRequest): Promise<_60.QueryValidatorSlashesResponse>;
                delegationRewards(request: _60.QueryDelegationRewardsRequest): Promise<_60.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _60.QueryDelegationTotalRewardsRequest): Promise<_60.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _60.QueryDelegatorValidatorsRequest): Promise<_60.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _60.QueryDelegatorWithdrawAddressRequest): Promise<_60.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _60.QueryCommunityPoolRequest): Promise<_60.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _61.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _61.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _61.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _61.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _61.MsgFundCommunityPool;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: _61.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _61.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _61.MsgCommunityPoolSpend;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _61.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _61.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _61.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _61.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _61.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _61.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _61.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _61.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _61.MsgFundCommunityPool;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: _61.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _61.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _61.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSetWithdrawAddress) => _61.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _61.MsgSetWithdrawAddressAmino) => _61.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _61.MsgWithdrawDelegatorReward) => _61.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _61.MsgWithdrawDelegatorRewardAmino) => _61.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _61.MsgWithdrawValidatorCommission) => _61.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _61.MsgWithdrawValidatorCommissionAmino) => _61.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _61.MsgFundCommunityPool) => _61.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _61.MsgFundCommunityPoolAmino) => _61.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _61.MsgUpdateParams) => _61.MsgUpdateParamsAmino;
                    fromAmino: (object: _61.MsgUpdateParamsAmino) => _61.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _61.MsgCommunityPoolSpend) => _61.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _61.MsgCommunityPoolSpendAmino) => _61.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _61.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_61.MsgSetWithdrawAddress>): _61.MsgSetWithdrawAddress;
                fromAmino(object: _61.MsgSetWithdrawAddressAmino): _61.MsgSetWithdrawAddress;
                toAmino(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _61.MsgSetWithdrawAddressAminoMsg): _61.MsgSetWithdrawAddress;
                toAminoMsg(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _61.MsgSetWithdrawAddressProtoMsg): _61.MsgSetWithdrawAddress;
                toProto(message: _61.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _61.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_61.MsgSetWithdrawAddressResponse>): _61.MsgSetWithdrawAddressResponse;
                fromAmino(_: _61.MsgSetWithdrawAddressResponseAmino): _61.MsgSetWithdrawAddressResponse;
                toAmino(_: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _61.MsgSetWithdrawAddressResponseAminoMsg): _61.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSetWithdrawAddressResponseProtoMsg): _61.MsgSetWithdrawAddressResponse;
                toProto(message: _61.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_61.MsgWithdrawDelegatorReward>): _61.MsgWithdrawDelegatorReward;
                fromAmino(object: _61.MsgWithdrawDelegatorRewardAmino): _61.MsgWithdrawDelegatorReward;
                toAmino(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _61.MsgWithdrawDelegatorRewardAminoMsg): _61.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawDelegatorRewardProtoMsg): _61.MsgWithdrawDelegatorReward;
                toProto(message: _61.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_61.MsgWithdrawDelegatorRewardResponse>): _61.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _61.MsgWithdrawDelegatorRewardResponseAmino): _61.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _61.MsgWithdrawDelegatorRewardResponseAminoMsg): _61.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawDelegatorRewardResponseProtoMsg): _61.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _61.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_61.MsgWithdrawValidatorCommission>): _61.MsgWithdrawValidatorCommission;
                fromAmino(object: _61.MsgWithdrawValidatorCommissionAmino): _61.MsgWithdrawValidatorCommission;
                toAmino(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _61.MsgWithdrawValidatorCommissionAminoMsg): _61.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawValidatorCommissionProtoMsg): _61.MsgWithdrawValidatorCommission;
                toProto(message: _61.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_61.MsgWithdrawValidatorCommissionResponse>): _61.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _61.MsgWithdrawValidatorCommissionResponseAmino): _61.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _61.MsgWithdrawValidatorCommissionResponseAminoMsg): _61.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawValidatorCommissionResponseProtoMsg): _61.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _61.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _61.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgFundCommunityPool;
                fromPartial(object: Partial<_61.MsgFundCommunityPool>): _61.MsgFundCommunityPool;
                fromAmino(object: _61.MsgFundCommunityPoolAmino): _61.MsgFundCommunityPool;
                toAmino(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _61.MsgFundCommunityPoolAminoMsg): _61.MsgFundCommunityPool;
                toAminoMsg(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _61.MsgFundCommunityPoolProtoMsg): _61.MsgFundCommunityPool;
                toProto(message: _61.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _61.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_61.MsgFundCommunityPoolResponse>): _61.MsgFundCommunityPoolResponse;
                fromAmino(_: _61.MsgFundCommunityPoolResponseAmino): _61.MsgFundCommunityPoolResponse;
                toAmino(_: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _61.MsgFundCommunityPoolResponseAminoMsg): _61.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _61.MsgFundCommunityPoolResponseProtoMsg): _61.MsgFundCommunityPoolResponse;
                toProto(message: _61.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _61.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgUpdateParams;
                fromPartial(object: Partial<_61.MsgUpdateParams>): _61.MsgUpdateParams;
                fromAmino(object: _61.MsgUpdateParamsAmino): _61.MsgUpdateParams;
                toAmino(message: _61.MsgUpdateParams): _61.MsgUpdateParamsAmino;
                fromAminoMsg(object: _61.MsgUpdateParamsAminoMsg): _61.MsgUpdateParams;
                toAminoMsg(message: _61.MsgUpdateParams): _61.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _61.MsgUpdateParamsProtoMsg): _61.MsgUpdateParams;
                toProto(message: _61.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _61.MsgUpdateParams): _61.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _61.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_61.MsgUpdateParamsResponse>): _61.MsgUpdateParamsResponse;
                fromAmino(_: _61.MsgUpdateParamsResponseAmino): _61.MsgUpdateParamsResponse;
                toAmino(_: _61.MsgUpdateParamsResponse): _61.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _61.MsgUpdateParamsResponseAminoMsg): _61.MsgUpdateParamsResponse;
                toAminoMsg(message: _61.MsgUpdateParamsResponse): _61.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _61.MsgUpdateParamsResponseProtoMsg): _61.MsgUpdateParamsResponse;
                toProto(message: _61.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _61.MsgUpdateParamsResponse): _61.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _61.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_61.MsgCommunityPoolSpend>): _61.MsgCommunityPoolSpend;
                fromAmino(object: _61.MsgCommunityPoolSpendAmino): _61.MsgCommunityPoolSpend;
                toAmino(message: _61.MsgCommunityPoolSpend): _61.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _61.MsgCommunityPoolSpendAminoMsg): _61.MsgCommunityPoolSpend;
                toAminoMsg(message: _61.MsgCommunityPoolSpend): _61.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _61.MsgCommunityPoolSpendProtoMsg): _61.MsgCommunityPoolSpend;
                toProto(message: _61.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _61.MsgCommunityPoolSpend): _61.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _61.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_61.MsgCommunityPoolSpendResponse>): _61.MsgCommunityPoolSpendResponse;
                fromAmino(_: _61.MsgCommunityPoolSpendResponseAmino): _61.MsgCommunityPoolSpendResponse;
                toAmino(_: _61.MsgCommunityPoolSpendResponse): _61.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _61.MsgCommunityPoolSpendResponseAminoMsg): _61.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _61.MsgCommunityPoolSpendResponse): _61.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _61.MsgCommunityPoolSpendResponseProtoMsg): _61.MsgCommunityPoolSpendResponse;
                toProto(message: _61.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _61.MsgCommunityPoolSpendResponse): _61.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _60.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.QueryParamsRequest;
                fromPartial(_: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
                fromAmino(_: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
                toAmino(_: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
                fromAminoMsg(object: _60.QueryParamsRequestAminoMsg): _60.QueryParamsRequest;
                toAminoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryParamsRequestProtoMsg): _60.QueryParamsRequest;
                toProto(message: _60.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _60.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryParamsResponse;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
                fromAmino(object: _60.QueryParamsResponseAmino): _60.QueryParamsResponse;
                toAmino(message: _60.QueryParamsResponse): _60.QueryParamsResponseAmino;
                fromAminoMsg(object: _60.QueryParamsResponseAminoMsg): _60.QueryParamsResponse;
                toAminoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryParamsResponseProtoMsg): _60.QueryParamsResponse;
                toProto(message: _60.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_60.QueryValidatorDistributionInfoRequest>): _60.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _60.QueryValidatorDistributionInfoRequestAmino): _60.QueryValidatorDistributionInfoRequest;
                toAmino(message: _60.QueryValidatorDistributionInfoRequest): _60.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorDistributionInfoRequestAminoMsg): _60.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _60.QueryValidatorDistributionInfoRequest): _60.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorDistributionInfoRequestProtoMsg): _60.QueryValidatorDistributionInfoRequest;
                toProto(message: _60.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorDistributionInfoRequest): _60.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_60.QueryValidatorDistributionInfoResponse>): _60.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _60.QueryValidatorDistributionInfoResponseAmino): _60.QueryValidatorDistributionInfoResponse;
                toAmino(message: _60.QueryValidatorDistributionInfoResponse): _60.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorDistributionInfoResponseAminoMsg): _60.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _60.QueryValidatorDistributionInfoResponse): _60.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorDistributionInfoResponseProtoMsg): _60.QueryValidatorDistributionInfoResponse;
                toProto(message: _60.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorDistributionInfoResponse): _60.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_60.QueryValidatorOutstandingRewardsRequest>): _60.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _60.QueryValidatorOutstandingRewardsRequestAmino): _60.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorOutstandingRewardsRequestAminoMsg): _60.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorOutstandingRewardsRequestProtoMsg): _60.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _60.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_60.QueryValidatorOutstandingRewardsResponse>): _60.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _60.QueryValidatorOutstandingRewardsResponseAmino): _60.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorOutstandingRewardsResponseAminoMsg): _60.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorOutstandingRewardsResponseProtoMsg): _60.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _60.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_60.QueryValidatorCommissionRequest>): _60.QueryValidatorCommissionRequest;
                fromAmino(object: _60.QueryValidatorCommissionRequestAmino): _60.QueryValidatorCommissionRequest;
                toAmino(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorCommissionRequestAminoMsg): _60.QueryValidatorCommissionRequest;
                toAminoMsg(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorCommissionRequestProtoMsg): _60.QueryValidatorCommissionRequest;
                toProto(message: _60.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_60.QueryValidatorCommissionResponse>): _60.QueryValidatorCommissionResponse;
                fromAmino(object: _60.QueryValidatorCommissionResponseAmino): _60.QueryValidatorCommissionResponse;
                toAmino(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorCommissionResponseAminoMsg): _60.QueryValidatorCommissionResponse;
                toAminoMsg(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorCommissionResponseProtoMsg): _60.QueryValidatorCommissionResponse;
                toProto(message: _60.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_60.QueryValidatorSlashesRequest>): _60.QueryValidatorSlashesRequest;
                fromAmino(object: _60.QueryValidatorSlashesRequestAmino): _60.QueryValidatorSlashesRequest;
                toAmino(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorSlashesRequestAminoMsg): _60.QueryValidatorSlashesRequest;
                toAminoMsg(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorSlashesRequestProtoMsg): _60.QueryValidatorSlashesRequest;
                toProto(message: _60.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_60.QueryValidatorSlashesResponse>): _60.QueryValidatorSlashesResponse;
                fromAmino(object: _60.QueryValidatorSlashesResponseAmino): _60.QueryValidatorSlashesResponse;
                toAmino(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorSlashesResponseAminoMsg): _60.QueryValidatorSlashesResponse;
                toAminoMsg(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorSlashesResponseProtoMsg): _60.QueryValidatorSlashesResponse;
                toProto(message: _60.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_60.QueryDelegationRewardsRequest>): _60.QueryDelegationRewardsRequest;
                fromAmino(object: _60.QueryDelegationRewardsRequestAmino): _60.QueryDelegationRewardsRequest;
                toAmino(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegationRewardsRequestAminoMsg): _60.QueryDelegationRewardsRequest;
                toAminoMsg(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationRewardsRequestProtoMsg): _60.QueryDelegationRewardsRequest;
                toProto(message: _60.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_60.QueryDelegationRewardsResponse>): _60.QueryDelegationRewardsResponse;
                fromAmino(object: _60.QueryDelegationRewardsResponseAmino): _60.QueryDelegationRewardsResponse;
                toAmino(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegationRewardsResponseAminoMsg): _60.QueryDelegationRewardsResponse;
                toAminoMsg(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationRewardsResponseProtoMsg): _60.QueryDelegationRewardsResponse;
                toProto(message: _60.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_60.QueryDelegationTotalRewardsRequest>): _60.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _60.QueryDelegationTotalRewardsRequestAmino): _60.QueryDelegationTotalRewardsRequest;
                toAmino(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegationTotalRewardsRequestAminoMsg): _60.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationTotalRewardsRequestProtoMsg): _60.QueryDelegationTotalRewardsRequest;
                toProto(message: _60.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_60.QueryDelegationTotalRewardsResponse>): _60.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _60.QueryDelegationTotalRewardsResponseAmino): _60.QueryDelegationTotalRewardsResponse;
                toAmino(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegationTotalRewardsResponseAminoMsg): _60.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationTotalRewardsResponseProtoMsg): _60.QueryDelegationTotalRewardsResponse;
                toProto(message: _60.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_60.QueryDelegatorValidatorsRequest>): _60.QueryDelegatorValidatorsRequest;
                fromAmino(object: _60.QueryDelegatorValidatorsRequestAmino): _60.QueryDelegatorValidatorsRequest;
                toAmino(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegatorValidatorsRequestAminoMsg): _60.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorValidatorsRequestProtoMsg): _60.QueryDelegatorValidatorsRequest;
                toProto(message: _60.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_60.QueryDelegatorValidatorsResponse>): _60.QueryDelegatorValidatorsResponse;
                fromAmino(object: _60.QueryDelegatorValidatorsResponseAmino): _60.QueryDelegatorValidatorsResponse;
                toAmino(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegatorValidatorsResponseAminoMsg): _60.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorValidatorsResponseProtoMsg): _60.QueryDelegatorValidatorsResponse;
                toProto(message: _60.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_60.QueryDelegatorWithdrawAddressRequest>): _60.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _60.QueryDelegatorWithdrawAddressRequestAmino): _60.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _60.QueryDelegatorWithdrawAddressRequestAminoMsg): _60.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorWithdrawAddressRequestProtoMsg): _60.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _60.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_60.QueryDelegatorWithdrawAddressResponse>): _60.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _60.QueryDelegatorWithdrawAddressResponseAmino): _60.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _60.QueryDelegatorWithdrawAddressResponseAminoMsg): _60.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorWithdrawAddressResponseProtoMsg): _60.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _60.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _60.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_60.QueryCommunityPoolRequest>): _60.QueryCommunityPoolRequest;
                fromAmino(_: _60.QueryCommunityPoolRequestAmino): _60.QueryCommunityPoolRequest;
                toAmino(_: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _60.QueryCommunityPoolRequestAminoMsg): _60.QueryCommunityPoolRequest;
                toAminoMsg(message: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _60.QueryCommunityPoolRequestProtoMsg): _60.QueryCommunityPoolRequest;
                toProto(message: _60.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _60.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_60.QueryCommunityPoolResponse>): _60.QueryCommunityPoolResponse;
                fromAmino(object: _60.QueryCommunityPoolResponseAmino): _60.QueryCommunityPoolResponse;
                toAmino(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _60.QueryCommunityPoolResponseAminoMsg): _60.QueryCommunityPoolResponse;
                toAminoMsg(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _60.QueryCommunityPoolResponseProtoMsg): _60.QueryCommunityPoolResponse;
                toProto(message: _60.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _59.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_59.DelegatorWithdrawInfo>): _59.DelegatorWithdrawInfo;
                fromAmino(object: _59.DelegatorWithdrawInfoAmino): _59.DelegatorWithdrawInfo;
                toAmino(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _59.DelegatorWithdrawInfoAminoMsg): _59.DelegatorWithdrawInfo;
                toAminoMsg(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _59.DelegatorWithdrawInfoProtoMsg): _59.DelegatorWithdrawInfo;
                toProto(message: _59.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_59.ValidatorOutstandingRewardsRecord>): _59.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _59.ValidatorOutstandingRewardsRecordAmino): _59.ValidatorOutstandingRewardsRecord;
                toAmino(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _59.ValidatorOutstandingRewardsRecordAminoMsg): _59.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorOutstandingRewardsRecordProtoMsg): _59.ValidatorOutstandingRewardsRecord;
                toProto(message: _59.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_59.ValidatorAccumulatedCommissionRecord>): _59.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _59.ValidatorAccumulatedCommissionRecordAmino): _59.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _59.ValidatorAccumulatedCommissionRecordAminoMsg): _59.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorAccumulatedCommissionRecordProtoMsg): _59.ValidatorAccumulatedCommissionRecord;
                toProto(message: _59.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_59.ValidatorHistoricalRewardsRecord>): _59.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _59.ValidatorHistoricalRewardsRecordAmino): _59.ValidatorHistoricalRewardsRecord;
                toAmino(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _59.ValidatorHistoricalRewardsRecordAminoMsg): _59.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorHistoricalRewardsRecordProtoMsg): _59.ValidatorHistoricalRewardsRecord;
                toProto(message: _59.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_59.ValidatorCurrentRewardsRecord>): _59.ValidatorCurrentRewardsRecord;
                fromAmino(object: _59.ValidatorCurrentRewardsRecordAmino): _59.ValidatorCurrentRewardsRecord;
                toAmino(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _59.ValidatorCurrentRewardsRecordAminoMsg): _59.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorCurrentRewardsRecordProtoMsg): _59.ValidatorCurrentRewardsRecord;
                toProto(message: _59.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _59.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_59.DelegatorStartingInfoRecord>): _59.DelegatorStartingInfoRecord;
                fromAmino(object: _59.DelegatorStartingInfoRecordAmino): _59.DelegatorStartingInfoRecord;
                toAmino(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _59.DelegatorStartingInfoRecordAminoMsg): _59.DelegatorStartingInfoRecord;
                toAminoMsg(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _59.DelegatorStartingInfoRecordProtoMsg): _59.DelegatorStartingInfoRecord;
                toProto(message: _59.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_59.ValidatorSlashEventRecord>): _59.ValidatorSlashEventRecord;
                fromAmino(object: _59.ValidatorSlashEventRecordAmino): _59.ValidatorSlashEventRecord;
                toAmino(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _59.ValidatorSlashEventRecordAminoMsg): _59.ValidatorSlashEventRecord;
                toAminoMsg(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorSlashEventRecordProtoMsg): _59.ValidatorSlashEventRecord;
                toProto(message: _59.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _59.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.GenesisState;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
                fromAmino(object: _59.GenesisStateAmino): _59.GenesisState;
                toAmino(message: _59.GenesisState): _59.GenesisStateAmino;
                fromAminoMsg(object: _59.GenesisStateAminoMsg): _59.GenesisState;
                toAminoMsg(message: _59.GenesisState): _59.GenesisStateAminoMsg;
                fromProtoMsg(message: _59.GenesisStateProtoMsg): _59.GenesisState;
                toProto(message: _59.GenesisState): Uint8Array;
                toProtoMsg(message: _59.GenesisState): _59.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _58.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.Params;
                fromPartial(object: Partial<_58.Params>): _58.Params;
                fromAmino(object: _58.ParamsAmino): _58.Params;
                toAmino(message: _58.Params): _58.ParamsAmino;
                fromAminoMsg(object: _58.ParamsAminoMsg): _58.Params;
                toAminoMsg(message: _58.Params): _58.ParamsAminoMsg;
                fromProtoMsg(message: _58.ParamsProtoMsg): _58.Params;
                toProto(message: _58.Params): Uint8Array;
                toProtoMsg(message: _58.Params): _58.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _58.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_58.ValidatorHistoricalRewards>): _58.ValidatorHistoricalRewards;
                fromAmino(object: _58.ValidatorHistoricalRewardsAmino): _58.ValidatorHistoricalRewards;
                toAmino(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _58.ValidatorHistoricalRewardsAminoMsg): _58.ValidatorHistoricalRewards;
                toAminoMsg(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _58.ValidatorHistoricalRewardsProtoMsg): _58.ValidatorHistoricalRewards;
                toProto(message: _58.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _58.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorCurrentRewards;
                fromPartial(object: Partial<_58.ValidatorCurrentRewards>): _58.ValidatorCurrentRewards;
                fromAmino(object: _58.ValidatorCurrentRewardsAmino): _58.ValidatorCurrentRewards;
                toAmino(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _58.ValidatorCurrentRewardsAminoMsg): _58.ValidatorCurrentRewards;
                toAminoMsg(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _58.ValidatorCurrentRewardsProtoMsg): _58.ValidatorCurrentRewards;
                toProto(message: _58.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _58.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_58.ValidatorAccumulatedCommission>): _58.ValidatorAccumulatedCommission;
                fromAmino(object: _58.ValidatorAccumulatedCommissionAmino): _58.ValidatorAccumulatedCommission;
                toAmino(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _58.ValidatorAccumulatedCommissionAminoMsg): _58.ValidatorAccumulatedCommission;
                toAminoMsg(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _58.ValidatorAccumulatedCommissionProtoMsg): _58.ValidatorAccumulatedCommission;
                toProto(message: _58.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _58.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_58.ValidatorOutstandingRewards>): _58.ValidatorOutstandingRewards;
                fromAmino(object: _58.ValidatorOutstandingRewardsAmino): _58.ValidatorOutstandingRewards;
                toAmino(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _58.ValidatorOutstandingRewardsAminoMsg): _58.ValidatorOutstandingRewards;
                toAminoMsg(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _58.ValidatorOutstandingRewardsProtoMsg): _58.ValidatorOutstandingRewards;
                toProto(message: _58.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _58.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorSlashEvent;
                fromPartial(object: Partial<_58.ValidatorSlashEvent>): _58.ValidatorSlashEvent;
                fromAmino(object: _58.ValidatorSlashEventAmino): _58.ValidatorSlashEvent;
                toAmino(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventAmino;
                fromAminoMsg(object: _58.ValidatorSlashEventAminoMsg): _58.ValidatorSlashEvent;
                toAminoMsg(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _58.ValidatorSlashEventProtoMsg): _58.ValidatorSlashEvent;
                toProto(message: _58.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _58.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ValidatorSlashEvents;
                fromPartial(object: Partial<_58.ValidatorSlashEvents>): _58.ValidatorSlashEvents;
                fromAmino(object: _58.ValidatorSlashEventsAmino): _58.ValidatorSlashEvents;
                toAmino(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _58.ValidatorSlashEventsAminoMsg): _58.ValidatorSlashEvents;
                toAminoMsg(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _58.ValidatorSlashEventsProtoMsg): _58.ValidatorSlashEvents;
                toProto(message: _58.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _58.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.FeePool;
                fromPartial(object: Partial<_58.FeePool>): _58.FeePool;
                fromAmino(object: _58.FeePoolAmino): _58.FeePool;
                toAmino(message: _58.FeePool): _58.FeePoolAmino;
                fromAminoMsg(object: _58.FeePoolAminoMsg): _58.FeePool;
                toAminoMsg(message: _58.FeePool): _58.FeePoolAminoMsg;
                fromProtoMsg(message: _58.FeePoolProtoMsg): _58.FeePool;
                toProto(message: _58.FeePool): Uint8Array;
                toProtoMsg(message: _58.FeePool): _58.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _58.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_58.CommunityPoolSpendProposal>): _58.CommunityPoolSpendProposal;
                fromAmino(object: _58.CommunityPoolSpendProposalAmino): _58.CommunityPoolSpendProposal;
                toAmino(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _58.CommunityPoolSpendProposalAminoMsg): _58.CommunityPoolSpendProposal;
                toAminoMsg(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _58.CommunityPoolSpendProposalProtoMsg): _58.CommunityPoolSpendProposal;
                toProto(message: _58.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _58.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.DelegatorStartingInfo;
                fromPartial(object: Partial<_58.DelegatorStartingInfo>): _58.DelegatorStartingInfo;
                fromAmino(object: _58.DelegatorStartingInfoAmino): _58.DelegatorStartingInfo;
                toAmino(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _58.DelegatorStartingInfoAminoMsg): _58.DelegatorStartingInfo;
                toAminoMsg(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _58.DelegatorStartingInfoProtoMsg): _58.DelegatorStartingInfo;
                toProto(message: _58.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _58.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.DelegationDelegatorReward;
                fromPartial(object: Partial<_58.DelegationDelegatorReward>): _58.DelegationDelegatorReward;
                fromAmino(object: _58.DelegationDelegatorRewardAmino): _58.DelegationDelegatorReward;
                toAmino(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _58.DelegationDelegatorRewardAminoMsg): _58.DelegationDelegatorReward;
                toAminoMsg(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _58.DelegationDelegatorRewardProtoMsg): _58.DelegationDelegatorReward;
                toProto(message: _58.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _58.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_58.CommunityPoolSpendProposalWithDeposit>): _58.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _58.CommunityPoolSpendProposalWithDepositAmino): _58.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _58.CommunityPoolSpendProposalWithDepositAminoMsg): _58.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _58.CommunityPoolSpendProposalWithDepositProtoMsg): _58.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _58.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _62.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _62.Module;
                    fromPartial(_: Partial<_62.Module>): _62.Module;
                    fromAmino(_: _62.ModuleAmino): _62.Module;
                    toAmino(_: _62.Module): _62.ModuleAmino;
                    fromAminoMsg(object: _62.ModuleAminoMsg): _62.Module;
                    toAminoMsg(message: _62.Module): _62.ModuleAminoMsg;
                    fromProtoMsg(message: _62.ModuleProtoMsg): _62.Module;
                    toProto(message: _62.Module): Uint8Array;
                    toProtoMsg(message: _62.Module): _62.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _65.QueryEvidenceRequest): Promise<_65.QueryEvidenceResponse>;
                allEvidence(request?: _65.QueryAllEvidenceRequest): Promise<_65.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _66.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _66.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _66.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _66.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _66.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _66.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _66.MsgSubmitEvidence) => _66.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _66.MsgSubmitEvidenceAmino) => _66.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _66.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgSubmitEvidence;
                fromPartial(object: Partial<_66.MsgSubmitEvidence>): _66.MsgSubmitEvidence;
                fromAmino(object: _66.MsgSubmitEvidenceAmino): _66.MsgSubmitEvidence;
                toAmino(message: _66.MsgSubmitEvidence): _66.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _66.MsgSubmitEvidenceAminoMsg): _66.MsgSubmitEvidence;
                toAminoMsg(message: _66.MsgSubmitEvidence): _66.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitEvidenceProtoMsg): _66.MsgSubmitEvidence;
                toProto(message: _66.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitEvidence): _66.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _66.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_66.MsgSubmitEvidenceResponse>): _66.MsgSubmitEvidenceResponse;
                fromAmino(object: _66.MsgSubmitEvidenceResponseAmino): _66.MsgSubmitEvidenceResponse;
                toAmino(message: _66.MsgSubmitEvidenceResponse): _66.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _66.MsgSubmitEvidenceResponseAminoMsg): _66.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _66.MsgSubmitEvidenceResponse): _66.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _66.MsgSubmitEvidenceResponseProtoMsg): _66.MsgSubmitEvidenceResponse;
                toProto(message: _66.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _66.MsgSubmitEvidenceResponse): _66.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _65.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryEvidenceRequest;
                fromPartial(object: Partial<_65.QueryEvidenceRequest>): _65.QueryEvidenceRequest;
                fromAmino(object: _65.QueryEvidenceRequestAmino): _65.QueryEvidenceRequest;
                toAmino(message: _65.QueryEvidenceRequest): _65.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _65.QueryEvidenceRequestAminoMsg): _65.QueryEvidenceRequest;
                toAminoMsg(message: _65.QueryEvidenceRequest): _65.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _65.QueryEvidenceRequestProtoMsg): _65.QueryEvidenceRequest;
                toProto(message: _65.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _65.QueryEvidenceRequest): _65.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _65.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryEvidenceResponse;
                fromPartial(object: Partial<_65.QueryEvidenceResponse>): _65.QueryEvidenceResponse;
                fromAmino(object: _65.QueryEvidenceResponseAmino): _65.QueryEvidenceResponse;
                toAmino(message: _65.QueryEvidenceResponse): _65.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _65.QueryEvidenceResponseAminoMsg): _65.QueryEvidenceResponse;
                toAminoMsg(message: _65.QueryEvidenceResponse): _65.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _65.QueryEvidenceResponseProtoMsg): _65.QueryEvidenceResponse;
                toProto(message: _65.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _65.QueryEvidenceResponse): _65.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _65.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_65.QueryAllEvidenceRequest>): _65.QueryAllEvidenceRequest;
                fromAmino(object: _65.QueryAllEvidenceRequestAmino): _65.QueryAllEvidenceRequest;
                toAmino(message: _65.QueryAllEvidenceRequest): _65.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _65.QueryAllEvidenceRequestAminoMsg): _65.QueryAllEvidenceRequest;
                toAminoMsg(message: _65.QueryAllEvidenceRequest): _65.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _65.QueryAllEvidenceRequestProtoMsg): _65.QueryAllEvidenceRequest;
                toProto(message: _65.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _65.QueryAllEvidenceRequest): _65.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _65.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_65.QueryAllEvidenceResponse>): _65.QueryAllEvidenceResponse;
                fromAmino(object: _65.QueryAllEvidenceResponseAmino): _65.QueryAllEvidenceResponse;
                toAmino(message: _65.QueryAllEvidenceResponse): _65.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _65.QueryAllEvidenceResponseAminoMsg): _65.QueryAllEvidenceResponse;
                toAminoMsg(message: _65.QueryAllEvidenceResponse): _65.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _65.QueryAllEvidenceResponseProtoMsg): _65.QueryAllEvidenceResponse;
                toProto(message: _65.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _65.QueryAllEvidenceResponse): _65.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                toProto(message: _64.GenesisState): Uint8Array;
                toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _63.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.Equivocation;
                fromPartial(object: Partial<_63.Equivocation>): _63.Equivocation;
                fromAmino(object: _63.EquivocationAmino): _63.Equivocation;
                toAmino(message: _63.Equivocation): _63.EquivocationAmino;
                fromAminoMsg(object: _63.EquivocationAminoMsg): _63.Equivocation;
                toAminoMsg(message: _63.Equivocation): _63.EquivocationAminoMsg;
                fromProtoMsg(message: _63.EquivocationProtoMsg): _63.Equivocation;
                toProto(message: _63.Equivocation): Uint8Array;
                toProtoMsg(message: _63.Equivocation): _63.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _67.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _67.Module;
                    fromPartial(_: Partial<_67.Module>): _67.Module;
                    fromAmino(_: _67.ModuleAmino): _67.Module;
                    toAmino(_: _67.Module): _67.ModuleAmino;
                    fromAminoMsg(object: _67.ModuleAminoMsg): _67.Module;
                    toAminoMsg(message: _67.Module): _67.ModuleAminoMsg;
                    fromProtoMsg(message: _67.ModuleProtoMsg): _67.Module;
                    toProto(message: _67.Module): Uint8Array;
                    toProtoMsg(message: _67.Module): _67.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _70.QueryAllowanceRequest): Promise<_70.QueryAllowanceResponse>;
                allowances(request: _70.QueryAllowancesRequest): Promise<_70.QueryAllowancesResponse>;
                allowancesByGranter(request: _70.QueryAllowancesByGranterRequest): Promise<_70.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _71.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _71.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _71.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _71.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _71.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _71.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _71.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _71.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _71.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _71.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _71.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _71.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _71.MsgGrantAllowance) => _71.MsgGrantAllowanceAmino;
                    fromAmino: (object: _71.MsgGrantAllowanceAmino) => _71.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _71.MsgRevokeAllowance) => _71.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _71.MsgRevokeAllowanceAmino) => _71.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _71.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgGrantAllowance;
                fromPartial(object: Partial<_71.MsgGrantAllowance>): _71.MsgGrantAllowance;
                fromAmino(object: _71.MsgGrantAllowanceAmino): _71.MsgGrantAllowance;
                toAmino(message: _71.MsgGrantAllowance): _71.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _71.MsgGrantAllowanceAminoMsg): _71.MsgGrantAllowance;
                toAminoMsg(message: _71.MsgGrantAllowance): _71.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _71.MsgGrantAllowanceProtoMsg): _71.MsgGrantAllowance;
                toProto(message: _71.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _71.MsgGrantAllowance): _71.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _71.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_71.MsgGrantAllowanceResponse>): _71.MsgGrantAllowanceResponse;
                fromAmino(_: _71.MsgGrantAllowanceResponseAmino): _71.MsgGrantAllowanceResponse;
                toAmino(_: _71.MsgGrantAllowanceResponse): _71.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _71.MsgGrantAllowanceResponseAminoMsg): _71.MsgGrantAllowanceResponse;
                toAminoMsg(message: _71.MsgGrantAllowanceResponse): _71.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _71.MsgGrantAllowanceResponseProtoMsg): _71.MsgGrantAllowanceResponse;
                toProto(message: _71.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _71.MsgGrantAllowanceResponse): _71.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _71.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgRevokeAllowance;
                fromPartial(object: Partial<_71.MsgRevokeAllowance>): _71.MsgRevokeAllowance;
                fromAmino(object: _71.MsgRevokeAllowanceAmino): _71.MsgRevokeAllowance;
                toAmino(message: _71.MsgRevokeAllowance): _71.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _71.MsgRevokeAllowanceAminoMsg): _71.MsgRevokeAllowance;
                toAminoMsg(message: _71.MsgRevokeAllowance): _71.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _71.MsgRevokeAllowanceProtoMsg): _71.MsgRevokeAllowance;
                toProto(message: _71.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _71.MsgRevokeAllowance): _71.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _71.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _71.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_71.MsgRevokeAllowanceResponse>): _71.MsgRevokeAllowanceResponse;
                fromAmino(_: _71.MsgRevokeAllowanceResponseAmino): _71.MsgRevokeAllowanceResponse;
                toAmino(_: _71.MsgRevokeAllowanceResponse): _71.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _71.MsgRevokeAllowanceResponseAminoMsg): _71.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _71.MsgRevokeAllowanceResponse): _71.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _71.MsgRevokeAllowanceResponseProtoMsg): _71.MsgRevokeAllowanceResponse;
                toProto(message: _71.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _71.MsgRevokeAllowanceResponse): _71.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _68.BasicAllowance | _68.PeriodicAllowance | _68.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _70.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllowanceRequest;
                fromPartial(object: Partial<_70.QueryAllowanceRequest>): _70.QueryAllowanceRequest;
                fromAmino(object: _70.QueryAllowanceRequestAmino): _70.QueryAllowanceRequest;
                toAmino(message: _70.QueryAllowanceRequest): _70.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _70.QueryAllowanceRequestAminoMsg): _70.QueryAllowanceRequest;
                toAminoMsg(message: _70.QueryAllowanceRequest): _70.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAllowanceRequestProtoMsg): _70.QueryAllowanceRequest;
                toProto(message: _70.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAllowanceRequest): _70.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _70.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllowanceResponse;
                fromPartial(object: Partial<_70.QueryAllowanceResponse>): _70.QueryAllowanceResponse;
                fromAmino(object: _70.QueryAllowanceResponseAmino): _70.QueryAllowanceResponse;
                toAmino(message: _70.QueryAllowanceResponse): _70.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _70.QueryAllowanceResponseAminoMsg): _70.QueryAllowanceResponse;
                toAminoMsg(message: _70.QueryAllowanceResponse): _70.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAllowanceResponseProtoMsg): _70.QueryAllowanceResponse;
                toProto(message: _70.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAllowanceResponse): _70.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _70.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllowancesRequest;
                fromPartial(object: Partial<_70.QueryAllowancesRequest>): _70.QueryAllowancesRequest;
                fromAmino(object: _70.QueryAllowancesRequestAmino): _70.QueryAllowancesRequest;
                toAmino(message: _70.QueryAllowancesRequest): _70.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _70.QueryAllowancesRequestAminoMsg): _70.QueryAllowancesRequest;
                toAminoMsg(message: _70.QueryAllowancesRequest): _70.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAllowancesRequestProtoMsg): _70.QueryAllowancesRequest;
                toProto(message: _70.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAllowancesRequest): _70.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _70.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllowancesResponse;
                fromPartial(object: Partial<_70.QueryAllowancesResponse>): _70.QueryAllowancesResponse;
                fromAmino(object: _70.QueryAllowancesResponseAmino): _70.QueryAllowancesResponse;
                toAmino(message: _70.QueryAllowancesResponse): _70.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _70.QueryAllowancesResponseAminoMsg): _70.QueryAllowancesResponse;
                toAminoMsg(message: _70.QueryAllowancesResponse): _70.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAllowancesResponseProtoMsg): _70.QueryAllowancesResponse;
                toProto(message: _70.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAllowancesResponse): _70.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _70.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_70.QueryAllowancesByGranterRequest>): _70.QueryAllowancesByGranterRequest;
                fromAmino(object: _70.QueryAllowancesByGranterRequestAmino): _70.QueryAllowancesByGranterRequest;
                toAmino(message: _70.QueryAllowancesByGranterRequest): _70.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _70.QueryAllowancesByGranterRequestAminoMsg): _70.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _70.QueryAllowancesByGranterRequest): _70.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAllowancesByGranterRequestProtoMsg): _70.QueryAllowancesByGranterRequest;
                toProto(message: _70.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAllowancesByGranterRequest): _70.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _70.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_70.QueryAllowancesByGranterResponse>): _70.QueryAllowancesByGranterResponse;
                fromAmino(object: _70.QueryAllowancesByGranterResponseAmino): _70.QueryAllowancesByGranterResponse;
                toAmino(message: _70.QueryAllowancesByGranterResponse): _70.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _70.QueryAllowancesByGranterResponseAminoMsg): _70.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _70.QueryAllowancesByGranterResponse): _70.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAllowancesByGranterResponseProtoMsg): _70.QueryAllowancesByGranterResponse;
                toProto(message: _70.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAllowancesByGranterResponse): _70.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _69.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
                fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                toAminoMsg(message: _69.GenesisState): _69.GenesisStateAminoMsg;
                fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                toProto(message: _69.GenesisState): Uint8Array;
                toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _68.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.BasicAllowance;
                fromPartial(object: Partial<_68.BasicAllowance>): _68.BasicAllowance;
                fromAmino(object: _68.BasicAllowanceAmino): _68.BasicAllowance;
                toAmino(message: _68.BasicAllowance): _68.BasicAllowanceAmino;
                fromAminoMsg(object: _68.BasicAllowanceAminoMsg): _68.BasicAllowance;
                toAminoMsg(message: _68.BasicAllowance): _68.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _68.BasicAllowanceProtoMsg): _68.BasicAllowance;
                toProto(message: _68.BasicAllowance): Uint8Array;
                toProtoMsg(message: _68.BasicAllowance): _68.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _68.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.PeriodicAllowance;
                fromPartial(object: Partial<_68.PeriodicAllowance>): _68.PeriodicAllowance;
                fromAmino(object: _68.PeriodicAllowanceAmino): _68.PeriodicAllowance;
                toAmino(message: _68.PeriodicAllowance): _68.PeriodicAllowanceAmino;
                fromAminoMsg(object: _68.PeriodicAllowanceAminoMsg): _68.PeriodicAllowance;
                toAminoMsg(message: _68.PeriodicAllowance): _68.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _68.PeriodicAllowanceProtoMsg): _68.PeriodicAllowance;
                toProto(message: _68.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _68.PeriodicAllowance): _68.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _68.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.AllowedMsgAllowance;
                fromPartial(object: Partial<_68.AllowedMsgAllowance>): _68.AllowedMsgAllowance;
                fromAmino(object: _68.AllowedMsgAllowanceAmino): _68.AllowedMsgAllowance;
                toAmino(message: _68.AllowedMsgAllowance): _68.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _68.AllowedMsgAllowanceAminoMsg): _68.AllowedMsgAllowance;
                toAminoMsg(message: _68.AllowedMsgAllowance): _68.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _68.AllowedMsgAllowanceProtoMsg): _68.AllowedMsgAllowance;
                toProto(message: _68.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _68.AllowedMsgAllowance): _68.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _68.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Grant;
                fromPartial(object: Partial<_68.Grant>): _68.Grant;
                fromAmino(object: _68.GrantAmino): _68.Grant;
                toAmino(message: _68.Grant): _68.GrantAmino;
                fromAminoMsg(object: _68.GrantAminoMsg): _68.Grant;
                toAminoMsg(message: _68.Grant): _68.GrantAminoMsg;
                fromProtoMsg(message: _68.GrantProtoMsg): _68.Grant;
                toProto(message: _68.Grant): Uint8Array;
                toProtoMsg(message: _68.Grant): _68.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _72.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _72.Module;
                    fromPartial(_: Partial<_72.Module>): _72.Module;
                    fromAmino(_: _72.ModuleAmino): _72.Module;
                    toAmino(_: _72.Module): _72.ModuleAmino;
                    fromAminoMsg(object: _72.ModuleAminoMsg): _72.Module;
                    toAminoMsg(message: _72.Module): _72.ModuleAminoMsg;
                    fromProtoMsg(message: _72.ModuleProtoMsg): _72.Module;
                    toProto(message: _72.Module): Uint8Array;
                    toProtoMsg(message: _72.Module): _72.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
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
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _74.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _74.Module;
                    fromPartial(object: Partial<_74.Module>): _74.Module;
                    fromAmino(object: _74.ModuleAmino): _74.Module;
                    toAmino(message: _74.Module): _74.ModuleAmino;
                    fromAminoMsg(object: _74.ModuleAminoMsg): _74.Module;
                    toAminoMsg(message: _74.Module): _74.ModuleAminoMsg;
                    fromProtoMsg(message: _74.ModuleProtoMsg): _74.Module;
                    toProto(message: _74.Module): Uint8Array;
                    toProtoMsg(message: _74.Module): _74.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _78.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _78.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _78.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _78.MsgExecLegacyContent;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                    updateParams(value: _78.MsgUpdateParams): {
                        typeUrl: string;
                        value: _78.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _78.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _78.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _78.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _78.MsgExecLegacyContent;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    voteWeighted(value: _78.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _78.MsgVoteWeighted;
                    };
                    deposit(value: _78.MsgDeposit): {
                        typeUrl: string;
                        value: _78.MsgDeposit;
                    };
                    updateParams(value: _78.MsgUpdateParams): {
                        typeUrl: string;
                        value: _78.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _78.MsgSubmitProposal) => _78.MsgSubmitProposalAmino;
                    fromAmino: (object: _78.MsgSubmitProposalAmino) => _78.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _78.MsgExecLegacyContent) => _78.MsgExecLegacyContentAmino;
                    fromAmino: (object: _78.MsgExecLegacyContentAmino) => _78.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _78.MsgVote) => _78.MsgVoteAmino;
                    fromAmino: (object: _78.MsgVoteAmino) => _78.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _78.MsgVoteWeighted) => _78.MsgVoteWeightedAmino;
                    fromAmino: (object: _78.MsgVoteWeightedAmino) => _78.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _78.MsgDeposit) => _78.MsgDepositAmino;
                    fromAmino: (object: _78.MsgDepositAmino) => _78.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _78.MsgUpdateParams) => _78.MsgUpdateParamsAmino;
                    fromAmino: (object: _78.MsgUpdateParamsAmino) => _78.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _78.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgSubmitProposal;
                fromPartial(object: Partial<_78.MsgSubmitProposal>): _78.MsgSubmitProposal;
                fromAmino(object: _78.MsgSubmitProposalAmino): _78.MsgSubmitProposal;
                toAmino(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalAmino;
                fromAminoMsg(object: _78.MsgSubmitProposalAminoMsg): _78.MsgSubmitProposal;
                toAminoMsg(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _78.MsgSubmitProposalProtoMsg): _78.MsgSubmitProposal;
                toProto(message: _78.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _78.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_78.MsgSubmitProposalResponse>): _78.MsgSubmitProposalResponse;
                fromAmino(object: _78.MsgSubmitProposalResponseAmino): _78.MsgSubmitProposalResponse;
                toAmino(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _78.MsgSubmitProposalResponseAminoMsg): _78.MsgSubmitProposalResponse;
                toAminoMsg(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _78.MsgSubmitProposalResponseProtoMsg): _78.MsgSubmitProposalResponse;
                toProto(message: _78.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _78.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgExecLegacyContent;
                fromPartial(object: Partial<_78.MsgExecLegacyContent>): _78.MsgExecLegacyContent;
                fromAmino(object: _78.MsgExecLegacyContentAmino): _78.MsgExecLegacyContent;
                toAmino(message: _78.MsgExecLegacyContent): _78.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _78.MsgExecLegacyContentAminoMsg): _78.MsgExecLegacyContent;
                toAminoMsg(message: _78.MsgExecLegacyContent): _78.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _78.MsgExecLegacyContentProtoMsg): _78.MsgExecLegacyContent;
                toProto(message: _78.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _78.MsgExecLegacyContent): _78.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _78.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_78.MsgExecLegacyContentResponse>): _78.MsgExecLegacyContentResponse;
                fromAmino(_: _78.MsgExecLegacyContentResponseAmino): _78.MsgExecLegacyContentResponse;
                toAmino(_: _78.MsgExecLegacyContentResponse): _78.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _78.MsgExecLegacyContentResponseAminoMsg): _78.MsgExecLegacyContentResponse;
                toAminoMsg(message: _78.MsgExecLegacyContentResponse): _78.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _78.MsgExecLegacyContentResponseProtoMsg): _78.MsgExecLegacyContentResponse;
                toProto(message: _78.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _78.MsgExecLegacyContentResponse): _78.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _78.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgVote;
                fromPartial(object: Partial<_78.MsgVote>): _78.MsgVote;
                fromAmino(object: _78.MsgVoteAmino): _78.MsgVote;
                toAmino(message: _78.MsgVote): _78.MsgVoteAmino;
                fromAminoMsg(object: _78.MsgVoteAminoMsg): _78.MsgVote;
                toAminoMsg(message: _78.MsgVote): _78.MsgVoteAminoMsg;
                fromProtoMsg(message: _78.MsgVoteProtoMsg): _78.MsgVote;
                toProto(message: _78.MsgVote): Uint8Array;
                toProtoMsg(message: _78.MsgVote): _78.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _78.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgVoteResponse;
                fromPartial(_: Partial<_78.MsgVoteResponse>): _78.MsgVoteResponse;
                fromAmino(_: _78.MsgVoteResponseAmino): _78.MsgVoteResponse;
                toAmino(_: _78.MsgVoteResponse): _78.MsgVoteResponseAmino;
                fromAminoMsg(object: _78.MsgVoteResponseAminoMsg): _78.MsgVoteResponse;
                toAminoMsg(message: _78.MsgVoteResponse): _78.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _78.MsgVoteResponseProtoMsg): _78.MsgVoteResponse;
                toProto(message: _78.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _78.MsgVoteResponse): _78.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _78.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgVoteWeighted;
                fromPartial(object: Partial<_78.MsgVoteWeighted>): _78.MsgVoteWeighted;
                fromAmino(object: _78.MsgVoteWeightedAmino): _78.MsgVoteWeighted;
                toAmino(message: _78.MsgVoteWeighted): _78.MsgVoteWeightedAmino;
                fromAminoMsg(object: _78.MsgVoteWeightedAminoMsg): _78.MsgVoteWeighted;
                toAminoMsg(message: _78.MsgVoteWeighted): _78.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _78.MsgVoteWeightedProtoMsg): _78.MsgVoteWeighted;
                toProto(message: _78.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _78.MsgVoteWeighted): _78.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _78.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_78.MsgVoteWeightedResponse>): _78.MsgVoteWeightedResponse;
                fromAmino(_: _78.MsgVoteWeightedResponseAmino): _78.MsgVoteWeightedResponse;
                toAmino(_: _78.MsgVoteWeightedResponse): _78.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _78.MsgVoteWeightedResponseAminoMsg): _78.MsgVoteWeightedResponse;
                toAminoMsg(message: _78.MsgVoteWeightedResponse): _78.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _78.MsgVoteWeightedResponseProtoMsg): _78.MsgVoteWeightedResponse;
                toProto(message: _78.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _78.MsgVoteWeightedResponse): _78.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _78.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgDeposit;
                fromPartial(object: Partial<_78.MsgDeposit>): _78.MsgDeposit;
                fromAmino(object: _78.MsgDepositAmino): _78.MsgDeposit;
                toAmino(message: _78.MsgDeposit): _78.MsgDepositAmino;
                fromAminoMsg(object: _78.MsgDepositAminoMsg): _78.MsgDeposit;
                toAminoMsg(message: _78.MsgDeposit): _78.MsgDepositAminoMsg;
                fromProtoMsg(message: _78.MsgDepositProtoMsg): _78.MsgDeposit;
                toProto(message: _78.MsgDeposit): Uint8Array;
                toProtoMsg(message: _78.MsgDeposit): _78.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _78.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgDepositResponse;
                fromPartial(_: Partial<_78.MsgDepositResponse>): _78.MsgDepositResponse;
                fromAmino(_: _78.MsgDepositResponseAmino): _78.MsgDepositResponse;
                toAmino(_: _78.MsgDepositResponse): _78.MsgDepositResponseAmino;
                fromAminoMsg(object: _78.MsgDepositResponseAminoMsg): _78.MsgDepositResponse;
                toAminoMsg(message: _78.MsgDepositResponse): _78.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _78.MsgDepositResponseProtoMsg): _78.MsgDepositResponse;
                toProto(message: _78.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _78.MsgDepositResponse): _78.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _78.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MsgUpdateParams;
                fromPartial(object: Partial<_78.MsgUpdateParams>): _78.MsgUpdateParams;
                fromAmino(object: _78.MsgUpdateParamsAmino): _78.MsgUpdateParams;
                toAmino(message: _78.MsgUpdateParams): _78.MsgUpdateParamsAmino;
                fromAminoMsg(object: _78.MsgUpdateParamsAminoMsg): _78.MsgUpdateParams;
                toAminoMsg(message: _78.MsgUpdateParams): _78.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateParamsProtoMsg): _78.MsgUpdateParams;
                toProto(message: _78.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateParams): _78.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _78.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _78.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_78.MsgUpdateParamsResponse>): _78.MsgUpdateParamsResponse;
                fromAmino(_: _78.MsgUpdateParamsResponseAmino): _78.MsgUpdateParamsResponse;
                toAmino(_: _78.MsgUpdateParamsResponse): _78.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _78.MsgUpdateParamsResponseAminoMsg): _78.MsgUpdateParamsResponse;
                toAminoMsg(message: _78.MsgUpdateParamsResponse): _78.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateParamsResponseProtoMsg): _78.MsgUpdateParamsResponse;
                toProto(message: _78.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateParamsResponse): _78.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _58.CommunityPoolSpendProposal | _58.CommunityPoolSpendProposalWithDeposit | _106.ParameterChangeProposal | _122.SoftwareUpgradeProposal | _122.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _80.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _77.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalRequest;
                fromPartial(object: Partial<_77.QueryProposalRequest>): _77.QueryProposalRequest;
                fromAmino(object: _77.QueryProposalRequestAmino): _77.QueryProposalRequest;
                toAmino(message: _77.QueryProposalRequest): _77.QueryProposalRequestAmino;
                fromAminoMsg(object: _77.QueryProposalRequestAminoMsg): _77.QueryProposalRequest;
                toAminoMsg(message: _77.QueryProposalRequest): _77.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _77.QueryProposalRequestProtoMsg): _77.QueryProposalRequest;
                toProto(message: _77.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _77.QueryProposalRequest): _77.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _77.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalResponse;
                fromPartial(object: Partial<_77.QueryProposalResponse>): _77.QueryProposalResponse;
                fromAmino(object: _77.QueryProposalResponseAmino): _77.QueryProposalResponse;
                toAmino(message: _77.QueryProposalResponse): _77.QueryProposalResponseAmino;
                fromAminoMsg(object: _77.QueryProposalResponseAminoMsg): _77.QueryProposalResponse;
                toAminoMsg(message: _77.QueryProposalResponse): _77.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _77.QueryProposalResponseProtoMsg): _77.QueryProposalResponse;
                toProto(message: _77.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _77.QueryProposalResponse): _77.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _77.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalsRequest;
                fromPartial(object: Partial<_77.QueryProposalsRequest>): _77.QueryProposalsRequest;
                fromAmino(object: _77.QueryProposalsRequestAmino): _77.QueryProposalsRequest;
                toAmino(message: _77.QueryProposalsRequest): _77.QueryProposalsRequestAmino;
                fromAminoMsg(object: _77.QueryProposalsRequestAminoMsg): _77.QueryProposalsRequest;
                toAminoMsg(message: _77.QueryProposalsRequest): _77.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryProposalsRequestProtoMsg): _77.QueryProposalsRequest;
                toProto(message: _77.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryProposalsRequest): _77.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _77.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryProposalsResponse;
                fromPartial(object: Partial<_77.QueryProposalsResponse>): _77.QueryProposalsResponse;
                fromAmino(object: _77.QueryProposalsResponseAmino): _77.QueryProposalsResponse;
                toAmino(message: _77.QueryProposalsResponse): _77.QueryProposalsResponseAmino;
                fromAminoMsg(object: _77.QueryProposalsResponseAminoMsg): _77.QueryProposalsResponse;
                toAminoMsg(message: _77.QueryProposalsResponse): _77.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryProposalsResponseProtoMsg): _77.QueryProposalsResponse;
                toProto(message: _77.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryProposalsResponse): _77.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _77.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVoteRequest;
                fromPartial(object: Partial<_77.QueryVoteRequest>): _77.QueryVoteRequest;
                fromAmino(object: _77.QueryVoteRequestAmino): _77.QueryVoteRequest;
                toAmino(message: _77.QueryVoteRequest): _77.QueryVoteRequestAmino;
                fromAminoMsg(object: _77.QueryVoteRequestAminoMsg): _77.QueryVoteRequest;
                toAminoMsg(message: _77.QueryVoteRequest): _77.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _77.QueryVoteRequestProtoMsg): _77.QueryVoteRequest;
                toProto(message: _77.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _77.QueryVoteRequest): _77.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _77.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVoteResponse;
                fromPartial(object: Partial<_77.QueryVoteResponse>): _77.QueryVoteResponse;
                fromAmino(object: _77.QueryVoteResponseAmino): _77.QueryVoteResponse;
                toAmino(message: _77.QueryVoteResponse): _77.QueryVoteResponseAmino;
                fromAminoMsg(object: _77.QueryVoteResponseAminoMsg): _77.QueryVoteResponse;
                toAminoMsg(message: _77.QueryVoteResponse): _77.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _77.QueryVoteResponseProtoMsg): _77.QueryVoteResponse;
                toProto(message: _77.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _77.QueryVoteResponse): _77.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _77.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVotesRequest;
                fromPartial(object: Partial<_77.QueryVotesRequest>): _77.QueryVotesRequest;
                fromAmino(object: _77.QueryVotesRequestAmino): _77.QueryVotesRequest;
                toAmino(message: _77.QueryVotesRequest): _77.QueryVotesRequestAmino;
                fromAminoMsg(object: _77.QueryVotesRequestAminoMsg): _77.QueryVotesRequest;
                toAminoMsg(message: _77.QueryVotesRequest): _77.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _77.QueryVotesRequestProtoMsg): _77.QueryVotesRequest;
                toProto(message: _77.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _77.QueryVotesRequest): _77.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _77.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryVotesResponse;
                fromPartial(object: Partial<_77.QueryVotesResponse>): _77.QueryVotesResponse;
                fromAmino(object: _77.QueryVotesResponseAmino): _77.QueryVotesResponse;
                toAmino(message: _77.QueryVotesResponse): _77.QueryVotesResponseAmino;
                fromAminoMsg(object: _77.QueryVotesResponseAminoMsg): _77.QueryVotesResponse;
                toAminoMsg(message: _77.QueryVotesResponse): _77.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _77.QueryVotesResponseProtoMsg): _77.QueryVotesResponse;
                toProto(message: _77.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _77.QueryVotesResponse): _77.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _77.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryParamsRequest;
                fromPartial(object: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
                fromAmino(object: _77.QueryParamsRequestAmino): _77.QueryParamsRequest;
                toAmino(message: _77.QueryParamsRequest): _77.QueryParamsRequestAmino;
                fromAminoMsg(object: _77.QueryParamsRequestAminoMsg): _77.QueryParamsRequest;
                toAminoMsg(message: _77.QueryParamsRequest): _77.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryParamsRequestProtoMsg): _77.QueryParamsRequest;
                toProto(message: _77.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryParamsRequest): _77.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _77.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryParamsResponse;
                fromPartial(object: Partial<_77.QueryParamsResponse>): _77.QueryParamsResponse;
                fromAmino(object: _77.QueryParamsResponseAmino): _77.QueryParamsResponse;
                toAmino(message: _77.QueryParamsResponse): _77.QueryParamsResponseAmino;
                fromAminoMsg(object: _77.QueryParamsResponseAminoMsg): _77.QueryParamsResponse;
                toAminoMsg(message: _77.QueryParamsResponse): _77.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryParamsResponseProtoMsg): _77.QueryParamsResponse;
                toProto(message: _77.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryParamsResponse): _77.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _77.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositRequest;
                fromPartial(object: Partial<_77.QueryDepositRequest>): _77.QueryDepositRequest;
                fromAmino(object: _77.QueryDepositRequestAmino): _77.QueryDepositRequest;
                toAmino(message: _77.QueryDepositRequest): _77.QueryDepositRequestAmino;
                fromAminoMsg(object: _77.QueryDepositRequestAminoMsg): _77.QueryDepositRequest;
                toAminoMsg(message: _77.QueryDepositRequest): _77.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDepositRequestProtoMsg): _77.QueryDepositRequest;
                toProto(message: _77.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDepositRequest): _77.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _77.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositResponse;
                fromPartial(object: Partial<_77.QueryDepositResponse>): _77.QueryDepositResponse;
                fromAmino(object: _77.QueryDepositResponseAmino): _77.QueryDepositResponse;
                toAmino(message: _77.QueryDepositResponse): _77.QueryDepositResponseAmino;
                fromAminoMsg(object: _77.QueryDepositResponseAminoMsg): _77.QueryDepositResponse;
                toAminoMsg(message: _77.QueryDepositResponse): _77.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDepositResponseProtoMsg): _77.QueryDepositResponse;
                toProto(message: _77.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDepositResponse): _77.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _77.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositsRequest;
                fromPartial(object: Partial<_77.QueryDepositsRequest>): _77.QueryDepositsRequest;
                fromAmino(object: _77.QueryDepositsRequestAmino): _77.QueryDepositsRequest;
                toAmino(message: _77.QueryDepositsRequest): _77.QueryDepositsRequestAmino;
                fromAminoMsg(object: _77.QueryDepositsRequestAminoMsg): _77.QueryDepositsRequest;
                toAminoMsg(message: _77.QueryDepositsRequest): _77.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryDepositsRequestProtoMsg): _77.QueryDepositsRequest;
                toProto(message: _77.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryDepositsRequest): _77.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _77.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryDepositsResponse;
                fromPartial(object: Partial<_77.QueryDepositsResponse>): _77.QueryDepositsResponse;
                fromAmino(object: _77.QueryDepositsResponseAmino): _77.QueryDepositsResponse;
                toAmino(message: _77.QueryDepositsResponse): _77.QueryDepositsResponseAmino;
                fromAminoMsg(object: _77.QueryDepositsResponseAminoMsg): _77.QueryDepositsResponse;
                toAminoMsg(message: _77.QueryDepositsResponse): _77.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryDepositsResponseProtoMsg): _77.QueryDepositsResponse;
                toProto(message: _77.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryDepositsResponse): _77.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _77.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryTallyResultRequest;
                fromPartial(object: Partial<_77.QueryTallyResultRequest>): _77.QueryTallyResultRequest;
                fromAmino(object: _77.QueryTallyResultRequestAmino): _77.QueryTallyResultRequest;
                toAmino(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _77.QueryTallyResultRequestAminoMsg): _77.QueryTallyResultRequest;
                toAminoMsg(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _77.QueryTallyResultRequestProtoMsg): _77.QueryTallyResultRequest;
                toProto(message: _77.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _77.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.QueryTallyResultResponse;
                fromPartial(object: Partial<_77.QueryTallyResultResponse>): _77.QueryTallyResultResponse;
                fromAmino(object: _77.QueryTallyResultResponseAmino): _77.QueryTallyResultResponse;
                toAmino(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _77.QueryTallyResultResponseAminoMsg): _77.QueryTallyResultResponse;
                toAminoMsg(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _77.QueryTallyResultResponseProtoMsg): _77.QueryTallyResultResponse;
                toProto(message: _77.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _76.VoteOption;
            voteOptionToJSON(object: _76.VoteOption): string;
            proposalStatusFromJSON(object: any): _76.ProposalStatus;
            proposalStatusToJSON(object: _76.ProposalStatus): string;
            VoteOption: typeof _76.VoteOption;
            VoteOptionSDKType: typeof _76.VoteOption;
            VoteOptionAmino: typeof _76.VoteOption;
            ProposalStatus: typeof _76.ProposalStatus;
            ProposalStatusSDKType: typeof _76.ProposalStatus;
            ProposalStatusAmino: typeof _76.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _76.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.WeightedVoteOption;
                fromPartial(object: Partial<_76.WeightedVoteOption>): _76.WeightedVoteOption;
                fromAmino(object: _76.WeightedVoteOptionAmino): _76.WeightedVoteOption;
                toAmino(message: _76.WeightedVoteOption): _76.WeightedVoteOptionAmino;
                fromAminoMsg(object: _76.WeightedVoteOptionAminoMsg): _76.WeightedVoteOption;
                toAminoMsg(message: _76.WeightedVoteOption): _76.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _76.WeightedVoteOptionProtoMsg): _76.WeightedVoteOption;
                toProto(message: _76.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _76.WeightedVoteOption): _76.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _76.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Deposit;
                fromPartial(object: Partial<_76.Deposit>): _76.Deposit;
                fromAmino(object: _76.DepositAmino): _76.Deposit;
                toAmino(message: _76.Deposit): _76.DepositAmino;
                fromAminoMsg(object: _76.DepositAminoMsg): _76.Deposit;
                toAminoMsg(message: _76.Deposit): _76.DepositAminoMsg;
                fromProtoMsg(message: _76.DepositProtoMsg): _76.Deposit;
                toProto(message: _76.Deposit): Uint8Array;
                toProtoMsg(message: _76.Deposit): _76.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _76.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Proposal;
                fromPartial(object: Partial<_76.Proposal>): _76.Proposal;
                fromAmino(object: _76.ProposalAmino): _76.Proposal;
                toAmino(message: _76.Proposal): _76.ProposalAmino;
                fromAminoMsg(object: _76.ProposalAminoMsg): _76.Proposal;
                toAminoMsg(message: _76.Proposal): _76.ProposalAminoMsg;
                fromProtoMsg(message: _76.ProposalProtoMsg): _76.Proposal;
                toProto(message: _76.Proposal): Uint8Array;
                toProtoMsg(message: _76.Proposal): _76.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _76.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.TallyResult;
                fromPartial(object: Partial<_76.TallyResult>): _76.TallyResult;
                fromAmino(object: _76.TallyResultAmino): _76.TallyResult;
                toAmino(message: _76.TallyResult): _76.TallyResultAmino;
                fromAminoMsg(object: _76.TallyResultAminoMsg): _76.TallyResult;
                toAminoMsg(message: _76.TallyResult): _76.TallyResultAminoMsg;
                fromProtoMsg(message: _76.TallyResultProtoMsg): _76.TallyResult;
                toProto(message: _76.TallyResult): Uint8Array;
                toProtoMsg(message: _76.TallyResult): _76.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _76.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Vote;
                fromPartial(object: Partial<_76.Vote>): _76.Vote;
                fromAmino(object: _76.VoteAmino): _76.Vote;
                toAmino(message: _76.Vote): _76.VoteAmino;
                fromAminoMsg(object: _76.VoteAminoMsg): _76.Vote;
                toAminoMsg(message: _76.Vote): _76.VoteAminoMsg;
                fromProtoMsg(message: _76.VoteProtoMsg): _76.Vote;
                toProto(message: _76.Vote): Uint8Array;
                toProtoMsg(message: _76.Vote): _76.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _76.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.DepositParams;
                fromPartial(object: Partial<_76.DepositParams>): _76.DepositParams;
                fromAmino(object: _76.DepositParamsAmino): _76.DepositParams;
                toAmino(message: _76.DepositParams): _76.DepositParamsAmino;
                fromAminoMsg(object: _76.DepositParamsAminoMsg): _76.DepositParams;
                toAminoMsg(message: _76.DepositParams): _76.DepositParamsAminoMsg;
                fromProtoMsg(message: _76.DepositParamsProtoMsg): _76.DepositParams;
                toProto(message: _76.DepositParams): Uint8Array;
                toProtoMsg(message: _76.DepositParams): _76.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _76.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.VotingParams;
                fromPartial(object: Partial<_76.VotingParams>): _76.VotingParams;
                fromAmino(object: _76.VotingParamsAmino): _76.VotingParams;
                toAmino(message: _76.VotingParams): _76.VotingParamsAmino;
                fromAminoMsg(object: _76.VotingParamsAminoMsg): _76.VotingParams;
                toAminoMsg(message: _76.VotingParams): _76.VotingParamsAminoMsg;
                fromProtoMsg(message: _76.VotingParamsProtoMsg): _76.VotingParams;
                toProto(message: _76.VotingParams): Uint8Array;
                toProtoMsg(message: _76.VotingParams): _76.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _76.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.TallyParams;
                fromPartial(object: Partial<_76.TallyParams>): _76.TallyParams;
                fromAmino(object: _76.TallyParamsAmino): _76.TallyParams;
                toAmino(message: _76.TallyParams): _76.TallyParamsAmino;
                fromAminoMsg(object: _76.TallyParamsAminoMsg): _76.TallyParams;
                toAminoMsg(message: _76.TallyParams): _76.TallyParamsAminoMsg;
                fromProtoMsg(message: _76.TallyParamsProtoMsg): _76.TallyParams;
                toProto(message: _76.TallyParams): Uint8Array;
                toProtoMsg(message: _76.TallyParams): _76.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _76.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Params;
                fromPartial(object: Partial<_76.Params>): _76.Params;
                fromAmino(object: _76.ParamsAmino): _76.Params;
                toAmino(message: _76.Params): _76.ParamsAmino;
                fromAminoMsg(object: _76.ParamsAminoMsg): _76.Params;
                toAminoMsg(message: _76.Params): _76.ParamsAminoMsg;
                fromProtoMsg(message: _76.ParamsProtoMsg): _76.Params;
                toProto(message: _76.Params): Uint8Array;
                toProtoMsg(message: _76.Params): _76.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _75.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GenesisState;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
                fromAmino(object: _75.GenesisStateAmino): _75.GenesisState;
                toAmino(message: _75.GenesisState): _75.GenesisStateAmino;
                fromAminoMsg(object: _75.GenesisStateAminoMsg): _75.GenesisState;
                toAminoMsg(message: _75.GenesisState): _75.GenesisStateAminoMsg;
                fromProtoMsg(message: _75.GenesisStateProtoMsg): _75.GenesisState;
                toProto(message: _75.GenesisState): Uint8Array;
                toProtoMsg(message: _75.GenesisState): _75.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _81.QueryProposalRequest): Promise<_81.QueryProposalResponse>;
                proposals(request: _81.QueryProposalsRequest): Promise<_81.QueryProposalsResponse>;
                vote(request: _81.QueryVoteRequest): Promise<_81.QueryVoteResponse>;
                votes(request: _81.QueryVotesRequest): Promise<_81.QueryVotesResponse>;
                params(request: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                deposit(request: _81.QueryDepositRequest): Promise<_81.QueryDepositResponse>;
                deposits(request: _81.QueryDepositsRequest): Promise<_81.QueryDepositsResponse>;
                tallyResult(request: _81.QueryTallyResultRequest): Promise<_81.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _82.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _82.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    voteWeighted(value: _82.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _82.MsgVoteWeighted;
                    };
                    deposit(value: _82.MsgDeposit): {
                        typeUrl: string;
                        value: _82.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _82.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _82.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    voteWeighted(value: _82.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _82.MsgVoteWeighted;
                    };
                    deposit(value: _82.MsgDeposit): {
                        typeUrl: string;
                        value: _82.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _82.MsgSubmitProposal) => _82.MsgSubmitProposalAmino;
                    fromAmino: (object: _82.MsgSubmitProposalAmino) => _82.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _82.MsgVote) => _82.MsgVoteAmino;
                    fromAmino: (object: _82.MsgVoteAmino) => _82.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _82.MsgVoteWeighted) => _82.MsgVoteWeightedAmino;
                    fromAmino: (object: _82.MsgVoteWeightedAmino) => _82.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _82.MsgDeposit) => _82.MsgDepositAmino;
                    fromAmino: (object: _82.MsgDepositAmino) => _82.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _82.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgSubmitProposal;
                fromPartial(object: Partial<_82.MsgSubmitProposal>): _82.MsgSubmitProposal;
                fromAmino(object: _82.MsgSubmitProposalAmino): _82.MsgSubmitProposal;
                toAmino(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalAmino;
                fromAminoMsg(object: _82.MsgSubmitProposalAminoMsg): _82.MsgSubmitProposal;
                toAminoMsg(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitProposalProtoMsg): _82.MsgSubmitProposal;
                toProto(message: _82.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _82.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_82.MsgSubmitProposalResponse>): _82.MsgSubmitProposalResponse;
                fromAmino(object: _82.MsgSubmitProposalResponseAmino): _82.MsgSubmitProposalResponse;
                toAmino(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _82.MsgSubmitProposalResponseAminoMsg): _82.MsgSubmitProposalResponse;
                toAminoMsg(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitProposalResponseProtoMsg): _82.MsgSubmitProposalResponse;
                toProto(message: _82.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _82.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgVote;
                fromPartial(object: Partial<_82.MsgVote>): _82.MsgVote;
                fromAmino(object: _82.MsgVoteAmino): _82.MsgVote;
                toAmino(message: _82.MsgVote): _82.MsgVoteAmino;
                fromAminoMsg(object: _82.MsgVoteAminoMsg): _82.MsgVote;
                toAminoMsg(message: _82.MsgVote): _82.MsgVoteAminoMsg;
                fromProtoMsg(message: _82.MsgVoteProtoMsg): _82.MsgVote;
                toProto(message: _82.MsgVote): Uint8Array;
                toProtoMsg(message: _82.MsgVote): _82.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _82.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgVoteResponse;
                fromPartial(_: Partial<_82.MsgVoteResponse>): _82.MsgVoteResponse;
                fromAmino(_: _82.MsgVoteResponseAmino): _82.MsgVoteResponse;
                toAmino(_: _82.MsgVoteResponse): _82.MsgVoteResponseAmino;
                fromAminoMsg(object: _82.MsgVoteResponseAminoMsg): _82.MsgVoteResponse;
                toAminoMsg(message: _82.MsgVoteResponse): _82.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _82.MsgVoteResponseProtoMsg): _82.MsgVoteResponse;
                toProto(message: _82.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _82.MsgVoteResponse): _82.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _82.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgVoteWeighted;
                fromPartial(object: Partial<_82.MsgVoteWeighted>): _82.MsgVoteWeighted;
                fromAmino(object: _82.MsgVoteWeightedAmino): _82.MsgVoteWeighted;
                toAmino(message: _82.MsgVoteWeighted): _82.MsgVoteWeightedAmino;
                fromAminoMsg(object: _82.MsgVoteWeightedAminoMsg): _82.MsgVoteWeighted;
                toAminoMsg(message: _82.MsgVoteWeighted): _82.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _82.MsgVoteWeightedProtoMsg): _82.MsgVoteWeighted;
                toProto(message: _82.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _82.MsgVoteWeighted): _82.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _82.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_82.MsgVoteWeightedResponse>): _82.MsgVoteWeightedResponse;
                fromAmino(_: _82.MsgVoteWeightedResponseAmino): _82.MsgVoteWeightedResponse;
                toAmino(_: _82.MsgVoteWeightedResponse): _82.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _82.MsgVoteWeightedResponseAminoMsg): _82.MsgVoteWeightedResponse;
                toAminoMsg(message: _82.MsgVoteWeightedResponse): _82.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _82.MsgVoteWeightedResponseProtoMsg): _82.MsgVoteWeightedResponse;
                toProto(message: _82.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _82.MsgVoteWeightedResponse): _82.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _82.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.MsgDeposit;
                fromPartial(object: Partial<_82.MsgDeposit>): _82.MsgDeposit;
                fromAmino(object: _82.MsgDepositAmino): _82.MsgDeposit;
                toAmino(message: _82.MsgDeposit): _82.MsgDepositAmino;
                fromAminoMsg(object: _82.MsgDepositAminoMsg): _82.MsgDeposit;
                toAminoMsg(message: _82.MsgDeposit): _82.MsgDepositAminoMsg;
                fromProtoMsg(message: _82.MsgDepositProtoMsg): _82.MsgDeposit;
                toProto(message: _82.MsgDeposit): Uint8Array;
                toProtoMsg(message: _82.MsgDeposit): _82.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _82.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _82.MsgDepositResponse;
                fromPartial(_: Partial<_82.MsgDepositResponse>): _82.MsgDepositResponse;
                fromAmino(_: _82.MsgDepositResponseAmino): _82.MsgDepositResponse;
                toAmino(_: _82.MsgDepositResponse): _82.MsgDepositResponseAmino;
                fromAminoMsg(object: _82.MsgDepositResponseAminoMsg): _82.MsgDepositResponse;
                toAminoMsg(message: _82.MsgDepositResponse): _82.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _82.MsgDepositResponseProtoMsg): _82.MsgDepositResponse;
                toProto(message: _82.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _82.MsgDepositResponse): _82.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _58.CommunityPoolSpendProposal | _58.CommunityPoolSpendProposalWithDeposit | _106.ParameterChangeProposal | _122.SoftwareUpgradeProposal | _122.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal_legacy").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal_legacy").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal_legacy").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal_legacy").StoreAndInstantiateContractProposal | _80.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _81.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryProposalRequest;
                fromPartial(object: Partial<_81.QueryProposalRequest>): _81.QueryProposalRequest;
                fromAmino(object: _81.QueryProposalRequestAmino): _81.QueryProposalRequest;
                toAmino(message: _81.QueryProposalRequest): _81.QueryProposalRequestAmino;
                fromAminoMsg(object: _81.QueryProposalRequestAminoMsg): _81.QueryProposalRequest;
                toAminoMsg(message: _81.QueryProposalRequest): _81.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _81.QueryProposalRequestProtoMsg): _81.QueryProposalRequest;
                toProto(message: _81.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _81.QueryProposalRequest): _81.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _81.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryProposalResponse;
                fromPartial(object: Partial<_81.QueryProposalResponse>): _81.QueryProposalResponse;
                fromAmino(object: _81.QueryProposalResponseAmino): _81.QueryProposalResponse;
                toAmino(message: _81.QueryProposalResponse): _81.QueryProposalResponseAmino;
                fromAminoMsg(object: _81.QueryProposalResponseAminoMsg): _81.QueryProposalResponse;
                toAminoMsg(message: _81.QueryProposalResponse): _81.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _81.QueryProposalResponseProtoMsg): _81.QueryProposalResponse;
                toProto(message: _81.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _81.QueryProposalResponse): _81.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _81.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryProposalsRequest;
                fromPartial(object: Partial<_81.QueryProposalsRequest>): _81.QueryProposalsRequest;
                fromAmino(object: _81.QueryProposalsRequestAmino): _81.QueryProposalsRequest;
                toAmino(message: _81.QueryProposalsRequest): _81.QueryProposalsRequestAmino;
                fromAminoMsg(object: _81.QueryProposalsRequestAminoMsg): _81.QueryProposalsRequest;
                toAminoMsg(message: _81.QueryProposalsRequest): _81.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryProposalsRequestProtoMsg): _81.QueryProposalsRequest;
                toProto(message: _81.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryProposalsRequest): _81.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _81.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryProposalsResponse;
                fromPartial(object: Partial<_81.QueryProposalsResponse>): _81.QueryProposalsResponse;
                fromAmino(object: _81.QueryProposalsResponseAmino): _81.QueryProposalsResponse;
                toAmino(message: _81.QueryProposalsResponse): _81.QueryProposalsResponseAmino;
                fromAminoMsg(object: _81.QueryProposalsResponseAminoMsg): _81.QueryProposalsResponse;
                toAminoMsg(message: _81.QueryProposalsResponse): _81.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryProposalsResponseProtoMsg): _81.QueryProposalsResponse;
                toProto(message: _81.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryProposalsResponse): _81.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _81.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryVoteRequest;
                fromPartial(object: Partial<_81.QueryVoteRequest>): _81.QueryVoteRequest;
                fromAmino(object: _81.QueryVoteRequestAmino): _81.QueryVoteRequest;
                toAmino(message: _81.QueryVoteRequest): _81.QueryVoteRequestAmino;
                fromAminoMsg(object: _81.QueryVoteRequestAminoMsg): _81.QueryVoteRequest;
                toAminoMsg(message: _81.QueryVoteRequest): _81.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVoteRequestProtoMsg): _81.QueryVoteRequest;
                toProto(message: _81.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVoteRequest): _81.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _81.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryVoteResponse;
                fromPartial(object: Partial<_81.QueryVoteResponse>): _81.QueryVoteResponse;
                fromAmino(object: _81.QueryVoteResponseAmino): _81.QueryVoteResponse;
                toAmino(message: _81.QueryVoteResponse): _81.QueryVoteResponseAmino;
                fromAminoMsg(object: _81.QueryVoteResponseAminoMsg): _81.QueryVoteResponse;
                toAminoMsg(message: _81.QueryVoteResponse): _81.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVoteResponseProtoMsg): _81.QueryVoteResponse;
                toProto(message: _81.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVoteResponse): _81.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _81.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryVotesRequest;
                fromPartial(object: Partial<_81.QueryVotesRequest>): _81.QueryVotesRequest;
                fromAmino(object: _81.QueryVotesRequestAmino): _81.QueryVotesRequest;
                toAmino(message: _81.QueryVotesRequest): _81.QueryVotesRequestAmino;
                fromAminoMsg(object: _81.QueryVotesRequestAminoMsg): _81.QueryVotesRequest;
                toAminoMsg(message: _81.QueryVotesRequest): _81.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVotesRequestProtoMsg): _81.QueryVotesRequest;
                toProto(message: _81.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVotesRequest): _81.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _81.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryVotesResponse;
                fromPartial(object: Partial<_81.QueryVotesResponse>): _81.QueryVotesResponse;
                fromAmino(object: _81.QueryVotesResponseAmino): _81.QueryVotesResponse;
                toAmino(message: _81.QueryVotesResponse): _81.QueryVotesResponseAmino;
                fromAminoMsg(object: _81.QueryVotesResponseAminoMsg): _81.QueryVotesResponse;
                toAminoMsg(message: _81.QueryVotesResponse): _81.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVotesResponseProtoMsg): _81.QueryVotesResponse;
                toProto(message: _81.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVotesResponse): _81.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _81.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryParamsRequest;
                fromPartial(object: Partial<_81.QueryParamsRequest>): _81.QueryParamsRequest;
                fromAmino(object: _81.QueryParamsRequestAmino): _81.QueryParamsRequest;
                toAmino(message: _81.QueryParamsRequest): _81.QueryParamsRequestAmino;
                fromAminoMsg(object: _81.QueryParamsRequestAminoMsg): _81.QueryParamsRequest;
                toAminoMsg(message: _81.QueryParamsRequest): _81.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryParamsRequestProtoMsg): _81.QueryParamsRequest;
                toProto(message: _81.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryParamsRequest): _81.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _81.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryParamsResponse;
                fromPartial(object: Partial<_81.QueryParamsResponse>): _81.QueryParamsResponse;
                fromAmino(object: _81.QueryParamsResponseAmino): _81.QueryParamsResponse;
                toAmino(message: _81.QueryParamsResponse): _81.QueryParamsResponseAmino;
                fromAminoMsg(object: _81.QueryParamsResponseAminoMsg): _81.QueryParamsResponse;
                toAminoMsg(message: _81.QueryParamsResponse): _81.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryParamsResponseProtoMsg): _81.QueryParamsResponse;
                toProto(message: _81.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryParamsResponse): _81.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _81.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDepositRequest;
                fromPartial(object: Partial<_81.QueryDepositRequest>): _81.QueryDepositRequest;
                fromAmino(object: _81.QueryDepositRequestAmino): _81.QueryDepositRequest;
                toAmino(message: _81.QueryDepositRequest): _81.QueryDepositRequestAmino;
                fromAminoMsg(object: _81.QueryDepositRequestAminoMsg): _81.QueryDepositRequest;
                toAminoMsg(message: _81.QueryDepositRequest): _81.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDepositRequestProtoMsg): _81.QueryDepositRequest;
                toProto(message: _81.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDepositRequest): _81.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _81.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDepositResponse;
                fromPartial(object: Partial<_81.QueryDepositResponse>): _81.QueryDepositResponse;
                fromAmino(object: _81.QueryDepositResponseAmino): _81.QueryDepositResponse;
                toAmino(message: _81.QueryDepositResponse): _81.QueryDepositResponseAmino;
                fromAminoMsg(object: _81.QueryDepositResponseAminoMsg): _81.QueryDepositResponse;
                toAminoMsg(message: _81.QueryDepositResponse): _81.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDepositResponseProtoMsg): _81.QueryDepositResponse;
                toProto(message: _81.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDepositResponse): _81.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _81.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDepositsRequest;
                fromPartial(object: Partial<_81.QueryDepositsRequest>): _81.QueryDepositsRequest;
                fromAmino(object: _81.QueryDepositsRequestAmino): _81.QueryDepositsRequest;
                toAmino(message: _81.QueryDepositsRequest): _81.QueryDepositsRequestAmino;
                fromAminoMsg(object: _81.QueryDepositsRequestAminoMsg): _81.QueryDepositsRequest;
                toAminoMsg(message: _81.QueryDepositsRequest): _81.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryDepositsRequestProtoMsg): _81.QueryDepositsRequest;
                toProto(message: _81.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDepositsRequest): _81.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _81.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryDepositsResponse;
                fromPartial(object: Partial<_81.QueryDepositsResponse>): _81.QueryDepositsResponse;
                fromAmino(object: _81.QueryDepositsResponseAmino): _81.QueryDepositsResponse;
                toAmino(message: _81.QueryDepositsResponse): _81.QueryDepositsResponseAmino;
                fromAminoMsg(object: _81.QueryDepositsResponseAminoMsg): _81.QueryDepositsResponse;
                toAminoMsg(message: _81.QueryDepositsResponse): _81.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryDepositsResponseProtoMsg): _81.QueryDepositsResponse;
                toProto(message: _81.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDepositsResponse): _81.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _81.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryTallyResultRequest;
                fromPartial(object: Partial<_81.QueryTallyResultRequest>): _81.QueryTallyResultRequest;
                fromAmino(object: _81.QueryTallyResultRequestAmino): _81.QueryTallyResultRequest;
                toAmino(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _81.QueryTallyResultRequestAminoMsg): _81.QueryTallyResultRequest;
                toAminoMsg(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _81.QueryTallyResultRequestProtoMsg): _81.QueryTallyResultRequest;
                toProto(message: _81.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _81.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.QueryTallyResultResponse;
                fromPartial(object: Partial<_81.QueryTallyResultResponse>): _81.QueryTallyResultResponse;
                fromAmino(object: _81.QueryTallyResultResponseAmino): _81.QueryTallyResultResponse;
                toAmino(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _81.QueryTallyResultResponseAminoMsg): _81.QueryTallyResultResponse;
                toAminoMsg(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _81.QueryTallyResultResponseProtoMsg): _81.QueryTallyResultResponse;
                toProto(message: _81.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _80.VoteOption;
            voteOptionToJSON(object: _80.VoteOption): string;
            proposalStatusFromJSON(object: any): _80.ProposalStatus;
            proposalStatusToJSON(object: _80.ProposalStatus): string;
            VoteOption: typeof _80.VoteOption;
            VoteOptionSDKType: typeof _80.VoteOption;
            VoteOptionAmino: typeof _80.VoteOption;
            ProposalStatus: typeof _80.ProposalStatus;
            ProposalStatusSDKType: typeof _80.ProposalStatus;
            ProposalStatusAmino: typeof _80.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _80.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.WeightedVoteOption;
                fromPartial(object: Partial<_80.WeightedVoteOption>): _80.WeightedVoteOption;
                fromAmino(object: _80.WeightedVoteOptionAmino): _80.WeightedVoteOption;
                toAmino(message: _80.WeightedVoteOption): _80.WeightedVoteOptionAmino;
                fromAminoMsg(object: _80.WeightedVoteOptionAminoMsg): _80.WeightedVoteOption;
                toAminoMsg(message: _80.WeightedVoteOption): _80.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _80.WeightedVoteOptionProtoMsg): _80.WeightedVoteOption;
                toProto(message: _80.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _80.WeightedVoteOption): _80.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _80.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.TextProposal;
                fromPartial(object: Partial<_80.TextProposal>): _80.TextProposal;
                fromAmino(object: _80.TextProposalAmino): _80.TextProposal;
                toAmino(message: _80.TextProposal): _80.TextProposalAmino;
                fromAminoMsg(object: _80.TextProposalAminoMsg): _80.TextProposal;
                toAminoMsg(message: _80.TextProposal): _80.TextProposalAminoMsg;
                fromProtoMsg(message: _80.TextProposalProtoMsg): _80.TextProposal;
                toProto(message: _80.TextProposal): Uint8Array;
                toProtoMsg(message: _80.TextProposal): _80.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _80.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Deposit;
                fromPartial(object: Partial<_80.Deposit>): _80.Deposit;
                fromAmino(object: _80.DepositAmino): _80.Deposit;
                toAmino(message: _80.Deposit): _80.DepositAmino;
                fromAminoMsg(object: _80.DepositAminoMsg): _80.Deposit;
                toAminoMsg(message: _80.Deposit): _80.DepositAminoMsg;
                fromProtoMsg(message: _80.DepositProtoMsg): _80.Deposit;
                toProto(message: _80.Deposit): Uint8Array;
                toProtoMsg(message: _80.Deposit): _80.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _80.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Proposal;
                fromPartial(object: Partial<_80.Proposal>): _80.Proposal;
                fromAmino(object: _80.ProposalAmino): _80.Proposal;
                toAmino(message: _80.Proposal): _80.ProposalAmino;
                fromAminoMsg(object: _80.ProposalAminoMsg): _80.Proposal;
                toAminoMsg(message: _80.Proposal): _80.ProposalAminoMsg;
                fromProtoMsg(message: _80.ProposalProtoMsg): _80.Proposal;
                toProto(message: _80.Proposal): Uint8Array;
                toProtoMsg(message: _80.Proposal): _80.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _80.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.TallyResult;
                fromPartial(object: Partial<_80.TallyResult>): _80.TallyResult;
                fromAmino(object: _80.TallyResultAmino): _80.TallyResult;
                toAmino(message: _80.TallyResult): _80.TallyResultAmino;
                fromAminoMsg(object: _80.TallyResultAminoMsg): _80.TallyResult;
                toAminoMsg(message: _80.TallyResult): _80.TallyResultAminoMsg;
                fromProtoMsg(message: _80.TallyResultProtoMsg): _80.TallyResult;
                toProto(message: _80.TallyResult): Uint8Array;
                toProtoMsg(message: _80.TallyResult): _80.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _80.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Vote;
                fromPartial(object: Partial<_80.Vote>): _80.Vote;
                fromAmino(object: _80.VoteAmino): _80.Vote;
                toAmino(message: _80.Vote): _80.VoteAmino;
                fromAminoMsg(object: _80.VoteAminoMsg): _80.Vote;
                toAminoMsg(message: _80.Vote): _80.VoteAminoMsg;
                fromProtoMsg(message: _80.VoteProtoMsg): _80.Vote;
                toProto(message: _80.Vote): Uint8Array;
                toProtoMsg(message: _80.Vote): _80.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _80.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.DepositParams;
                fromPartial(object: Partial<_80.DepositParams>): _80.DepositParams;
                fromAmino(object: _80.DepositParamsAmino): _80.DepositParams;
                toAmino(message: _80.DepositParams): _80.DepositParamsAmino;
                fromAminoMsg(object: _80.DepositParamsAminoMsg): _80.DepositParams;
                toAminoMsg(message: _80.DepositParams): _80.DepositParamsAminoMsg;
                fromProtoMsg(message: _80.DepositParamsProtoMsg): _80.DepositParams;
                toProto(message: _80.DepositParams): Uint8Array;
                toProtoMsg(message: _80.DepositParams): _80.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _80.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.VotingParams;
                fromPartial(object: Partial<_80.VotingParams>): _80.VotingParams;
                fromAmino(object: _80.VotingParamsAmino): _80.VotingParams;
                toAmino(message: _80.VotingParams): _80.VotingParamsAmino;
                fromAminoMsg(object: _80.VotingParamsAminoMsg): _80.VotingParams;
                toAminoMsg(message: _80.VotingParams): _80.VotingParamsAminoMsg;
                fromProtoMsg(message: _80.VotingParamsProtoMsg): _80.VotingParams;
                toProto(message: _80.VotingParams): Uint8Array;
                toProtoMsg(message: _80.VotingParams): _80.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _80.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.TallyParams;
                fromPartial(object: Partial<_80.TallyParams>): _80.TallyParams;
                fromAmino(object: _80.TallyParamsAmino): _80.TallyParams;
                toAmino(message: _80.TallyParams): _80.TallyParamsAmino;
                fromAminoMsg(object: _80.TallyParamsAminoMsg): _80.TallyParams;
                toAminoMsg(message: _80.TallyParams): _80.TallyParamsAminoMsg;
                fromProtoMsg(message: _80.TallyParamsProtoMsg): _80.TallyParams;
                toProto(message: _80.TallyParams): Uint8Array;
                toProtoMsg(message: _80.TallyParams): _80.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _79.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.GenesisState;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
                fromAmino(object: _79.GenesisStateAmino): _79.GenesisState;
                toAmino(message: _79.GenesisState): _79.GenesisStateAmino;
                fromAminoMsg(object: _79.GenesisStateAminoMsg): _79.GenesisState;
                toAminoMsg(message: _79.GenesisState): _79.GenesisStateAminoMsg;
                fromProtoMsg(message: _79.GenesisStateProtoMsg): _79.GenesisState;
                toProto(message: _79.GenesisState): Uint8Array;
                toProtoMsg(message: _79.GenesisState): _79.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _83.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _83.Module;
                    fromPartial(object: Partial<_83.Module>): _83.Module;
                    fromAmino(object: _83.ModuleAmino): _83.Module;
                    toAmino(message: _83.Module): _83.ModuleAmino;
                    fromAminoMsg(object: _83.ModuleAminoMsg): _83.Module;
                    toAminoMsg(message: _83.Module): _83.ModuleAminoMsg;
                    fromProtoMsg(message: _83.ModuleProtoMsg): _83.Module;
                    toProto(message: _83.Module): Uint8Array;
                    toProtoMsg(message: _83.Module): _83.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _86.QueryGroupInfoRequest): Promise<_86.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _86.QueryGroupPolicyInfoRequest): Promise<_86.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _86.QueryGroupMembersRequest): Promise<_86.QueryGroupMembersResponse>;
                groupsByAdmin(request: _86.QueryGroupsByAdminRequest): Promise<_86.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _86.QueryGroupPoliciesByGroupRequest): Promise<_86.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _86.QueryGroupPoliciesByAdminRequest): Promise<_86.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _86.QueryProposalRequest): Promise<_86.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _86.QueryProposalsByGroupPolicyRequest): Promise<_86.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _86.QueryVoteByProposalVoterRequest): Promise<_86.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _86.QueryVotesByProposalRequest): Promise<_86.QueryVotesByProposalResponse>;
                votesByVoter(request: _86.QueryVotesByVoterRequest): Promise<_86.QueryVotesByVoterResponse>;
                groupsByMember(request: _86.QueryGroupsByMemberRequest): Promise<_86.QueryGroupsByMemberResponse>;
                tallyResult(request: _86.QueryTallyResultRequest): Promise<_86.QueryTallyResultResponse>;
                groups(request?: _86.QueryGroupsRequest): Promise<_86.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _87.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _87.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _87.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _87.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _87.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _87.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _87.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _87.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _87.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _87.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _87.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _87.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _87.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _87.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _87.MsgCreateGroup): {
                        typeUrl: string;
                        value: _87.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _87.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _87.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _87.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _87.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _87.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _87.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _87.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _87.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _87.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _87.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _87.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _87.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _87.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _87.MsgWithdrawProposal;
                    };
                    vote(value: _87.MsgVote): {
                        typeUrl: string;
                        value: _87.MsgVote;
                    };
                    exec(value: _87.MsgExec): {
                        typeUrl: string;
                        value: _87.MsgExec;
                    };
                    leaveGroup(value: _87.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _87.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _87.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _87.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _87.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _87.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _87.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _87.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _87.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _87.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _87.MsgCreateGroup): {
                        typeUrl: string;
                        value: _87.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _87.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _87.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _87.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _87.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _87.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _87.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _87.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _87.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _87.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _87.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _87.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _87.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _87.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _87.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _87.MsgWithdrawProposal;
                    };
                    vote(value: _87.MsgVote): {
                        typeUrl: string;
                        value: _87.MsgVote;
                    };
                    exec(value: _87.MsgExec): {
                        typeUrl: string;
                        value: _87.MsgExec;
                    };
                    leaveGroup(value: _87.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _87.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCreateGroup) => _87.MsgCreateGroupAmino;
                    fromAmino: (object: _87.MsgCreateGroupAmino) => _87.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateGroupMembers) => _87.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _87.MsgUpdateGroupMembersAmino) => _87.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateGroupAdmin) => _87.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _87.MsgUpdateGroupAdminAmino) => _87.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateGroupMetadata) => _87.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _87.MsgUpdateGroupMetadataAmino) => _87.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCreateGroupPolicy) => _87.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _87.MsgCreateGroupPolicyAmino) => _87.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCreateGroupWithPolicy) => _87.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _87.MsgCreateGroupWithPolicyAmino) => _87.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateGroupPolicyAdmin) => _87.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _87.MsgUpdateGroupPolicyAdminAmino) => _87.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateGroupPolicyDecisionPolicy) => _87.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _87.MsgUpdateGroupPolicyDecisionPolicyAmino) => _87.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateGroupPolicyMetadata) => _87.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _87.MsgUpdateGroupPolicyMetadataAmino) => _87.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _87.MsgSubmitProposal) => _87.MsgSubmitProposalAmino;
                    fromAmino: (object: _87.MsgSubmitProposalAmino) => _87.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _87.MsgWithdrawProposal) => _87.MsgWithdrawProposalAmino;
                    fromAmino: (object: _87.MsgWithdrawProposalAmino) => _87.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _87.MsgVote) => _87.MsgVoteAmino;
                    fromAmino: (object: _87.MsgVoteAmino) => _87.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _87.MsgExec) => _87.MsgExecAmino;
                    fromAmino: (object: _87.MsgExecAmino) => _87.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _87.MsgLeaveGroup) => _87.MsgLeaveGroupAmino;
                    fromAmino: (object: _87.MsgLeaveGroupAmino) => _87.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _88.VoteOption;
            voteOptionToJSON(object: _88.VoteOption): string;
            proposalStatusFromJSON(object: any): _88.ProposalStatus;
            proposalStatusToJSON(object: _88.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _88.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _88.ProposalExecutorResult): string;
            VoteOption: typeof _88.VoteOption;
            VoteOptionSDKType: typeof _88.VoteOption;
            VoteOptionAmino: typeof _88.VoteOption;
            ProposalStatus: typeof _88.ProposalStatus;
            ProposalStatusSDKType: typeof _88.ProposalStatus;
            ProposalStatusAmino: typeof _88.ProposalStatus;
            ProposalExecutorResult: typeof _88.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _88.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _88.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _88.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Member;
                fromPartial(object: Partial<_88.Member>): _88.Member;
                fromAmino(object: _88.MemberAmino): _88.Member;
                toAmino(message: _88.Member): _88.MemberAmino;
                fromAminoMsg(object: _88.MemberAminoMsg): _88.Member;
                toAminoMsg(message: _88.Member): _88.MemberAminoMsg;
                fromProtoMsg(message: _88.MemberProtoMsg): _88.Member;
                toProto(message: _88.Member): Uint8Array;
                toProtoMsg(message: _88.Member): _88.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _88.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.MemberRequest;
                fromPartial(object: Partial<_88.MemberRequest>): _88.MemberRequest;
                fromAmino(object: _88.MemberRequestAmino): _88.MemberRequest;
                toAmino(message: _88.MemberRequest): _88.MemberRequestAmino;
                fromAminoMsg(object: _88.MemberRequestAminoMsg): _88.MemberRequest;
                toAminoMsg(message: _88.MemberRequest): _88.MemberRequestAminoMsg;
                fromProtoMsg(message: _88.MemberRequestProtoMsg): _88.MemberRequest;
                toProto(message: _88.MemberRequest): Uint8Array;
                toProtoMsg(message: _88.MemberRequest): _88.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _88.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_88.ThresholdDecisionPolicy>): _88.ThresholdDecisionPolicy;
                fromAmino(object: _88.ThresholdDecisionPolicyAmino): _88.ThresholdDecisionPolicy;
                toAmino(message: _88.ThresholdDecisionPolicy): _88.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _88.ThresholdDecisionPolicyAminoMsg): _88.ThresholdDecisionPolicy;
                toAminoMsg(message: _88.ThresholdDecisionPolicy): _88.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _88.ThresholdDecisionPolicyProtoMsg): _88.ThresholdDecisionPolicy;
                toProto(message: _88.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _88.ThresholdDecisionPolicy): _88.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _88.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.PercentageDecisionPolicy;
                fromPartial(object: Partial<_88.PercentageDecisionPolicy>): _88.PercentageDecisionPolicy;
                fromAmino(object: _88.PercentageDecisionPolicyAmino): _88.PercentageDecisionPolicy;
                toAmino(message: _88.PercentageDecisionPolicy): _88.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _88.PercentageDecisionPolicyAminoMsg): _88.PercentageDecisionPolicy;
                toAminoMsg(message: _88.PercentageDecisionPolicy): _88.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _88.PercentageDecisionPolicyProtoMsg): _88.PercentageDecisionPolicy;
                toProto(message: _88.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _88.PercentageDecisionPolicy): _88.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _88.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.DecisionPolicyWindows;
                fromPartial(object: Partial<_88.DecisionPolicyWindows>): _88.DecisionPolicyWindows;
                fromAmino(object: _88.DecisionPolicyWindowsAmino): _88.DecisionPolicyWindows;
                toAmino(message: _88.DecisionPolicyWindows): _88.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _88.DecisionPolicyWindowsAminoMsg): _88.DecisionPolicyWindows;
                toAminoMsg(message: _88.DecisionPolicyWindows): _88.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _88.DecisionPolicyWindowsProtoMsg): _88.DecisionPolicyWindows;
                toProto(message: _88.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _88.DecisionPolicyWindows): _88.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _88.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GroupInfo;
                fromPartial(object: Partial<_88.GroupInfo>): _88.GroupInfo;
                fromAmino(object: _88.GroupInfoAmino): _88.GroupInfo;
                toAmino(message: _88.GroupInfo): _88.GroupInfoAmino;
                fromAminoMsg(object: _88.GroupInfoAminoMsg): _88.GroupInfo;
                toAminoMsg(message: _88.GroupInfo): _88.GroupInfoAminoMsg;
                fromProtoMsg(message: _88.GroupInfoProtoMsg): _88.GroupInfo;
                toProto(message: _88.GroupInfo): Uint8Array;
                toProtoMsg(message: _88.GroupInfo): _88.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _88.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GroupMember;
                fromPartial(object: Partial<_88.GroupMember>): _88.GroupMember;
                fromAmino(object: _88.GroupMemberAmino): _88.GroupMember;
                toAmino(message: _88.GroupMember): _88.GroupMemberAmino;
                fromAminoMsg(object: _88.GroupMemberAminoMsg): _88.GroupMember;
                toAminoMsg(message: _88.GroupMember): _88.GroupMemberAminoMsg;
                fromProtoMsg(message: _88.GroupMemberProtoMsg): _88.GroupMember;
                toProto(message: _88.GroupMember): Uint8Array;
                toProtoMsg(message: _88.GroupMember): _88.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _88.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.GroupPolicyInfo;
                fromPartial(object: Partial<_88.GroupPolicyInfo>): _88.GroupPolicyInfo;
                fromAmino(object: _88.GroupPolicyInfoAmino): _88.GroupPolicyInfo;
                toAmino(message: _88.GroupPolicyInfo): _88.GroupPolicyInfoAmino;
                fromAminoMsg(object: _88.GroupPolicyInfoAminoMsg): _88.GroupPolicyInfo;
                toAminoMsg(message: _88.GroupPolicyInfo): _88.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _88.GroupPolicyInfoProtoMsg): _88.GroupPolicyInfo;
                toProto(message: _88.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _88.GroupPolicyInfo): _88.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _88.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Proposal;
                fromPartial(object: Partial<_88.Proposal>): _88.Proposal;
                fromAmino(object: _88.ProposalAmino): _88.Proposal;
                toAmino(message: _88.Proposal): _88.ProposalAmino;
                fromAminoMsg(object: _88.ProposalAminoMsg): _88.Proposal;
                toAminoMsg(message: _88.Proposal): _88.ProposalAminoMsg;
                fromProtoMsg(message: _88.ProposalProtoMsg): _88.Proposal;
                toProto(message: _88.Proposal): Uint8Array;
                toProtoMsg(message: _88.Proposal): _88.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _88.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.TallyResult;
                fromPartial(object: Partial<_88.TallyResult>): _88.TallyResult;
                fromAmino(object: _88.TallyResultAmino): _88.TallyResult;
                toAmino(message: _88.TallyResult): _88.TallyResultAmino;
                fromAminoMsg(object: _88.TallyResultAminoMsg): _88.TallyResult;
                toAminoMsg(message: _88.TallyResult): _88.TallyResultAminoMsg;
                fromProtoMsg(message: _88.TallyResultProtoMsg): _88.TallyResult;
                toProto(message: _88.TallyResult): Uint8Array;
                toProtoMsg(message: _88.TallyResult): _88.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _88.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Vote;
                fromPartial(object: Partial<_88.Vote>): _88.Vote;
                fromAmino(object: _88.VoteAmino): _88.Vote;
                toAmino(message: _88.Vote): _88.VoteAmino;
                fromAminoMsg(object: _88.VoteAminoMsg): _88.Vote;
                toAminoMsg(message: _88.Vote): _88.VoteAminoMsg;
                fromProtoMsg(message: _88.VoteProtoMsg): _88.Vote;
                toProto(message: _88.Vote): Uint8Array;
                toProtoMsg(message: _88.Vote): _88.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _88.ThresholdDecisionPolicy | _88.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _87.Exec;
            execToJSON(object: _87.Exec): string;
            Exec: typeof _87.Exec;
            ExecSDKType: typeof _87.Exec;
            ExecAmino: typeof _87.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _87.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgCreateGroup;
                fromPartial(object: Partial<_87.MsgCreateGroup>): _87.MsgCreateGroup;
                fromAmino(object: _87.MsgCreateGroupAmino): _87.MsgCreateGroup;
                toAmino(message: _87.MsgCreateGroup): _87.MsgCreateGroupAmino;
                fromAminoMsg(object: _87.MsgCreateGroupAminoMsg): _87.MsgCreateGroup;
                toAminoMsg(message: _87.MsgCreateGroup): _87.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _87.MsgCreateGroupProtoMsg): _87.MsgCreateGroup;
                toProto(message: _87.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _87.MsgCreateGroup): _87.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _87.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgCreateGroupResponse;
                fromPartial(object: Partial<_87.MsgCreateGroupResponse>): _87.MsgCreateGroupResponse;
                fromAmino(object: _87.MsgCreateGroupResponseAmino): _87.MsgCreateGroupResponse;
                toAmino(message: _87.MsgCreateGroupResponse): _87.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _87.MsgCreateGroupResponseAminoMsg): _87.MsgCreateGroupResponse;
                toAminoMsg(message: _87.MsgCreateGroupResponse): _87.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _87.MsgCreateGroupResponseProtoMsg): _87.MsgCreateGroupResponse;
                toProto(message: _87.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCreateGroupResponse): _87.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _87.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_87.MsgUpdateGroupMembers>): _87.MsgUpdateGroupMembers;
                fromAmino(object: _87.MsgUpdateGroupMembersAmino): _87.MsgUpdateGroupMembers;
                toAmino(message: _87.MsgUpdateGroupMembers): _87.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupMembersAminoMsg): _87.MsgUpdateGroupMembers;
                toAminoMsg(message: _87.MsgUpdateGroupMembers): _87.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupMembersProtoMsg): _87.MsgUpdateGroupMembers;
                toProto(message: _87.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupMembers): _87.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_87.MsgUpdateGroupMembersResponse>): _87.MsgUpdateGroupMembersResponse;
                fromAmino(_: _87.MsgUpdateGroupMembersResponseAmino): _87.MsgUpdateGroupMembersResponse;
                toAmino(_: _87.MsgUpdateGroupMembersResponse): _87.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupMembersResponseAminoMsg): _87.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _87.MsgUpdateGroupMembersResponse): _87.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupMembersResponseProtoMsg): _87.MsgUpdateGroupMembersResponse;
                toProto(message: _87.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupMembersResponse): _87.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _87.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_87.MsgUpdateGroupAdmin>): _87.MsgUpdateGroupAdmin;
                fromAmino(object: _87.MsgUpdateGroupAdminAmino): _87.MsgUpdateGroupAdmin;
                toAmino(message: _87.MsgUpdateGroupAdmin): _87.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupAdminAminoMsg): _87.MsgUpdateGroupAdmin;
                toAminoMsg(message: _87.MsgUpdateGroupAdmin): _87.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupAdminProtoMsg): _87.MsgUpdateGroupAdmin;
                toProto(message: _87.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupAdmin): _87.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_87.MsgUpdateGroupAdminResponse>): _87.MsgUpdateGroupAdminResponse;
                fromAmino(_: _87.MsgUpdateGroupAdminResponseAmino): _87.MsgUpdateGroupAdminResponse;
                toAmino(_: _87.MsgUpdateGroupAdminResponse): _87.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupAdminResponseAminoMsg): _87.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _87.MsgUpdateGroupAdminResponse): _87.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupAdminResponseProtoMsg): _87.MsgUpdateGroupAdminResponse;
                toProto(message: _87.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupAdminResponse): _87.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _87.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_87.MsgUpdateGroupMetadata>): _87.MsgUpdateGroupMetadata;
                fromAmino(object: _87.MsgUpdateGroupMetadataAmino): _87.MsgUpdateGroupMetadata;
                toAmino(message: _87.MsgUpdateGroupMetadata): _87.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupMetadataAminoMsg): _87.MsgUpdateGroupMetadata;
                toAminoMsg(message: _87.MsgUpdateGroupMetadata): _87.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupMetadataProtoMsg): _87.MsgUpdateGroupMetadata;
                toProto(message: _87.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupMetadata): _87.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_87.MsgUpdateGroupMetadataResponse>): _87.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _87.MsgUpdateGroupMetadataResponseAmino): _87.MsgUpdateGroupMetadataResponse;
                toAmino(_: _87.MsgUpdateGroupMetadataResponse): _87.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupMetadataResponseAminoMsg): _87.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _87.MsgUpdateGroupMetadataResponse): _87.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupMetadataResponseProtoMsg): _87.MsgUpdateGroupMetadataResponse;
                toProto(message: _87.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupMetadataResponse): _87.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _87.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_87.MsgCreateGroupPolicy>): _87.MsgCreateGroupPolicy;
                fromAmino(object: _87.MsgCreateGroupPolicyAmino): _87.MsgCreateGroupPolicy;
                toAmino(message: _87.MsgCreateGroupPolicy): _87.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _87.MsgCreateGroupPolicyAminoMsg): _87.MsgCreateGroupPolicy;
                toAminoMsg(message: _87.MsgCreateGroupPolicy): _87.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _87.MsgCreateGroupPolicyProtoMsg): _87.MsgCreateGroupPolicy;
                toProto(message: _87.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _87.MsgCreateGroupPolicy): _87.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _87.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_87.MsgCreateGroupPolicyResponse>): _87.MsgCreateGroupPolicyResponse;
                fromAmino(object: _87.MsgCreateGroupPolicyResponseAmino): _87.MsgCreateGroupPolicyResponse;
                toAmino(message: _87.MsgCreateGroupPolicyResponse): _87.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _87.MsgCreateGroupPolicyResponseAminoMsg): _87.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _87.MsgCreateGroupPolicyResponse): _87.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _87.MsgCreateGroupPolicyResponseProtoMsg): _87.MsgCreateGroupPolicyResponse;
                toProto(message: _87.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCreateGroupPolicyResponse): _87.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _87.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_87.MsgUpdateGroupPolicyAdmin>): _87.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _87.MsgUpdateGroupPolicyAdminAmino): _87.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _87.MsgUpdateGroupPolicyAdmin): _87.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupPolicyAdminAminoMsg): _87.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _87.MsgUpdateGroupPolicyAdmin): _87.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupPolicyAdminProtoMsg): _87.MsgUpdateGroupPolicyAdmin;
                toProto(message: _87.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupPolicyAdmin): _87.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_87.MsgUpdateGroupPolicyAdminResponse>): _87.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _87.MsgUpdateGroupPolicyAdminResponseAmino): _87.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _87.MsgUpdateGroupPolicyAdminResponse): _87.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupPolicyAdminResponseAminoMsg): _87.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _87.MsgUpdateGroupPolicyAdminResponse): _87.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupPolicyAdminResponseProtoMsg): _87.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _87.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupPolicyAdminResponse): _87.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _87.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_87.MsgCreateGroupWithPolicy>): _87.MsgCreateGroupWithPolicy;
                fromAmino(object: _87.MsgCreateGroupWithPolicyAmino): _87.MsgCreateGroupWithPolicy;
                toAmino(message: _87.MsgCreateGroupWithPolicy): _87.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _87.MsgCreateGroupWithPolicyAminoMsg): _87.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _87.MsgCreateGroupWithPolicy): _87.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _87.MsgCreateGroupWithPolicyProtoMsg): _87.MsgCreateGroupWithPolicy;
                toProto(message: _87.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _87.MsgCreateGroupWithPolicy): _87.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _87.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_87.MsgCreateGroupWithPolicyResponse>): _87.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _87.MsgCreateGroupWithPolicyResponseAmino): _87.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _87.MsgCreateGroupWithPolicyResponse): _87.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _87.MsgCreateGroupWithPolicyResponseAminoMsg): _87.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _87.MsgCreateGroupWithPolicyResponse): _87.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _87.MsgCreateGroupWithPolicyResponseProtoMsg): _87.MsgCreateGroupWithPolicyResponse;
                toProto(message: _87.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCreateGroupWithPolicyResponse): _87.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _87.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_87.MsgUpdateGroupPolicyDecisionPolicy>): _87.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _87.MsgUpdateGroupPolicyDecisionPolicyAmino): _87.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _87.MsgUpdateGroupPolicyDecisionPolicy): _87.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _87.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _87.MsgUpdateGroupPolicyDecisionPolicy): _87.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _87.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _87.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupPolicyDecisionPolicy): _87.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_87.MsgUpdateGroupPolicyDecisionPolicyResponse>): _87.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _87.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _87.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _87.MsgUpdateGroupPolicyDecisionPolicyResponse): _87.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _87.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _87.MsgUpdateGroupPolicyDecisionPolicyResponse): _87.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _87.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _87.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupPolicyDecisionPolicyResponse): _87.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _87.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_87.MsgUpdateGroupPolicyMetadata>): _87.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _87.MsgUpdateGroupPolicyMetadataAmino): _87.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _87.MsgUpdateGroupPolicyMetadata): _87.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupPolicyMetadataAminoMsg): _87.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _87.MsgUpdateGroupPolicyMetadata): _87.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupPolicyMetadataProtoMsg): _87.MsgUpdateGroupPolicyMetadata;
                toProto(message: _87.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupPolicyMetadata): _87.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_87.MsgUpdateGroupPolicyMetadataResponse>): _87.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _87.MsgUpdateGroupPolicyMetadataResponseAmino): _87.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _87.MsgUpdateGroupPolicyMetadataResponse): _87.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _87.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _87.MsgUpdateGroupPolicyMetadataResponse): _87.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _87.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _87.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateGroupPolicyMetadataResponse): _87.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _87.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgSubmitProposal;
                fromPartial(object: Partial<_87.MsgSubmitProposal>): _87.MsgSubmitProposal;
                fromAmino(object: _87.MsgSubmitProposalAmino): _87.MsgSubmitProposal;
                toAmino(message: _87.MsgSubmitProposal): _87.MsgSubmitProposalAmino;
                fromAminoMsg(object: _87.MsgSubmitProposalAminoMsg): _87.MsgSubmitProposal;
                toAminoMsg(message: _87.MsgSubmitProposal): _87.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _87.MsgSubmitProposalProtoMsg): _87.MsgSubmitProposal;
                toProto(message: _87.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _87.MsgSubmitProposal): _87.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _87.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_87.MsgSubmitProposalResponse>): _87.MsgSubmitProposalResponse;
                fromAmino(object: _87.MsgSubmitProposalResponseAmino): _87.MsgSubmitProposalResponse;
                toAmino(message: _87.MsgSubmitProposalResponse): _87.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _87.MsgSubmitProposalResponseAminoMsg): _87.MsgSubmitProposalResponse;
                toAminoMsg(message: _87.MsgSubmitProposalResponse): _87.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _87.MsgSubmitProposalResponseProtoMsg): _87.MsgSubmitProposalResponse;
                toProto(message: _87.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _87.MsgSubmitProposalResponse): _87.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _87.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgWithdrawProposal;
                fromPartial(object: Partial<_87.MsgWithdrawProposal>): _87.MsgWithdrawProposal;
                fromAmino(object: _87.MsgWithdrawProposalAmino): _87.MsgWithdrawProposal;
                toAmino(message: _87.MsgWithdrawProposal): _87.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _87.MsgWithdrawProposalAminoMsg): _87.MsgWithdrawProposal;
                toAminoMsg(message: _87.MsgWithdrawProposal): _87.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawProposalProtoMsg): _87.MsgWithdrawProposal;
                toProto(message: _87.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawProposal): _87.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _87.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_87.MsgWithdrawProposalResponse>): _87.MsgWithdrawProposalResponse;
                fromAmino(_: _87.MsgWithdrawProposalResponseAmino): _87.MsgWithdrawProposalResponse;
                toAmino(_: _87.MsgWithdrawProposalResponse): _87.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _87.MsgWithdrawProposalResponseAminoMsg): _87.MsgWithdrawProposalResponse;
                toAminoMsg(message: _87.MsgWithdrawProposalResponse): _87.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawProposalResponseProtoMsg): _87.MsgWithdrawProposalResponse;
                toProto(message: _87.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawProposalResponse): _87.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _87.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgVote;
                fromPartial(object: Partial<_87.MsgVote>): _87.MsgVote;
                fromAmino(object: _87.MsgVoteAmino): _87.MsgVote;
                toAmino(message: _87.MsgVote): _87.MsgVoteAmino;
                fromAminoMsg(object: _87.MsgVoteAminoMsg): _87.MsgVote;
                toAminoMsg(message: _87.MsgVote): _87.MsgVoteAminoMsg;
                fromProtoMsg(message: _87.MsgVoteProtoMsg): _87.MsgVote;
                toProto(message: _87.MsgVote): Uint8Array;
                toProtoMsg(message: _87.MsgVote): _87.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _87.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgVoteResponse;
                fromPartial(_: Partial<_87.MsgVoteResponse>): _87.MsgVoteResponse;
                fromAmino(_: _87.MsgVoteResponseAmino): _87.MsgVoteResponse;
                toAmino(_: _87.MsgVoteResponse): _87.MsgVoteResponseAmino;
                fromAminoMsg(object: _87.MsgVoteResponseAminoMsg): _87.MsgVoteResponse;
                toAminoMsg(message: _87.MsgVoteResponse): _87.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _87.MsgVoteResponseProtoMsg): _87.MsgVoteResponse;
                toProto(message: _87.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _87.MsgVoteResponse): _87.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _87.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgExec;
                fromPartial(object: Partial<_87.MsgExec>): _87.MsgExec;
                fromAmino(object: _87.MsgExecAmino): _87.MsgExec;
                toAmino(message: _87.MsgExec): _87.MsgExecAmino;
                fromAminoMsg(object: _87.MsgExecAminoMsg): _87.MsgExec;
                toAminoMsg(message: _87.MsgExec): _87.MsgExecAminoMsg;
                fromProtoMsg(message: _87.MsgExecProtoMsg): _87.MsgExec;
                toProto(message: _87.MsgExec): Uint8Array;
                toProtoMsg(message: _87.MsgExec): _87.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _87.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgExecResponse;
                fromPartial(object: Partial<_87.MsgExecResponse>): _87.MsgExecResponse;
                fromAmino(object: _87.MsgExecResponseAmino): _87.MsgExecResponse;
                toAmino(message: _87.MsgExecResponse): _87.MsgExecResponseAmino;
                fromAminoMsg(object: _87.MsgExecResponseAminoMsg): _87.MsgExecResponse;
                toAminoMsg(message: _87.MsgExecResponse): _87.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _87.MsgExecResponseProtoMsg): _87.MsgExecResponse;
                toProto(message: _87.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _87.MsgExecResponse): _87.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _87.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.MsgLeaveGroup;
                fromPartial(object: Partial<_87.MsgLeaveGroup>): _87.MsgLeaveGroup;
                fromAmino(object: _87.MsgLeaveGroupAmino): _87.MsgLeaveGroup;
                toAmino(message: _87.MsgLeaveGroup): _87.MsgLeaveGroupAmino;
                fromAminoMsg(object: _87.MsgLeaveGroupAminoMsg): _87.MsgLeaveGroup;
                toAminoMsg(message: _87.MsgLeaveGroup): _87.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _87.MsgLeaveGroupProtoMsg): _87.MsgLeaveGroup;
                toProto(message: _87.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _87.MsgLeaveGroup): _87.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _87.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_87.MsgLeaveGroupResponse>): _87.MsgLeaveGroupResponse;
                fromAmino(_: _87.MsgLeaveGroupResponseAmino): _87.MsgLeaveGroupResponse;
                toAmino(_: _87.MsgLeaveGroupResponse): _87.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _87.MsgLeaveGroupResponseAminoMsg): _87.MsgLeaveGroupResponse;
                toAminoMsg(message: _87.MsgLeaveGroupResponse): _87.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _87.MsgLeaveGroupResponseProtoMsg): _87.MsgLeaveGroupResponse;
                toProto(message: _87.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _87.MsgLeaveGroupResponse): _87.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _86.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupInfoRequest;
                fromPartial(object: Partial<_86.QueryGroupInfoRequest>): _86.QueryGroupInfoRequest;
                fromAmino(object: _86.QueryGroupInfoRequestAmino): _86.QueryGroupInfoRequest;
                toAmino(message: _86.QueryGroupInfoRequest): _86.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _86.QueryGroupInfoRequestAminoMsg): _86.QueryGroupInfoRequest;
                toAminoMsg(message: _86.QueryGroupInfoRequest): _86.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _86.QueryGroupInfoRequestProtoMsg): _86.QueryGroupInfoRequest;
                toProto(message: _86.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGroupInfoRequest): _86.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _86.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupInfoResponse;
                fromPartial(object: Partial<_86.QueryGroupInfoResponse>): _86.QueryGroupInfoResponse;
                fromAmino(object: _86.QueryGroupInfoResponseAmino): _86.QueryGroupInfoResponse;
                toAmino(message: _86.QueryGroupInfoResponse): _86.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _86.QueryGroupInfoResponseAminoMsg): _86.QueryGroupInfoResponse;
                toAminoMsg(message: _86.QueryGroupInfoResponse): _86.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _86.QueryGroupInfoResponseProtoMsg): _86.QueryGroupInfoResponse;
                toProto(message: _86.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGroupInfoResponse): _86.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _86.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_86.QueryGroupPolicyInfoRequest>): _86.QueryGroupPolicyInfoRequest;
                fromAmino(object: _86.QueryGroupPolicyInfoRequestAmino): _86.QueryGroupPolicyInfoRequest;
                toAmino(message: _86.QueryGroupPolicyInfoRequest): _86.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _86.QueryGroupPolicyInfoRequestAminoMsg): _86.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _86.QueryGroupPolicyInfoRequest): _86.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _86.QueryGroupPolicyInfoRequestProtoMsg): _86.QueryGroupPolicyInfoRequest;
                toProto(message: _86.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGroupPolicyInfoRequest): _86.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _86.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_86.QueryGroupPolicyInfoResponse>): _86.QueryGroupPolicyInfoResponse;
                fromAmino(object: _86.QueryGroupPolicyInfoResponseAmino): _86.QueryGroupPolicyInfoResponse;
                toAmino(message: _86.QueryGroupPolicyInfoResponse): _86.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _86.QueryGroupPolicyInfoResponseAminoMsg): _86.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _86.QueryGroupPolicyInfoResponse): _86.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _86.QueryGroupPolicyInfoResponseProtoMsg): _86.QueryGroupPolicyInfoResponse;
                toProto(message: _86.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGroupPolicyInfoResponse): _86.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _86.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupMembersRequest;
                fromPartial(object: Partial<_86.QueryGroupMembersRequest>): _86.QueryGroupMembersRequest;
                fromAmino(object: _86.QueryGroupMembersRequestAmino): _86.QueryGroupMembersRequest;
                toAmino(message: _86.QueryGroupMembersRequest): _86.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _86.QueryGroupMembersRequestAminoMsg): _86.QueryGroupMembersRequest;
                toAminoMsg(message: _86.QueryGroupMembersRequest): _86.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _86.QueryGroupMembersRequestProtoMsg): _86.QueryGroupMembersRequest;
                toProto(message: _86.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGroupMembersRequest): _86.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _86.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupMembersResponse;
                fromPartial(object: Partial<_86.QueryGroupMembersResponse>): _86.QueryGroupMembersResponse;
                fromAmino(object: _86.QueryGroupMembersResponseAmino): _86.QueryGroupMembersResponse;
                toAmino(message: _86.QueryGroupMembersResponse): _86.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _86.QueryGroupMembersResponseAminoMsg): _86.QueryGroupMembersResponse;
                toAminoMsg(message: _86.QueryGroupMembersResponse): _86.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _86.QueryGroupMembersResponseProtoMsg): _86.QueryGroupMembersResponse;
                toProto(message: _86.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGroupMembersResponse): _86.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _86.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_86.QueryGroupsByAdminRequest>): _86.QueryGroupsByAdminRequest;
                fromAmino(object: _86.QueryGroupsByAdminRequestAmino): _86.QueryGroupsByAdminRequest;
                toAmino(message: _86.QueryGroupsByAdminRequest): _86.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _86.QueryGroupsByAdminRequestAminoMsg): _86.QueryGroupsByAdminRequest;
                toAminoMsg(message: _86.QueryGroupsByAdminRequest): _86.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _86.QueryGroupsByAdminRequestProtoMsg): _86.QueryGroupsByAdminRequest;
                toProto(message: _86.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGroupsByAdminRequest): _86.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _86.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_86.QueryGroupsByAdminResponse>): _86.QueryGroupsByAdminResponse;
                fromAmino(object: _86.QueryGroupsByAdminResponseAmino): _86.QueryGroupsByAdminResponse;
                toAmino(message: _86.QueryGroupsByAdminResponse): _86.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _86.QueryGroupsByAdminResponseAminoMsg): _86.QueryGroupsByAdminResponse;
                toAminoMsg(message: _86.QueryGroupsByAdminResponse): _86.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _86.QueryGroupsByAdminResponseProtoMsg): _86.QueryGroupsByAdminResponse;
                toProto(message: _86.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGroupsByAdminResponse): _86.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _86.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_86.QueryGroupPoliciesByGroupRequest>): _86.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _86.QueryGroupPoliciesByGroupRequestAmino): _86.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _86.QueryGroupPoliciesByGroupRequest): _86.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _86.QueryGroupPoliciesByGroupRequestAminoMsg): _86.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _86.QueryGroupPoliciesByGroupRequest): _86.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _86.QueryGroupPoliciesByGroupRequestProtoMsg): _86.QueryGroupPoliciesByGroupRequest;
                toProto(message: _86.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGroupPoliciesByGroupRequest): _86.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _86.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_86.QueryGroupPoliciesByGroupResponse>): _86.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _86.QueryGroupPoliciesByGroupResponseAmino): _86.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _86.QueryGroupPoliciesByGroupResponse): _86.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _86.QueryGroupPoliciesByGroupResponseAminoMsg): _86.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _86.QueryGroupPoliciesByGroupResponse): _86.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _86.QueryGroupPoliciesByGroupResponseProtoMsg): _86.QueryGroupPoliciesByGroupResponse;
                toProto(message: _86.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGroupPoliciesByGroupResponse): _86.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _86.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_86.QueryGroupPoliciesByAdminRequest>): _86.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _86.QueryGroupPoliciesByAdminRequestAmino): _86.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _86.QueryGroupPoliciesByAdminRequest): _86.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _86.QueryGroupPoliciesByAdminRequestAminoMsg): _86.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _86.QueryGroupPoliciesByAdminRequest): _86.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _86.QueryGroupPoliciesByAdminRequestProtoMsg): _86.QueryGroupPoliciesByAdminRequest;
                toProto(message: _86.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGroupPoliciesByAdminRequest): _86.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _86.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_86.QueryGroupPoliciesByAdminResponse>): _86.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _86.QueryGroupPoliciesByAdminResponseAmino): _86.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _86.QueryGroupPoliciesByAdminResponse): _86.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _86.QueryGroupPoliciesByAdminResponseAminoMsg): _86.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _86.QueryGroupPoliciesByAdminResponse): _86.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _86.QueryGroupPoliciesByAdminResponseProtoMsg): _86.QueryGroupPoliciesByAdminResponse;
                toProto(message: _86.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGroupPoliciesByAdminResponse): _86.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _86.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryProposalRequest;
                fromPartial(object: Partial<_86.QueryProposalRequest>): _86.QueryProposalRequest;
                fromAmino(object: _86.QueryProposalRequestAmino): _86.QueryProposalRequest;
                toAmino(message: _86.QueryProposalRequest): _86.QueryProposalRequestAmino;
                fromAminoMsg(object: _86.QueryProposalRequestAminoMsg): _86.QueryProposalRequest;
                toAminoMsg(message: _86.QueryProposalRequest): _86.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _86.QueryProposalRequestProtoMsg): _86.QueryProposalRequest;
                toProto(message: _86.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _86.QueryProposalRequest): _86.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _86.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryProposalResponse;
                fromPartial(object: Partial<_86.QueryProposalResponse>): _86.QueryProposalResponse;
                fromAmino(object: _86.QueryProposalResponseAmino): _86.QueryProposalResponse;
                toAmino(message: _86.QueryProposalResponse): _86.QueryProposalResponseAmino;
                fromAminoMsg(object: _86.QueryProposalResponseAminoMsg): _86.QueryProposalResponse;
                toAminoMsg(message: _86.QueryProposalResponse): _86.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _86.QueryProposalResponseProtoMsg): _86.QueryProposalResponse;
                toProto(message: _86.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _86.QueryProposalResponse): _86.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _86.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_86.QueryProposalsByGroupPolicyRequest>): _86.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _86.QueryProposalsByGroupPolicyRequestAmino): _86.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _86.QueryProposalsByGroupPolicyRequest): _86.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _86.QueryProposalsByGroupPolicyRequestAminoMsg): _86.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _86.QueryProposalsByGroupPolicyRequest): _86.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _86.QueryProposalsByGroupPolicyRequestProtoMsg): _86.QueryProposalsByGroupPolicyRequest;
                toProto(message: _86.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _86.QueryProposalsByGroupPolicyRequest): _86.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _86.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_86.QueryProposalsByGroupPolicyResponse>): _86.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _86.QueryProposalsByGroupPolicyResponseAmino): _86.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _86.QueryProposalsByGroupPolicyResponse): _86.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _86.QueryProposalsByGroupPolicyResponseAminoMsg): _86.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _86.QueryProposalsByGroupPolicyResponse): _86.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _86.QueryProposalsByGroupPolicyResponseProtoMsg): _86.QueryProposalsByGroupPolicyResponse;
                toProto(message: _86.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _86.QueryProposalsByGroupPolicyResponse): _86.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _86.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_86.QueryVoteByProposalVoterRequest>): _86.QueryVoteByProposalVoterRequest;
                fromAmino(object: _86.QueryVoteByProposalVoterRequestAmino): _86.QueryVoteByProposalVoterRequest;
                toAmino(message: _86.QueryVoteByProposalVoterRequest): _86.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _86.QueryVoteByProposalVoterRequestAminoMsg): _86.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _86.QueryVoteByProposalVoterRequest): _86.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _86.QueryVoteByProposalVoterRequestProtoMsg): _86.QueryVoteByProposalVoterRequest;
                toProto(message: _86.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _86.QueryVoteByProposalVoterRequest): _86.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _86.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_86.QueryVoteByProposalVoterResponse>): _86.QueryVoteByProposalVoterResponse;
                fromAmino(object: _86.QueryVoteByProposalVoterResponseAmino): _86.QueryVoteByProposalVoterResponse;
                toAmino(message: _86.QueryVoteByProposalVoterResponse): _86.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _86.QueryVoteByProposalVoterResponseAminoMsg): _86.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _86.QueryVoteByProposalVoterResponse): _86.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _86.QueryVoteByProposalVoterResponseProtoMsg): _86.QueryVoteByProposalVoterResponse;
                toProto(message: _86.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _86.QueryVoteByProposalVoterResponse): _86.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _86.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_86.QueryVotesByProposalRequest>): _86.QueryVotesByProposalRequest;
                fromAmino(object: _86.QueryVotesByProposalRequestAmino): _86.QueryVotesByProposalRequest;
                toAmino(message: _86.QueryVotesByProposalRequest): _86.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _86.QueryVotesByProposalRequestAminoMsg): _86.QueryVotesByProposalRequest;
                toAminoMsg(message: _86.QueryVotesByProposalRequest): _86.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _86.QueryVotesByProposalRequestProtoMsg): _86.QueryVotesByProposalRequest;
                toProto(message: _86.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _86.QueryVotesByProposalRequest): _86.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _86.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_86.QueryVotesByProposalResponse>): _86.QueryVotesByProposalResponse;
                fromAmino(object: _86.QueryVotesByProposalResponseAmino): _86.QueryVotesByProposalResponse;
                toAmino(message: _86.QueryVotesByProposalResponse): _86.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _86.QueryVotesByProposalResponseAminoMsg): _86.QueryVotesByProposalResponse;
                toAminoMsg(message: _86.QueryVotesByProposalResponse): _86.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _86.QueryVotesByProposalResponseProtoMsg): _86.QueryVotesByProposalResponse;
                toProto(message: _86.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _86.QueryVotesByProposalResponse): _86.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _86.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_86.QueryVotesByVoterRequest>): _86.QueryVotesByVoterRequest;
                fromAmino(object: _86.QueryVotesByVoterRequestAmino): _86.QueryVotesByVoterRequest;
                toAmino(message: _86.QueryVotesByVoterRequest): _86.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _86.QueryVotesByVoterRequestAminoMsg): _86.QueryVotesByVoterRequest;
                toAminoMsg(message: _86.QueryVotesByVoterRequest): _86.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _86.QueryVotesByVoterRequestProtoMsg): _86.QueryVotesByVoterRequest;
                toProto(message: _86.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _86.QueryVotesByVoterRequest): _86.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _86.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_86.QueryVotesByVoterResponse>): _86.QueryVotesByVoterResponse;
                fromAmino(object: _86.QueryVotesByVoterResponseAmino): _86.QueryVotesByVoterResponse;
                toAmino(message: _86.QueryVotesByVoterResponse): _86.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _86.QueryVotesByVoterResponseAminoMsg): _86.QueryVotesByVoterResponse;
                toAminoMsg(message: _86.QueryVotesByVoterResponse): _86.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _86.QueryVotesByVoterResponseProtoMsg): _86.QueryVotesByVoterResponse;
                toProto(message: _86.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _86.QueryVotesByVoterResponse): _86.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _86.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_86.QueryGroupsByMemberRequest>): _86.QueryGroupsByMemberRequest;
                fromAmino(object: _86.QueryGroupsByMemberRequestAmino): _86.QueryGroupsByMemberRequest;
                toAmino(message: _86.QueryGroupsByMemberRequest): _86.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _86.QueryGroupsByMemberRequestAminoMsg): _86.QueryGroupsByMemberRequest;
                toAminoMsg(message: _86.QueryGroupsByMemberRequest): _86.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _86.QueryGroupsByMemberRequestProtoMsg): _86.QueryGroupsByMemberRequest;
                toProto(message: _86.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGroupsByMemberRequest): _86.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _86.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_86.QueryGroupsByMemberResponse>): _86.QueryGroupsByMemberResponse;
                fromAmino(object: _86.QueryGroupsByMemberResponseAmino): _86.QueryGroupsByMemberResponse;
                toAmino(message: _86.QueryGroupsByMemberResponse): _86.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _86.QueryGroupsByMemberResponseAminoMsg): _86.QueryGroupsByMemberResponse;
                toAminoMsg(message: _86.QueryGroupsByMemberResponse): _86.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _86.QueryGroupsByMemberResponseProtoMsg): _86.QueryGroupsByMemberResponse;
                toProto(message: _86.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGroupsByMemberResponse): _86.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _86.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryTallyResultRequest;
                fromPartial(object: Partial<_86.QueryTallyResultRequest>): _86.QueryTallyResultRequest;
                fromAmino(object: _86.QueryTallyResultRequestAmino): _86.QueryTallyResultRequest;
                toAmino(message: _86.QueryTallyResultRequest): _86.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _86.QueryTallyResultRequestAminoMsg): _86.QueryTallyResultRequest;
                toAminoMsg(message: _86.QueryTallyResultRequest): _86.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _86.QueryTallyResultRequestProtoMsg): _86.QueryTallyResultRequest;
                toProto(message: _86.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _86.QueryTallyResultRequest): _86.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _86.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryTallyResultResponse;
                fromPartial(object: Partial<_86.QueryTallyResultResponse>): _86.QueryTallyResultResponse;
                fromAmino(object: _86.QueryTallyResultResponseAmino): _86.QueryTallyResultResponse;
                toAmino(message: _86.QueryTallyResultResponse): _86.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _86.QueryTallyResultResponseAminoMsg): _86.QueryTallyResultResponse;
                toAminoMsg(message: _86.QueryTallyResultResponse): _86.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _86.QueryTallyResultResponseProtoMsg): _86.QueryTallyResultResponse;
                toProto(message: _86.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _86.QueryTallyResultResponse): _86.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _86.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupsRequest;
                fromPartial(object: Partial<_86.QueryGroupsRequest>): _86.QueryGroupsRequest;
                fromAmino(object: _86.QueryGroupsRequestAmino): _86.QueryGroupsRequest;
                toAmino(message: _86.QueryGroupsRequest): _86.QueryGroupsRequestAmino;
                fromAminoMsg(object: _86.QueryGroupsRequestAminoMsg): _86.QueryGroupsRequest;
                toAminoMsg(message: _86.QueryGroupsRequest): _86.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryGroupsRequestProtoMsg): _86.QueryGroupsRequest;
                toProto(message: _86.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGroupsRequest): _86.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _86.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.QueryGroupsResponse;
                fromPartial(object: Partial<_86.QueryGroupsResponse>): _86.QueryGroupsResponse;
                fromAmino(object: _86.QueryGroupsResponseAmino): _86.QueryGroupsResponse;
                toAmino(message: _86.QueryGroupsResponse): _86.QueryGroupsResponseAmino;
                fromAminoMsg(object: _86.QueryGroupsResponseAminoMsg): _86.QueryGroupsResponse;
                toAminoMsg(message: _86.QueryGroupsResponse): _86.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryGroupsResponseProtoMsg): _86.QueryGroupsResponse;
                toProto(message: _86.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGroupsResponse): _86.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _85.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GenesisState;
                fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
                fromAmino(object: _85.GenesisStateAmino): _85.GenesisState;
                toAmino(message: _85.GenesisState): _85.GenesisStateAmino;
                fromAminoMsg(object: _85.GenesisStateAminoMsg): _85.GenesisState;
                toAminoMsg(message: _85.GenesisState): _85.GenesisStateAminoMsg;
                fromProtoMsg(message: _85.GenesisStateProtoMsg): _85.GenesisState;
                toProto(message: _85.GenesisState): Uint8Array;
                toProtoMsg(message: _85.GenesisState): _85.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _84.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventCreateGroup;
                fromPartial(object: Partial<_84.EventCreateGroup>): _84.EventCreateGroup;
                fromAmino(object: _84.EventCreateGroupAmino): _84.EventCreateGroup;
                toAmino(message: _84.EventCreateGroup): _84.EventCreateGroupAmino;
                fromAminoMsg(object: _84.EventCreateGroupAminoMsg): _84.EventCreateGroup;
                toAminoMsg(message: _84.EventCreateGroup): _84.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _84.EventCreateGroupProtoMsg): _84.EventCreateGroup;
                toProto(message: _84.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _84.EventCreateGroup): _84.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _84.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventUpdateGroup;
                fromPartial(object: Partial<_84.EventUpdateGroup>): _84.EventUpdateGroup;
                fromAmino(object: _84.EventUpdateGroupAmino): _84.EventUpdateGroup;
                toAmino(message: _84.EventUpdateGroup): _84.EventUpdateGroupAmino;
                fromAminoMsg(object: _84.EventUpdateGroupAminoMsg): _84.EventUpdateGroup;
                toAminoMsg(message: _84.EventUpdateGroup): _84.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _84.EventUpdateGroupProtoMsg): _84.EventUpdateGroup;
                toProto(message: _84.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _84.EventUpdateGroup): _84.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _84.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventCreateGroupPolicy;
                fromPartial(object: Partial<_84.EventCreateGroupPolicy>): _84.EventCreateGroupPolicy;
                fromAmino(object: _84.EventCreateGroupPolicyAmino): _84.EventCreateGroupPolicy;
                toAmino(message: _84.EventCreateGroupPolicy): _84.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _84.EventCreateGroupPolicyAminoMsg): _84.EventCreateGroupPolicy;
                toAminoMsg(message: _84.EventCreateGroupPolicy): _84.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _84.EventCreateGroupPolicyProtoMsg): _84.EventCreateGroupPolicy;
                toProto(message: _84.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _84.EventCreateGroupPolicy): _84.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _84.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_84.EventUpdateGroupPolicy>): _84.EventUpdateGroupPolicy;
                fromAmino(object: _84.EventUpdateGroupPolicyAmino): _84.EventUpdateGroupPolicy;
                toAmino(message: _84.EventUpdateGroupPolicy): _84.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _84.EventUpdateGroupPolicyAminoMsg): _84.EventUpdateGroupPolicy;
                toAminoMsg(message: _84.EventUpdateGroupPolicy): _84.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _84.EventUpdateGroupPolicyProtoMsg): _84.EventUpdateGroupPolicy;
                toProto(message: _84.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _84.EventUpdateGroupPolicy): _84.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _84.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventSubmitProposal;
                fromPartial(object: Partial<_84.EventSubmitProposal>): _84.EventSubmitProposal;
                fromAmino(object: _84.EventSubmitProposalAmino): _84.EventSubmitProposal;
                toAmino(message: _84.EventSubmitProposal): _84.EventSubmitProposalAmino;
                fromAminoMsg(object: _84.EventSubmitProposalAminoMsg): _84.EventSubmitProposal;
                toAminoMsg(message: _84.EventSubmitProposal): _84.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _84.EventSubmitProposalProtoMsg): _84.EventSubmitProposal;
                toProto(message: _84.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _84.EventSubmitProposal): _84.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _84.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventWithdrawProposal;
                fromPartial(object: Partial<_84.EventWithdrawProposal>): _84.EventWithdrawProposal;
                fromAmino(object: _84.EventWithdrawProposalAmino): _84.EventWithdrawProposal;
                toAmino(message: _84.EventWithdrawProposal): _84.EventWithdrawProposalAmino;
                fromAminoMsg(object: _84.EventWithdrawProposalAminoMsg): _84.EventWithdrawProposal;
                toAminoMsg(message: _84.EventWithdrawProposal): _84.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _84.EventWithdrawProposalProtoMsg): _84.EventWithdrawProposal;
                toProto(message: _84.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _84.EventWithdrawProposal): _84.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _84.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventVote;
                fromPartial(object: Partial<_84.EventVote>): _84.EventVote;
                fromAmino(object: _84.EventVoteAmino): _84.EventVote;
                toAmino(message: _84.EventVote): _84.EventVoteAmino;
                fromAminoMsg(object: _84.EventVoteAminoMsg): _84.EventVote;
                toAminoMsg(message: _84.EventVote): _84.EventVoteAminoMsg;
                fromProtoMsg(message: _84.EventVoteProtoMsg): _84.EventVote;
                toProto(message: _84.EventVote): Uint8Array;
                toProtoMsg(message: _84.EventVote): _84.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _84.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventExec;
                fromPartial(object: Partial<_84.EventExec>): _84.EventExec;
                fromAmino(object: _84.EventExecAmino): _84.EventExec;
                toAmino(message: _84.EventExec): _84.EventExecAmino;
                fromAminoMsg(object: _84.EventExecAminoMsg): _84.EventExec;
                toAminoMsg(message: _84.EventExec): _84.EventExecAminoMsg;
                fromProtoMsg(message: _84.EventExecProtoMsg): _84.EventExec;
                toProto(message: _84.EventExec): Uint8Array;
                toProtoMsg(message: _84.EventExec): _84.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _84.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventLeaveGroup;
                fromPartial(object: Partial<_84.EventLeaveGroup>): _84.EventLeaveGroup;
                fromAmino(object: _84.EventLeaveGroupAmino): _84.EventLeaveGroup;
                toAmino(message: _84.EventLeaveGroup): _84.EventLeaveGroupAmino;
                fromAminoMsg(object: _84.EventLeaveGroupAminoMsg): _84.EventLeaveGroup;
                toAminoMsg(message: _84.EventLeaveGroup): _84.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _84.EventLeaveGroupProtoMsg): _84.EventLeaveGroup;
                toProto(message: _84.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _84.EventLeaveGroup): _84.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _84.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.EventProposalPruned;
                fromPartial(object: Partial<_84.EventProposalPruned>): _84.EventProposalPruned;
                fromAmino(object: _84.EventProposalPrunedAmino): _84.EventProposalPruned;
                toAmino(message: _84.EventProposalPruned): _84.EventProposalPrunedAmino;
                fromAminoMsg(object: _84.EventProposalPrunedAminoMsg): _84.EventProposalPruned;
                toAminoMsg(message: _84.EventProposalPruned): _84.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _84.EventProposalPrunedProtoMsg): _84.EventProposalPruned;
                toProto(message: _84.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _84.EventProposalPruned): _84.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _89.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.Module;
                    fromPartial(object: Partial<_89.Module>): _89.Module;
                    fromAmino(object: _89.ModuleAmino): _89.Module;
                    toAmino(message: _89.Module): _89.ModuleAmino;
                    fromAminoMsg(object: _89.ModuleAminoMsg): _89.Module;
                    toAminoMsg(message: _89.Module): _89.ModuleAminoMsg;
                    fromProtoMsg(message: _89.ModuleProtoMsg): _89.Module;
                    toProto(message: _89.Module): Uint8Array;
                    toProtoMsg(message: _89.Module): _89.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                inflation(request?: _92.QueryInflationRequest): Promise<_92.QueryInflationResponse>;
                annualProvisions(request?: _92.QueryAnnualProvisionsRequest): Promise<_92.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _93.MsgUpdateParams) => _93.MsgUpdateParamsAmino;
                    fromAmino: (object: _93.MsgUpdateParamsAmino) => _93.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _93.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MsgUpdateParams;
                fromPartial(object: Partial<_93.MsgUpdateParams>): _93.MsgUpdateParams;
                fromAmino(object: _93.MsgUpdateParamsAmino): _93.MsgUpdateParams;
                toAmino(message: _93.MsgUpdateParams): _93.MsgUpdateParamsAmino;
                fromAminoMsg(object: _93.MsgUpdateParamsAminoMsg): _93.MsgUpdateParams;
                toAminoMsg(message: _93.MsgUpdateParams): _93.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _93.MsgUpdateParamsProtoMsg): _93.MsgUpdateParams;
                toProto(message: _93.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _93.MsgUpdateParams): _93.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _93.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_93.MsgUpdateParamsResponse>): _93.MsgUpdateParamsResponse;
                fromAmino(_: _93.MsgUpdateParamsResponseAmino): _93.MsgUpdateParamsResponse;
                toAmino(_: _93.MsgUpdateParamsResponse): _93.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _93.MsgUpdateParamsResponseAminoMsg): _93.MsgUpdateParamsResponse;
                toAminoMsg(message: _93.MsgUpdateParamsResponse): _93.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _93.MsgUpdateParamsResponseProtoMsg): _93.MsgUpdateParamsResponse;
                toProto(message: _93.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _93.MsgUpdateParamsResponse): _93.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _92.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QueryParamsRequest;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                fromAmino(_: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                toAmino(_: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
                fromAminoMsg(object: _92.QueryParamsRequestAminoMsg): _92.QueryParamsRequest;
                toAminoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryParamsRequestProtoMsg): _92.QueryParamsRequest;
                toProto(message: _92.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _92.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryParamsResponse;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                fromAmino(object: _92.QueryParamsResponseAmino): _92.QueryParamsResponse;
                toAmino(message: _92.QueryParamsResponse): _92.QueryParamsResponseAmino;
                fromAminoMsg(object: _92.QueryParamsResponseAminoMsg): _92.QueryParamsResponse;
                toAminoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryParamsResponseProtoMsg): _92.QueryParamsResponse;
                toProto(message: _92.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _92.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QueryInflationRequest;
                fromPartial(_: Partial<_92.QueryInflationRequest>): _92.QueryInflationRequest;
                fromAmino(_: _92.QueryInflationRequestAmino): _92.QueryInflationRequest;
                toAmino(_: _92.QueryInflationRequest): _92.QueryInflationRequestAmino;
                fromAminoMsg(object: _92.QueryInflationRequestAminoMsg): _92.QueryInflationRequest;
                toAminoMsg(message: _92.QueryInflationRequest): _92.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryInflationRequestProtoMsg): _92.QueryInflationRequest;
                toProto(message: _92.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryInflationRequest): _92.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _92.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryInflationResponse;
                fromPartial(object: Partial<_92.QueryInflationResponse>): _92.QueryInflationResponse;
                fromAmino(object: _92.QueryInflationResponseAmino): _92.QueryInflationResponse;
                toAmino(message: _92.QueryInflationResponse): _92.QueryInflationResponseAmino;
                fromAminoMsg(object: _92.QueryInflationResponseAminoMsg): _92.QueryInflationResponse;
                toAminoMsg(message: _92.QueryInflationResponse): _92.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryInflationResponseProtoMsg): _92.QueryInflationResponse;
                toProto(message: _92.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryInflationResponse): _92.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _92.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_92.QueryAnnualProvisionsRequest>): _92.QueryAnnualProvisionsRequest;
                fromAmino(_: _92.QueryAnnualProvisionsRequestAmino): _92.QueryAnnualProvisionsRequest;
                toAmino(_: _92.QueryAnnualProvisionsRequest): _92.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _92.QueryAnnualProvisionsRequestAminoMsg): _92.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _92.QueryAnnualProvisionsRequest): _92.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryAnnualProvisionsRequestProtoMsg): _92.QueryAnnualProvisionsRequest;
                toProto(message: _92.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryAnnualProvisionsRequest): _92.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _92.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_92.QueryAnnualProvisionsResponse>): _92.QueryAnnualProvisionsResponse;
                fromAmino(object: _92.QueryAnnualProvisionsResponseAmino): _92.QueryAnnualProvisionsResponse;
                toAmino(message: _92.QueryAnnualProvisionsResponse): _92.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _92.QueryAnnualProvisionsResponseAminoMsg): _92.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _92.QueryAnnualProvisionsResponse): _92.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryAnnualProvisionsResponseProtoMsg): _92.QueryAnnualProvisionsResponse;
                toProto(message: _92.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryAnnualProvisionsResponse): _92.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _91.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Minter;
                fromPartial(object: Partial<_91.Minter>): _91.Minter;
                fromAmino(object: _91.MinterAmino): _91.Minter;
                toAmino(message: _91.Minter): _91.MinterAmino;
                fromAminoMsg(object: _91.MinterAminoMsg): _91.Minter;
                toAminoMsg(message: _91.Minter): _91.MinterAminoMsg;
                fromProtoMsg(message: _91.MinterProtoMsg): _91.Minter;
                toProto(message: _91.Minter): Uint8Array;
                toProtoMsg(message: _91.Minter): _91.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _91.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Params;
                fromPartial(object: Partial<_91.Params>): _91.Params;
                fromAmino(object: _91.ParamsAmino): _91.Params;
                toAmino(message: _91.Params): _91.ParamsAmino;
                fromAminoMsg(object: _91.ParamsAminoMsg): _91.Params;
                toAminoMsg(message: _91.Params): _91.ParamsAminoMsg;
                fromProtoMsg(message: _91.ParamsProtoMsg): _91.Params;
                toProto(message: _91.Params): Uint8Array;
                toProtoMsg(message: _91.Params): _91.ParamsProtoMsg;
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
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _95.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _95.Module;
                    fromPartial(_: Partial<_95.Module>): _95.Module;
                    fromAmino(_: _95.ModuleAmino): _95.Module;
                    toAmino(_: _95.Module): _95.ModuleAmino;
                    fromAminoMsg(object: _95.ModuleAminoMsg): _95.Module;
                    toAminoMsg(message: _95.Module): _95.ModuleAminoMsg;
                    fromProtoMsg(message: _95.ModuleProtoMsg): _95.Module;
                    toProto(message: _95.Module): Uint8Array;
                    toProtoMsg(message: _95.Module): _95.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _99.QueryBalanceRequest): Promise<_99.QueryBalanceResponse>;
                owner(request: _99.QueryOwnerRequest): Promise<_99.QueryOwnerResponse>;
                supply(request: _99.QuerySupplyRequest): Promise<_99.QuerySupplyResponse>;
                nFTs(request: _99.QueryNFTsRequest): Promise<_99.QueryNFTsResponse>;
                nFT(request: _99.QueryNFTRequest): Promise<_99.QueryNFTResponse>;
                class(request: _99.QueryClassRequest): Promise<_99.QueryClassResponse>;
                classes(request?: _99.QueryClassesRequest): Promise<_99.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _100.MsgSend) => _100.MsgSendAmino;
                    fromAmino: (object: _100.MsgSendAmino) => _100.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _100.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgSend;
                fromPartial(object: Partial<_100.MsgSend>): _100.MsgSend;
                fromAmino(object: _100.MsgSendAmino): _100.MsgSend;
                toAmino(message: _100.MsgSend): _100.MsgSendAmino;
                fromAminoMsg(object: _100.MsgSendAminoMsg): _100.MsgSend;
                toAminoMsg(message: _100.MsgSend): _100.MsgSendAminoMsg;
                fromProtoMsg(message: _100.MsgSendProtoMsg): _100.MsgSend;
                toProto(message: _100.MsgSend): Uint8Array;
                toProtoMsg(message: _100.MsgSend): _100.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _100.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgSendResponse;
                fromPartial(_: Partial<_100.MsgSendResponse>): _100.MsgSendResponse;
                fromAmino(_: _100.MsgSendResponseAmino): _100.MsgSendResponse;
                toAmino(_: _100.MsgSendResponse): _100.MsgSendResponseAmino;
                fromAminoMsg(object: _100.MsgSendResponseAminoMsg): _100.MsgSendResponse;
                toAminoMsg(message: _100.MsgSendResponse): _100.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _100.MsgSendResponseProtoMsg): _100.MsgSendResponse;
                toProto(message: _100.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _100.MsgSendResponse): _100.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _99.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryBalanceRequest;
                fromPartial(object: Partial<_99.QueryBalanceRequest>): _99.QueryBalanceRequest;
                fromAmino(object: _99.QueryBalanceRequestAmino): _99.QueryBalanceRequest;
                toAmino(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestAmino;
                fromAminoMsg(object: _99.QueryBalanceRequestAminoMsg): _99.QueryBalanceRequest;
                toAminoMsg(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _99.QueryBalanceRequestProtoMsg): _99.QueryBalanceRequest;
                toProto(message: _99.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _99.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryBalanceResponse;
                fromPartial(object: Partial<_99.QueryBalanceResponse>): _99.QueryBalanceResponse;
                fromAmino(object: _99.QueryBalanceResponseAmino): _99.QueryBalanceResponse;
                toAmino(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseAmino;
                fromAminoMsg(object: _99.QueryBalanceResponseAminoMsg): _99.QueryBalanceResponse;
                toAminoMsg(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _99.QueryBalanceResponseProtoMsg): _99.QueryBalanceResponse;
                toProto(message: _99.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _99.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryOwnerRequest;
                fromPartial(object: Partial<_99.QueryOwnerRequest>): _99.QueryOwnerRequest;
                fromAmino(object: _99.QueryOwnerRequestAmino): _99.QueryOwnerRequest;
                toAmino(message: _99.QueryOwnerRequest): _99.QueryOwnerRequestAmino;
                fromAminoMsg(object: _99.QueryOwnerRequestAminoMsg): _99.QueryOwnerRequest;
                toAminoMsg(message: _99.QueryOwnerRequest): _99.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _99.QueryOwnerRequestProtoMsg): _99.QueryOwnerRequest;
                toProto(message: _99.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _99.QueryOwnerRequest): _99.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _99.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryOwnerResponse;
                fromPartial(object: Partial<_99.QueryOwnerResponse>): _99.QueryOwnerResponse;
                fromAmino(object: _99.QueryOwnerResponseAmino): _99.QueryOwnerResponse;
                toAmino(message: _99.QueryOwnerResponse): _99.QueryOwnerResponseAmino;
                fromAminoMsg(object: _99.QueryOwnerResponseAminoMsg): _99.QueryOwnerResponse;
                toAminoMsg(message: _99.QueryOwnerResponse): _99.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _99.QueryOwnerResponseProtoMsg): _99.QueryOwnerResponse;
                toProto(message: _99.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _99.QueryOwnerResponse): _99.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _99.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QuerySupplyRequest;
                fromPartial(object: Partial<_99.QuerySupplyRequest>): _99.QuerySupplyRequest;
                fromAmino(object: _99.QuerySupplyRequestAmino): _99.QuerySupplyRequest;
                toAmino(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestAmino;
                fromAminoMsg(object: _99.QuerySupplyRequestAminoMsg): _99.QuerySupplyRequest;
                toAminoMsg(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _99.QuerySupplyRequestProtoMsg): _99.QuerySupplyRequest;
                toProto(message: _99.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _99.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QuerySupplyResponse;
                fromPartial(object: Partial<_99.QuerySupplyResponse>): _99.QuerySupplyResponse;
                fromAmino(object: _99.QuerySupplyResponseAmino): _99.QuerySupplyResponse;
                toAmino(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseAmino;
                fromAminoMsg(object: _99.QuerySupplyResponseAminoMsg): _99.QuerySupplyResponse;
                toAminoMsg(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _99.QuerySupplyResponseProtoMsg): _99.QuerySupplyResponse;
                toProto(message: _99.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _99.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryNFTsRequest;
                fromPartial(object: Partial<_99.QueryNFTsRequest>): _99.QueryNFTsRequest;
                fromAmino(object: _99.QueryNFTsRequestAmino): _99.QueryNFTsRequest;
                toAmino(message: _99.QueryNFTsRequest): _99.QueryNFTsRequestAmino;
                fromAminoMsg(object: _99.QueryNFTsRequestAminoMsg): _99.QueryNFTsRequest;
                toAminoMsg(message: _99.QueryNFTsRequest): _99.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryNFTsRequestProtoMsg): _99.QueryNFTsRequest;
                toProto(message: _99.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryNFTsRequest): _99.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _99.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryNFTsResponse;
                fromPartial(object: Partial<_99.QueryNFTsResponse>): _99.QueryNFTsResponse;
                fromAmino(object: _99.QueryNFTsResponseAmino): _99.QueryNFTsResponse;
                toAmino(message: _99.QueryNFTsResponse): _99.QueryNFTsResponseAmino;
                fromAminoMsg(object: _99.QueryNFTsResponseAminoMsg): _99.QueryNFTsResponse;
                toAminoMsg(message: _99.QueryNFTsResponse): _99.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryNFTsResponseProtoMsg): _99.QueryNFTsResponse;
                toProto(message: _99.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryNFTsResponse): _99.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _99.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryNFTRequest;
                fromPartial(object: Partial<_99.QueryNFTRequest>): _99.QueryNFTRequest;
                fromAmino(object: _99.QueryNFTRequestAmino): _99.QueryNFTRequest;
                toAmino(message: _99.QueryNFTRequest): _99.QueryNFTRequestAmino;
                fromAminoMsg(object: _99.QueryNFTRequestAminoMsg): _99.QueryNFTRequest;
                toAminoMsg(message: _99.QueryNFTRequest): _99.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _99.QueryNFTRequestProtoMsg): _99.QueryNFTRequest;
                toProto(message: _99.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _99.QueryNFTRequest): _99.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _99.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryNFTResponse;
                fromPartial(object: Partial<_99.QueryNFTResponse>): _99.QueryNFTResponse;
                fromAmino(object: _99.QueryNFTResponseAmino): _99.QueryNFTResponse;
                toAmino(message: _99.QueryNFTResponse): _99.QueryNFTResponseAmino;
                fromAminoMsg(object: _99.QueryNFTResponseAminoMsg): _99.QueryNFTResponse;
                toAminoMsg(message: _99.QueryNFTResponse): _99.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _99.QueryNFTResponseProtoMsg): _99.QueryNFTResponse;
                toProto(message: _99.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _99.QueryNFTResponse): _99.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _99.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryClassRequest;
                fromPartial(object: Partial<_99.QueryClassRequest>): _99.QueryClassRequest;
                fromAmino(object: _99.QueryClassRequestAmino): _99.QueryClassRequest;
                toAmino(message: _99.QueryClassRequest): _99.QueryClassRequestAmino;
                fromAminoMsg(object: _99.QueryClassRequestAminoMsg): _99.QueryClassRequest;
                toAminoMsg(message: _99.QueryClassRequest): _99.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _99.QueryClassRequestProtoMsg): _99.QueryClassRequest;
                toProto(message: _99.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _99.QueryClassRequest): _99.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _99.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryClassResponse;
                fromPartial(object: Partial<_99.QueryClassResponse>): _99.QueryClassResponse;
                fromAmino(object: _99.QueryClassResponseAmino): _99.QueryClassResponse;
                toAmino(message: _99.QueryClassResponse): _99.QueryClassResponseAmino;
                fromAminoMsg(object: _99.QueryClassResponseAminoMsg): _99.QueryClassResponse;
                toAminoMsg(message: _99.QueryClassResponse): _99.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _99.QueryClassResponseProtoMsg): _99.QueryClassResponse;
                toProto(message: _99.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _99.QueryClassResponse): _99.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _99.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryClassesRequest;
                fromPartial(object: Partial<_99.QueryClassesRequest>): _99.QueryClassesRequest;
                fromAmino(object: _99.QueryClassesRequestAmino): _99.QueryClassesRequest;
                toAmino(message: _99.QueryClassesRequest): _99.QueryClassesRequestAmino;
                fromAminoMsg(object: _99.QueryClassesRequestAminoMsg): _99.QueryClassesRequest;
                toAminoMsg(message: _99.QueryClassesRequest): _99.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _99.QueryClassesRequestProtoMsg): _99.QueryClassesRequest;
                toProto(message: _99.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _99.QueryClassesRequest): _99.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _99.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.QueryClassesResponse;
                fromPartial(object: Partial<_99.QueryClassesResponse>): _99.QueryClassesResponse;
                fromAmino(object: _99.QueryClassesResponseAmino): _99.QueryClassesResponse;
                toAmino(message: _99.QueryClassesResponse): _99.QueryClassesResponseAmino;
                fromAminoMsg(object: _99.QueryClassesResponseAminoMsg): _99.QueryClassesResponse;
                toAminoMsg(message: _99.QueryClassesResponse): _99.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _99.QueryClassesResponseProtoMsg): _99.QueryClassesResponse;
                toProto(message: _99.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _99.QueryClassesResponse): _99.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _98.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Class;
                fromPartial(object: Partial<_98.Class>): _98.Class;
                fromAmino(object: _98.ClassAmino): _98.Class;
                toAmino(message: _98.Class): _98.ClassAmino;
                fromAminoMsg(object: _98.ClassAminoMsg): _98.Class;
                toAminoMsg(message: _98.Class): _98.ClassAminoMsg;
                fromProtoMsg(message: _98.ClassProtoMsg): _98.Class;
                toProto(message: _98.Class): Uint8Array;
                toProtoMsg(message: _98.Class): _98.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _98.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.NFT;
                fromPartial(object: Partial<_98.NFT>): _98.NFT;
                fromAmino(object: _98.NFTAmino): _98.NFT;
                toAmino(message: _98.NFT): _98.NFTAmino;
                fromAminoMsg(object: _98.NFTAminoMsg): _98.NFT;
                toAminoMsg(message: _98.NFT): _98.NFTAminoMsg;
                fromProtoMsg(message: _98.NFTProtoMsg): _98.NFT;
                toProto(message: _98.NFT): Uint8Array;
                toProtoMsg(message: _98.NFT): _98.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _97.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GenesisState;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
                fromAmino(object: _97.GenesisStateAmino): _97.GenesisState;
                toAmino(message: _97.GenesisState): _97.GenesisStateAmino;
                fromAminoMsg(object: _97.GenesisStateAminoMsg): _97.GenesisState;
                toAminoMsg(message: _97.GenesisState): _97.GenesisStateAminoMsg;
                fromProtoMsg(message: _97.GenesisStateProtoMsg): _97.GenesisState;
                toProto(message: _97.GenesisState): Uint8Array;
                toProtoMsg(message: _97.GenesisState): _97.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _97.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Entry;
                fromPartial(object: Partial<_97.Entry>): _97.Entry;
                fromAmino(object: _97.EntryAmino): _97.Entry;
                toAmino(message: _97.Entry): _97.EntryAmino;
                fromAminoMsg(object: _97.EntryAminoMsg): _97.Entry;
                toAminoMsg(message: _97.Entry): _97.EntryAminoMsg;
                fromProtoMsg(message: _97.EntryProtoMsg): _97.Entry;
                toProto(message: _97.Entry): Uint8Array;
                toProtoMsg(message: _97.Entry): _97.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _96.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.EventSend;
                fromPartial(object: Partial<_96.EventSend>): _96.EventSend;
                fromAmino(object: _96.EventSendAmino): _96.EventSend;
                toAmino(message: _96.EventSend): _96.EventSendAmino;
                fromAminoMsg(object: _96.EventSendAminoMsg): _96.EventSend;
                toAminoMsg(message: _96.EventSend): _96.EventSendAminoMsg;
                fromProtoMsg(message: _96.EventSendProtoMsg): _96.EventSend;
                toProto(message: _96.EventSend): Uint8Array;
                toProtoMsg(message: _96.EventSend): _96.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _96.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.EventMint;
                fromPartial(object: Partial<_96.EventMint>): _96.EventMint;
                fromAmino(object: _96.EventMintAmino): _96.EventMint;
                toAmino(message: _96.EventMint): _96.EventMintAmino;
                fromAminoMsg(object: _96.EventMintAminoMsg): _96.EventMint;
                toAminoMsg(message: _96.EventMint): _96.EventMintAminoMsg;
                fromProtoMsg(message: _96.EventMintProtoMsg): _96.EventMint;
                toProto(message: _96.EventMint): Uint8Array;
                toProtoMsg(message: _96.EventMint): _96.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _96.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.EventBurn;
                fromPartial(object: Partial<_96.EventBurn>): _96.EventBurn;
                fromAmino(object: _96.EventBurnAmino): _96.EventBurn;
                toAmino(message: _96.EventBurn): _96.EventBurnAmino;
                fromAminoMsg(object: _96.EventBurnAminoMsg): _96.EventBurn;
                toAminoMsg(message: _96.EventBurn): _96.EventBurnAminoMsg;
                fromProtoMsg(message: _96.EventBurnProtoMsg): _96.EventBurn;
                toProto(message: _96.EventBurn): Uint8Array;
                toProtoMsg(message: _96.EventBurn): _96.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _101.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _101.Module;
                    fromPartial(_: Partial<_101.Module>): _101.Module;
                    fromAmino(_: _101.ModuleAmino): _101.Module;
                    toAmino(_: _101.Module): _101.ModuleAmino;
                    fromAminoMsg(object: _101.ModuleAminoMsg): _101.Module;
                    toAminoMsg(message: _101.Module): _101.ModuleAminoMsg;
                    fromProtoMsg(message: _101.ModuleProtoMsg): _101.Module;
                    toProto(message: _101.Module): Uint8Array;
                    toProtoMsg(message: _101.Module): _101.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _279.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _102.GetRequest): Promise<_102.GetResponse>;
                    list(request: _102.ListRequest): Promise<_102.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _102.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.GetRequest;
                    fromPartial(object: Partial<_102.GetRequest>): _102.GetRequest;
                    fromAmino(object: _102.GetRequestAmino): _102.GetRequest;
                    toAmino(message: _102.GetRequest): _102.GetRequestAmino;
                    fromAminoMsg(object: _102.GetRequestAminoMsg): _102.GetRequest;
                    toAminoMsg(message: _102.GetRequest): _102.GetRequestAminoMsg;
                    fromProtoMsg(message: _102.GetRequestProtoMsg): _102.GetRequest;
                    toProto(message: _102.GetRequest): Uint8Array;
                    toProtoMsg(message: _102.GetRequest): _102.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _102.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.GetResponse;
                    fromPartial(object: Partial<_102.GetResponse>): _102.GetResponse;
                    fromAmino(object: _102.GetResponseAmino): _102.GetResponse;
                    toAmino(message: _102.GetResponse): _102.GetResponseAmino;
                    fromAminoMsg(object: _102.GetResponseAminoMsg): _102.GetResponse;
                    toAminoMsg(message: _102.GetResponse): _102.GetResponseAminoMsg;
                    fromProtoMsg(message: _102.GetResponseProtoMsg): _102.GetResponse;
                    toProto(message: _102.GetResponse): Uint8Array;
                    toProtoMsg(message: _102.GetResponse): _102.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _102.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.ListRequest;
                    fromPartial(object: Partial<_102.ListRequest>): _102.ListRequest;
                    fromAmino(object: _102.ListRequestAmino): _102.ListRequest;
                    toAmino(message: _102.ListRequest): _102.ListRequestAmino;
                    fromAminoMsg(object: _102.ListRequestAminoMsg): _102.ListRequest;
                    toAminoMsg(message: _102.ListRequest): _102.ListRequestAminoMsg;
                    fromProtoMsg(message: _102.ListRequestProtoMsg): _102.ListRequest;
                    toProto(message: _102.ListRequest): Uint8Array;
                    toProtoMsg(message: _102.ListRequest): _102.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _102.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.ListRequest_Prefix;
                    fromPartial(object: Partial<_102.ListRequest_Prefix>): _102.ListRequest_Prefix;
                    fromAmino(object: _102.ListRequest_PrefixAmino): _102.ListRequest_Prefix;
                    toAmino(message: _102.ListRequest_Prefix): _102.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _102.ListRequest_PrefixAminoMsg): _102.ListRequest_Prefix;
                    toAminoMsg(message: _102.ListRequest_Prefix): _102.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _102.ListRequest_PrefixProtoMsg): _102.ListRequest_Prefix;
                    toProto(message: _102.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _102.ListRequest_Prefix): _102.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _102.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.ListRequest_Range;
                    fromPartial(object: Partial<_102.ListRequest_Range>): _102.ListRequest_Range;
                    fromAmino(object: _102.ListRequest_RangeAmino): _102.ListRequest_Range;
                    toAmino(message: _102.ListRequest_Range): _102.ListRequest_RangeAmino;
                    fromAminoMsg(object: _102.ListRequest_RangeAminoMsg): _102.ListRequest_Range;
                    toAminoMsg(message: _102.ListRequest_Range): _102.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _102.ListRequest_RangeProtoMsg): _102.ListRequest_Range;
                    toProto(message: _102.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _102.ListRequest_Range): _102.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _102.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.ListResponse;
                    fromPartial(object: Partial<_102.ListResponse>): _102.ListResponse;
                    fromAmino(object: _102.ListResponseAmino): _102.ListResponse;
                    toAmino(message: _102.ListResponse): _102.ListResponseAmino;
                    fromAminoMsg(object: _102.ListResponseAminoMsg): _102.ListResponse;
                    toAminoMsg(message: _102.ListResponse): _102.ListResponseAminoMsg;
                    fromProtoMsg(message: _102.ListResponseProtoMsg): _102.ListResponse;
                    toProto(message: _102.ListResponse): Uint8Array;
                    toProtoMsg(message: _102.ListResponse): _102.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _102.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.IndexValue;
                    fromPartial(object: Partial<_102.IndexValue>): _102.IndexValue;
                    fromAmino(object: _102.IndexValueAmino): _102.IndexValue;
                    toAmino(message: _102.IndexValue): _102.IndexValueAmino;
                    fromAminoMsg(object: _102.IndexValueAminoMsg): _102.IndexValue;
                    toAminoMsg(message: _102.IndexValue): _102.IndexValueAminoMsg;
                    fromProtoMsg(message: _102.IndexValueProtoMsg): _102.IndexValue;
                    toProto(message: _102.IndexValue): Uint8Array;
                    toProtoMsg(message: _102.IndexValue): _102.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _103.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.TableDescriptor;
                fromPartial(object: Partial<_103.TableDescriptor>): _103.TableDescriptor;
                fromAmino(object: _103.TableDescriptorAmino): _103.TableDescriptor;
                toAmino(message: _103.TableDescriptor): _103.TableDescriptorAmino;
                fromAminoMsg(object: _103.TableDescriptorAminoMsg): _103.TableDescriptor;
                toAminoMsg(message: _103.TableDescriptor): _103.TableDescriptorAminoMsg;
                fromProtoMsg(message: _103.TableDescriptorProtoMsg): _103.TableDescriptor;
                toProto(message: _103.TableDescriptor): Uint8Array;
                toProtoMsg(message: _103.TableDescriptor): _103.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _103.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_103.PrimaryKeyDescriptor>): _103.PrimaryKeyDescriptor;
                fromAmino(object: _103.PrimaryKeyDescriptorAmino): _103.PrimaryKeyDescriptor;
                toAmino(message: _103.PrimaryKeyDescriptor): _103.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _103.PrimaryKeyDescriptorAminoMsg): _103.PrimaryKeyDescriptor;
                toAminoMsg(message: _103.PrimaryKeyDescriptor): _103.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _103.PrimaryKeyDescriptorProtoMsg): _103.PrimaryKeyDescriptor;
                toProto(message: _103.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _103.PrimaryKeyDescriptor): _103.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _103.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_103.SecondaryIndexDescriptor>): _103.SecondaryIndexDescriptor;
                fromAmino(object: _103.SecondaryIndexDescriptorAmino): _103.SecondaryIndexDescriptor;
                toAmino(message: _103.SecondaryIndexDescriptor): _103.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _103.SecondaryIndexDescriptorAminoMsg): _103.SecondaryIndexDescriptor;
                toAminoMsg(message: _103.SecondaryIndexDescriptor): _103.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _103.SecondaryIndexDescriptorProtoMsg): _103.SecondaryIndexDescriptor;
                toProto(message: _103.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _103.SecondaryIndexDescriptor): _103.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _103.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.SingletonDescriptor;
                fromPartial(object: Partial<_103.SingletonDescriptor>): _103.SingletonDescriptor;
                fromAmino(object: _103.SingletonDescriptorAmino): _103.SingletonDescriptor;
                toAmino(message: _103.SingletonDescriptor): _103.SingletonDescriptorAmino;
                fromAminoMsg(object: _103.SingletonDescriptorAminoMsg): _103.SingletonDescriptor;
                toAminoMsg(message: _103.SingletonDescriptor): _103.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _103.SingletonDescriptorProtoMsg): _103.SingletonDescriptor;
                toProto(message: _103.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _103.SingletonDescriptor): _103.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _104.StorageType;
            storageTypeToJSON(object: _104.StorageType): string;
            StorageType: typeof _104.StorageType;
            StorageTypeSDKType: typeof _104.StorageType;
            StorageTypeAmino: typeof _104.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _104.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_104.ModuleSchemaDescriptor>): _104.ModuleSchemaDescriptor;
                fromAmino(object: _104.ModuleSchemaDescriptorAmino): _104.ModuleSchemaDescriptor;
                toAmino(message: _104.ModuleSchemaDescriptor): _104.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _104.ModuleSchemaDescriptorAminoMsg): _104.ModuleSchemaDescriptor;
                toAminoMsg(message: _104.ModuleSchemaDescriptor): _104.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _104.ModuleSchemaDescriptorProtoMsg): _104.ModuleSchemaDescriptor;
                toProto(message: _104.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _104.ModuleSchemaDescriptor): _104.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _104.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_104.ModuleSchemaDescriptor_FileEntry>): _104.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _104.ModuleSchemaDescriptor_FileEntryAmino): _104.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _104.ModuleSchemaDescriptor_FileEntry): _104.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _104.ModuleSchemaDescriptor_FileEntryAminoMsg): _104.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _104.ModuleSchemaDescriptor_FileEntry): _104.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _104.ModuleSchemaDescriptor_FileEntryProtoMsg): _104.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _104.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _104.ModuleSchemaDescriptor_FileEntry): _104.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _105.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.Module;
                    fromPartial(_: Partial<_105.Module>): _105.Module;
                    fromAmino(_: _105.ModuleAmino): _105.Module;
                    toAmino(_: _105.Module): _105.ModuleAmino;
                    fromAminoMsg(object: _105.ModuleAminoMsg): _105.Module;
                    toAminoMsg(message: _105.Module): _105.ModuleAminoMsg;
                    fromProtoMsg(message: _105.ModuleProtoMsg): _105.Module;
                    toProto(message: _105.Module): Uint8Array;
                    toProtoMsg(message: _105.Module): _105.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                subspaces(request?: _107.QuerySubspacesRequest): Promise<_107.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _107.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryParamsRequest;
                fromPartial(object: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
                fromAmino(object: _107.QueryParamsRequestAmino): _107.QueryParamsRequest;
                toAmino(message: _107.QueryParamsRequest): _107.QueryParamsRequestAmino;
                fromAminoMsg(object: _107.QueryParamsRequestAminoMsg): _107.QueryParamsRequest;
                toAminoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryParamsRequestProtoMsg): _107.QueryParamsRequest;
                toProto(message: _107.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _107.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QueryParamsResponse;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
                fromAmino(object: _107.QueryParamsResponseAmino): _107.QueryParamsResponse;
                toAmino(message: _107.QueryParamsResponse): _107.QueryParamsResponseAmino;
                fromAminoMsg(object: _107.QueryParamsResponseAminoMsg): _107.QueryParamsResponse;
                toAminoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryParamsResponseProtoMsg): _107.QueryParamsResponse;
                toProto(message: _107.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _107.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.QuerySubspacesRequest;
                fromPartial(_: Partial<_107.QuerySubspacesRequest>): _107.QuerySubspacesRequest;
                fromAmino(_: _107.QuerySubspacesRequestAmino): _107.QuerySubspacesRequest;
                toAmino(_: _107.QuerySubspacesRequest): _107.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _107.QuerySubspacesRequestAminoMsg): _107.QuerySubspacesRequest;
                toAminoMsg(message: _107.QuerySubspacesRequest): _107.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _107.QuerySubspacesRequestProtoMsg): _107.QuerySubspacesRequest;
                toProto(message: _107.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _107.QuerySubspacesRequest): _107.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _107.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.QuerySubspacesResponse;
                fromPartial(object: Partial<_107.QuerySubspacesResponse>): _107.QuerySubspacesResponse;
                fromAmino(object: _107.QuerySubspacesResponseAmino): _107.QuerySubspacesResponse;
                toAmino(message: _107.QuerySubspacesResponse): _107.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _107.QuerySubspacesResponseAminoMsg): _107.QuerySubspacesResponse;
                toAminoMsg(message: _107.QuerySubspacesResponse): _107.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _107.QuerySubspacesResponseProtoMsg): _107.QuerySubspacesResponse;
                toProto(message: _107.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _107.QuerySubspacesResponse): _107.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _107.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.Subspace;
                fromPartial(object: Partial<_107.Subspace>): _107.Subspace;
                fromAmino(object: _107.SubspaceAmino): _107.Subspace;
                toAmino(message: _107.Subspace): _107.SubspaceAmino;
                fromAminoMsg(object: _107.SubspaceAminoMsg): _107.Subspace;
                toAminoMsg(message: _107.Subspace): _107.SubspaceAminoMsg;
                fromProtoMsg(message: _107.SubspaceProtoMsg): _107.Subspace;
                toProto(message: _107.Subspace): Uint8Array;
                toProtoMsg(message: _107.Subspace): _107.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _106.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ParameterChangeProposal;
                fromPartial(object: Partial<_106.ParameterChangeProposal>): _106.ParameterChangeProposal;
                fromAmino(object: _106.ParameterChangeProposalAmino): _106.ParameterChangeProposal;
                toAmino(message: _106.ParameterChangeProposal): _106.ParameterChangeProposalAmino;
                fromAminoMsg(object: _106.ParameterChangeProposalAminoMsg): _106.ParameterChangeProposal;
                toAminoMsg(message: _106.ParameterChangeProposal): _106.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _106.ParameterChangeProposalProtoMsg): _106.ParameterChangeProposal;
                toProto(message: _106.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _106.ParameterChangeProposal): _106.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _106.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ParamChange;
                fromPartial(object: Partial<_106.ParamChange>): _106.ParamChange;
                fromAmino(object: _106.ParamChangeAmino): _106.ParamChange;
                toAmino(message: _106.ParamChange): _106.ParamChangeAmino;
                fromAminoMsg(object: _106.ParamChangeAminoMsg): _106.ParamChange;
                toAminoMsg(message: _106.ParamChange): _106.ParamChangeAminoMsg;
                fromProtoMsg(message: _106.ParamChangeProtoMsg): _106.ParamChange;
                toProto(message: _106.ParamChange): Uint8Array;
                toProtoMsg(message: _106.ParamChange): _106.ParamChangeProtoMsg;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                typeUrl: string;
                encode(_: _109.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _109.FileDescriptorsRequest;
                fromPartial(_: Partial<_109.FileDescriptorsRequest>): _109.FileDescriptorsRequest;
                fromAmino(_: _109.FileDescriptorsRequestAmino): _109.FileDescriptorsRequest;
                toAmino(_: _109.FileDescriptorsRequest): _109.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _109.FileDescriptorsRequestAminoMsg): _109.FileDescriptorsRequest;
                toAminoMsg(message: _109.FileDescriptorsRequest): _109.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _109.FileDescriptorsRequestProtoMsg): _109.FileDescriptorsRequest;
                toProto(message: _109.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _109.FileDescriptorsRequest): _109.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _109.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _109.FileDescriptorsResponse;
                fromPartial(object: Partial<_109.FileDescriptorsResponse>): _109.FileDescriptorsResponse;
                fromAmino(object: _109.FileDescriptorsResponseAmino): _109.FileDescriptorsResponse;
                toAmino(message: _109.FileDescriptorsResponse): _109.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _109.FileDescriptorsResponseAminoMsg): _109.FileDescriptorsResponse;
                toAminoMsg(message: _109.FileDescriptorsResponse): _109.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _109.FileDescriptorsResponseProtoMsg): _109.FileDescriptorsResponse;
                toProto(message: _109.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _109.FileDescriptorsResponse): _109.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _110.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.Module;
                    fromPartial(object: Partial<_110.Module>): _110.Module;
                    fromAmino(object: _110.ModuleAmino): _110.Module;
                    toAmino(message: _110.Module): _110.ModuleAmino;
                    fromAminoMsg(object: _110.ModuleAminoMsg): _110.Module;
                    toAminoMsg(message: _110.Module): _110.ModuleAminoMsg;
                    fromProtoMsg(message: _110.ModuleProtoMsg): _110.Module;
                    toProto(message: _110.Module): Uint8Array;
                    toProtoMsg(message: _110.Module): _110.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                signingInfo(request: _112.QuerySigningInfoRequest): Promise<_112.QuerySigningInfoResponse>;
                signingInfos(request?: _112.QuerySigningInfosRequest): Promise<_112.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _114.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _114.MsgUnjail): {
                        typeUrl: string;
                        value: _114.MsgUnjail;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _114.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _114.MsgUnjail): {
                        typeUrl: string;
                        value: _114.MsgUnjail;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUnjail) => _114.MsgUnjailAmino;
                    fromAmino: (object: _114.MsgUnjailAmino) => _114.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUpdateParams) => _114.MsgUpdateParamsAmino;
                    fromAmino: (object: _114.MsgUpdateParamsAmino) => _114.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _114.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgUnjail;
                fromPartial(object: Partial<_114.MsgUnjail>): _114.MsgUnjail;
                fromAmino(object: _114.MsgUnjailAmino): _114.MsgUnjail;
                toAmino(message: _114.MsgUnjail): _114.MsgUnjailAmino;
                fromAminoMsg(object: _114.MsgUnjailAminoMsg): _114.MsgUnjail;
                toAminoMsg(message: _114.MsgUnjail): _114.MsgUnjailAminoMsg;
                fromProtoMsg(message: _114.MsgUnjailProtoMsg): _114.MsgUnjail;
                toProto(message: _114.MsgUnjail): Uint8Array;
                toProtoMsg(message: _114.MsgUnjail): _114.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _114.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgUnjailResponse;
                fromPartial(_: Partial<_114.MsgUnjailResponse>): _114.MsgUnjailResponse;
                fromAmino(_: _114.MsgUnjailResponseAmino): _114.MsgUnjailResponse;
                toAmino(_: _114.MsgUnjailResponse): _114.MsgUnjailResponseAmino;
                fromAminoMsg(object: _114.MsgUnjailResponseAminoMsg): _114.MsgUnjailResponse;
                toAminoMsg(message: _114.MsgUnjailResponse): _114.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUnjailResponseProtoMsg): _114.MsgUnjailResponse;
                toProto(message: _114.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUnjailResponse): _114.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _114.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _114.MsgUpdateParams;
                fromPartial(object: Partial<_114.MsgUpdateParams>): _114.MsgUpdateParams;
                fromAmino(object: _114.MsgUpdateParamsAmino): _114.MsgUpdateParams;
                toAmino(message: _114.MsgUpdateParams): _114.MsgUpdateParamsAmino;
                fromAminoMsg(object: _114.MsgUpdateParamsAminoMsg): _114.MsgUpdateParams;
                toAminoMsg(message: _114.MsgUpdateParams): _114.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateParamsProtoMsg): _114.MsgUpdateParams;
                toProto(message: _114.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateParams): _114.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _114.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _114.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_114.MsgUpdateParamsResponse>): _114.MsgUpdateParamsResponse;
                fromAmino(_: _114.MsgUpdateParamsResponseAmino): _114.MsgUpdateParamsResponse;
                toAmino(_: _114.MsgUpdateParamsResponse): _114.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _114.MsgUpdateParamsResponseAminoMsg): _114.MsgUpdateParamsResponse;
                toAminoMsg(message: _114.MsgUpdateParamsResponse): _114.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateParamsResponseProtoMsg): _114.MsgUpdateParamsResponse;
                toProto(message: _114.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateParamsResponse): _114.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _113.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.ValidatorSigningInfo;
                fromPartial(object: Partial<_113.ValidatorSigningInfo>): _113.ValidatorSigningInfo;
                fromAmino(object: _113.ValidatorSigningInfoAmino): _113.ValidatorSigningInfo;
                toAmino(message: _113.ValidatorSigningInfo): _113.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _113.ValidatorSigningInfoAminoMsg): _113.ValidatorSigningInfo;
                toAminoMsg(message: _113.ValidatorSigningInfo): _113.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _113.ValidatorSigningInfoProtoMsg): _113.ValidatorSigningInfo;
                toProto(message: _113.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _113.ValidatorSigningInfo): _113.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _113.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _113.Params;
                fromPartial(object: Partial<_113.Params>): _113.Params;
                fromAmino(object: _113.ParamsAmino): _113.Params;
                toAmino(message: _113.Params): _113.ParamsAmino;
                fromAminoMsg(object: _113.ParamsAminoMsg): _113.Params;
                toAminoMsg(message: _113.Params): _113.ParamsAminoMsg;
                fromProtoMsg(message: _113.ParamsProtoMsg): _113.Params;
                toProto(message: _113.Params): Uint8Array;
                toProtoMsg(message: _113.Params): _113.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _112.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _112.QueryParamsRequest;
                fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
                fromAmino(_: _112.QueryParamsRequestAmino): _112.QueryParamsRequest;
                toAmino(_: _112.QueryParamsRequest): _112.QueryParamsRequestAmino;
                fromAminoMsg(object: _112.QueryParamsRequestAminoMsg): _112.QueryParamsRequest;
                toAminoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryParamsRequestProtoMsg): _112.QueryParamsRequest;
                toProto(message: _112.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _112.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QueryParamsResponse;
                fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
                fromAmino(object: _112.QueryParamsResponseAmino): _112.QueryParamsResponse;
                toAmino(message: _112.QueryParamsResponse): _112.QueryParamsResponseAmino;
                fromAminoMsg(object: _112.QueryParamsResponseAminoMsg): _112.QueryParamsResponse;
                toAminoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryParamsResponseProtoMsg): _112.QueryParamsResponse;
                toProto(message: _112.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _112.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySigningInfoRequest;
                fromPartial(object: Partial<_112.QuerySigningInfoRequest>): _112.QuerySigningInfoRequest;
                fromAmino(object: _112.QuerySigningInfoRequestAmino): _112.QuerySigningInfoRequest;
                toAmino(message: _112.QuerySigningInfoRequest): _112.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _112.QuerySigningInfoRequestAminoMsg): _112.QuerySigningInfoRequest;
                toAminoMsg(message: _112.QuerySigningInfoRequest): _112.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _112.QuerySigningInfoRequestProtoMsg): _112.QuerySigningInfoRequest;
                toProto(message: _112.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _112.QuerySigningInfoRequest): _112.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _112.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySigningInfoResponse;
                fromPartial(object: Partial<_112.QuerySigningInfoResponse>): _112.QuerySigningInfoResponse;
                fromAmino(object: _112.QuerySigningInfoResponseAmino): _112.QuerySigningInfoResponse;
                toAmino(message: _112.QuerySigningInfoResponse): _112.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _112.QuerySigningInfoResponseAminoMsg): _112.QuerySigningInfoResponse;
                toAminoMsg(message: _112.QuerySigningInfoResponse): _112.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _112.QuerySigningInfoResponseProtoMsg): _112.QuerySigningInfoResponse;
                toProto(message: _112.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _112.QuerySigningInfoResponse): _112.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _112.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySigningInfosRequest;
                fromPartial(object: Partial<_112.QuerySigningInfosRequest>): _112.QuerySigningInfosRequest;
                fromAmino(object: _112.QuerySigningInfosRequestAmino): _112.QuerySigningInfosRequest;
                toAmino(message: _112.QuerySigningInfosRequest): _112.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _112.QuerySigningInfosRequestAminoMsg): _112.QuerySigningInfosRequest;
                toAminoMsg(message: _112.QuerySigningInfosRequest): _112.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _112.QuerySigningInfosRequestProtoMsg): _112.QuerySigningInfosRequest;
                toProto(message: _112.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _112.QuerySigningInfosRequest): _112.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _112.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _112.QuerySigningInfosResponse;
                fromPartial(object: Partial<_112.QuerySigningInfosResponse>): _112.QuerySigningInfosResponse;
                fromAmino(object: _112.QuerySigningInfosResponseAmino): _112.QuerySigningInfosResponse;
                toAmino(message: _112.QuerySigningInfosResponse): _112.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _112.QuerySigningInfosResponseAminoMsg): _112.QuerySigningInfosResponse;
                toAminoMsg(message: _112.QuerySigningInfosResponse): _112.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _112.QuerySigningInfosResponseProtoMsg): _112.QuerySigningInfosResponse;
                toProto(message: _112.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _112.QuerySigningInfosResponse): _112.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _111.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.GenesisState;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                toAminoMsg(message: _111.GenesisState): _111.GenesisStateAminoMsg;
                fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                toProto(message: _111.GenesisState): Uint8Array;
                toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _111.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.SigningInfo;
                fromPartial(object: Partial<_111.SigningInfo>): _111.SigningInfo;
                fromAmino(object: _111.SigningInfoAmino): _111.SigningInfo;
                toAmino(message: _111.SigningInfo): _111.SigningInfoAmino;
                fromAminoMsg(object: _111.SigningInfoAminoMsg): _111.SigningInfo;
                toAminoMsg(message: _111.SigningInfo): _111.SigningInfoAminoMsg;
                fromProtoMsg(message: _111.SigningInfoProtoMsg): _111.SigningInfo;
                toProto(message: _111.SigningInfo): Uint8Array;
                toProtoMsg(message: _111.SigningInfo): _111.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _111.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.ValidatorMissedBlocks;
                fromPartial(object: Partial<_111.ValidatorMissedBlocks>): _111.ValidatorMissedBlocks;
                fromAmino(object: _111.ValidatorMissedBlocksAmino): _111.ValidatorMissedBlocks;
                toAmino(message: _111.ValidatorMissedBlocks): _111.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _111.ValidatorMissedBlocksAminoMsg): _111.ValidatorMissedBlocks;
                toAminoMsg(message: _111.ValidatorMissedBlocks): _111.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _111.ValidatorMissedBlocksProtoMsg): _111.ValidatorMissedBlocks;
                toProto(message: _111.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _111.ValidatorMissedBlocks): _111.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _111.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _111.MissedBlock;
                fromPartial(object: Partial<_111.MissedBlock>): _111.MissedBlock;
                fromAmino(object: _111.MissedBlockAmino): _111.MissedBlock;
                toAmino(message: _111.MissedBlock): _111.MissedBlockAmino;
                fromAminoMsg(object: _111.MissedBlockAminoMsg): _111.MissedBlock;
                toAminoMsg(message: _111.MissedBlock): _111.MissedBlockAminoMsg;
                fromProtoMsg(message: _111.MissedBlockProtoMsg): _111.MissedBlock;
                toProto(message: _111.MissedBlock): Uint8Array;
                toProtoMsg(message: _111.MissedBlock): _111.MissedBlockProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _115.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Config;
                    fromPartial(object: Partial<_115.Config>): _115.Config;
                    fromAmino(object: _115.ConfigAmino): _115.Config;
                    toAmino(message: _115.Config): _115.ConfigAmino;
                    fromAminoMsg(object: _115.ConfigAminoMsg): _115.Config;
                    toAminoMsg(message: _115.Config): _115.ConfigAminoMsg;
                    fromProtoMsg(message: _115.ConfigProtoMsg): _115.Config;
                    toProto(message: _115.Config): Uint8Array;
                    toProtoMsg(message: _115.Config): _115.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _116.SignMode;
                signModeToJSON(object: _116.SignMode): string;
                SignMode: typeof _116.SignMode;
                SignModeSDKType: typeof _116.SignMode;
                SignModeAmino: typeof _116.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptors;
                    fromPartial(object: Partial<_116.SignatureDescriptors>): _116.SignatureDescriptors;
                    fromAmino(object: _116.SignatureDescriptorsAmino): _116.SignatureDescriptors;
                    toAmino(message: _116.SignatureDescriptors): _116.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _116.SignatureDescriptorsAminoMsg): _116.SignatureDescriptors;
                    toAminoMsg(message: _116.SignatureDescriptors): _116.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptorsProtoMsg): _116.SignatureDescriptors;
                    toProto(message: _116.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptors): _116.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor;
                    fromPartial(object: Partial<_116.SignatureDescriptor>): _116.SignatureDescriptor;
                    fromAmino(object: _116.SignatureDescriptorAmino): _116.SignatureDescriptor;
                    toAmino(message: _116.SignatureDescriptor): _116.SignatureDescriptorAmino;
                    fromAminoMsg(object: _116.SignatureDescriptorAminoMsg): _116.SignatureDescriptor;
                    toAminoMsg(message: _116.SignatureDescriptor): _116.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptorProtoMsg): _116.SignatureDescriptor;
                    toProto(message: _116.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor): _116.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data>): _116.SignatureDescriptor_Data;
                    fromAmino(object: _116.SignatureDescriptor_DataAmino): _116.SignatureDescriptor_Data;
                    toAmino(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_DataAminoMsg): _116.SignatureDescriptor_Data;
                    toAminoMsg(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_DataProtoMsg): _116.SignatureDescriptor_Data;
                    toProto(message: _116.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data_Single>): _116.SignatureDescriptor_Data_Single;
                    fromAmino(object: _116.SignatureDescriptor_Data_SingleAmino): _116.SignatureDescriptor_Data_Single;
                    toAmino(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_Data_SingleAminoMsg): _116.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_Data_SingleProtoMsg): _116.SignatureDescriptor_Data_Single;
                    toProto(message: _116.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data_Multi>): _116.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _116.SignatureDescriptor_Data_MultiAmino): _116.SignatureDescriptor_Data_Multi;
                    toAmino(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_Data_MultiAminoMsg): _116.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_Data_MultiProtoMsg): _116.SignatureDescriptor_Data_Multi;
                    toProto(message: _116.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _283.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _117.SimulateRequest): Promise<_117.SimulateResponse>;
                getTx(request: _117.GetTxRequest): Promise<_117.GetTxResponse>;
                broadcastTx(request: _117.BroadcastTxRequest): Promise<_117.BroadcastTxResponse>;
                getTxsEvent(request: _117.GetTxsEventRequest): Promise<_117.GetTxsEventResponse>;
                getBlockWithTxs(request: _117.GetBlockWithTxsRequest): Promise<_117.GetBlockWithTxsResponse>;
                txDecode(request: _117.TxDecodeRequest): Promise<_117.TxDecodeResponse>;
                txEncode(request: _117.TxEncodeRequest): Promise<_117.TxEncodeResponse>;
                txEncodeAmino(request: _117.TxEncodeAminoRequest): Promise<_117.TxEncodeAminoResponse>;
                txDecodeAmino(request: _117.TxDecodeAminoRequest): Promise<_117.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _118.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Tx;
                fromPartial(object: Partial<_118.Tx>): _118.Tx;
                fromAmino(object: _118.TxAmino): _118.Tx;
                toAmino(message: _118.Tx): _118.TxAmino;
                fromAminoMsg(object: _118.TxAminoMsg): _118.Tx;
                toAminoMsg(message: _118.Tx): _118.TxAminoMsg;
                fromProtoMsg(message: _118.TxProtoMsg): _118.Tx;
                toProto(message: _118.Tx): Uint8Array;
                toProtoMsg(message: _118.Tx): _118.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _118.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TxRaw;
                fromPartial(object: Partial<_118.TxRaw>): _118.TxRaw;
                fromAmino(object: _118.TxRawAmino): _118.TxRaw;
                toAmino(message: _118.TxRaw): _118.TxRawAmino;
                fromAminoMsg(object: _118.TxRawAminoMsg): _118.TxRaw;
                toAminoMsg(message: _118.TxRaw): _118.TxRawAminoMsg;
                fromProtoMsg(message: _118.TxRawProtoMsg): _118.TxRaw;
                toProto(message: _118.TxRaw): Uint8Array;
                toProtoMsg(message: _118.TxRaw): _118.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _118.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SignDoc;
                fromPartial(object: Partial<_118.SignDoc>): _118.SignDoc;
                fromAmino(object: _118.SignDocAmino): _118.SignDoc;
                toAmino(message: _118.SignDoc): _118.SignDocAmino;
                fromAminoMsg(object: _118.SignDocAminoMsg): _118.SignDoc;
                toAminoMsg(message: _118.SignDoc): _118.SignDocAminoMsg;
                fromProtoMsg(message: _118.SignDocProtoMsg): _118.SignDoc;
                toProto(message: _118.SignDoc): Uint8Array;
                toProtoMsg(message: _118.SignDoc): _118.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _118.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SignDocDirectAux;
                fromPartial(object: Partial<_118.SignDocDirectAux>): _118.SignDocDirectAux;
                fromAmino(object: _118.SignDocDirectAuxAmino): _118.SignDocDirectAux;
                toAmino(message: _118.SignDocDirectAux): _118.SignDocDirectAuxAmino;
                fromAminoMsg(object: _118.SignDocDirectAuxAminoMsg): _118.SignDocDirectAux;
                toAminoMsg(message: _118.SignDocDirectAux): _118.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _118.SignDocDirectAuxProtoMsg): _118.SignDocDirectAux;
                toProto(message: _118.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _118.SignDocDirectAux): _118.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _118.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.TxBody;
                fromPartial(object: Partial<_118.TxBody>): _118.TxBody;
                fromAmino(object: _118.TxBodyAmino): _118.TxBody;
                toAmino(message: _118.TxBody): _118.TxBodyAmino;
                fromAminoMsg(object: _118.TxBodyAminoMsg): _118.TxBody;
                toAminoMsg(message: _118.TxBody): _118.TxBodyAminoMsg;
                fromProtoMsg(message: _118.TxBodyProtoMsg): _118.TxBody;
                toProto(message: _118.TxBody): Uint8Array;
                toProtoMsg(message: _118.TxBody): _118.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _118.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.AuthInfo;
                fromPartial(object: Partial<_118.AuthInfo>): _118.AuthInfo;
                fromAmino(object: _118.AuthInfoAmino): _118.AuthInfo;
                toAmino(message: _118.AuthInfo): _118.AuthInfoAmino;
                fromAminoMsg(object: _118.AuthInfoAminoMsg): _118.AuthInfo;
                toAminoMsg(message: _118.AuthInfo): _118.AuthInfoAminoMsg;
                fromProtoMsg(message: _118.AuthInfoProtoMsg): _118.AuthInfo;
                toProto(message: _118.AuthInfo): Uint8Array;
                toProtoMsg(message: _118.AuthInfo): _118.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _118.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SignerInfo;
                fromPartial(object: Partial<_118.SignerInfo>): _118.SignerInfo;
                fromAmino(object: _118.SignerInfoAmino): _118.SignerInfo;
                toAmino(message: _118.SignerInfo): _118.SignerInfoAmino;
                fromAminoMsg(object: _118.SignerInfoAminoMsg): _118.SignerInfo;
                toAminoMsg(message: _118.SignerInfo): _118.SignerInfoAminoMsg;
                fromProtoMsg(message: _118.SignerInfoProtoMsg): _118.SignerInfo;
                toProto(message: _118.SignerInfo): Uint8Array;
                toProtoMsg(message: _118.SignerInfo): _118.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _118.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModeInfo;
                fromPartial(object: Partial<_118.ModeInfo>): _118.ModeInfo;
                fromAmino(object: _118.ModeInfoAmino): _118.ModeInfo;
                toAmino(message: _118.ModeInfo): _118.ModeInfoAmino;
                fromAminoMsg(object: _118.ModeInfoAminoMsg): _118.ModeInfo;
                toAminoMsg(message: _118.ModeInfo): _118.ModeInfoAminoMsg;
                fromProtoMsg(message: _118.ModeInfoProtoMsg): _118.ModeInfo;
                toProto(message: _118.ModeInfo): Uint8Array;
                toProtoMsg(message: _118.ModeInfo): _118.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _118.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModeInfo_Single;
                fromPartial(object: Partial<_118.ModeInfo_Single>): _118.ModeInfo_Single;
                fromAmino(object: _118.ModeInfo_SingleAmino): _118.ModeInfo_Single;
                toAmino(message: _118.ModeInfo_Single): _118.ModeInfo_SingleAmino;
                fromAminoMsg(object: _118.ModeInfo_SingleAminoMsg): _118.ModeInfo_Single;
                toAminoMsg(message: _118.ModeInfo_Single): _118.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _118.ModeInfo_SingleProtoMsg): _118.ModeInfo_Single;
                toProto(message: _118.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _118.ModeInfo_Single): _118.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _118.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ModeInfo_Multi;
                fromPartial(object: Partial<_118.ModeInfo_Multi>): _118.ModeInfo_Multi;
                fromAmino(object: _118.ModeInfo_MultiAmino): _118.ModeInfo_Multi;
                toAmino(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiAmino;
                fromAminoMsg(object: _118.ModeInfo_MultiAminoMsg): _118.ModeInfo_Multi;
                toAminoMsg(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _118.ModeInfo_MultiProtoMsg): _118.ModeInfo_Multi;
                toProto(message: _118.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _118.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Fee;
                fromPartial(object: Partial<_118.Fee>): _118.Fee;
                fromAmino(object: _118.FeeAmino): _118.Fee;
                toAmino(message: _118.Fee): _118.FeeAmino;
                fromAminoMsg(object: _118.FeeAminoMsg): _118.Fee;
                toAminoMsg(message: _118.Fee): _118.FeeAminoMsg;
                fromProtoMsg(message: _118.FeeProtoMsg): _118.Fee;
                toProto(message: _118.Fee): Uint8Array;
                toProtoMsg(message: _118.Fee): _118.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _118.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.Tip;
                fromPartial(object: Partial<_118.Tip>): _118.Tip;
                fromAmino(object: _118.TipAmino): _118.Tip;
                toAmino(message: _118.Tip): _118.TipAmino;
                fromAminoMsg(object: _118.TipAminoMsg): _118.Tip;
                toAminoMsg(message: _118.Tip): _118.TipAminoMsg;
                fromProtoMsg(message: _118.TipProtoMsg): _118.Tip;
                toProto(message: _118.Tip): Uint8Array;
                toProtoMsg(message: _118.Tip): _118.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _118.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.AuxSignerData;
                fromPartial(object: Partial<_118.AuxSignerData>): _118.AuxSignerData;
                fromAmino(object: _118.AuxSignerDataAmino): _118.AuxSignerData;
                toAmino(message: _118.AuxSignerData): _118.AuxSignerDataAmino;
                fromAminoMsg(object: _118.AuxSignerDataAminoMsg): _118.AuxSignerData;
                toAminoMsg(message: _118.AuxSignerData): _118.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _118.AuxSignerDataProtoMsg): _118.AuxSignerData;
                toProto(message: _118.AuxSignerData): Uint8Array;
                toProtoMsg(message: _118.AuxSignerData): _118.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _117.OrderBy;
            orderByToJSON(object: _117.OrderBy): string;
            broadcastModeFromJSON(object: any): _117.BroadcastMode;
            broadcastModeToJSON(object: _117.BroadcastMode): string;
            OrderBy: typeof _117.OrderBy;
            OrderBySDKType: typeof _117.OrderBy;
            OrderByAmino: typeof _117.OrderBy;
            BroadcastMode: typeof _117.BroadcastMode;
            BroadcastModeSDKType: typeof _117.BroadcastMode;
            BroadcastModeAmino: typeof _117.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _117.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxsEventRequest;
                fromPartial(object: Partial<_117.GetTxsEventRequest>): _117.GetTxsEventRequest;
                fromAmino(object: _117.GetTxsEventRequestAmino): _117.GetTxsEventRequest;
                toAmino(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestAmino;
                fromAminoMsg(object: _117.GetTxsEventRequestAminoMsg): _117.GetTxsEventRequest;
                toAminoMsg(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _117.GetTxsEventRequestProtoMsg): _117.GetTxsEventRequest;
                toProto(message: _117.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _117.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxsEventResponse;
                fromPartial(object: Partial<_117.GetTxsEventResponse>): _117.GetTxsEventResponse;
                fromAmino(object: _117.GetTxsEventResponseAmino): _117.GetTxsEventResponse;
                toAmino(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseAmino;
                fromAminoMsg(object: _117.GetTxsEventResponseAminoMsg): _117.GetTxsEventResponse;
                toAminoMsg(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _117.GetTxsEventResponseProtoMsg): _117.GetTxsEventResponse;
                toProto(message: _117.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _117.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.BroadcastTxRequest;
                fromPartial(object: Partial<_117.BroadcastTxRequest>): _117.BroadcastTxRequest;
                fromAmino(object: _117.BroadcastTxRequestAmino): _117.BroadcastTxRequest;
                toAmino(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestAmino;
                fromAminoMsg(object: _117.BroadcastTxRequestAminoMsg): _117.BroadcastTxRequest;
                toAminoMsg(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _117.BroadcastTxRequestProtoMsg): _117.BroadcastTxRequest;
                toProto(message: _117.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _117.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.BroadcastTxResponse;
                fromPartial(object: Partial<_117.BroadcastTxResponse>): _117.BroadcastTxResponse;
                fromAmino(object: _117.BroadcastTxResponseAmino): _117.BroadcastTxResponse;
                toAmino(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseAmino;
                fromAminoMsg(object: _117.BroadcastTxResponseAminoMsg): _117.BroadcastTxResponse;
                toAminoMsg(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _117.BroadcastTxResponseProtoMsg): _117.BroadcastTxResponse;
                toProto(message: _117.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _117.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SimulateRequest;
                fromPartial(object: Partial<_117.SimulateRequest>): _117.SimulateRequest;
                fromAmino(object: _117.SimulateRequestAmino): _117.SimulateRequest;
                toAmino(message: _117.SimulateRequest): _117.SimulateRequestAmino;
                fromAminoMsg(object: _117.SimulateRequestAminoMsg): _117.SimulateRequest;
                toAminoMsg(message: _117.SimulateRequest): _117.SimulateRequestAminoMsg;
                fromProtoMsg(message: _117.SimulateRequestProtoMsg): _117.SimulateRequest;
                toProto(message: _117.SimulateRequest): Uint8Array;
                toProtoMsg(message: _117.SimulateRequest): _117.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _117.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.SimulateResponse;
                fromPartial(object: Partial<_117.SimulateResponse>): _117.SimulateResponse;
                fromAmino(object: _117.SimulateResponseAmino): _117.SimulateResponse;
                toAmino(message: _117.SimulateResponse): _117.SimulateResponseAmino;
                fromAminoMsg(object: _117.SimulateResponseAminoMsg): _117.SimulateResponse;
                toAminoMsg(message: _117.SimulateResponse): _117.SimulateResponseAminoMsg;
                fromProtoMsg(message: _117.SimulateResponseProtoMsg): _117.SimulateResponse;
                toProto(message: _117.SimulateResponse): Uint8Array;
                toProtoMsg(message: _117.SimulateResponse): _117.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _117.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxRequest;
                fromPartial(object: Partial<_117.GetTxRequest>): _117.GetTxRequest;
                fromAmino(object: _117.GetTxRequestAmino): _117.GetTxRequest;
                toAmino(message: _117.GetTxRequest): _117.GetTxRequestAmino;
                fromAminoMsg(object: _117.GetTxRequestAminoMsg): _117.GetTxRequest;
                toAminoMsg(message: _117.GetTxRequest): _117.GetTxRequestAminoMsg;
                fromProtoMsg(message: _117.GetTxRequestProtoMsg): _117.GetTxRequest;
                toProto(message: _117.GetTxRequest): Uint8Array;
                toProtoMsg(message: _117.GetTxRequest): _117.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _117.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetTxResponse;
                fromPartial(object: Partial<_117.GetTxResponse>): _117.GetTxResponse;
                fromAmino(object: _117.GetTxResponseAmino): _117.GetTxResponse;
                toAmino(message: _117.GetTxResponse): _117.GetTxResponseAmino;
                fromAminoMsg(object: _117.GetTxResponseAminoMsg): _117.GetTxResponse;
                toAminoMsg(message: _117.GetTxResponse): _117.GetTxResponseAminoMsg;
                fromProtoMsg(message: _117.GetTxResponseProtoMsg): _117.GetTxResponse;
                toProto(message: _117.GetTxResponse): Uint8Array;
                toProtoMsg(message: _117.GetTxResponse): _117.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _117.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_117.GetBlockWithTxsRequest>): _117.GetBlockWithTxsRequest;
                fromAmino(object: _117.GetBlockWithTxsRequestAmino): _117.GetBlockWithTxsRequest;
                toAmino(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _117.GetBlockWithTxsRequestAminoMsg): _117.GetBlockWithTxsRequest;
                toAminoMsg(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _117.GetBlockWithTxsRequestProtoMsg): _117.GetBlockWithTxsRequest;
                toProto(message: _117.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _117.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_117.GetBlockWithTxsResponse>): _117.GetBlockWithTxsResponse;
                fromAmino(object: _117.GetBlockWithTxsResponseAmino): _117.GetBlockWithTxsResponse;
                toAmino(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _117.GetBlockWithTxsResponseAminoMsg): _117.GetBlockWithTxsResponse;
                toAminoMsg(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _117.GetBlockWithTxsResponseProtoMsg): _117.GetBlockWithTxsResponse;
                toProto(message: _117.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _117.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxDecodeRequest;
                fromPartial(object: Partial<_117.TxDecodeRequest>): _117.TxDecodeRequest;
                fromAmino(object: _117.TxDecodeRequestAmino): _117.TxDecodeRequest;
                toAmino(message: _117.TxDecodeRequest): _117.TxDecodeRequestAmino;
                fromAminoMsg(object: _117.TxDecodeRequestAminoMsg): _117.TxDecodeRequest;
                toAminoMsg(message: _117.TxDecodeRequest): _117.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _117.TxDecodeRequestProtoMsg): _117.TxDecodeRequest;
                toProto(message: _117.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _117.TxDecodeRequest): _117.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _117.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxDecodeResponse;
                fromPartial(object: Partial<_117.TxDecodeResponse>): _117.TxDecodeResponse;
                fromAmino(object: _117.TxDecodeResponseAmino): _117.TxDecodeResponse;
                toAmino(message: _117.TxDecodeResponse): _117.TxDecodeResponseAmino;
                fromAminoMsg(object: _117.TxDecodeResponseAminoMsg): _117.TxDecodeResponse;
                toAminoMsg(message: _117.TxDecodeResponse): _117.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _117.TxDecodeResponseProtoMsg): _117.TxDecodeResponse;
                toProto(message: _117.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _117.TxDecodeResponse): _117.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _117.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxEncodeRequest;
                fromPartial(object: Partial<_117.TxEncodeRequest>): _117.TxEncodeRequest;
                fromAmino(object: _117.TxEncodeRequestAmino): _117.TxEncodeRequest;
                toAmino(message: _117.TxEncodeRequest): _117.TxEncodeRequestAmino;
                fromAminoMsg(object: _117.TxEncodeRequestAminoMsg): _117.TxEncodeRequest;
                toAminoMsg(message: _117.TxEncodeRequest): _117.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _117.TxEncodeRequestProtoMsg): _117.TxEncodeRequest;
                toProto(message: _117.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _117.TxEncodeRequest): _117.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _117.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxEncodeResponse;
                fromPartial(object: Partial<_117.TxEncodeResponse>): _117.TxEncodeResponse;
                fromAmino(object: _117.TxEncodeResponseAmino): _117.TxEncodeResponse;
                toAmino(message: _117.TxEncodeResponse): _117.TxEncodeResponseAmino;
                fromAminoMsg(object: _117.TxEncodeResponseAminoMsg): _117.TxEncodeResponse;
                toAminoMsg(message: _117.TxEncodeResponse): _117.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _117.TxEncodeResponseProtoMsg): _117.TxEncodeResponse;
                toProto(message: _117.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _117.TxEncodeResponse): _117.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _117.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxEncodeAminoRequest;
                fromPartial(object: Partial<_117.TxEncodeAminoRequest>): _117.TxEncodeAminoRequest;
                fromAmino(object: _117.TxEncodeAminoRequestAmino): _117.TxEncodeAminoRequest;
                toAmino(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _117.TxEncodeAminoRequestAminoMsg): _117.TxEncodeAminoRequest;
                toAminoMsg(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _117.TxEncodeAminoRequestProtoMsg): _117.TxEncodeAminoRequest;
                toProto(message: _117.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _117.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxEncodeAminoResponse;
                fromPartial(object: Partial<_117.TxEncodeAminoResponse>): _117.TxEncodeAminoResponse;
                fromAmino(object: _117.TxEncodeAminoResponseAmino): _117.TxEncodeAminoResponse;
                toAmino(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _117.TxEncodeAminoResponseAminoMsg): _117.TxEncodeAminoResponse;
                toAminoMsg(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _117.TxEncodeAminoResponseProtoMsg): _117.TxEncodeAminoResponse;
                toProto(message: _117.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _117.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxDecodeAminoRequest;
                fromPartial(object: Partial<_117.TxDecodeAminoRequest>): _117.TxDecodeAminoRequest;
                fromAmino(object: _117.TxDecodeAminoRequestAmino): _117.TxDecodeAminoRequest;
                toAmino(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _117.TxDecodeAminoRequestAminoMsg): _117.TxDecodeAminoRequest;
                toAminoMsg(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _117.TxDecodeAminoRequestProtoMsg): _117.TxDecodeAminoRequest;
                toProto(message: _117.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _117.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.TxDecodeAminoResponse;
                fromPartial(object: Partial<_117.TxDecodeAminoResponse>): _117.TxDecodeAminoResponse;
                fromAmino(object: _117.TxDecodeAminoResponseAmino): _117.TxDecodeAminoResponse;
                toAmino(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _117.TxDecodeAminoResponseAminoMsg): _117.TxDecodeAminoResponse;
                toAminoMsg(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _117.TxDecodeAminoResponseProtoMsg): _117.TxDecodeAminoResponse;
                toProto(message: _117.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _119.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Module;
                    fromPartial(object: Partial<_119.Module>): _119.Module;
                    fromAmino(object: _119.ModuleAmino): _119.Module;
                    toAmino(message: _119.Module): _119.ModuleAmino;
                    fromAminoMsg(object: _119.ModuleAminoMsg): _119.Module;
                    toAminoMsg(message: _119.Module): _119.ModuleAminoMsg;
                    fromProtoMsg(message: _119.ModuleProtoMsg): _119.Module;
                    toProto(message: _119.Module): Uint8Array;
                    toProtoMsg(message: _119.Module): _119.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _120.QueryCurrentPlanRequest): Promise<_120.QueryCurrentPlanResponse>;
                appliedPlan(request: _120.QueryAppliedPlanRequest): Promise<_120.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _120.QueryUpgradedConsensusStateRequest): Promise<_120.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _120.QueryModuleVersionsRequest): Promise<_120.QueryModuleVersionsResponse>;
                authority(request?: _120.QueryAuthorityRequest): Promise<_120.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _121.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _121.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _121.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _121.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _121.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _121.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _121.MsgSoftwareUpgrade) => _121.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _121.MsgSoftwareUpgradeAmino) => _121.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _121.MsgCancelUpgrade) => _121.MsgCancelUpgradeAmino;
                    fromAmino: (object: _121.MsgCancelUpgradeAmino) => _121.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _122.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.Plan;
                fromPartial(object: Partial<_122.Plan>): _122.Plan;
                fromAmino(object: _122.PlanAmino): _122.Plan;
                toAmino(message: _122.Plan): _122.PlanAmino;
                fromAminoMsg(object: _122.PlanAminoMsg): _122.Plan;
                toAminoMsg(message: _122.Plan): _122.PlanAminoMsg;
                fromProtoMsg(message: _122.PlanProtoMsg): _122.Plan;
                toProto(message: _122.Plan): Uint8Array;
                toProtoMsg(message: _122.Plan): _122.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _122.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_122.SoftwareUpgradeProposal>): _122.SoftwareUpgradeProposal;
                fromAmino(object: _122.SoftwareUpgradeProposalAmino): _122.SoftwareUpgradeProposal;
                toAmino(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _122.SoftwareUpgradeProposalAminoMsg): _122.SoftwareUpgradeProposal;
                toAminoMsg(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _122.SoftwareUpgradeProposalProtoMsg): _122.SoftwareUpgradeProposal;
                toProto(message: _122.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _122.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_122.CancelSoftwareUpgradeProposal>): _122.CancelSoftwareUpgradeProposal;
                fromAmino(object: _122.CancelSoftwareUpgradeProposalAmino): _122.CancelSoftwareUpgradeProposal;
                toAmino(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _122.CancelSoftwareUpgradeProposalAminoMsg): _122.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _122.CancelSoftwareUpgradeProposalProtoMsg): _122.CancelSoftwareUpgradeProposal;
                toProto(message: _122.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _122.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ModuleVersion;
                fromPartial(object: Partial<_122.ModuleVersion>): _122.ModuleVersion;
                fromAmino(object: _122.ModuleVersionAmino): _122.ModuleVersion;
                toAmino(message: _122.ModuleVersion): _122.ModuleVersionAmino;
                fromAminoMsg(object: _122.ModuleVersionAminoMsg): _122.ModuleVersion;
                toAminoMsg(message: _122.ModuleVersion): _122.ModuleVersionAminoMsg;
                fromProtoMsg(message: _122.ModuleVersionProtoMsg): _122.ModuleVersion;
                toProto(message: _122.ModuleVersion): Uint8Array;
                toProtoMsg(message: _122.ModuleVersion): _122.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _121.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_121.MsgSoftwareUpgrade>): _121.MsgSoftwareUpgrade;
                fromAmino(object: _121.MsgSoftwareUpgradeAmino): _121.MsgSoftwareUpgrade;
                toAmino(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _121.MsgSoftwareUpgradeAminoMsg): _121.MsgSoftwareUpgrade;
                toAminoMsg(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _121.MsgSoftwareUpgradeProtoMsg): _121.MsgSoftwareUpgrade;
                toProto(message: _121.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _121.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_121.MsgSoftwareUpgradeResponse>): _121.MsgSoftwareUpgradeResponse;
                fromAmino(_: _121.MsgSoftwareUpgradeResponseAmino): _121.MsgSoftwareUpgradeResponse;
                toAmino(_: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _121.MsgSoftwareUpgradeResponseAminoMsg): _121.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _121.MsgSoftwareUpgradeResponseProtoMsg): _121.MsgSoftwareUpgradeResponse;
                toProto(message: _121.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _121.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.MsgCancelUpgrade;
                fromPartial(object: Partial<_121.MsgCancelUpgrade>): _121.MsgCancelUpgrade;
                fromAmino(object: _121.MsgCancelUpgradeAmino): _121.MsgCancelUpgrade;
                toAmino(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _121.MsgCancelUpgradeAminoMsg): _121.MsgCancelUpgrade;
                toAminoMsg(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _121.MsgCancelUpgradeProtoMsg): _121.MsgCancelUpgrade;
                toProto(message: _121.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _121.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _121.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_121.MsgCancelUpgradeResponse>): _121.MsgCancelUpgradeResponse;
                fromAmino(_: _121.MsgCancelUpgradeResponseAmino): _121.MsgCancelUpgradeResponse;
                toAmino(_: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _121.MsgCancelUpgradeResponseAminoMsg): _121.MsgCancelUpgradeResponse;
                toAminoMsg(message: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _121.MsgCancelUpgradeResponseProtoMsg): _121.MsgCancelUpgradeResponse;
                toProto(message: _121.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _120.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_120.QueryCurrentPlanRequest>): _120.QueryCurrentPlanRequest;
                fromAmino(_: _120.QueryCurrentPlanRequestAmino): _120.QueryCurrentPlanRequest;
                toAmino(_: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _120.QueryCurrentPlanRequestAminoMsg): _120.QueryCurrentPlanRequest;
                toAminoMsg(message: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _120.QueryCurrentPlanRequestProtoMsg): _120.QueryCurrentPlanRequest;
                toProto(message: _120.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _120.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_120.QueryCurrentPlanResponse>): _120.QueryCurrentPlanResponse;
                fromAmino(object: _120.QueryCurrentPlanResponseAmino): _120.QueryCurrentPlanResponse;
                toAmino(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _120.QueryCurrentPlanResponseAminoMsg): _120.QueryCurrentPlanResponse;
                toAminoMsg(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _120.QueryCurrentPlanResponseProtoMsg): _120.QueryCurrentPlanResponse;
                toProto(message: _120.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _120.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_120.QueryAppliedPlanRequest>): _120.QueryAppliedPlanRequest;
                fromAmino(object: _120.QueryAppliedPlanRequestAmino): _120.QueryAppliedPlanRequest;
                toAmino(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _120.QueryAppliedPlanRequestAminoMsg): _120.QueryAppliedPlanRequest;
                toAminoMsg(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _120.QueryAppliedPlanRequestProtoMsg): _120.QueryAppliedPlanRequest;
                toProto(message: _120.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _120.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_120.QueryAppliedPlanResponse>): _120.QueryAppliedPlanResponse;
                fromAmino(object: _120.QueryAppliedPlanResponseAmino): _120.QueryAppliedPlanResponse;
                toAmino(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _120.QueryAppliedPlanResponseAminoMsg): _120.QueryAppliedPlanResponse;
                toAminoMsg(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _120.QueryAppliedPlanResponseProtoMsg): _120.QueryAppliedPlanResponse;
                toProto(message: _120.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _120.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_120.QueryUpgradedConsensusStateRequest>): _120.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _120.QueryUpgradedConsensusStateRequestAmino): _120.QueryUpgradedConsensusStateRequest;
                toAmino(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _120.QueryUpgradedConsensusStateRequestAminoMsg): _120.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _120.QueryUpgradedConsensusStateRequestProtoMsg): _120.QueryUpgradedConsensusStateRequest;
                toProto(message: _120.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _120.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_120.QueryUpgradedConsensusStateResponse>): _120.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _120.QueryUpgradedConsensusStateResponseAmino): _120.QueryUpgradedConsensusStateResponse;
                toAmino(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _120.QueryUpgradedConsensusStateResponseAminoMsg): _120.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _120.QueryUpgradedConsensusStateResponseProtoMsg): _120.QueryUpgradedConsensusStateResponse;
                toProto(message: _120.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _120.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_120.QueryModuleVersionsRequest>): _120.QueryModuleVersionsRequest;
                fromAmino(object: _120.QueryModuleVersionsRequestAmino): _120.QueryModuleVersionsRequest;
                toAmino(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _120.QueryModuleVersionsRequestAminoMsg): _120.QueryModuleVersionsRequest;
                toAminoMsg(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _120.QueryModuleVersionsRequestProtoMsg): _120.QueryModuleVersionsRequest;
                toProto(message: _120.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _120.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_120.QueryModuleVersionsResponse>): _120.QueryModuleVersionsResponse;
                fromAmino(object: _120.QueryModuleVersionsResponseAmino): _120.QueryModuleVersionsResponse;
                toAmino(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _120.QueryModuleVersionsResponseAminoMsg): _120.QueryModuleVersionsResponse;
                toAminoMsg(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _120.QueryModuleVersionsResponseProtoMsg): _120.QueryModuleVersionsResponse;
                toProto(message: _120.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _120.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.QueryAuthorityRequest;
                fromPartial(_: Partial<_120.QueryAuthorityRequest>): _120.QueryAuthorityRequest;
                fromAmino(_: _120.QueryAuthorityRequestAmino): _120.QueryAuthorityRequest;
                toAmino(_: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _120.QueryAuthorityRequestAminoMsg): _120.QueryAuthorityRequest;
                toAminoMsg(message: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _120.QueryAuthorityRequestProtoMsg): _120.QueryAuthorityRequest;
                toProto(message: _120.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _120.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.QueryAuthorityResponse;
                fromPartial(object: Partial<_120.QueryAuthorityResponse>): _120.QueryAuthorityResponse;
                fromAmino(object: _120.QueryAuthorityResponseAmino): _120.QueryAuthorityResponse;
                toAmino(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _120.QueryAuthorityResponseAminoMsg): _120.QueryAuthorityResponse;
                toAminoMsg(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _120.QueryAuthorityResponseProtoMsg): _120.QueryAuthorityResponse;
                toProto(message: _120.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _123.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _123.Module;
                    fromPartial(_: Partial<_123.Module>): _123.Module;
                    fromAmino(_: _123.ModuleAmino): _123.Module;
                    toAmino(_: _123.Module): _123.ModuleAmino;
                    fromAminoMsg(object: _123.ModuleAminoMsg): _123.Module;
                    toAminoMsg(message: _123.Module): _123.ModuleAminoMsg;
                    fromProtoMsg(message: _123.ModuleProtoMsg): _123.Module;
                    toProto(message: _123.Module): Uint8Array;
                    toProtoMsg(message: _123.Module): _123.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCreateVestingAccount) => _124.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _124.MsgCreateVestingAccountAmino) => _124.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCreatePermanentLockedAccount) => _124.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _124.MsgCreatePermanentLockedAccountAmino) => _124.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCreatePeriodicVestingAccount) => _124.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _124.MsgCreatePeriodicVestingAccountAmino) => _124.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _125.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.BaseVestingAccount;
                fromPartial(object: Partial<_125.BaseVestingAccount>): _125.BaseVestingAccount;
                fromAmino(object: _125.BaseVestingAccountAmino): _125.BaseVestingAccount;
                toAmino(message: _125.BaseVestingAccount): _125.BaseVestingAccountAmino;
                fromAminoMsg(object: _125.BaseVestingAccountAminoMsg): _125.BaseVestingAccount;
                toAminoMsg(message: _125.BaseVestingAccount): _125.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _125.BaseVestingAccountProtoMsg): _125.BaseVestingAccount;
                toProto(message: _125.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _125.BaseVestingAccount): _125.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _125.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.ContinuousVestingAccount;
                fromPartial(object: Partial<_125.ContinuousVestingAccount>): _125.ContinuousVestingAccount;
                fromAmino(object: _125.ContinuousVestingAccountAmino): _125.ContinuousVestingAccount;
                toAmino(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _125.ContinuousVestingAccountAminoMsg): _125.ContinuousVestingAccount;
                toAminoMsg(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _125.ContinuousVestingAccountProtoMsg): _125.ContinuousVestingAccount;
                toProto(message: _125.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _125.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.DelayedVestingAccount;
                fromPartial(object: Partial<_125.DelayedVestingAccount>): _125.DelayedVestingAccount;
                fromAmino(object: _125.DelayedVestingAccountAmino): _125.DelayedVestingAccount;
                toAmino(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountAmino;
                fromAminoMsg(object: _125.DelayedVestingAccountAminoMsg): _125.DelayedVestingAccount;
                toAminoMsg(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _125.DelayedVestingAccountProtoMsg): _125.DelayedVestingAccount;
                toProto(message: _125.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _125.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.Period;
                fromPartial(object: Partial<_125.Period>): _125.Period;
                fromAmino(object: _125.PeriodAmino): _125.Period;
                toAmino(message: _125.Period): _125.PeriodAmino;
                fromAminoMsg(object: _125.PeriodAminoMsg): _125.Period;
                toAminoMsg(message: _125.Period): _125.PeriodAminoMsg;
                fromProtoMsg(message: _125.PeriodProtoMsg): _125.Period;
                toProto(message: _125.Period): Uint8Array;
                toProtoMsg(message: _125.Period): _125.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _125.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.PeriodicVestingAccount;
                fromPartial(object: Partial<_125.PeriodicVestingAccount>): _125.PeriodicVestingAccount;
                fromAmino(object: _125.PeriodicVestingAccountAmino): _125.PeriodicVestingAccount;
                toAmino(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _125.PeriodicVestingAccountAminoMsg): _125.PeriodicVestingAccount;
                toAminoMsg(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _125.PeriodicVestingAccountProtoMsg): _125.PeriodicVestingAccount;
                toProto(message: _125.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _125.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.PermanentLockedAccount;
                fromPartial(object: Partial<_125.PermanentLockedAccount>): _125.PermanentLockedAccount;
                fromAmino(object: _125.PermanentLockedAccountAmino): _125.PermanentLockedAccount;
                toAmino(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountAmino;
                fromAminoMsg(object: _125.PermanentLockedAccountAminoMsg): _125.PermanentLockedAccount;
                toAminoMsg(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _125.PermanentLockedAccountProtoMsg): _125.PermanentLockedAccount;
                toProto(message: _125.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _124.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgCreateVestingAccount;
                fromPartial(object: Partial<_124.MsgCreateVestingAccount>): _124.MsgCreateVestingAccount;
                fromAmino(object: _124.MsgCreateVestingAccountAmino): _124.MsgCreateVestingAccount;
                toAmino(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _124.MsgCreateVestingAccountAminoMsg): _124.MsgCreateVestingAccount;
                toAminoMsg(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _124.MsgCreateVestingAccountProtoMsg): _124.MsgCreateVestingAccount;
                toProto(message: _124.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _124.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_124.MsgCreateVestingAccountResponse>): _124.MsgCreateVestingAccountResponse;
                fromAmino(_: _124.MsgCreateVestingAccountResponseAmino): _124.MsgCreateVestingAccountResponse;
                toAmino(_: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _124.MsgCreateVestingAccountResponseAminoMsg): _124.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCreateVestingAccountResponseProtoMsg): _124.MsgCreateVestingAccountResponse;
                toProto(message: _124.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _124.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_124.MsgCreatePermanentLockedAccount>): _124.MsgCreatePermanentLockedAccount;
                fromAmino(object: _124.MsgCreatePermanentLockedAccountAmino): _124.MsgCreatePermanentLockedAccount;
                toAmino(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _124.MsgCreatePermanentLockedAccountAminoMsg): _124.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePermanentLockedAccountProtoMsg): _124.MsgCreatePermanentLockedAccount;
                toProto(message: _124.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _124.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_124.MsgCreatePermanentLockedAccountResponse>): _124.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _124.MsgCreatePermanentLockedAccountResponseAmino): _124.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _124.MsgCreatePermanentLockedAccountResponseAminoMsg): _124.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePermanentLockedAccountResponseProtoMsg): _124.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _124.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _124.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_124.MsgCreatePeriodicVestingAccount>): _124.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _124.MsgCreatePeriodicVestingAccountAmino): _124.MsgCreatePeriodicVestingAccount;
                toAmino(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _124.MsgCreatePeriodicVestingAccountAminoMsg): _124.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePeriodicVestingAccountProtoMsg): _124.MsgCreatePeriodicVestingAccount;
                toProto(message: _124.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _124.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _124.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_124.MsgCreatePeriodicVestingAccountResponse>): _124.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _124.MsgCreatePeriodicVestingAccountResponseAmino): _124.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _124.MsgCreatePeriodicVestingAccountResponseAminoMsg): _124.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePeriodicVestingAccountResponseProtoMsg): _124.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _124.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _285.MsgClientImpl;
                };
                authz: {
                    v1beta1: _286.MsgClientImpl;
                };
                bank: {
                    v1beta1: _287.MsgClientImpl;
                };
                consensus: {
                    v1: _288.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _289.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _290.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _291.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _292.MsgClientImpl;
                };
                gov: {
                    v1: _293.MsgClientImpl;
                    v1beta1: _294.MsgClientImpl;
                };
                group: {
                    v1: _295.MsgClientImpl;
                };
                mint: {
                    v1beta1: _296.MsgClientImpl;
                };
                nft: {
                    v1beta1: _297.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _298.MsgClientImpl;
                };
                staking: {
                    v1beta1: _299.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _300.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _301.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _10.QueryConfigRequest): Promise<_10.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _14.QueryAccountsRequest): Promise<_14.QueryAccountsResponse>;
                        account(request: _14.QueryAccountRequest): Promise<_14.QueryAccountResponse>;
                        accountAddressByID(request: _14.QueryAccountAddressByIDRequest): Promise<_14.QueryAccountAddressByIDResponse>;
                        params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                        moduleAccounts(request?: _14.QueryModuleAccountsRequest): Promise<_14.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _14.QueryModuleAccountByNameRequest): Promise<_14.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _14.Bech32PrefixRequest): Promise<_14.Bech32PrefixResponse>;
                        addressBytesToString(request: _14.AddressBytesToStringRequest): Promise<_14.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _14.AddressStringToBytesRequest): Promise<_14.AddressStringToBytesResponse>;
                        accountInfo(request: _14.QueryAccountInfoRequest): Promise<_14.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _20.QueryGrantsRequest): Promise<_20.QueryGrantsResponse>;
                        granterGrants(request: _20.QueryGranterGrantsRequest): Promise<_20.QueryGranterGrantsResponse>;
                        granteeGrants(request: _20.QueryGranteeGrantsRequest): Promise<_20.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _23.AppOptionsRequest): Promise<_23.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _28.QueryBalanceRequest): Promise<_28.QueryBalanceResponse>;
                        allBalances(request: _28.QueryAllBalancesRequest): Promise<_28.QueryAllBalancesResponse>;
                        spendableBalances(request: _28.QuerySpendableBalancesRequest): Promise<_28.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _28.QuerySpendableBalanceByDenomRequest): Promise<_28.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _28.QueryTotalSupplyRequest): Promise<_28.QueryTotalSupplyResponse>;
                        supplyOf(request: _28.QuerySupplyOfRequest): Promise<_28.QuerySupplyOfResponse>;
                        params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        denomMetadata(request: _28.QueryDenomMetadataRequest): Promise<_28.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _28.QueryDenomsMetadataRequest): Promise<_28.QueryDenomsMetadataResponse>;
                        denomOwners(request: _28.QueryDenomOwnersRequest): Promise<_28.QueryDenomOwnersResponse>;
                        sendEnabled(request: _28.QuerySendEnabledRequest): Promise<_28.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _32.ConfigRequest): Promise<_32.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _39.GetNodeInfoRequest): Promise<_39.GetNodeInfoResponse>;
                            getSyncing(request?: _39.GetSyncingRequest): Promise<_39.GetSyncingResponse>;
                            getLatestBlock(request?: _39.GetLatestBlockRequest): Promise<_39.GetLatestBlockResponse>;
                            getBlockByHeight(request: _39.GetBlockByHeightRequest): Promise<_39.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _39.GetLatestValidatorSetRequest): Promise<_39.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _39.GetValidatorSetByHeightRequest): Promise<_39.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _39.ABCIQueryRequest): Promise<_39.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _46.QueryParamsRequest): Promise<_46.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        validatorDistributionInfo(request: _60.QueryValidatorDistributionInfoRequest): Promise<_60.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _60.QueryValidatorOutstandingRewardsRequest): Promise<_60.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _60.QueryValidatorCommissionRequest): Promise<_60.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _60.QueryValidatorSlashesRequest): Promise<_60.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _60.QueryDelegationRewardsRequest): Promise<_60.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _60.QueryDelegationTotalRewardsRequest): Promise<_60.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _60.QueryDelegatorValidatorsRequest): Promise<_60.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _60.QueryDelegatorWithdrawAddressRequest): Promise<_60.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _60.QueryCommunityPoolRequest): Promise<_60.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _65.QueryEvidenceRequest): Promise<_65.QueryEvidenceResponse>;
                        allEvidence(request?: _65.QueryAllEvidenceRequest): Promise<_65.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _70.QueryAllowanceRequest): Promise<_70.QueryAllowanceResponse>;
                        allowances(request: _70.QueryAllowancesRequest): Promise<_70.QueryAllowancesResponse>;
                        allowancesByGranter(request: _70.QueryAllowancesByGranterRequest): Promise<_70.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _77.QueryProposalRequest): Promise<_77.QueryProposalResponse>;
                        proposals(request: _77.QueryProposalsRequest): Promise<_77.QueryProposalsResponse>;
                        vote(request: _77.QueryVoteRequest): Promise<_77.QueryVoteResponse>;
                        votes(request: _77.QueryVotesRequest): Promise<_77.QueryVotesResponse>;
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        deposit(request: _77.QueryDepositRequest): Promise<_77.QueryDepositResponse>;
                        deposits(request: _77.QueryDepositsRequest): Promise<_77.QueryDepositsResponse>;
                        tallyResult(request: _77.QueryTallyResultRequest): Promise<_77.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _81.QueryProposalRequest): Promise<_81.QueryProposalResponse>;
                        proposals(request: _81.QueryProposalsRequest): Promise<_81.QueryProposalsResponse>;
                        vote(request: _81.QueryVoteRequest): Promise<_81.QueryVoteResponse>;
                        votes(request: _81.QueryVotesRequest): Promise<_81.QueryVotesResponse>;
                        params(request: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        deposit(request: _81.QueryDepositRequest): Promise<_81.QueryDepositResponse>;
                        deposits(request: _81.QueryDepositsRequest): Promise<_81.QueryDepositsResponse>;
                        tallyResult(request: _81.QueryTallyResultRequest): Promise<_81.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _86.QueryGroupInfoRequest): Promise<_86.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _86.QueryGroupPolicyInfoRequest): Promise<_86.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _86.QueryGroupMembersRequest): Promise<_86.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _86.QueryGroupsByAdminRequest): Promise<_86.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _86.QueryGroupPoliciesByGroupRequest): Promise<_86.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _86.QueryGroupPoliciesByAdminRequest): Promise<_86.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _86.QueryProposalRequest): Promise<_86.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _86.QueryProposalsByGroupPolicyRequest): Promise<_86.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _86.QueryVoteByProposalVoterRequest): Promise<_86.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _86.QueryVotesByProposalRequest): Promise<_86.QueryVotesByProposalResponse>;
                        votesByVoter(request: _86.QueryVotesByVoterRequest): Promise<_86.QueryVotesByVoterResponse>;
                        groupsByMember(request: _86.QueryGroupsByMemberRequest): Promise<_86.QueryGroupsByMemberResponse>;
                        tallyResult(request: _86.QueryTallyResultRequest): Promise<_86.QueryTallyResultResponse>;
                        groups(request?: _86.QueryGroupsRequest): Promise<_86.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                        inflation(request?: _92.QueryInflationRequest): Promise<_92.QueryInflationResponse>;
                        annualProvisions(request?: _92.QueryAnnualProvisionsRequest): Promise<_92.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _99.QueryBalanceRequest): Promise<_99.QueryBalanceResponse>;
                        owner(request: _99.QueryOwnerRequest): Promise<_99.QueryOwnerResponse>;
                        supply(request: _99.QuerySupplyRequest): Promise<_99.QuerySupplyResponse>;
                        nFTs(request: _99.QueryNFTsRequest): Promise<_99.QueryNFTsResponse>;
                        nFT(request: _99.QueryNFTRequest): Promise<_99.QueryNFTResponse>;
                        class(request: _99.QueryClassRequest): Promise<_99.QueryClassResponse>;
                        classes(request?: _99.QueryClassesRequest): Promise<_99.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _102.GetRequest): Promise<_102.GetResponse>;
                            list(request: _102.ListRequest): Promise<_102.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                        subspaces(request?: _107.QuerySubspacesRequest): Promise<_107.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                        signingInfo(request: _112.QuerySigningInfoRequest): Promise<_112.QuerySigningInfoResponse>;
                        signingInfos(request?: _112.QuerySigningInfosRequest): Promise<_112.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _3.QueryValidatorsRequest): Promise<_3.QueryValidatorsResponse>;
                        validator(request: _3.QueryValidatorRequest): Promise<_3.QueryValidatorResponse>;
                        validatorDelegations(request: _3.QueryValidatorDelegationsRequest): Promise<_3.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _3.QueryValidatorUnbondingDelegationsRequest): Promise<_3.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _3.QueryDelegationRequest): Promise<_3.QueryDelegationResponse>;
                        unbondingDelegation(request: _3.QueryUnbondingDelegationRequest): Promise<_3.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _3.QueryDelegatorDelegationsRequest): Promise<_3.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _3.QueryDelegatorUnbondingDelegationsRequest): Promise<_3.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _3.QueryRedelegationsRequest): Promise<_3.QueryRedelegationsResponse>;
                        delegatorValidators(request: _3.QueryDelegatorValidatorsRequest): Promise<_3.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _3.QueryDelegatorValidatorRequest): Promise<_3.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _3.QueryHistoricalInfoRequest): Promise<_3.QueryHistoricalInfoResponse>;
                        pool(request?: _3.QueryPoolRequest): Promise<_3.QueryPoolResponse>;
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _117.SimulateRequest): Promise<_117.SimulateResponse>;
                        getTx(request: _117.GetTxRequest): Promise<_117.GetTxResponse>;
                        broadcastTx(request: _117.BroadcastTxRequest): Promise<_117.BroadcastTxResponse>;
                        getTxsEvent(request: _117.GetTxsEventRequest): Promise<_117.GetTxsEventResponse>;
                        getBlockWithTxs(request: _117.GetBlockWithTxsRequest): Promise<_117.GetBlockWithTxsResponse>;
                        txDecode(request: _117.TxDecodeRequest): Promise<_117.TxDecodeResponse>;
                        txEncode(request: _117.TxEncodeRequest): Promise<_117.TxEncodeResponse>;
                        txEncodeAmino(request: _117.TxEncodeAminoRequest): Promise<_117.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _117.TxDecodeAminoRequest): Promise<_117.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _120.QueryCurrentPlanRequest): Promise<_120.QueryCurrentPlanResponse>;
                        appliedPlan(request: _120.QueryAppliedPlanRequest): Promise<_120.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _120.QueryUpgradedConsensusStateRequest): Promise<_120.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _120.QueryModuleVersionsRequest): Promise<_120.QueryModuleVersionsResponse>;
                        authority(request?: _120.QueryAuthorityRequest): Promise<_120.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _244.LCDQueryClient;
                };
                authz: {
                    v1beta1: _245.LCDQueryClient;
                };
                bank: {
                    v1beta1: _246.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _247.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _248.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _249.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _250.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _251.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _252.LCDQueryClient;
                };
                gov: {
                    v1: _253.LCDQueryClient;
                    v1beta1: _254.LCDQueryClient;
                };
                group: {
                    v1: _255.LCDQueryClient;
                };
                mint: {
                    v1beta1: _256.LCDQueryClient;
                };
                nft: {
                    v1beta1: _257.LCDQueryClient;
                };
                params: {
                    v1beta1: _258.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _259.LCDQueryClient;
                };
                staking: {
                    v1beta1: _260.LCDQueryClient;
                };
                tx: {
                    v1beta1: _261.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _262.LCDQueryClient;
                };
            };
        }>;
    };
}
