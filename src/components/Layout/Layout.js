import React from 'react';
import styled from '@emotion/styled';
import { Typography, IconButton } from '@material-ui/core';
import { ArrowBack, Close } from '@material-ui/icons';

import Tray from '../Tray';
import GraphEditor from '../GraphEditor';
import StepEditor from '../StepEditor';
import FieldEditor from '../FieldEditor';

const stepEditorPaneWidth = '500px';
const fieldEditorPaneWidth = '400px';

const S = {
  Root: styled.div`
    background: #eeeeee;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  TitleContainer: styled.div`
    padding: 0.5rem;
    color: darkblue;
  `,
  Content: styled.div`
    border-top: 1px solid darkgrey;
    display: flex;
    flex-grow: 1;
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
    box-shadow: ${p => p.dropShadow ? '5px 0px 5px 0px rgba(100,100,100,0.51)' : 'none'};
    cursor: ${p => p.isOpen ? 'auto' : 'pointer'};
    min-width: ${p => (p.isOpen ? stepEditorPaneWidth : "50px")};
    overflow-x: hidden;
    overflow-y: ${p => p.isOpen ? 'scroll' : 'hidden'};
    position: relative;
    transition: all 500ms ease-in-out;
    width: ${p => (p.isOpen ? stepEditorPaneWidth : "50px")};
    z-index: ${p => p.zIndex ? p.zIndex : 0};
  `,
  StepEditorTitleContainer: styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    opacity: 0.8;
    transition: all 500ms ease-in-out;
    transform: ${p => p.isOpen ? '' : 'translate(-5px, 30px) scale(0.8) rotate(-90deg)'};
    transform-origin: bottom right;
  `,
  FieldEditorContainer: styled.div`
    background: ${p => p.background};
    border-right: ${p => p.isOpen && !p.dropShadow ? '1px solid darkgrey' : 'none'};
    box-shadow: ${p => p.dropShadow ? '5px 0px 5px 0px rgba(0,0,0,0.51)' : 'none'};
    min-width: ${p => (p.isOpen ? fieldEditorPaneWidth : "0")};
    overflow-x: hidden;
    overflow-y: ${p => p.isOpen ? 'scroll' : 'hidden'};
    position: relative;
    transition: all 500ms ease-in-out;
    width: ${p => (p.isOpen ? fieldEditorPaneWidth : 0)};
    z-index: ${p => p.zIndex ? p.zIndex : 0};
  `,
  FieldEditorTitleContainer: styled.div`
    margin-top: 2rem;
    margin-bottom: 1.75rem;
    opacity: 0.85;
  `,
  EditorWrapper: styled.div`
    opacity: ${p => p.isOpen ? 1 : 0};
    padding: 2rem;
    padding-top: 0;
    transition: all 500ms ease-in-out;
    width: ${p => p.isStepEditor ? stepEditorPaneWidth : fieldEditorPaneWidth};
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
  stepIsOpen,
  fieldIsOpen,
  selectedStepIds,
  setStepIsOpen,
  closeField,
}) => {
  const toggleStepIsOpen = () => setStepIsOpen(!stepIsOpen);
  return (
    <S.Root>
      <S.TitleContainer>
        <Typography variant="h3" align="center">Drag 'n' Flow Designer</Typography>
      </S.TitleContainer>
      <S.Content>
        <S.StepEditorContainer
          background="#CCCCCC"
          dropShadow={stepIsOpen && fieldIsOpen}
          isOpen={stepIsOpen}
          onClick={stepIsOpen ? null : toggleStepIsOpen}
          zIndex={1}
        >
          <CloseButton
            onClick={toggleStepIsOpen}
            isOpen={stepIsOpen}
            icon={<ArrowBack fontSize="inherit" />}
          />
          <S.StepEditorTitleContainer isOpen={stepIsOpen}>
            <Typography variant="h3" align="center">
              Step
            </Typography>
          </S.StepEditorTitleContainer>
          <S.EditorWrapper isOpen={stepIsOpen} isStepEditor>
            <StepEditor />
          </S.EditorWrapper>
        </S.StepEditorContainer>
        <S.FieldEditorContainer
          isOpen={stepIsOpen && fieldIsOpen}
          background="lightblue"
        >
          <CloseButton
            onClick={closeField}
            isOpen={true} // TODO: This is a hack, fix it by creating separate components for field and step close buttons.
            icon={<Close fontSize="inherit" />}
          />
          <S.FieldEditorTitleContainer>
            <Typography variant="h4" align="center" gutterBottom>Field</Typography>
          </S.FieldEditorTitleContainer>
          <S.EditorWrapper isOpen={stepIsOpen && fieldIsOpen}>
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
