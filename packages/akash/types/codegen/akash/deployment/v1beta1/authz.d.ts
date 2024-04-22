import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorization {
    $typeUrl?: "/akash.deployment.v1beta1.DepositDeploymentAuthorization";
    /**
     * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
     * the purpose of deployment.
     */
    spendLimit: Coin;
}
export interface DepositDeploymentAuthorizationProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization";
    value: Uint8Array;
}
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationAmino {
    /**
     * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
     * the purpose of deployment.
     */
    spend_limit?: CoinAmino;
}
export interface DepositDeploymentAuthorizationAminoMsg {
    type: "/akash.deployment.v1beta1.DepositDeploymentAuthorization";
    value: DepositDeploymentAuthorizationAmino;
}
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationSDKType {
    $typeUrl?: "/akash.deployment.v1beta1.DepositDeploymentAuthorization";
    spend_limit: CoinSDKType;
}
export declare const DepositDeploymentAuthorization: {
    typeUrl: string;
    encode(message: DepositDeploymentAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositDeploymentAuthorization;
    fromPartial(object: Partial<DepositDeploymentAuthorization>): DepositDeploymentAuthorization;
    fromAmino(object: DepositDeploymentAuthorizationAmino): DepositDeploymentAuthorization;
    toAmino(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationAmino;
    fromAminoMsg(object: DepositDeploymentAuthorizationAminoMsg): DepositDeploymentAuthorization;
    fromProtoMsg(message: DepositDeploymentAuthorizationProtoMsg): DepositDeploymentAuthorization;
    toProto(message: DepositDeploymentAuthorization): Uint8Array;
    toProtoMsg(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationProtoMsg;
};
