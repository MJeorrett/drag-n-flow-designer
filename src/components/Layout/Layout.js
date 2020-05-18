import React from 'react';
import styled from '@emotion/styled';
import { Typography, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import Tray from '../Tray';
import GraphEditor from '../GraphEditor';
import StepEditor from '../StepEditor';
import FieldEditor from '../FieldEditor';

const S = {
  Root: styled.div`
    background: #EEE;
    height: 100%;
  `,
  Content: styled.div`
    border-top: 1px solid darkgrey;
    display: flex;
    height: calc(100% - 72.8px);
    overflow: hidden;
  `,
  CloseButtonContainer: styled.div`
    margin: 1rem;
    position: absolute !important;
    right: 0;
    top: 0;
  `,
  EditorContainer: styled.div`
    background: ${p => p.background};
    border-right: ${p => p.isOpen && !p.dropShadow ? '1px solid darkgrey' : 'none'};
    height: 100%;
    overflow: hidden;
    transition: all 500ms ease-in-out;
    width: ${p => (p.isOpen ? "400px" : "0")};
    box-shadow: ${p => p.dropShadow ? '5px 0px 5px 0px rgba(0,0,0,0.51)' : 'none'};
    z-index: ${p => p.zIndex ? p.zIndex : 0};
  `,
  EditorWrapper: styled.div`
    height: 100%;
    padding: 2rem;
    position: relative;
    width: 400px;
  `,
  TrayWrapper: styled.div`
    border-right: 1px solid darkgrey;
    padding: 1rem;
    width: 100px;
  `,
};

const CloseButton = ({
  onClick
}) => (
  <S.CloseButtonContainer>
    <IconButton aria-label="close" onClick={onClick}>
      <ArrowBack fontSize="inherit" />
    </IconButton>
  </S.CloseButtonContainer>
);

const Layout = ({
  engine,
  stepIsOpen,
  fieldIsOpen,
  closeStep,
  closeField,
}) => {
  return (
    <S.Root>
      <Typography variant="h3" gutterBottom align="center" color="primary">Siccar Designer</Typography>
      <S.Content>
        <S.EditorContainer
          isOpen={stepIsOpen}
          background="lightblue"
          zIndex={1}
          dropShadow={fieldIsOpen}
        >
          <S.EditorWrapper>
            <CloseButton onClick={closeStep} />
            <Typography variant="h3" gutterBottom color="primary">Edit Step</Typography>
            <StepEditor />
          </S.EditorWrapper>
        </S.EditorContainer>
        <S.EditorContainer
          isOpen={fieldIsOpen}
          background="lightblue"
        >
          <S.EditorWrapper>
            <CloseButton onClick={closeField} />
            <Typography variant="h4" gutterBottom color="primary">Edit Field</Typography>
            <FieldEditor />
          </S.EditorWrapper>
        </S.EditorContainer>
        <S.TrayWrapper>
          <Tray />
        </S.TrayWrapper>
        <GraphEditor engine={engine} />
      </S.Content>
    </S.Root>
  );
};

export default Layout;
