/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { label, overrides, ...rest } = props;
  return (
    <View
      width="675px"
      height="105px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="675px"
        height="52px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        bottom="53px"
        left="0px"
        right="0px"
        border="5px SOLID rgba(42,94,226,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="5px 15px 5px 15px"
        backgroundColor="rgba(255,201,201,1)"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="29.045454025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sample application"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="675px"
        height="57px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="48px"
        bottom="0px"
        left="0px"
        right="0px"
        padding="10px 20px 10px 20px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sample component"
          {...getOverrideProps(overrides, "Sample component")}
        ></Text>
      </Flex>
    </View>
  );
}
