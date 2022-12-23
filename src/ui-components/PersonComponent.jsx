/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PersonComponent(props) {
  const { person, overrides, ...rest } = props;
  return (
    <View
      width="434px"
      height="164px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "PersonComponent")}
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
        width="341px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="11px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.name}
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.363636016845703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="341px"
        height="28px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="69px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.email}
        {...getOverrideProps(overrides, "email")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.363636016845703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="341px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="97px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.tel}
        {...getOverrideProps(overrides, "tel")}
      ></Text>
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
        width="58px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="11px"
        right="18px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.age}
        {...getOverrideProps(overrides, "age")}
      ></Text>
    </View>
  );
}
