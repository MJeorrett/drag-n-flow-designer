import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Typography, IconButton } from '@material-ui/core';
import { ArrowBack, Close } from '@material-ui/icons';

import Tray from '../Tray';
import GraphEditor from '../GraphEditor';
import StepEditor from '../StepEditor';
import FieldEditor from '../FieldEditor';

const S = {
  Root: styled.div`
    background: #eeeeee;
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
    transform: ${p => p.isOpen ? 'rotate(0deg) translateX(0)' : 'rotate(180deg) translateX(-1rem)'};
    transition: all 500ms ease-in-out;
    z-index: 2;
  `,
  StepEditorContainer: styled.div`
    background: ${p => p.background};
    border-right: ${p => p.dropShadow ? 'none' : '1px solid darkgrey'};
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: all 500ms ease-in-out;
    width: ${p => (p.isOpen ? "400px" : "50px")};
    box-shadow: ${p => p.dropShadow ? '5px 0px 5px 0px rgba(0,0,0,0.51)' : 'none'};
    z-index: ${p => p.zIndex ? p.zIndex : 0};
  `,
  FieldEditorContainer: styled.div`
    background: ${p => p.background};
    border-right: ${p => p.isOpen && !p.dropShadow ? '1px solid darkgrey' : 'none'};
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: all 500ms ease-in-out;
    width: ${p => (p.isOpen ? "400px" : "0")};
    box-shadow: ${p => p.dropShadow ? '5px 0px 5px 0px rgba(0,0,0,0.51)' : 'none'};
    z-index: ${p => p.zIndex ? p.zIndex : 0};
  `,
  EditorWrapper: styled.div`
    opacity: ${p => p.isOpen ? 1 : 0};
    height: 100%;
    padding: 2rem;
    transition: all 500ms ease-in-out;
    width: 400px;
  `,
  GraphEditorWrapper: styled.div`
      position: relative;
      width: 100%;
      height: 100%;
  `,
  TrayWrapper: styled.div`
    background: #eeeeee;
    opacity: 0.9;
    border-right: 1px solid darkgrey;
    border-bottom: 1px solid darkgrey;
    border-bottom-right-radius: 4px;
    left: 0;
    padding: 1rem;
    position: absolute;
    top: 0;
    width: 100px;
    z-index: 1;
  `,
};

const CloseButton = ({
  onClick,
  isOpen,
  icon
}) => (
  <S.CloseButtonContainer isOpen={isOpen}>
    <IconButton aria-label="close" onClick={onClick}>
      {icon}
    </IconButton>
  </S.CloseButtonContainer>
);

const Layout = ({
  engine,
  fieldIsOpen,
  closeStep,
  closeField,
}) => {
  const [stepIsOpen, setStepIsOpen] = useState(true);
  return (
    <S.Root>
      <Typography variant="h3" gutterBottom align="center" color="primary">Siccar Designer</Typography>
      <S.Content>
        <S.StepEditorContainer
          isOpen={stepIsOpen}
          background="lightblue"
          zIndex={1}
          dropShadow={fieldIsOpen}
        >
          <CloseButton
            onClick={() => setStepIsOpen(!stepIsOpen)}
            isOpen={stepIsOpen}
            icon={<ArrowBack fontSize="inherit" />}
          />
          <S.EditorWrapper isOpen={stepIsOpen}>
            <Typography variant="h3" gutterBottom color="primary">Edit Step</Typography>
            <StepEditor />
          </S.EditorWrapper>
        </S.StepEditorContainer>
        <S.FieldEditorContainer
          isOpen={fieldIsOpen}
          background="lightblue"
        >
          <CloseButton
            onClick={closeField}
            isOpen={true} // TODO: This is a hack, fix it by creating separate components for field and step close buttons.
            icon={<Close fontSize="inherit" />}
          />
          <S.EditorWrapper isOpen={fieldIsOpen}>
            <Typography variant="h4" gutterBottom color="primary">Edit Field</Typography>
            <FieldEditor />
          </S.EditorWrapper>
        </S.FieldEditorContainer>
        <S.GraphEditorWrapper>
          <S.TrayWrapper>
            <Tray />
          </S.TrayWrapper>
          <GraphEditor engine={engine} />
        </S.GraphEditorWrapper>
      </S.Content>
    </S.Root>
  );
};

export default Layout;
