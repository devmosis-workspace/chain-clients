import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorization {
    /**
     * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
     * the purpose of deployment.
     */
    spendLimit?: Coin;
}
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationSDKType {
    spend_limit?: CoinSDKType;
}
export declare const DepositDeploymentAuthorization: {
    encode(message: DepositDeploymentAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DepositDeploymentAuthorization;
    fromPartial(object: Partial<DepositDeploymentAuthorization>): DepositDeploymentAuthorization;
};
