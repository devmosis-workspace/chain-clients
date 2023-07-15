import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as emAuthorityV1TxRegistry from "./authority/v1/tx.registry";
import * as emIssuerV1TxRegistry from "./issuer/v1/tx.registry";
import * as emLiquidityproviderV1TxRegistry from "./liquidityprovider/v1/tx.registry";
import * as emMarketV1TxRegistry from "./market/v1/tx.registry";
import * as emAuthorityV1TxAmino from "./authority/v1/tx.amino";
import * as emIssuerV1TxAmino from "./issuer/v1/tx.amino";
import * as emLiquidityproviderV1TxAmino from "./liquidityprovider/v1/tx.amino";
import * as emMarketV1TxAmino from "./market/v1/tx.amino";
export const emAminoConverters = {
  ...emAuthorityV1TxAmino.AminoConverter,
  ...emIssuerV1TxAmino.AminoConverter,
  ...emLiquidityproviderV1TxAmino.AminoConverter,
  ...emMarketV1TxAmino.AminoConverter
};
export const emProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...emAuthorityV1TxRegistry.registry, ...emIssuerV1TxRegistry.registry, ...emLiquidityproviderV1TxRegistry.registry, ...emMarketV1TxRegistry.registry];
export const getSigningEmClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...emProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...emAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningEmClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningEmClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};