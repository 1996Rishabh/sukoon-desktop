import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from "@material-ui/core/Fade";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function TriggersTooltips(props) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  return (
    <div>
      <Grid container justify="center">
        {/*<Grid item>*/}
        {/*  <Tooltip disableFocusListener title="Add">*/}
        {/*    <Button>Hover or touch</Button>*/}
        {/*  </Tooltip>*/}
        {/*</Grid>*/}
        {/*<Grid item>*/}
        {/*  <Tooltip disableHoverListener title="Add">*/}
        {/*    <Button>Focus or touch</Button>*/}
        {/*  </Tooltip>*/}
        {/*</Grid>*/}
        {/*<Grid item>*/}
        {/*  <Tooltip disableFocusListener disableTouchListener title="Add">*/}
        {/*    <Button>Hover</Button>*/}
        {/*  </Tooltip>*/}
        {/*</Grid>*/}
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">{props.toolTipText}</Typography>
                    <em>{"Emergency Helpline Number"}</em>
                    {/*<b>{'some'}</b> <u>{'amazing content'}</u>.{' '}*/}
                    {/*{"It's very engaging. Right?"}*/}
                  </React.Fragment>
                }
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                interactive
                TransitionComponent={Fade}
              >
                <Button onClick={handleTooltipOpen}>{props.children}</Button>
              </HtmlTooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}