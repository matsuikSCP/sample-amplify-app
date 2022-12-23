/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function BoardComponent(props) {
  const { board, overrides, ...rest } = props;
  return (
    <View
      width="505px"
      height="109px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "BoardComponent")}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="480px"
        height="36px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9px"
        left="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.message}
        {...getOverrideProps(overrides, "message")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="354px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="45px"
        left="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.name}
        {...getOverrideProps(overrides, "name createdAt")}
      ></Text>
      <Image
        width="70px"
        height="90px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="9px"
        right="17px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={board?.image}
        {...getOverrideProps(overrides, "character")}
      ></Image>
    </View>
  );
}
