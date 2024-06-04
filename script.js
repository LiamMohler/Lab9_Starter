document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      } catch (error) {
        console.error('Calculation error:', error);
      }
    });
  
    const buttons = [
      {
        id: 'log',
        text: 'Console Log Demo',
        handler: () => {
          try {
            console.log('This is a console log demo');
          } catch (error) {
            console.error('Error in log demo:', error);
          } finally {
            //console.log('Log demo executed');
          }
        }
      },
      {
        id: 'error',
        text: 'Console Error Demo',
        handler: () => {
          try {
            console.error('This is a console error demo');
          } catch (error) {
            console.error('Error in error demo:', error);
          } finally {
            //console.log('Error demo executed');
          }
        }
      },
      {
        id: 'count',
        text: 'Console Count Demo',
        handler: () => {
          try {
            console.count('Count Demo');
          } catch (error) {
            console.error('Error in count demo:', error);
          } finally {
            //console.log('Count demo executed');
          }
        }
      },
      {
        id: 'warn',
        text: 'Console Warn Demo',
        handler: () => {
          try {
            console.warn('This is a console warn demo');
          } catch (error) {
            console.error('Error in warn demo:', error);
          } finally {
            //console.log('Warn demo executed');
          }
        }
      },
      {
        id: 'assert',
        text: 'Console Assert Demo',
        handler: () => {
          try {
            console.assert(false, 'This is a console assert demo');
          } catch (error) {
            console.error('Error in assert demo:', error);
          } finally {
            //console.log('Assert demo executed');
          }
        }
      },
      {
        id: 'clear',
        text: 'Console Clear Demo',
        handler: () => {
          try {
            console.clear();
          } catch (error) {
            console.error('Error in clear demo:', error);
          } finally {
            //console.log('Clear demo executed');
          }
        }
      },
      {
        id: 'dir',
        text: 'Console Dir Demo',
        handler: () => {
          try {
            console.dir(document.body);
          } catch (error) {
            console.error('Error in dir demo:', error);
          } finally {
            //console.log('Dir demo executed');
          }
        }
      },
      {
        id: 'dirxml',
        text: 'Console Dirxml Demo',
        handler: () => {
          try {
            console.dirxml(document);
          } catch (error) {
            console.error('Error in dirxml demo:', error);
          } finally {
            //console.log('Dirxml demo executed');
          }
        }
      },
      {
        id: 'group',
        text: 'Console Group Demo',
        handler: () => {
          try {
            console.group('Group Start');
            console.log('Inside the group');
          } catch (error) {
            console.error('Error in group demo:', error);
          } finally {
            //console.log('Group demo executed');
          }
        }
      },
      {
        id: 'groupEnd',
        text: 'Console Group End Demo',
        handler: () => {
          try {
            console.groupEnd();
          } catch (error) {
            console.error('Error in groupEnd demo:', error);
          } finally {
            //console.log('GroupEnd demo executed');
          }
        }
      },
      {
        id: 'table',
        text: 'Console Table Demo',
        handler: () => {
          try {
            console.table([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
          } catch (error) {
            console.error('Error in table demo:', error);
          } finally {
            //console.log('Table demo executed');
          }
        }
      },
      {
        id: 'time',
        text: 'Start Timer',
        handler: () => {
          try {
            console.time('Timer');
          } catch (error) {
            console.error('Error in time demo:', error);
          } finally {
            //console.log('Time demo executed');
          }
        }
      },
      {
        id: 'timeEnd',
        text: 'End Timer',
        handler: () => {
          try {
            console.timeEnd('Timer');
          } catch (error) {
            console.error('Error in timeEnd demo:', error);
          } finally {
            //console.log('TimeEnd demo executed');
          }
        }
      },
      {
        id: 'trace',
        text: 'Console Trace Demo',
        handler: () => {
          try {
            console.trace();
          } catch (error) {
            console.error('Error in trace demo:', error);
          } finally {
            //console.log('Trace demo executed');
          }
        }
      },
      {
        id: 'global-error',
        text: 'Trigger a Global Error',
        handler: () => {
          try {
            throw new Error('Global error demo');
          } catch (error) {
            console.error('Caught an error:', error);
          }
        }
      }
    ];
  
    buttons.forEach(button => {
      const btn = document.getElementById(button.id);
      btn.addEventListener('click', button.handler);
    });
  
    // Global error handler
    window.onerror = function (message, source, lineno, colno, error) {
        console.error('Global error caught:', message, source, lineno, colno, error);
        return true;  // Prevents the default browser error handling.
    };
  });
  